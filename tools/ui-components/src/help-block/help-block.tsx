import React from 'react';
import { HelpBlockProps } from './types';

export const HelpBlock = React.forwardRef<HTMLSpanElement, HelpBlockProps>(
  ({ className, children }, ref): JSX.Element => {
    const defaultClasses = 'block mt-1 mb-2 text-foreground-quaternary';
    const classes = [defaultClasses, className].join(' ');
    return (
      <span ref={ref} data-testid='help-block' className={classes}>
        {children}
      </span>
    );
  }
);

HelpBlock.displayName = 'HelpBlock';
