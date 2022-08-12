import React from 'react';
import '../../../../client/src/components/layouts/global.css';

import { TableProps } from './types';

const defaultClassNames = [
  'table',
  'table-auto',
  'w-full',
  'border-collapse',
  'text-left',
  'bg-transparent'
];
const MAX_MOBILE_WIDTH = 767;

const computeWindowSize = window.innerWidth <= MAX_MOBILE_WIDTH;

// const variantClasses: Record<TableVariant, string> = {
//   light: 'bg-light-theme-background',
//   dark: 'bg-dark-theme-background text-gray-0'
// }

const computeClassNames = (size: string) => {
  switch (size) {
    case 'large':
      return 'text-lg';
    case 'small':
      return 'text-sm';
    // default is medium
    default:
      return 'text-md';
  }
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { borderless, bordered, hover, striped, responsive, size, ...props },
    ref
  ) => {
    props.cellPadding = 10; // Default cell padding for visual clarity in Storybook

    if (borderless && bordered) bordered = false;

    const borderClass = bordered ? 'bordered' : '';
    const stripedClass = striped ? 'table-striped' : '';
    const hoverClass = hover ? 'table-hover' : '';

    const classes = [
      ...defaultClassNames,
      borderClass,
      stripedClass,
      computeClassNames(size || ''),
      hoverClass
    ].join(' ');

    const table = <table {...props} ref={ref} className={classes} />;

    if (responsive) {
      const responsiveClass = computeWindowSize ? 'sm' : 'lg';
      return <div className={responsiveClass}>{table}</div>;
    }

    // For storybook use cases. Table should remain transparent to the background color add @param of 'variant'

    // if (variant == 'light') {
    //   return <div className={variantClasses[variant]}>{table}</div>
    // } else return <div className={variantClasses[variant]}>{table}</div>

    return table;
  }
);

Table.displayName = 'Table';
