import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Home from "../pages/index";

export default {
  title: "Components/NextPage",
  component: Home,
  args: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Story = Template.bind({});
Story.args = {};
