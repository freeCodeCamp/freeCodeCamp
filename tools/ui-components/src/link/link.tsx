import React, { useMemo } from 'react';

import { LinkProps } from './types';

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, to, target, block }, ref) => {
    const classes = useMemo(() => {
      const cls = [
        'text-foreground-primary',
        'text-center',
        'hover:no-underline',
        'hover:bg-background-tertiary'
      ];

      if (block) {
        cls.push('block', 'w-full');
      }

      return cls.join(' ');
    }, [block]);

    return (
      <a
        className={classes}
        href={to}
        target={target}
        ref={ref}
        rel='noopener noreferrer'
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
