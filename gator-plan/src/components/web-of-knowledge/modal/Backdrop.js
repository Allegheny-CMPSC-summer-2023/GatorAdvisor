import React from "react";
import * as classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

export default Backdrop;
