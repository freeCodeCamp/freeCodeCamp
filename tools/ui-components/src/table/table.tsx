import React from 'react';

import { TableProps } from './types';

const defaultClassNames = [
  'table',
  'table-auto',
  'w-full',
  'max-w-full',
  'border-collapse',
  'text-left',
  'text-foreground-tertiary',
  '[&_th]:font-normal'
];

const computeClassNames = ({
  condensed,
  striped
}: {
  condensed: boolean;
  striped: boolean;
}) => {
  const classNames = [...defaultClassNames];
  if (condensed) classNames.push('[&_td]:p-1 [&_th]:p-1');
  else classNames.push('[&_td]:p-2 [&_th]:p-2');
  if (striped)
    classNames.push('[&>tbody>tr:nth-of-type(odd)]:bg-background-tertiary');

  return classNames.join(' ');
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ striped = false, condensed = false, ...props }, ref) => {
    const classNames = React.useMemo(
      () => computeClassNames({ condensed, striped }),
      [condensed, striped]
    );

    const table = <table {...props} ref={ref} className={classNames} />;

    return table;
  }
);

Table.displayName = 'Table';
