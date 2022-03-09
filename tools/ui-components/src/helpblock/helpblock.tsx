/* eslint-disable react/display-name */
/* eslint-disable no-empty-pattern */

import React from 'react';

const classes = ['block mt-5 mb-10 text-default-foreground-quaternary'].join(
  ''
);

export const HelpBlock = React.forwardRef<HTMLSpanElement>(
  ({}, ref): JSX.Element => {
    return <span ref={ref} data-testid='help-block' className={classes} />;
  }
);
