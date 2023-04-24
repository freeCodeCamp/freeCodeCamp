import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react';

type MenuProps = React.ComponentPropsWithoutRef<typeof Menu>;

export type DropDownButtonProps = MenuProps & {
  dropup?: boolean;
};

const defaultClassNames =
  'cursor-pointer border-3 text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 relative hover:bg-foreground-primary hover:text-background-primary btn-block border-foreground-primary';

export function DropDownButton({
  children,
  className,
  dropup,
  ...rest
}: DropDownButtonProps): JSX.Element {
  const classes = [className, defaultClassNames].join(' ');
  return (
    <Menu.Button className={classes} {...rest}>
      {children}
      <FontAwesomeIcon
        icon={dropup ? faCaretUp : faCaretDown}
        className='mt-2 ml-2 -mr-1 h-3 w-3 text-violet-200'
        aria-hidden='true'
      />
    </Menu.Button>
  );
}
