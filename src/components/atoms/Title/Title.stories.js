import React from 'react';
import Title from './Title';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
};

const Template = (args) => <Title {...args}>Hello, World!</Title>;

export const MainTitle = Template.bind({});
MainTitle.args = {
  as: 'h1',
};

export const SecondaryTitle = Template.bind({});
SecondaryTitle.args = {
  as: 'h2',
};
