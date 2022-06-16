import React from "react";
import './Accordion.css'

export interface AccordionProps {
  type: string;
  label: string;
}

const Accordion = (props: AccordionProps) => {
  return <div className={props.type}>{props.label}</div>;
};

export default Accordion;
