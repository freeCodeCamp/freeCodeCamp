import React from 'react';
import { Menu } from '@headlessui/react';
import { DropDownButton } from './drop-down-button';

type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> & {
  dropup?: boolean;
};

export type DropDownProps = React.ComponentPropsWithoutRef<typeof Menu>;

const itemsClassNames =
  'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute py-1';

const getItemsContainerClasses = (dropup?: boolean) => {
  const dropupStyle = dropup ? 'transform -translate-y-full top-0' : '';
  return [itemsClassNames, dropupStyle].join(' ');
};

export const MenuItems = React.forwardRef<
  React.ElementRef<typeof Menu.Items>,
  MenuItemsProps
>(({ children, dropup }, ref) => {
  const itemsClasses = getItemsContainerClasses(dropup);
  return (
    <Menu.Items as='ul' className={itemsClasses} ref={ref}>
      {children}
    </Menu.Items>
  );
});

export const DropDown = ({
  children,
  ...props
}: DropDownProps): JSX.Element => {
  return (
    <Menu className='relative' as='div' {...props}>
      {children}
    </Menu>
  );
};

DropDown.Menu = MenuItems;
DropDown.Toggle = DropDownButton;

MenuItems.displayName = 'MenuItems';
DropDown.displayName = 'DropDown';
