import React from 'react';
import Title from './Title';
import { render, screen } from 'test-utils';

const text = 'hello world';

describe('Logo', () => {
  it('renders the component', () => {
    render(<Title>{text}</Title>);
    screen.getByRole('heading', { name: /hello world/i });
  });
});
