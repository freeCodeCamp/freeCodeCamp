import React from 'react';

import { TableProps } from './types';

const defaultClassNames = [
  'table',
  'table-auto',
  'w-full',
  'max-w-full',
  'border-collapse',
  'text-left'
];

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ striped, condensed, ...props }, ref) => {
    const classNames = [...defaultClassNames];

    if (condensed) classNames.push('table-children:p-1');
    else classNames.push('table-children:p-2');

    if (striped) classNames.push('table-striped:bg-background-tertiary');

    const table = (
      <table {...props} ref={ref} className={classNames.join(' ')} />
    );

    return table;
  }
);

Table.displayName = 'Table';
