import React from 'react';
import { Menu } from '@headlessui/react';
import { DropDownButton } from './drop-down-button';

type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> & {
  dropup?: boolean;
};

export type DropdownProps = React.ComponentPropsWithoutRef<typeof Menu>;

const dropDownItems =
  'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute min-w-full py-1 z-10';
const dropUpItems = dropDownItems + ' transform -translate-y-full top-0';

export const MenuItems = React.forwardRef<
  React.ElementRef<typeof Menu.Items>,
  MenuItemsProps
>(({ children, dropup, className }, ref) => {
  const itemsClasses = dropup ? dropUpItems : dropDownItems;
  const buttonClass: string = [className, itemsClasses].join(' ');
  return (
    <Menu.Items as='ul' className={buttonClass} ref={ref}>
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
