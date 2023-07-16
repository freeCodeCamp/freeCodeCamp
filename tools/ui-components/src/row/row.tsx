import React from 'react';

import { RowProps } from './types';

export const Row = ({ className, children }: RowProps) => {
  if (!className) {
    className = '';
  }
  return <div className={`mx-[-15px] ${className}`}>{children}</div>;
};
