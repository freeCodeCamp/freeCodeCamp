import React, { ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import { CloseButton } from '../close-button';
import { Button } from '../button';

interface HeaderProps {
  children: ReactNode;
}

interface BodyProps {
  children: ReactNode;
}

interface FooterProps {
  children: ReactNode;
}

export interface ModalProps {
  children: ReactNode;
  open?: boolean;
  size?: 'large' | 'small';
  variant?: 'default' | 'danger';
}

// const Header = ({ children }: HeaderProps) => {
//   return (
//     <div>
//       <Title>{children}</Title>
//       <Close />
//     </div>
//   );
// };

// const Body = ({ children }: BodyProps) => {
//   return <Description>{children}</Description>;
// };

// const Footer = ({ children }: FooterProps) => {
//   return <div>{children}</div>;
// };

const Modal = ({ children, open }: ModalProps) => {
  return (
    <>
      <Dialog open={open} onClose={() => {}}>
        <Dialog.Panel className='bg-background-danger'>
          <Dialog.Title>
            <h2>Modal title</h2>
            <CloseButton />
          </Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
          </Dialog.Description>

          <Button variant='primary'>Deactivate</Button>
          <Button variant='primary'>Cancel</Button>
        </Dialog.Panel>
      </Dialog>
      <Button variant='danger'>Cancel</Button>
    </>
  );
};

// Modal.Header = Header;
// Modal.Body = Body;
// Modal.Footer = Footer;

export { Modal };
