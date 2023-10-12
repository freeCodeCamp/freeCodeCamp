import React from 'react';
import { Story } from '@storybook/react';
import { Modal } from '.';

const story = {
  title: 'Example/Modal',
  component: Modal
};

const Template: Story<typeof Modal> = () => {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <button>Edit profile</button>
      </Modal.Trigger>
      <Modal.Body>
        <Modal.Header closeButton={true}>Edit profile</Modal.Header>
        <Modal.Footer>
          Make changes to your profile here. Click save when you&apos;re done.
        </Modal.Footer>
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
          <Modal.Close>Save changes</Modal.Close>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
