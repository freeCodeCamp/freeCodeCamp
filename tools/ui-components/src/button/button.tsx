import React, { useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

const defaultClassNames = [
  // Positioning
  'relative',
  'inline-block',
  'mt-[0.5px]',
  // Border
  'border-solid',
  'border-3',
  // Active state
  'active:before:w-full',
  'active:before:h-full',
  'active:before:absolute',
  'active:before:inset-0',
  'active:before:border-3',
  'active:before:border-transparent',
  'active:before:bg-gray-900',
  'active:before:opacity-20',
  // Disabled state
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50',
  // Focus state
  'focus:outline-none', // Hide the default browser outline
  'focus-visible:ring',
  'focus-visible:ring-focus-outline-color',
  // Misc
  'text-center',
  'cursor-pointer',
  'no-underline' // For link
];

const computeClassNames = ({
  size,
  variant,
  disabled,
  block
}: {
  size?: ButtonSize;
  variant?: ButtonVariant;
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
              // This hover rule is redundant for the component library,
              // but is needed to override the border color set in client's `global.css`.
              // We can remove it once we have completely removed the CSS overrides in client.
              'hover:border-foreground-danger',
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
              // This hover rule is redundant for the component library,
              // but is needed to override the border color set in client's `global.css`.
              // We can remove it once we have completely removed the CSS overrides in client.
              'hover:border-foreground-info',
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
              // This hover rule is redundant for the component library,
              // but is needed to override the border color set in client's `global.css`.
              // We can remove it once we have completely removed the CSS overrides in client.
              'hover:border-foreground-secondary',
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

const StylessButton = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  (
    { className, onClick, disabled, children, type = 'button', ...rest },
    ref
  ) => {
    // Manually prevent the click event if the button is disabled
    // as `aria-disabled` marks the element disabled but still registers the click event.
    // Ref: https://css-tricks.com/making-disabled-buttons-more-inclusive/#aa-the-difference-between-disabled-and-aria-disabled
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      if (onClick) {
        onClick(event);
      }
    };

    return (
      <button
        className={className}
        onClick={handleClick}
        aria-disabled={disabled}
        ref={ref}
        type={type}
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
        href={href}
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
          onClick={onClick}
          {...rest}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <StylessButton
          className={className}
          onClick={onClick}
          disabled={disabled}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...rest}
        >
          {children}
        </StylessButton>
      );
    }
  }
);

export const Button = React.forwardRef<
  React.ElementRef<'button' | 'a'>,
  ButtonProps
>(
  (
    {
      className,
      size = 'medium',
      disabled,
      variant = 'primary',
      block,
      ...rest
    },
    ref
  ) => {
    const classes = useMemo(
      () => computeClassNames({ size, variant, disabled, block }),
      [size, variant, disabled, block]
    );

    const buttonStyle = [className, classes].join(' ');

    return (
      <HeadlessButton
        className={buttonStyle}
        ref={ref}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';
HeadlessButton.displayName = 'HeadlessButton';
StylessButton.displayName = 'StylessButton';
Link.displayName = 'Link';
