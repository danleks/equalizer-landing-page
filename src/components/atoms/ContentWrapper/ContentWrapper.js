import React from 'react';
import { ContentWrapperStyles } from './ContentWrapper.styles';

const ContentWrapper = ({ hasPadding, children }) => {
  return <ContentWrapperStyles hasPadding={hasPadding}>{children}</ContentWrapperStyles>;
};

export default ContentWrapper;
