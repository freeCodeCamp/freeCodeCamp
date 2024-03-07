import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Button } from '../button';
import { Modal, type ModalProps } from './modal';

const story = {
  title: 'Example/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const AutoOpenTemplate: StoryFn<ModalProps> = args => {
  return <Modal {...args} />;
};

const WithTriggerTemplate: StoryFn<ModalProps> = args => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const AutoOpen: Story = {
  render: AutoOpenTemplate,
  args: {
    open: true,
    onClose: () => {},
    children: (
      <>
        <Modal.Header>Edit profile</Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </Modal.Footer>
      </>
    )
  }
};

export const WithoutCloseButton: Story = {
  render: AutoOpenTemplate,
  args: {
    open: true,
    onClose: () => {},
    children: (
      <>
        <Modal.Header showCloseButton={false}>Edit profile</Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </Modal.Footer>
      </>
    )
  }
};

export const WithTrigger: Story = {
  render: WithTriggerTemplate,
  args: {
    children: (
      <>
        <Modal.Header>Edit profile</Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </Modal.Footer>
      </>
    )
  }
};

export default story;
