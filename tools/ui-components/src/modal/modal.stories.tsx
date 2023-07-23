import React from 'react';
import { Story } from '@storybook/react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalClose,
  ModalFooter,
  ModalPortal,
  ModalTrigger,
  ModalOverlay
} from '.';

const story = {
  title: 'Example/Modal',
  component: Modal
};

const Template: Story<typeof Modal> = () => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <button>Edit profile</button>
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalBody>
          <ModalHeader closeButton={true}>
            <ModalTitle>Edit profile</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            Make changes to your profile here. Click save when you&apos;re done.
          </ModalFooter>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue='Pedro Duarte' />
          </fieldset>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input id='username' defaultValue='@peduarte' />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end'
            }}
          >
            <ModalClose>Save changes</ModalClose>
          </div>
          <ModalClose>x</ModalClose>
        </ModalBody>
      </ModalPortal>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
