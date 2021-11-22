import React from 'react';
import { MainTitleStyles, SecondaryTitleStyles } from './Title.styles';

const Title = ({ as, children }) => {
  const Component = as === 'h1' ? MainTitleStyles : SecondaryTitleStyles;
  return <Component>{children}</Component>;
};

export default Title;
