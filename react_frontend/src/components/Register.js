import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Label,
  Input,
  Button,
  ButtonGroup,
  Table
} from "reactstrap";

const Register = props => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [dpt, setDpt] = useState("");
  // const [index, setIndex] = useState();
  const [pwd, setPwd] = useState("");
  const [chkPwd, setChkPwd] = useState("");
  const [checked, setChecked] = useState(0);
  const [count, setCount] = useState(0);

  const getList = () => {
    fetch(`${props.root}/get`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        const result = res;
        console.log(result);
        // setList(list.concat(data));
        setList(result);
      })
      .catch(e => console.log(e));
  };
  const reset = async () => {
    // setList([]);
    await fetch(`${props.root}/reset`)
      .then(res => {
        getList();
        console.log("reset");
      })
      .catch(e => console.log(e));
  };
  const addList = async () => {
    const data = {
      index: count,
      name: name,
      dpt: dpt,
      pwd: pwd
    };
    await fetch(`${props.root}/add`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(() => {
        getList();
      })
      .catch(e => console.log(e));
  };
  const delList = async () => {
    if (list.some(e => e.index === checked)) {
      setList(list.filter(e => e.index !== checked));
      await fetch(`${props.root}/del/${checked}`);
    }
  };

  useEffect(() => {
    if (list.length !== 0) {
      setCount(list[list.length - 1].index + 1);
    } else {
      if (count === 0) {
        getList();
      }
      setCount(1);
    }
    return () => {};
  });

  return (
    <Container>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Row className="d-flex justify-content-around">
          <Col>
            <Row>
              <Label>
                훈련원 이름
                <Input
                  value={`${name}`}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  placeholder="홍길동"
                ></Input>
              </Label>
            </Row>
            <Row>
              <Label>
                소속
                <Input
                  value={`${dpt}`}
                  onChange={e => {
                    setDpt(e.target.value);
                  }}
                  placeholder="연구소"
                ></Input>
              </Label>
            </Row>
            <Row>
              <Label>
                사번
                <Input
                  // value={`${index}`}
                  // onChange={e => { setIndex(e.target.value);}}
                  value={`${count}`}
                  disabled
                ></Input>
              </Label>
            </Row>
          </Col>
          <Col>
            <Row>
              <ButtonGroup>
                <Button color="info" outline onClick={reset}>
                  초기화
                </Button>
                <Button color="info" outline onClick={addList}>
                  등록/수정
                </Button>
                <Button color="info" outline onClick={delList}>
                  삭제
                </Button>
              </ButtonGroup>
            </Row>
            <Row>
              <Label>
                비밀번호
                <Input
                  type="password"
                  value={`${pwd}`}
                  onChange={e => {
                    setPwd(e.target.value);
                  }}
                  placeholder="********"
                ></Input>
              </Label>
            </Row>
            <Row>
              <Label>
                비밀번호 확인
                <Input
                  type="password"
                  value={`${chkPwd}`}
                  onChange={e => {
                    setChkPwd(e.target.value);
                  }}
                  placeholder="********"
                ></Input>
              </Label>
            </Row>
          </Col>
        </Row>
      </Form>
      <hr />
      <Row>
        <Col>
          <Table bordered hover>
            <thead>
              <tr>
                <th>훈련원 이름</th>
                <th>소속</th>
                <th>사번</th>
                <th>비밀번호</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.length !== 0 &&
                list.map((e, i) => (
                  <tr
                    key={i}
                    onClick={() => {
                      setChecked(e.index);
                    }}
                  >
                    <td>{e.name}</td>
                    <td>{e.dpt}</td>
                    <td>{e.index}</td>
                    <td>{e.pwd}</td>
                    <td>
                      <Input
                        className="m-auto p-auto"
                        type="checkbox"
                        checked={e.index === checked}
                        onChange={() => {
                          setCount(checked);
                          setChecked(e.index);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
