import React from "react";
import classes from "./Button.module.css";

interface ButtonProps { label: string; color: string; }


export default function ImageGrid(props: ButtonProps) {
    const i = props.color === "color1" ? classes.color1 : classes.color2; 
  return (
    <button id={i} className={classes.btn}>{props.label}</button>
  );
}
