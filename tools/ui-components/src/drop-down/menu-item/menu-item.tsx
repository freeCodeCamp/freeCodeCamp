import { Menu } from '@headlessui/react';
import React from 'react';
import { type ButtonProps, HeadlessButton } from '../../button';

export type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> &
  ButtonProps;

const defaultClass =
  'block text-center no-underline border-none px-4 py-1.5 focus:bg-background-secondary focus:text-foreground-secondary hover:text-foreground-secondary hover:bg-background-secondary w-full';

export const MenuItem = ({
  children,
  className,
  ...props
}: MenuItemsProps): JSX.Element => {
  return (
    <Menu.Item>
      {({ active }) => {
        const activeStyles = active
          ? 'text-foreground-secondary bg-background-secondary outline outline-3 outline-blue-500 outline-offset-[-3px]'
          : 'text-background-secondary bg-foreground-secondary';
        const classes = [defaultClass, className, activeStyles].join(' ');
        return (
          <HeadlessButton className={classes} {...props}>
            {children}
          </HeadlessButton>
        );
      }}
    </Menu.Item>
  );
};
