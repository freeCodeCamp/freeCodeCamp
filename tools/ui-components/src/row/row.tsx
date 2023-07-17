import React from 'react';

import { RowProps } from './types';

export const Row = ({ className, children }: RowProps) => {
  return <div className={`mx-[-15px] ${className ?? ''}`}>{children}</div>;
};
