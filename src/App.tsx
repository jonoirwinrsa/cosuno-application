import { Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import CompaniesPage from "./pages/CompaniesPage";
import HomePage from "./pages/HomePage";

const App = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Navigation />
    <Layout.Content style={{ maxWidth: "1200px" }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/companies" component={CompaniesPage} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default App;
