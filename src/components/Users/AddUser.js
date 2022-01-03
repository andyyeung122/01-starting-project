import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const onAddUserHandler = (event) => {
    event.preventDefault();

    console.log(userName, age);

    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  };

  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={onAddUserHandler}>
        <label>Username</label>
        <input
          className={`${styles.input} ${
            props.className ? props.className : ''
          }`}
          type="text"
          value={userName}
          onChange={onUsernameChange}
        ></input>
        <label>Age</label>
        <input
          className={`${styles.input} ${
            props.className ? props.className : ''
          }`}
          type="text"
          value={age}
          onChange={onAgeChange}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
