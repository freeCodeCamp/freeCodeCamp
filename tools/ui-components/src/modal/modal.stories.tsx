import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Button } from '../button';
import { Modal } from './modal';
import { type ModalProps, type HeaderProps } from './types';

const story = {
  title: 'Example/Modal',
  component: Modal,
  args: {
    size: 'medium',
    variant: 'default'
  },
  argTypes: {
    open: {
      control: false
    },
    onClose: {
      control: false
    },
    size: {
      options: ['medium', 'large']
    },
    variant: {
      options: ['default', 'danger']
    }
  }
} satisfies Meta<typeof Modal>;

type Story = StoryObj<ModalProps & HeaderProps>;

const Spacer = () => <div style={{ height: '5px', width: '100%' }} />;

const DefaultTemplate: StoryFn<ModalProps & HeaderProps> = ({
  showCloseButton,
  ...modalProps
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...modalProps} open={open} onClose={handleClose}>
        <Modal.Header showCloseButton={showCloseButton}>
          Lorem ipsum
        </Modal.Header>
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
          <Button block size='large'>
            Submit
          </Button>
          <Spacer />
          <Button block size='large' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const DangerTemplate: StoryFn<ModalProps> = args => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <Modal.Header>Lorem ipsum</Modal.Header>
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
          <Button block size='large' onClick={handleClose}>
            Cancel
          </Button>
          <Spacer />
          <Button block variant='danger' size='large'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: DefaultTemplate
};

export const Large: Story = {
  render: DefaultTemplate,
  args: {
    size: 'large'
  }
};

export const Danger: Story = {
  render: DangerTemplate,
  args: {
    variant: 'danger'
  }
};

export const WithoutCloseButton: Story = {
  render: DefaultTemplate,
  args: {
    showCloseButton: false
  }
};

export default story;
