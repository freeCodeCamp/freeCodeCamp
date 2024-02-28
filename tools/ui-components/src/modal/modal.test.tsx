import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal, type ModalProps } from './modal';

describe('<Modal />', () => {
  const setup = ({ open }: Partial<ModalProps>) => {
    render(
      <Modal open={open}>
        <Modal.Header>Modal title</Modal.Header>
        <Modal.Body>Modal body</Modal.Body>
        <Modal.Footer>Modal footer</Modal.Footer>
      </Modal>
    );
  };

  it('should not appear if `open` is `false`', () => {
    setup({ open: false });

    expect(
      screen.queryByRole('dialog', { name: 'Modal title' })
    ).not.toBeInTheDocument();
  });

  it('should appear if `open` is `true`', () => {
    setup({ open: true });

    expect(
      screen.getByRole('dialog', { name: 'Modal title' })
    ).toBeInTheDocument();
  });
});
