import React from 'react';
import AppProviders from 'providers/AppProviders';
import Header from 'components/organisms/Header/Header';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';

const Root = () => {
  return (
    <AppProviders>
      <ContentWrapper hasPadding>
        <Header />
      </ContentWrapper>
    </AppProviders>
  );
};

export default Root;
