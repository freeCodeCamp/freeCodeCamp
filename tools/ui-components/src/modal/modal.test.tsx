import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../button';
import { Modal } from './modal';
import { type ModalProps, type HeaderProps } from './types';

const originalWindow = window;

describe('<Modal />', () => {
  beforeAll(() => {
    // The Modal component uses `ResizeObserver` under the hood.
    // However, this property is not available in JSDOM, so we need to manually add it to the window object.
    // Ref: https://github.com/jsdom/jsdom/issues/3368
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: jest.fn(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn()
      }))
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    Object.defineProperty(globalThis, 'window', {
      value: originalWindow
    });
  });

  const setup = ({
    showCloseButton,
    open = false,
    onClose = () => {},
    ...modalProps
  }: Partial<ModalProps & HeaderProps>) => {
    render(
      <Modal {...modalProps} open={open} onClose={onClose}>
        <Modal.Header showCloseButton={showCloseButton}>
          Lorem ipsum
        </Modal.Header>
        <Modal.Body>
          <p>Laboriosam autem non et nisi.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button block size='large'>
            Submit
          </Button>
          <Button block size='large'>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  it('should not appear if `open` is `false`', () => {
    setup({ open: false });

    expect(
      screen.queryByRole('dialog', { name: 'Lorem ipsum' })
    ).not.toBeInTheDocument();
  });

  it('should appear and render the content properly if `open` is `true`', async () => {
    setup({ open: true });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    expect(
      within(dialog).getByRole('heading', { level: 2 })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Close' })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText('Laboriosam autem non et nisi.')
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Submit' })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Cancel' })
    ).toBeInTheDocument();
  });

  it('should hide the close button if `showCloseButton` is `false`', async () => {
    setup({ open: true, showCloseButton: false });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    expect(
      within(dialog).getByRole('heading', { level: 2 })
    ).toBeInTheDocument();
    expect(
      within(dialog).queryByRole('button', { name: 'Close' })
    ).not.toBeInTheDocument();
    expect(
      within(dialog).getByText('Laboriosam autem non et nisi.')
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Submit' })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Cancel' })
    ).toBeInTheDocument();
  });

  it('should automatically focus on the close button when open', async () => {
    setup({ open: true });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    const closeButton = within(dialog).getByRole('button', { name: 'Close' });
    expect(closeButton).toHaveFocus();
  });

  it('should automatically focus on the first focusable element if `showCloseButton` is `false`', async () => {
    setup({ open: true, showCloseButton: false });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    const submitButton = within(dialog).getByRole('button', { name: 'Submit' });
    expect(submitButton).toHaveFocus();
  });

  it('should trigger the `onClose` prop on close button click', async () => {
    const onClose = jest.fn();

    setup({ open: true, onClose });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    const closeButton = within(dialog).getByRole('button', { name: 'Close' });
    await userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should trigger the `onClose` prop on Escape key press', async () => {
    const onClose = jest.fn();

    setup({ open: true, onClose });

    const dialog = await screen.findByRole('dialog', { name: 'Lorem ipsum' });
    expect(dialog).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
