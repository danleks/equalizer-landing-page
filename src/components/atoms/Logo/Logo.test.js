import React from 'react';
import Logo from './Logo';
import { render, screen } from 'test-utils';

describe('Logo', () => {
  it('renders the component', () => {
    render(<Logo />);
    expect(screen.getByTestId('svg-element')).toBeInTheDocument();
  });
});
