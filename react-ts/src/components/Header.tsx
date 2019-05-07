import React from "react";
import classes from "./Header.module.css";
import Button from "./Button";

export default function Header() {
  return (
      <div className={classes.wrapper}>
        <header className={classes.header}>
        <h1>React</h1>
        <div className={classes.container}>
            <Button label="Sign up" color="color2"></Button>
            <Button label="Sign in" color="color1"></Button>
        </div>
        </header>
        <h1>Welcome to your React.js application</h1>
  </div>
  );
}
