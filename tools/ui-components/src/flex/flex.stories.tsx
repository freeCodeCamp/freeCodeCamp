import React from 'react';
import { Flex } from '.';

const story = {
  title: 'Example/Flex',
  component: Flex,
  parameters: {
    controls: {
      include: ['children', 'direction', 'wrap', 'justify', 'align']
    }
  }
};

export const Vertical = () => (
  <Flex direction='column'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const Horizontal = () => (
  <Flex direction='row'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const Wrap = () => (
  <Flex wrap='wrap'>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const NoWrap = () => (
  <Flex wrap='nowrap'>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const WrapReverse = () => (
  <Flex wrap='wrap-reverse'>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyStart = () => (
  <Flex justify='justify-start'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyEnd = () => (
  <Flex justify='justify-end'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyCenter = () => (
  <Flex justify='justify-center'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyBetween = () => (
  <Flex justify='justify-between'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyAround = () => (
  <Flex justify='justify-around'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const justifyEvenly = () => (
  <Flex justify='justify-evenly'>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </Flex>
);

export const itemsStart = () => (
  <Flex align='items-start'>
    <div className='bg-red-500 h-10'>1</div>
    <div className='bg-blue-500 h-20'>2</div>
    <div className='bg-yellow-500 h-24'>3</div>
  </Flex>
);

export const itemsEnd = () => (
  <Flex align='items-end'>
    <div className='bg-red-500 h-10'>1</div>
    <div className='bg-blue-500 h-20'>2</div>
    <div className='bg-yellow-500 h-24'>3</div>
  </Flex>
);

export const itemsCenter = () => (
  <Flex align='items-center'>
    <div className='bg-red-500 h-10'>1</div>
    <div className='bg-blue-500 h-20'>2</div>
    <div className='bg-yellow-500 h-24'>3</div>
  </Flex>
);

export const itemsBaseline = () => (
  <Flex align='items-baseline'>
    <div className='bg-red-500 h-10'>1</div>
    <div className='bg-blue-500 h-20'>2</div>
    <div className='bg-yellow-500 h-24'>3</div>
  </Flex>
);

export const itemsStretch = () => (
  <Flex align='items-stretch'>
    <div className='bg-red-500 h-20'>1</div>
    <div className='bg-blue-500 h-10'>2</div>
    <div className='bg-yellow-500 h-20'>3</div>
  </Flex>
);

export default story;
