import React from 'react';
import Title from 'components/atoms/Title/Title';
import Text from 'components/atoms/Text/Text';
import { HeroStyles } from './Hero.styles';

const Hero = () => {
  return (
    <HeroStyles>
      <Title as="h1">We make your music sound extraordinary.</Title>
      <Text>
        A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric
        EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
      </Text>
    </HeroStyles>
  );
};

export default Hero;
