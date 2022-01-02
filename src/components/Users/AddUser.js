import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const onAddUserHandler = () => {};

  return (
    <Card className={styles.input}>
      <form onSubmit={onAddUserHandler}>
        <label>Username</label>
        <input
          className={`${styles.input} ${
            props.className ? props.className : ""
          }`}
        ></input>
        <label>Age</label>
        <input
          className={`${styles.input} ${
            props.className ? props.className : ""
          }`}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
