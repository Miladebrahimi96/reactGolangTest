import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const namehandler = e => {
    setUser({ ...user, name: e.target.value });
  };

  const emailHandler = e => {
    setUser({ ...user, email: e.target.value });
  };

  console.log(user);

  const submitHandler = e => {
    e.preventDefault();
    
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formItem}>
          <label>UserName: </label>
          <input type="text" value={user.name} onChange={namehandler} />
        </div>
        <div className={styles.formItem}>
          <label>Email: </label>
          <input type="email" value={user.email} onChange={emailHandler} />
        </div>
        <div>
          <button type="submit" className={styles.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
