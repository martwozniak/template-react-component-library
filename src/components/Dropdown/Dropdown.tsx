import React from "react";
import './Dropdown.css'

export interface DropdownProps {
  type: string;
  label: string;
}

const Dropdown = (props: DropdownProps) => {
  return <span className={props.type}>{props.label}</span>;
};

export default Dropdown;
