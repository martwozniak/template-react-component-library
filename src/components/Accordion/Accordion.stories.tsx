import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";

export default {
  title: "ReactComponentLibrary/Alert",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const TestAccordion = Template.bind({});

TestAccordion.args = {
  type: 'danger',
  label: "Hello world!",
};