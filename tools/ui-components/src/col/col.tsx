import React from 'react';

import { ColProps } from './types';

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
  const xsClass = xs === 12 ? 'sm:w-full' : xs === 8 ? 'sm:w-[66.6%]' : '';
  const xsOffsetClass =
    xsOffset === 3 ? 'ml-[25%]' : xsOffset === 2 ? 'ml-[16.6%]' : '';
  const smPushClass = smPush ? 'md:left-[8.3%]' : '';
  let smClass = '';
  let mdClass = '';
  let lgClass = '';
  let smOffsetClass = '';
  let mdOffsetClass = '';
  let lgOffsetClass = '';

  if (sm === 12) {
    smClass = 'md:w-full';
  } else if (sm === 10) {
    smClass = 'md:w-[83.3%]';
  } else if (sm === 8) {
    smClass = 'md:w-[66.6%]';
  } else if (sm === 6) {
    smClass = 'md:w-[50%]';
  } else if (sm === 5) {
    smClass = 'md:w-[41.6%]';
  } else if (sm === 4) {
    smClass = 'md:w-[33.3%]';
  } else if (sm === 2) {
    smClass = 'md:w-[16.6%]';
  }

  if (smOffset === 1) {
    smOffsetClass = 'md:ml-[8.3%]';
  } else if (smOffset === 2) {
    smOffsetClass = 'md:ml-[16.6%]';
  } else if (smOffset === 3) {
    smOffsetClass = 'md:ml-[25%]';
  } else if (smOffset === 4) {
    smOffsetClass = 'md:ml-[33.3%]';
  }

  if (md === 10) {
    mdClass = 'min-[992px]:w-[83.3%]';
  } else if (md === 8) {
    mdClass = 'min-[992px]:w-[66.6%]';
  } else if (md === 6) {
    mdClass = 'min-[992px]:w-[50%]';
  } else if (md === 4) {
    mdClass = 'min-[992px]:w-[33.3%]';
  }

  if (mdOffset === 1) {
    mdOffsetClass = 'min-[992px]:ml-[8.3%]';
  } else if (mdOffset === 2) {
    mdOffsetClass = 'min-[992px]:ml-[16.6%]';
  } else if (mdOffset === 3) {
    mdOffsetClass = 'min-[992px]:ml-[25%]';
  } else if (mdOffset === 4) {
    mdOffsetClass = 'min-[992px]:ml-[33.3%]';
  }

  if (lg === 10) {
    lgClass = 'min-[1200px]:w-[83.3%]';
  } else if (lg === 8) {
    lgClass = 'min-[1200px]:w-[66.6%]';
  } else if (lg === 6) {
    lgClass = 'min-[1200px]:w-[50%]';
  }

  if (lgOffset === 0) {
    lgOffsetClass = 'min-[1200px]:ml-0';
  } else if (lgOffset === 1) {
    lgOffsetClass = 'min-[1200px]:ml-[8.3%]';
  } else if (lgOffset === 2) {
    lgOffsetClass = 'min-[1200px]:ml-[16.6%]';
  }

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
