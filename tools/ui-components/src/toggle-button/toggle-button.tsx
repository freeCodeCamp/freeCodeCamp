import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { ToggleButtonProps } from './types';

export const ToggleButton = ({}: ToggleButtonProps) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className='relative px-[30px] py-[5px] border-3 border-foreground-tertiary bg-background-quaternary text-center text-sm'
    >
      <span>On</span>
      <span className='sr-only'>Enable notifications</span>
    </Switch>
  );
};
