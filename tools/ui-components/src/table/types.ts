import React from 'react';


export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  bordered?: boolean;
  borderless?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  condensed?: boolean;
  hover?: boolean;
  size?: string;
  striped?: boolean;
  responsive?: boolean | string;
}
