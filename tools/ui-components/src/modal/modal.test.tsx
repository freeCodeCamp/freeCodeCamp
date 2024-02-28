import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from '.';

describe('<Modal />', () => {
  it('should render correctly', () => {
    render(<Modal />);
  });

  it('should render the dialog if open is true', () => {
    render(
      <Modal open={true}>
        <Modal.Layer>Hello Layer</Modal.Layer>
      </Modal>
    );
    const unorderedList = screen.getByText('Hello Layer');
    expect(unorderedList).toBeInTheDocument();
  });

  it('should render the Layer with correct classes if Modal is large', async () => {
    render(
      <Modal size='lg'>
        <Modal.Trigger>Some Button</Modal.Trigger>
        <Modal.Layer>Hello Layer</Modal.Layer>
      </Modal>
    );
    const ModalTrigger = screen.getByText('Some Button');
    await userEvent.click(ModalTrigger);
    const unorderedList = screen.getByText('Hello Layer');
    expect(unorderedList).toHaveClass(
      'bg-background-secondary border border-foreground-secondary border-solid fixed top-[25%] left-[25%] md:shadow-lg md:w-[600px] md:mx-auto md:my-[30px] z-20 min-[992px]:w-[900px]'
    );
  });

  it('should render Footer with its classes if Modal is large', async () => {
    render(
      <Modal size='lg'>
        <Modal.Trigger>Some Button</Modal.Trigger>
        <Modal.Layer>
          <Modal.Footer>Hello Footer</Modal.Footer>
        </Modal.Layer>
      </Modal>
    );
    const ModalTrigger = screen.getByText('Some Button');
    await userEvent.click(ModalTrigger);
    const ModalFooter = screen.getByText('Hello Footer');
    expect(ModalFooter).toHaveClass(
      'text-right p-[15px] border border-foreground-secondary border-solid m-0 min-[992px]:w-[900px]'
    );
  });

  it('should render Header with its close button that closes the modal', async () => {
    render(
      <Modal>
        <Modal.Trigger>Some Button</Modal.Trigger>
        <Modal.Layer>
          <Modal.Header closeButton={true}>Hello Header</Modal.Header>
        </Modal.Layer>
      </Modal>
    );
    const ModalTrigger = screen.getByText('Some Button');
    await userEvent.click(ModalTrigger);
    const ModalHeader = screen.getByText('Hello Header');
    expect(ModalHeader).toBeInTheDocument();
    const closeButton = within(ModalHeader).getByRole('button');
    await userEvent.click(closeButton);
    expect(ModalHeader).not.toBeInTheDocument();
  });
});
