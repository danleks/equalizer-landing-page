import Logo from 'components/atoms/Logo/Logo';
import React from 'react';
import { HeaderStyles } from './Header.styles';

const Header = () => {
  return (
    <HeaderStyles>
      <Logo />
    </HeaderStyles>
  );
};

export default Header;
