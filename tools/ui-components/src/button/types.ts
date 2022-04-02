import { MouseEventHandler } from 'react';

export type ButtonVariant = 'primary' | 'danger' | 'info';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
}
