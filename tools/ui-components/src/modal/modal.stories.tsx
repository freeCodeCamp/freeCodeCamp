import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Button } from '../button';
import { Modal } from './modal';
import { type ModalProps } from './types';

const story = {
  title: 'Example/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const Spacer = () => <div style={{ height: '5px', width: '100%' }} />;

const AutoOpenTemplate: StoryFn<ModalProps> = args => {
  return (
    <Modal {...args}>
      <Modal.Header>Edit profile</Modal.Header>
      <Modal.Body>
        <p>
          Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda amet
          aliquam corporis.
        </p>
        <p>
          Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
          atque cumque incidunt quia. A praesentium neque quis odit totam
          praesentium illum est. Ut doloribus quisquam ut. Incidunt vel suscipit
          accusamus consequuntur repellendus dolor sunt. Vel accusamus nesciunt
          perspiciatis sunt est.
        </p>
        <p>
          Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
          et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
          accusantium. Sit ut consectetur non id velit est odio. Laboriosam
          soluta tenetur asperiores. Excepturi reprehenderit rerum sint tempore
          molestiae vitae aliquid. Ea est sunt at atque ducimus doloribus quas
          sit.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button block>Submit</Button>
        <Spacer />
        <Button block>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const WithTriggerTemplate: StoryFn<ModalProps> = args => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <Modal.Header>Edit profile</Modal.Header>
        <Modal.Body>
          <p>
            Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda
            amet aliquam corporis.
          </p>
          <p>
            Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
            atque cumque incidunt quia. A praesentium neque quis odit totam
            praesentium illum est. Ut doloribus quisquam ut. Incidunt vel
            suscipit accusamus consequuntur repellendus dolor sunt. Vel
            accusamus nesciunt perspiciatis sunt est.
          </p>
          <p>
            Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
            et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
            accusantium. Sit ut consectetur non id velit est odio. Laboriosam
            soluta tenetur asperiores. Excepturi reprehenderit rerum sint
            tempore molestiae vitae aliquid. Ea est sunt at atque ducimus
            doloribus quas sit.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button block>Submit</Button>
          <Spacer />
          <Button block onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: AutoOpenTemplate,
  args: {
    open: true,
    onClose: () => {}
  }
};

export const Large: Story = {
  render: AutoOpenTemplate,
  args: {
    size: 'large',
    open: true,
    onClose: () => {}
  }
};

export const Small: Story = {
  render: AutoOpenTemplate,
  args: {
    size: 'small',
    open: true,
    onClose: () => {}
  }
};

export const Danger: Story = {
  render: AutoOpenTemplate,
  args: {
    open: true,
    variant: 'danger',
    onClose: () => {}
  }
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Modal open onClose={() => {}}>
      <Modal.Header showCloseButton={false}>Edit profile</Modal.Header>
      <Modal.Body>
        <p>
          Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda amet
          aliquam corporis.
        </p>
        <p>
          Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
          atque cumque incidunt quia. A praesentium neque quis odit totam
          praesentium illum est. Ut doloribus quisquam ut. Incidunt vel suscipit
          accusamus consequuntur repellendus dolor sunt. Vel accusamus nesciunt
          perspiciatis sunt est.
        </p>
        <p>
          Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
          et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
          accusantium. Sit ut consectetur non id velit est odio. Laboriosam
          soluta tenetur asperiores. Excepturi reprehenderit rerum sint tempore
          molestiae vitae aliquid. Ea est sunt at atque ducimus doloribus quas
          sit.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button block>Submit</Button>
        <Spacer />
        <Button block>Cancel</Button>
      </Modal.Footer>
    </Modal>
  ),
  args: {
    open: true,
    onClose: () => {}
  }
};

export const WithTrigger: Story = {
  render: WithTriggerTemplate,
  args: {}
};

export default story;
