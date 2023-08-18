import React from 'react';

import { ColProps } from './types';

const ExtraSmallClasses = {
  6: 'sm:w-[50%]',
  8: 'sm:w-[66.6%]',
  10: 'sm:w-[83.3%]',
  12: 'sm:w-full'
};

const ExtraSmallOffsetClasses = {
  1: 'ml-[8.3%]',
  2: 'ml-[16.6%]',
  3: 'ml-[25%]'
};

const SmallClasses = {
  12: 'md:w-full',
  10: 'md:w-[83.3%]',
  8: 'md:w-[66.6%]',
  6: 'md:w-[50%]',
  5: 'md:w-[41.6%]',
  4: 'md:w-[33.3%]',
  2: 'md:w-[16.6%]'
};

const SmallOffsetClasses = {
  1: 'md:ml-[8.3%]',
  2: 'md:ml-[16.6%]',
  3: 'md:ml-[25%]',
  4: 'md:ml-[33.3%]'
};

const MediumClasses = {
  10: 'min-[992px]:w-[83.3%]',
  8: 'min-[992px]:w-[66.6%]',
  6: 'min-[992px]:w-[50%]',
  4: 'min-[992px]:w-[33.3%]'
};

const MediumOffsetClasses = {
  1: 'min-[992px]:ml-[8.3%]',
  2: 'min-[992px]:ml-[16.6%]',
  3: 'min-[992px]:ml-[25%]',
  4: 'min-[992px]:ml-[33.3%]'
};

const LargeClasses = {
  10: 'min-[1200px]:w-[83.3%]',
  8: 'min-[1200px]:w-[66.6%]',
  6: 'min-[1200px]:w-[50%]'
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
  const lgOffsetClass = lgOffset ? LargeOffsetClasses[lgOffset] : '';

  return (
    <div
      className={`relative min-h-[1px] px-[15px] float-left ${
        className ?? ''
      } ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass} ${smPushClass}`}
      {...props}
    >
      {children}
    </div>
  );
};
