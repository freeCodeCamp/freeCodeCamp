import React from 'react';
import { Story } from '@storybook/react';
import { FormGroup } from '../form-group';
import { FormControl } from '../form-control';
import { ControlLabel, ControlLabelProps } from '.';

const story = {
  title: 'Example/ControlLabel',
  component: ControlLabel
};

const Template: Story<ControlLabelProps> = args => {
  return (
    <FormGroup>
      <ControlLabel {...args} />
      <FormControl></FormControl>
    </FormGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
