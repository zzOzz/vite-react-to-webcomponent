import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta<typeof Header>;

export const Without_Text = {
  args: {
    text: '',
  },
};

export const With_Text = {
  args: {
    text: 'Hello World',
  },
};
