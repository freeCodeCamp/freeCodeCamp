import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from '.';

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
} satisfies Meta<typeof ToggleButton>;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    children: 'Off'
  }
};

export const Checked: Story = {
  args: {
    checked: true,
    children: 'On',
    value: 'Value'
  }
};

export const Large: Story = {
  args: {
    bsSize: 'large',
    children: 'Off'
  }
};

export const Medium: Story = {
  args: {
    bsSize: 'medium',
    children: 'Off'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Off',
    disabled: true
  }
};

export const RadioChecked: Story = {
  args: {
    type: 'radio',
    children: 'On',
    value: 'radio',
    name: 'radio',
    checked: true
  }
};

export const RadioUnchecked: Story = {
  args: {
    type: 'radio',
    children: 'Off',
    value: 'radio',
    name: 'radio'
  }
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
