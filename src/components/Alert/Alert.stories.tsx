import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "ReactComponentLibrary/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;


const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  type: 'danger',
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  type: 'danger',
  label: "Click me!",
};