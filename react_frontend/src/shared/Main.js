import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Clients from "../pages/Client";

const Main = () => {
  return (
    <Switch>
      <Route
        path={`/node`}
        render={props => <Clients {...props} root="/node" />}
      />
      <Route
        path={`/flask`}
        render={props => <Clients {...props} root="/flask" />}
      />
      {/*<Route path={`/auth`} render={props => <AuthLayout {...props} />} />*/}

      {/* default page // without 'from' then all non-matching path */}
      <Redirect from={`/`} to="/node/register" />
    </Switch>
  );
};

export default Main;
