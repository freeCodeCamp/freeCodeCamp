import React from 'react';

import { TabPaneProps } from './types';

export const TabPane = (props: TabPaneProps): JSX.Element => {
  return <div {...props}>Hello, I am a TabPane component</div>;
};
