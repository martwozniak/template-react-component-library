import React from "react";
import './B.css'

export interface BProps {
  type: string;
  label: string;
}

const B = (props: BProps) => {
  return <strong className={props.type}>{props.label}</strong>;
};

export default B;
