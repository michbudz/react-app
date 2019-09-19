import React from "react";
import { List, Datagrid, TextField, EmailField, ChipField } from "react-admin";
import MyUrlField from "./components/MyUrlField";

export const UserList = props => (
  <List {...props} title="Użytkownicy">
    <Datagrid rowClick="edit">
      <TextField source="id" style={{ color: "purple" }} />
      <TextField source="name" label="Imię" />
      <TextField source="username" label="Nazwisko" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <ChipField source="company.name" />
    </Datagrid>
  </List>
);
