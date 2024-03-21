import { type ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: 'large' | 'medium';
  variant?: 'default' | 'danger';
}

export interface HeaderProps {
  children: ReactNode;
  showCloseButton?: boolean;
}

export interface BodyProps {
  children: ReactNode;

  /**
   * Use `start` for better right-to-left support.
   * Use `left` if the modal body contains code blocks.
   */
  alignment?: 'center' | 'left' | 'start';
}
