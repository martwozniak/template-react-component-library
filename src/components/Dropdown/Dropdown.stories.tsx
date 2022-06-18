import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Chip",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;


const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DeletedDropdown = Template.bind({});

DeletedDropdown.args = {
  type: 'black',
  label: "Deleted!",
};

export const ImportantDropdown = Template.bind({});
ImportantDropdown.args = {
  type: 'danger',
  label: "Important!",
};

export const InfoDropdown = Template.bind({});
InfoDropdown.args = {
  type: 'info',
  label: "Info!",
};

export const SuccessDropdown = Template.bind({});
SuccessDropdown.args = {
  type: 'success',
  label: "Success!",
};