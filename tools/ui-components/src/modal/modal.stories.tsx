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
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input id='name' defaultValue='Pedro Duarte' />
        </fieldset>
        <fieldset>
          <label htmlFor='username'>Username</label>
          <input id='username' defaultValue='@peduarte' />
        </fieldset>
        <Modal.Footer>
          Click save when you&apos;re done.
          <Modal.Close className='ml-1 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
            Save changes
          </Modal.Close>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
