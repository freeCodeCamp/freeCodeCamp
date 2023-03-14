import React from 'react';
import { Story } from '@storybook/react';
import { FormGroup } from '../form-group';
import { ControlLabel, ControlLabelProps } from '.';

const story = {
  title: 'Example/ControlLabel',
  component: ControlLabel,
  parameters: {
    controls: {
      include: ['className']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    htmlFor: { control: { type: 'text' } },
    srOnly: { control: { type: 'text' } }
  }
};

const Template: Story<ControlLabelProps> = args => {
  return (
    <FormGroup validationState='success'>
      <ControlLabel {...args} />
    </FormGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
