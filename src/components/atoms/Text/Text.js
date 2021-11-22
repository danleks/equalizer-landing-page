import React from 'react';
import { TextStyles } from './Text.styles';

const Text = ({ isWhite, children }) => {
  return <TextStyles isWhite={isWhite}>{children}</TextStyles>;
};

export default Text;
