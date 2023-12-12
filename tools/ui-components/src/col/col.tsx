import React from 'react';

import { ColProps } from './types';

const ExtraSmallClasses = {
  6: 'w-1/2',
  8: 'w-2/3',
  10: 'w-5/6',
  12: 'w-full'
};

const ExtraSmallOffsetClasses = {
  1: 'ml-[8.3%]',
  2: 'ml-[16.6%]',
  3: 'ml-[25%]'
};

const SmallClasses = {
  2: 'md:w-1/6',
  4: 'md:w-1/3',
  5: 'md:w-5/12',
  8: 'md:w-2/3',
  6: 'md:w-1/2',
  10: 'md:w-5/6',
  12: 'md:w-full'
};

const SmallOffsetClasses = {
  1: 'md:ml-[8.3%]',
  2: 'md:ml-[16.6%]',
  3: 'md:ml-[25%]',
  4: 'md:ml-[33.3%]'
};

const MediumClasses = {
  4: 'min-[992px]:w-1/3',
  6: 'min-[992px]:w-1/2',
  8: 'min-[992px]:w-2/3',
  10: 'min-[992px]:w-5/6'
};

const MediumOffsetClasses = {
  1: 'min-[992px]:ml-[8.3%]',
  2: 'min-[992px]:ml-[16.6%]',
  3: 'min-[992px]:ml-[25%]',
  4: 'min-[992px]:ml-[33.3%]'
};

const LargeClasses = {
  6: 'min-[1200px]:w-1/2',
  8: 'min-[1200px]:w-2/3',
  10: 'min-[1200px]:w-5/6'
};

const LargeOffsetClasses = {
  0: 'min-[1200px]:ml-0',
  1: 'min-[1200px]:ml-[8.3%]',
  2: 'min-[1200px]:ml-[16.6%]'
};

export const Col = ({
  className,
  children,
  xs,
  sm,
  md,
  lg,
  smPush,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  ...props
}: ColProps) => {
  const xsClass = xs ? ExtraSmallClasses[xs] : '';
  const xsOffsetClass = xsOffset ? ExtraSmallOffsetClasses[xsOffset] : '';
  const smPushClass = smPush ? 'md:left-[8.3%]' : '';
  const smClass = sm ? SmallClasses[sm] : '';
  const smOffsetClass = smOffset ? SmallOffsetClasses[smOffset] : '';
  const mdClass = md ? MediumClasses[md] : '';
  const mdOffsetClass = mdOffset ? MediumOffsetClasses[mdOffset] : '';
  const lgClass = lg ? LargeClasses[lg] : '';
  // we have to check condiontionally against undefined, because "lgOffset ?" clear the 0 value, maybe refactor LargeOffsetClasses[0] later to something isn't 0.
  const lgOffsetClass =
    lgOffset !== undefined ? LargeOffsetClasses[lgOffset] : '';

  return (
    <div
      className={`${
        className ?? ''
      } min-h-[1px] px-[15px] ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass} ${smPushClass} `}
      {...props}
    >
      {children}
    </div>
  );
};
