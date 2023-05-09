import { Menu } from '@headlessui/react';
import React from 'react';
import { type ButtonProps, HeadlessButton } from '../../button';

export type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> &
  ButtonProps;

const defaultClass =
  'block text-center no-underline px-[20px] py-[3px] bg-foreground-primary text-background-primary bg-foreground-primary text-background-primary focus:bg-background-primary focus:text-foreground-primary hover:text-foreground-primary hover:bg-background-primary w-full';

export const MenuItem = ({
  children,
  className,
  ...props
}: MenuItemsProps): JSX.Element => {
  const classes = [defaultClass, className].join(' ');
  return (
    <Menu.Item as='li'>
      <HeadlessButton className={classes} {...props}>
        {children}
      </HeadlessButton>
    </Menu.Item>
  );
};
