import React, { useMemo } from 'react';
import { FlexProps } from './types';

const defaultClassNames = ['flex'];

const computeClassNames = ({
  direction,
  wrap,
  justify,
  align
}: {
  direction?: string;
  wrap?: string;
  justify?: string;
  align?: string;
}) => {
  const classNames = [...defaultClassNames];

  switch (direction) {
    case 'column':
      classNames.push('flex-col');
      break;
    case 'row-reverse':
      classNames.push('row-reverse');
      break;
    case 'column-reverse':
      classNames.push('column-reverse');
      break;
    default:
      classNames.push('flex-row');
  }

  switch (wrap) {
    case 'wrap':
      classNames.push('flex-wrap');
      break;
    case 'wrap-reverse':
      classNames.push('wrap-reverse');
      break;
    default:
      classNames.push('flex-nowrap');
  }

  switch (justify) {
    case 'end':
      classNames.push('justify-end');
      break;
    case 'center':
      classNames.push('justify-center');
      break;
    case 'space-between':
      classNames.push('justify-between');
      break;
    case 'space-around':
      classNames.push('justify-around');
      break;
    case 'space-evenly':
      classNames.push('justify-evenly');
      break;
    default:
      classNames.push('justify-start');
  }

  switch (align) {
    case 'end':
      classNames.push('items-end');
      break;
    case 'center':
      classNames.push('items-center');
      break;
    case 'stretch':
      classNames.push('items-stretch');
      break;
    case 'baseline':
      classNames.push('items-baseline');
      break;
    default:
      classNames.push('items-start');
  }

  return classNames.join(' ');
};

export const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  wrap,
  justify,
  align,
  ...props
}: FlexProps) => {
  const classes = useMemo(
    () => computeClassNames({ direction, wrap, justify, align }),
    [direction, wrap, justify, align]
  );
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
