import React from 'react';
import { TabPaneProps } from './types';

export const TabPane = React.forwardRef<HTMLDivElement, TabPaneProps>(
  (props, ref) => {
    const { activeKey, eventKey, ...rest } = props;
    return (
      <div
        {...rest}
        ref={ref}
        className={activeKey === eventKey ? 'block' : 'hidden'}
      ></div>
    );
  }
);

TabPane.displayName = 'TabPane';
