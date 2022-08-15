import React from 'react';
import { Story } from '@storybook/react';
import { Table, TableProps } from '.';

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
      include: ['variant', 'size', 'bordered', 'borderless', 'hover', 'striped', 'condensed']
    }
  },
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    },
    bordered: {
      options: [true, false],
      control: { type: 'radio' }
    },
    striped: {
      options: [true, false],
      control: { type: 'radio' }
    },
    condensed: {
      options: [true, false],
      control: { type: 'radio' }
    },
    hover: {
      options: [true, false],
      control: { type: 'radio' }
    },
    borderless: {
      options: [true, false],
      control: { type: 'radio' },
      // Used to avoid conflict with borders
      if: { arg: 'bordered', truthy: false }
    },
    size: {
      options: ['small', 'medium', 'large']
    }
  }
};

const Template: Story<TableProps> = args => (
  <Table {...args}>{exampleTable}</Table>
);
export const Default = Template.bind({});
Default.args = {
  // default props go here
  bordered: true,
  size: 'medium',
  variant: 'light',
  condensed: false,
  striped: false
};

export default story;
