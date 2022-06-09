import React from "react";
import './Alert.css'

export interface AlertProps {
  type: string;
  label: string;
}

const Alert = (props: AlertProps) => {
  return <div className={props.type}>{props.label}</div>;
};

export default Alert;
