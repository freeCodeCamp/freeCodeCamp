import React from 'react';
import { Menu } from '@headlessui/react';
import { DropDownButton } from './drop-down-button';

type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> & {
  dropup?: boolean;
};

export type DropdownProps = React.ComponentPropsWithoutRef<typeof Menu>;

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
  'py-1',
  'z-10'
];

export const MenuItems = React.forwardRef<
  React.ElementRef<typeof Menu.Items>,
  MenuItemsProps
>(({ children, dropup, className }, ref) => {
  if (dropup) itemsClassNames.push('transform -translate-y-full top-0');
  const itemsClasses = itemsClassNames.join(' ');
  return (
    // The actual type of className is any, I think this type is false positive.
    <Menu.Items as='ul' className={[className, itemsClasses]} ref={ref}>
      {children}
    </Menu.Items>
  );
});

export const Dropdown = ({
  children,
  ...props
}: DropdownProps): JSX.Element => {
  return (
    <Menu className='relative' as='div' {...props}>
      {children}
    </Menu>
  );
};

Dropdown.Menu = MenuItems;
Dropdown.Toggle = DropDownButton;

MenuItems.displayName = 'MenuItems';
Dropdown.displayName = 'Dropdown';
