import React, { ReactNode, createContext, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { CloseButton } from '../close-button';

export type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: 'large' | 'small';
  variant?: 'default' | 'danger';
};

type HeaderProps = {
  children: ReactNode;
  showCloseButton?: boolean;
};

const ModalContext = createContext<Pick<ModalProps, 'onClose'>>({
  onClose: () => {}
});

export const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ onClose }}>
      <Dialog open={open} onClose={onClose}>
        <Dialog.Panel>{children}</Dialog.Panel>
      </Dialog>
    </ModalContext.Provider>
  );
};

const Header = ({ children, showCloseButton = true }: HeaderProps) => {
  const { onClose } = useContext(ModalContext);

  if (showCloseButton) {
    return (
      <div>
        <Dialog.Title>{children}</Dialog.Title>
        <CloseButton onClick={onClose} />
      </div>
    );
  }

  return <Dialog.Title>{children}</Dialog.Title>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
