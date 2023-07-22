import React from 'react';

import { ColProps } from './types';

export const Col = ({ className, children, xs, ...props }: ColProps) => {
  return (
    <div
      className={`relative min-h-[1px] px-[15px] float-left ${
        className ?? ''
      } ${xs ?? 'sm:w-full'}`}
      {...props}
    >
      {children}
    </div>
  );
};
