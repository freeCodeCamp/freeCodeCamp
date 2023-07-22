import React from 'react';

import { ColProps } from './types';

export const Col = ({ className, children, ...props }: ColProps) => {
  return (
    <div
      className={`relative min-h-[1px] px-[15px] ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  );
};
