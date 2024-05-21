import React from "react";
import "../primaryButton/primaryButton.css";

const PrimaryButton = (props) => {
  return <button className="primary-button">{props.label || "Click"}</button>;
};

export default PrimaryButton;
