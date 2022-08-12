import React from 'react';

export type TableVariant = 'light' | 'dark';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  bordered?: boolean;
  borderless?: boolean;
  className?: string;
  hover?: boolean;
  size?: string;
  striped?: boolean | string;
  variant?: TableVariant;
  responsive?: boolean;
}
