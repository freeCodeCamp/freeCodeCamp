import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react';

type MenuProps = React.ComponentPropsWithoutRef<typeof Menu>;

export type DropDownButtonProps = MenuProps & {
  toggleLabel: React.ReactNode;
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

const itemsClassNames = [
  'shadow-lg',
  'bg-foreground-primary',
  'text-background-primary',
  'text-center',
  'ring-1',
  'ring-black',
  'ring-opacity-5',
  'focus:outline-transparent',
  'origin-top-right',
  'absolute',
  'py-1'
];

const getItemsContainerClasses = (dropup?: boolean) => {
  const dropupStyle = dropup ? ['transform -translate-y-full', 'top-0'] : [];
  return [...itemsClassNames, ...dropupStyle].join(' ');
};

export function DropDownButton({
  toggleLabel,
  children,
  block,
  dropup,
  ...rest
}: DropDownButtonProps): JSX.Element {
  const itemsContainer = [getItemsContainerClasses(dropup)].join();
  return (
    <Menu className='relative' as='div'>
      <Menu.Button className={getDefaultClasses(block)} {...rest}>
        {toggleLabel}
        <FontAwesomeIcon
          icon={dropup ? faCaretUp : faCaretDown}
          className='mt-2 ml-2 -mr-1 h-3 w-3 text-violet-200'
          aria-hidden='true'
        />
      </Menu.Button>

      <Menu.Items as='ul' className={itemsContainer}>
        {children}
      </Menu.Items>
    </Menu>
  );
}
