import React from 'react';
import Text from './Text';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  //   parameters: {
  //     backgrounds: {
  //       values: [
  //         { name: 'red', value: '#f00' },
  //         { name: 'green', value: '#0f0' },
  //         { name: 'blue', value: '#00f' },
  //       ],
  //     },
  //   },
};

const Template = (args) => <Text {...args}>Hello, World!</Text>;

export const BlackText = Template.bind({});
BlackText.args = {
  isWhite: false,
};

export const WhiteText = Template.bind({});
WhiteText.args = {
  isWhite: true,
};
