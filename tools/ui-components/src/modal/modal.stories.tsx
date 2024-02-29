import React from 'react';
import { Story } from '@storybook/react';

import { Modal, type ModalProps } from './modal';

const story = {
  title: 'Example/Modal',
  component: Modal
};

const Template: Story<ModalProps> = () => {
  return (
    <div id='headlessui-portal-root'>
      <Modal open />
    </div>
  );
};

export const Default = Template.bind({});

export default story;
