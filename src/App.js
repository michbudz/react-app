import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { UserList } from "./users";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import polishMessages from "ra-language-polish";

const messages = {
  pl: polishMessages
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    catchAll={NotFound}
    dashboard={Dashboard}
    dataProvider={dataProvider}
    locale="pl"
    messages={messages}
  >
    <Resource name="users" list={UserList} />
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
