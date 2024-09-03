import React from 'react';
import { Button } from '@freecodecamp/ui';

import Link from './link';

export type ButtonSize = 'small' | 'medium' | 'large';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  block?: boolean;
  download?: string;
  target?: React.HTMLAttributeAnchorTarget;
  disabled?: boolean;
}

/**
 * ButtonLink is a link that looks like a button.
 * The component renders:
 * - Internal link with Gatsby's Link component
 * - External link with freecodecamp/ui's Button component,
 *   which renders a plain `<a>` if it receives an `href`.
 * NOTE: We probably want to move this component to @freecodecamp/ui.
 */
export const ButtonLink = ({
  className,
  children,
  href,
  target,
  download,
  onClick,
  size = 'medium',
  block,
  disabled
}: Props) => {
  // We only need to compute the styles of `size` and `block` for Gatsby Link.
  // freecodecamp/ui's Button already has the logic implemented.
  const cls = ['btn'];
  if (block) cls.push('btn-block');
  // The 'btn' class contains the base button styles as well as the `medium` variant styles.
  // So we only need to handle `large` and `small`.
  if (size === 'large') cls.push('btn-lg');
  if (size === 'small') cls.push('btn-sm');
  if (className) cls.push(className);
  const gatsbyLinkCls = cls.join(' ');

  // Links cannot be disabled. So if `disabled` is true,
  // we pass the prop to `Button` in order to render a `<button>` instead of an `<a>`.
  if (disabled || target === '_blank' || download) {
    return (
      <Button
        variant='primary'
        className={className}
        href={href}
        target={target}
        onClick={onClick}
        download={download}
        size={size}
        block={block}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  }

  return (
    <Link className={gatsbyLinkCls} to={href} target={target} onClick={onClick}>
      {children}
    </Link>
  );
};
