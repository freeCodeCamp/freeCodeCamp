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
    const classNames = [...defaultClassNames, variantClasses[variant || ''], computeSizeName(size || '')];
    const hoverVariantDark = hover && variant == 'dark';
    const hoverVariantLight = hover && variant == 'light';

    if (borderless && bordered) bordered = false;

    if (bordered) classNames.push('table-children:border-1');

    if (condensed) classNames.push('table-children:p-1.5');
    else classNames.push('table-children:p-2.5');

    if (hoverVariantDark) classNames.push('table-hover:bg-gray-450');
    else if (hoverVariantLight) classNames.push('table-hover:bg-gray-150');

    // TODO: Handle hover colors for striped in light and dark mode
    if (hover && striped && variant == 'light')
      classNames.push('table-striped:bg-gray-100');
    else if (hover && striped && variant == 'dark')
      classNames.push('table-striped:bg-gray-150');
    else
      striped
        ? classNames.push('table-striped:bg-gray-450')
        : classNames.push('');


    const table = (
      <table {...props} ref={ref} className={classNames.join(' ')} />
    );

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
