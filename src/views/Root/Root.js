import React from 'react';
import AppProviders from 'providers/AppProviders';
import Header from 'components/organisms/Header/Header';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';
import Hero from 'components/molecules/Hero/Hero';

const Root = () => {
  return (
    <AppProviders>
      <ContentWrapper hasPadding>
        <Header />
        <Hero />
      </ContentWrapper>
    </AppProviders>
  );
};

export default Root;
