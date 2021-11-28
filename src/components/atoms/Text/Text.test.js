import React from 'react';
import Text from './Text';
import { render, screen } from 'test-utils';

const text = 'hello world';

describe('Text', () => {
  it('renders the component', () => {
    render(<Text>{text}</Text>);
    screen.getByText('hello world');
  });
});
