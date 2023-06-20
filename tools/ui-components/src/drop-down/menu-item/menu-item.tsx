import { Menu } from '@headlessui/react';
import React from 'react';
import type { ButtonProps } from '../../button';

export type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> &
  ButtonProps;

const Button = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  ({ className, onClick, disabled, children, ...rest }, ref) => {
    // Manually prevent click event if the button is disabled
    // as `aria-disabled` marks the element disabled but still registers the click event.
    // Ref: https://css-tricks.com/making-disabled-buttons-more-inclusive/#aa-the-difference-between-disabled-and-aria-disabled

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const ariaDisabled = event.currentTarget.getAttribute('aria-disabled');
      if (!ariaDisabled && onClick) {
        onClick(event);
      }
    };

    return (
      <button
        className={className}
        onClick={handleClick}
        aria-disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

const Link = React.forwardRef<React.ElementRef<'a'>, ButtonProps>(
  ({ className, href, download, target, children, ...rest }, ref) => {
    return (
      <a
        className={className}
        download={download}
        target={target}
        ref={ref}
        href={href ?? undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export const HeadlessButton = React.forwardRef<
  React.ElementRef<'button' | 'a'>,
  ButtonProps
>(
  (
    { onClick, className, children, disabled, href, download, target, ...rest },
    ref
  ) => {
    if (href && !disabled) {
      return (
        <Link
          className={className}
          href={href}
          download={download}
          target={target}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...rest}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <Button
          className={className}
          onClick={onClick}
          aria-disabled={disabled}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...rest}
        >
          {children}
        </Button>
      );
    }
  }
);

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

Button.displayName = 'Button';
Link.displayName = 'Link';
HeadlessButton.displayName = 'HeadlessButton';
