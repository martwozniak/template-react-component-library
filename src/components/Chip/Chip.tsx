import React from "react";
import './Chip.css'

export interface ChipProps {
  type: string;
  label: string;
}

const Chip = (props: ChipProps) => {
  return <span className={props.type}>{props.label}</span>;
};

export default Chip;
