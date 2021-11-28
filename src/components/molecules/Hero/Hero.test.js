import React from 'react';
import Hero from './Hero';
import { render, screen } from 'test-utils';

const title = 'We make your music sound extraordinary.';
const text =
  'A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!';

describe('Hero', () => {
  it('renders the component', () => {
    render(<Hero />);
    screen.getByRole('heading', { name: title });
    screen.getByText(text);
  });
});
