import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from '.';

const story = {
  title: 'Example/ToggleButton',
  component: ToggleButton,
  parameters: {
    controls: {
      include: [
        'children',
        'bsStyle',
        'bsSize',
        'disabled',
        'checked',
        'onChange',
        'value',
        'name'
      ]
    }
  },
  argTypes: {
    bsStyle: {
      options: ['primary']
    },
    bsSize: {
      options: ['small', 'medium', 'large']
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    checked: {
      options: [true, false],
      control: { type: 'radio' }
    },
    onChange: {
      action: 'changed'
    },
    value: {
      type: { name: 'string' }
    },
    name: {
      type: { name: 'string' }
    }
  }
};

const Template: Story<ToggleButtonProps> = args => {
  return <ToggleButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Off'
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  children: 'On',
  value: 'Value'
};

export const Large = Template.bind({});
Large.args = {
  bsSize: 'large',
  children: 'Off'
};

export const Medium = Template.bind({});
Medium.args = {
  bsSize: 'medium',
  children: 'Off'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Off',
  disabled: true
};

export const RadioChecked = Template.bind({});
RadioChecked.args = {
  type: 'radio',
  children: 'On',
  value: 'radio',
  name: 'radio',
  checked: true
};

export const RadioUnchecked = Template.bind({});
RadioUnchecked.args = {
  type: 'radio',
  children: 'Off',
  value: 'radio',
  name: 'radio'
};

export const InsideToggleGroup = (): JSX.Element => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <ToggleButton
        checked={checked}
        onChange={checked => {
          setChecked(checked);
        }}
      >
        On
      </ToggleButton>
      <ToggleButton
        checked={!checked}
        onChange={checked => {
          setChecked(!checked);
        }}
      >
        Off
      </ToggleButton>
    </>
  );
};

export default story;
