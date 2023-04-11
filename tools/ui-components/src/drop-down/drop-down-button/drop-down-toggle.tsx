import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react';

type MenuProps = React.ComponentPropsWithoutRef<typeof Menu>;

export type DropDownButtonProps = MenuProps & {
  block?: boolean;
  dropup?: boolean;
};

const defaultClassNames = [
  'cursor-pointer',
  'border-3',
  'text-center',
  'touch-manipulation',
  'border-foreground-primary',
  'bg-background-quaternary',
  'text-foreground-secondary',
  'px-3',
  'py-1.5',
  'focus:outline-transparent',
  'focus:bg-foreground-primary',
  'z-10',
  'relative',
  'focus:text-background-primary',
  'hover:bg-foreground-primary',
  'hover:text-background-primary'
];
const getDefaultClasses = (block?: boolean) => {
  const blockClass = block ? 'btn-block' : '';
  return [...defaultClassNames, blockClass].join(' ');
};

export function DropDownButton({
  children,
  block,
  dropup,
  ...rest
}: DropDownButtonProps): JSX.Element {
  return (
    <Menu.Button className={getDefaultClasses(block)} {...rest}>
      {children}
      <FontAwesomeIcon
        icon={dropup ? faCaretUp : faCaretDown}
        className='mt-2 ml-2 -mr-1 h-3 w-3 text-violet-200'
        aria-hidden='true'
      />
    </Menu.Button>
  );
}
