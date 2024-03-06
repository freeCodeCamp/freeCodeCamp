import React, { type ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import { CloseButton } from '../close-button';
import { Button } from '../button';

export interface ModalProps {
  children: ReactNode;
  open?: boolean;
  size?: 'large' | 'small';
  variant?: 'default' | 'danger';
  onClose: () => boolean;
}

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Dialog.Title>{children}</Dialog.Title>
      {/* <Close /> */}
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <Dialog.Description>{children}</Dialog.Description>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel>{children}</Dialog.Panel>
    </Dialog>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
