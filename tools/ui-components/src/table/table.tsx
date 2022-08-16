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

const variantClasses: Record<string, string> = {
  light: 'table-children:bg-light-theme-background',
  dark: 'table-children:bg-dark-theme-background text-gray-0'
};

const computeSizeName = (size: string) => {
  switch (size) {
    case 'large':
      return 'table-children:text-lg';
    case 'small':
      return 'table-children:text-sm';
    // default is medium
    default:
      return 'table-children:text-md';
  }
};

// TODO: Handle hover colors for striped in light and dark mode
const stripedClass = (hover: boolean, striped: boolean, variant: string) => {
  if (hover && striped && variant == 'light')
    return 'table-striped:bg-gray-100';
  else if (hover && striped && variant == 'dark')
    return 'table-striped:bg-gray-150';
  else return striped ? 'table-striped:bg-gray-450' : '';
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      borderless,
      bordered,
      hover,
      striped,
      responsive,
      size,
      condensed,
      variant,
      ...props
    },
    ref
  ) => {
    const hoverVariantDark = hover && variant == 'dark';
    const hoverVariantLight = hover && variant == 'light';

    if (borderless && bordered) bordered = false;

    const borderClass = bordered ? 'table-children:border-1' : '';

    const hoverClass = hoverVariantDark
      ? 'table-hover:bg-gray-450'
      : hoverVariantLight
      ? 'table-hover:bg-gray-150'
      : '';
    const condensedClass = condensed
      ? 'table-children:p-1.5'
      : 'table-children:p-2.5';

    const classes = [
      ...defaultClassNames,
      borderClass,
      condensedClass,
      stripedClass(hover || false, striped || false, variant || ''),
      computeSizeName(size || ''),
      hoverClass,
      variantClasses[variant || '']
    ].join(' ');

    const table = <table {...props} ref={ref} className={classes} />;

    if (responsive) {
      let responsiveClass = computeWindowSize ? 'sm:block' : 'lg:flex-auto';
      if (typeof responsive === 'string') {
        responsiveClass = `${responsiveClass}-${responsive}`;
      }
      return <div className={responsiveClass}>{table}</div>;
    }

    return table;
  }
);

Table.displayName = 'Table';
