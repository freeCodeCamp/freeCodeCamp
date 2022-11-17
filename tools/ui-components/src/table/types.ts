import React from 'react';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  condensed?: boolean;
  striped?: boolean;
}
