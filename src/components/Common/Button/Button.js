import React from "react";
import styles from "./styles.module.css";
function Button({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? styles.outlinedBtnDiv : styles.btnDiv}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
