import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import B from "./B";

export default {
  title: "ReactComponentLibrary/B",
  component: B,
} as ComponentMeta<typeof B>;


const Template: ComponentStory<typeof B> = (args) => <B {...args} />;

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