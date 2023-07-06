import { MouseEventHandler } from 'react';

export type ButtonVariant = 'primary' | 'danger' | 'info';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
  block?: boolean;
  href?: string | null;
  download?: string;
  target?: React.HTMLAttributeAnchorTarget;
}
