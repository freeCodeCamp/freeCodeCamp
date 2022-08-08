import { Meta } from '@storybook/react';
import React from 'react';
import { Spacer } from './spacer';

const meta: Meta = {
  title: 'Spacer',
  component: Spacer
};

export default meta;

export const Test = () => (
  <div className='flex ... w-50'>
    <div className='bg-red-500 '>01</div>
    <Spacer />
    <div className='bg-blue-500 '>02</div>
    <Spacer />
    <div className='bg-yellow-500 '>03</div>
  </div>
);
