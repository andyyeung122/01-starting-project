import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const onAddUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setErrorMsg({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      setIsValid(false);
      return;
    }
    if (+age < 1 || isNaN(age)) {
      setErrorMsg({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      setIsValid(false);
      return;
    }

    console.log(userName, age);

    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  };

  const onConfirmHandler = () => {
    setIsValid(true);
  };

  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      {!isValid && (
        <ErrorModal
          onConfirm={onConfirmHandler}
          title={errorMsg.title}
          message={errorMsg.message}
        />
      )}
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
