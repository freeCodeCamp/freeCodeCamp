import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Table } from '.';

const exampleTable = (
  <>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>John</td>
        <td>Loos</td>
        <td>@mlos</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Joe</td>
        <td>Kot</td>
        <td>@mko</td>
      </tr>
    </tbody>
  </>
);

const story = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    controls: {
      include: [
        'variant',
        'size',
        'bordered',
        'borderless',
        'hover',
        'striped',
        'condensed',
        'responsive'
      ]
    }
  },
  argTypes: {
    striped: {
      options: [true, false],
      control: { type: 'radio' }
    },
    condensed: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Table>;

const Template: StoryFn<typeof Table> = args => (
  <Table {...args}>{exampleTable}</Table>
);

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: Template,

  args: {
    condensed: false,
    striped: false
  }
};

export const Condensed: Story = {
  render: Template,

  args: {
    condensed: true
  }
};

export const Striped: Story = {
  render: Template,

  args: {
    striped: true
  }
};

export default story;
