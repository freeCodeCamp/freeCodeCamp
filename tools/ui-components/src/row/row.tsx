import React from 'react';

import { RowProps } from './types';

export const Row = ({ className, children, ...rest }: RowProps) => {
  return (
    <div className={`mx-[-15px] ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};
