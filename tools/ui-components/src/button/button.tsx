import React, { useCallback, useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

const defaultClassNames = [
  'relative',
  'cursor-pointer',
  'inline-block',
  'border-3',
  'text-center',
  'no-underline',
  'active:before:w-full',
  'active:before:h-full',
  'active:before:absolute',
  'active:before:inset-0',
  'active:before:border-3',
  'active:before:border-transparent',
  'active:before:bg-gray-900',
  'active:before:opacity-20',
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50',
  'focus:outline-none', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color'
];

const computeClassNames = ({
  size,
  variant,
  disabled,
  block
}: {
  size: ButtonSize;
  variant: ButtonVariant;
  disabled?: boolean;
  block?: boolean;
}) => {
  const classNames = [...defaultClassNames];

  if (block) {
    classNames.push('block', 'w-full');
  }

  switch (variant) {
    case 'danger':
      classNames.push(
        'border-foreground-danger',
        'bg-background-danger',
        'text-foreground-danger',
        ...(disabled
          ? ['active:before:hidden']
          : [
              'hover:bg-foreground-danger',
              'hover:text-background-danger',
              'dark:hover:bg-background-danger',
              'dark:hover:text-foreground-danger'
            ])
      );
      break;
    case 'info':
      classNames.push(
        'border-foreground-info',
        'bg-background-info',
        'text-foreground-info',
        ...(disabled
          ? ['active:before:hidden']
          : [
              'hover:bg-foreground-info',
              'hover:text-background-info',
              'dark:hover:bg-background-info',
              'dark:hover:text-foreground-info'
            ])
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-foreground-secondary',
        'bg-background-quaternary',
        'text-foreground-secondary',
        ...(disabled
          ? ['active:before:hidden']
          : [
              'hover:bg-foreground-primary',
              'hover:text-background-primary',
              'dark:hover:bg-background-primary',
              'dark:hover:text-foreground-primary'
            ])
      );
  }

  switch (size) {
    case 'large':
      classNames.push('px-4 py-2.5 text-lg');
      break;
    case 'small':
      classNames.push('px-2.5 py-1 text-sm');
      break;
    // default size is 'medium'
    default:
      classNames.push('px-3 py-1.5 text-md');
  }

  return classNames.join(' ');
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'medium',
      type = 'button',
      onClick,
      children,
      disabled,
      block,
      href,
      download,
      target
    },
    ref
  ) => {
    const classes = useMemo(
      () => computeClassNames({ size, variant, disabled, block }),
      [size, variant, disabled, block]
    );

    // Manually prevent click event if the button is disabled
    // as `aria-disabled` marks the element disabled but still registers the click event.
    // Ref: https://css-tricks.com/making-disabled-buttons-more-inclusive/#aa-the-difference-between-disabled-and-aria-disabled
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        const ariaDisabled = event.currentTarget.getAttribute('aria-disabled');

        if (!ariaDisabled && onClick) {
          onClick(event);
        }
      },
      [onClick]
    );

    const renderButton: () => JSX.Element = useCallback(() => {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={classes}
          type={type}
          onClick={handleClick}
          aria-disabled={disabled}
        >
          {children}
        </button>
      );
    }, [children, classes, ref, type, handleClick, disabled]);

    const renderLink: () => JSX.Element = useCallback(() => {
      // Render a `button` tag if `disabled` is defined to keep the component semantically correct
      // as a link cannot be disabled.
      if (disabled) {
        return renderButton();
      }

      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={classes}
          href={href}
          download={download}
          target={target}
        >
          {children}
        </a>
      );
    }, [
      children,
      classes,
      ref,
      disabled,
      href,
      target,
      renderButton,
      download
    ]);

    if (href) {
      return renderLink();
    } else {
      return renderButton();
    }
  }
);

Button.displayName = 'Button';
