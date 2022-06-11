import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chip from "./Chip";

export default {
  title: "ReactComponentLibrary/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;


const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const DeletedChip = Template.bind({});

DeletedChip.args = {
  type: 'black',
  label: "Deleted!",
};

export const ImportantChip = Template.bind({});
ImportantChip.args = {
  type: 'danger',
  label: "Important!",
};

export const InfoChip = Template.bind({});
InfoChip.args = {
  type: 'info',
  label: "Info!",
};

export const SuccessChip = Template.bind({});
SuccessChip.args = {
  type: 'success',
  label: "Success!",
};