import React from 'react';
import { StoryFn, StoryObj } from '@storybook/react';
import { Modal } from '.';

const story = {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    size: { control: { type: 'text' } }
  }
};

const TriggerButton: StoryFn<typeof Modal> = () => {
  return (
    <Modal size='lg'>
      <Modal.Trigger>Edit profile</Modal.Trigger>
      <Modal.Layer>
        <Modal.Header closeButton={true}>Edit profile</Modal.Header>
        <Modal.Body>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue='Pedro Duarte' />
          </fieldset>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input id='username' defaultValue='@peduarte' />
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          Click save when you&apos;re done.
          <Modal.Close className='ml-1 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
            Save changes
          </Modal.Close>
        </Modal.Footer>
      </Modal.Layer>
    </Modal>
  );
};

const AutoTrigger: StoryFn<typeof Modal> = () => {
  return (
    <Modal open={true}>
      <Modal.Layer>
        <Modal.Header closeButton={true}>Edit profile</Modal.Header>
        <Modal.Body>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue='Pedro Duarte' />
          </fieldset>
          <fieldset>
            <label htmlFor='username'>Username</label>
            <input id='username' defaultValue='@peduarte' />
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          Click save when you&apos;re done.
          <Modal.Close className='ml-1 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
            Save changes
          </Modal.Close>
        </Modal.Footer>
      </Modal.Layer>
    </Modal>
  );
};

export const Default: StoryObj<typeof Modal> = {
  render: TriggerButton,
  args: {}
};

export const AutoOpen: StoryObj<typeof Modal> = {
  render: AutoTrigger,
  args: {}
};

export default story;
