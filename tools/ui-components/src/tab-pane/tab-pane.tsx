import React from 'react';

import { TabPaneProps } from './types';

export const TabPane = React.forwardRef<HTMLElement, TabPaneProps>(
  ({ ...props }, ref) => {
    const { activeKey, eventKey, ...rest } = props;
    return (
      <div>
        <div
          {...rest}
          className={activeKey === eventKey ? 'block' : 'hidden'}
        ></div>
      </div>
    );
  }
);

TabPane.displayName = 'TabPane';
