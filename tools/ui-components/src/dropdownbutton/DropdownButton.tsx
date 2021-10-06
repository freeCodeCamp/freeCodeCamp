import React from 'react';
// import { DropdownButtonProps } from './DropdownButton.types';

import './dropdownbutton.css';

/**
 * Primary UI component for user interaction
 */
export const DropdownButton: React.FC<DropdownButtonProps> = ({
  block, bsStyle, className, id, title }: DropdownButtonProps) => {
  const mode = 'storybook-button--primary';
  return (
    <button
      className={[
        'storybook-button',
        `storybook-button--medium`,
        mode,
        'button-default-style'
      ].join(' ')}
      type='button'
    >
      Freecodecamp
    </button>
  );
};

export interface DropdownButtonProps {
  block?: boolean;
  bsStyle?: string;
  className?: string;
  id?: string;
  title?: string;

  // primary?: boolean;
  // size?: DropdownButtonSize;
  // label: string;
  // customKey?: string;
  // onClick: () => void;
  // theme?: 'light' | 'dark';
}
