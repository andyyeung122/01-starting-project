import React, { Fragment } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <Fragment>
      <AddUser />
      <UserList />
    </Fragment>
  );
}

export default App;
