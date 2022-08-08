import React from 'react';
import { FlexProps } from './types';

// const defaultClassNames = [
//     'column',
//     'row',
//   ];

export const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  flexWrap,
  justify,
  align,
  ...props
}: FlexProps) => {
  if ('row' === direction) {
    return <div className='flex flex-row ...'>{children}</div>;
  } else if ('column' === direction) {
    return (
      <div {...props} className='flex flex-col ...'>
        {children}
      </div>
    );
  } else if ('wrap' === flexWrap) {
    return (
      <div {...props} className='flex flex-wrap'>
        {children}
      </div>
    );
  } else if ('nowrap' === flexWrap) {
    return (
      <div {...props} className='flex flex-nowrap'>
        {children}
      </div>
    );
  } else if ('wrap-reverse' === flexWrap) {
    return (
      <div {...props} className='flex flex-wrap-reverse'>
        {children}
      </div>
    );
  } else if ('justify-start' === justify) {
    return (
      <div {...props} className='flex justify-start ...'>
        {children}
      </div>
    );
  } else if ('justify-end' === justify) {
    return (
      <div {...props} className='flex justify-end ...'>
        {children}
      </div>
    );
  } else if ('justify-center' === justify) {
    return (
      <div {...props} className='flex justify-center ...'>
        {children}
      </div>
    );
  } else if ('justify-between' === justify) {
    return (
      <div {...props} className='flex justify-between ...'>
        {children}
      </div>
    );
  } else if ('justify-around' === justify) {
    return (
      <div {...props} className='flex justify-around ...'>
        {children}
      </div>
    );
  } else if ('justify-evenly' === justify) {
    return (
      <div {...props} className='flex justify-evenly ...'>
        {children}
      </div>
    );
  } else if ('items-start' === align) {
    return (
      <div {...props} className='flex items-start ...'>
        {children}
      </div>
    );
  } else if ('items-end' === align) {
    return (
      <div {...props} className='flex items-end ...'>
        {children}
      </div>
    );
  } else if ('items-center' === align) {
    return (
      <div {...props} className='flex items-center ...'>
        {children}
      </div>
    );
  } else if ('items-baseline' === align) {
    return (
      <div {...props} className='flex items-baseline ...'>
        {children}
      </div>
    );
  } else if ('items-stretch' === align) {
    return (
      <div {...props} className='flex items-stretch ...'>
        {children}
      </div>
    );
  }
  return null;
};
