import React from 'react';

import { TabPaneProps } from './types';

const defaultClasses =
  'block relative mr-1 border-1 border-solid border-background-tertiary border-b-transparent';

export const TabPane = ({
  id,
  eventKey,
  isActive,
  className,
  ...props
}: TabPaneProps): JSX.Element => {
  // the id should be inherited from the tabs
  const tabId = `${id ?? ''}-tab-instructions`;
  const ariaControls = `${id ?? ''}-pane-controls`;
  const classes = [defaultClasses, className].join(' ');
  // Tabs is responsible for when the aria is active
  return (
    <li role='presentation'>
      <a
        className={classes}
        id={tabId}
        role='tab'
        aria-controls={ariaControls}
        aria-selected={isActive}
        {...props}
      >
        {eventKey}
      </a>
    </li>
  );
};

<TabPane title='test' eventKey='something' />;
