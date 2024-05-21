import React from "react";
import "../globalStyles.css";

export const GlobalLayout = ({ children }) => {
  return <div className="container">{children}</div>;
};
