import React, { useState } from 'react';
import { StoryFn, StoryObj, Meta } from '@storybook/react';

import { Button } from '../button';
import { Modal } from './modal';

const story = {
  title: 'Example/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const Template: StoryFn<typeof Modal> = args => {
  return (
    <Modal {...args}>
      <Modal.Header>Modal title</Modal.Header>
      <Modal.Body>Modal body</Modal.Body>
      <Modal.Footer>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const Default: Story = {
  render: Template,
  args: { open: true }
};

const TemplateWithTrigger: StoryFn<typeof Modal> = args => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open}>
        <Modal.Header>Modal title</Modal.Header>
        <Modal.Body>Modal body</Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const WithTrigger: Story = {
  render: TemplateWithTrigger,
  args: {}
};

export default story;
