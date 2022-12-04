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
        'variant',
        'size',
        'disabled',
        'checked',
        'onChange'
      ]
    }
  },
  argTypes: {
    variant: {
      options: ['primary', 'danger']
    },
    size: {
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
  children: 'On'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Off'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Off'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Off'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Off',
  disabled: true
};

export const InsideToggleGroup = () => {
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
