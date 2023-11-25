import type { Meta, StoryObj } from '@storybook/react';

import Footer from './index';

const meta = {
  title: 'Common/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
