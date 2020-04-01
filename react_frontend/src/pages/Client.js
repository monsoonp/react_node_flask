import React, { useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  ButtonGroup,
  Button
} from "reactstrap";
import Comp from "../components";

const Clients = ({ root }) => {
  const data = [
    { title: "훈련원 등록", path: "register" },
    { title: "마일리지 관리", path: "management" },
    { title: "개인별 훈력 분석", path: "analysis" },
    { title: "지난 훈련 결과 보기", path: "result" },
    { title: "훈련 통계 관리", path: "statics" }
  ];
  //   const location = useLocation();
  //   console.log(location);
  //   console.log(window.location.pathname);

  const routes = data => {
    const items = data.map(({ title, path }, key) => {
      return (
        <Button
          className="px-auto mx-auto text-black bg-black"
          //   id=""
          //   value=""
          key={key}
          //   onClick={e => {}}
          outline
          tag={NavLink}
          to={`${root}/${path}`}
        >
          {title}
        </Button>
      );
    });
    return items;
  };
  useEffect(() => {
    return () => {};
  });

  return (
    <Container className="m-0 mb-0" fluid>
      <Row>
        <h2>마일리지 관리 시스템{root}</h2>
      </Row>
      <Row>
        <Col className="px-0" xl="12">
          <Card className=" shadow">
            <CardHeader className="bg-muted">
              <ButtonGroup className="px-auto mx-auto">
                {routes(data)}
              </ButtonGroup>
            </CardHeader>
            <CardBody className="mx-0">
              {data.map((d, key) => {
                const { path, title } = d;
                const Contents = Comp[path];
                return (
                  <Route
                    key={key}
                    path={`${root}/${path}`}
                    //   component={prop.component}
                    //   render={props => <prop.component {...this.props} />}
                    // component={Contents}
                    render={props => <Contents {...d} root={root} />}
                  />
                );
              })}
              <Switch>
                <Route
                //   key={key}
                //   path={prop.layout + prop.path}
                //   component={prop.component}
                //   render={props => <prop.component {...this.props} />}
                />
              </Switch>
            </CardBody>

            <CardFooter className="mx-0 bg-muted">
              <NavItem>
                <NavLink tag={NavLink} to="/node">
                  node
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavLink} to="/flask">
                  flask
                </NavLink>
              </NavItem>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
