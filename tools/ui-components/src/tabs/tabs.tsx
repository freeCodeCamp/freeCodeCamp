import React from 'react';

import { TabsProps } from './types';

const defaultClass =
  'border-b border-solid border-background-quaternary mb-0 pl-0 list-none mt-0';

export const Tabs = ({
  className,
  children,
  ...props
}: TabsProps): JSX.Element => {
  const styles = [defaultClass, className].join(' ');
  return (
    <ul role='tablist' className={styles} {...props}>
      {children}
    </ul>
  );
};
