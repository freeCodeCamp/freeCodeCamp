import { MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'danger' | 'info';

type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps<TElement = HTMLButtonElement>
  extends React.ButtonHTMLAttributes<TElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<TElement>;
  type?: 'submit' | 'button';
  disabled?: boolean;
  block?: boolean;
  href?: string | null;
  download?: string;
  target?: React.HTMLAttributeAnchorTarget;
}
