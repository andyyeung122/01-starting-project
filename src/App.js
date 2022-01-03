import React, { Fragment, useEffect, useState } from 'react';
import UserList from './components/Users/UserList';
import AddUser from './components/Users/AddUser';

function App() {
  const [userList, setUserList] = useState([]);
  const [newID, setNewID] = useState(0);

  const onAddUserHandler = (username, age) => {
    setNewID((prevID) => {
      return prevID + 1;
    });

    setUserList((prevUserList) => {
      return [...prevUserList, { id: newID, name: username, age: age }];
    });
  };

  useEffect(() => {
    console.log(userList);
  });

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
