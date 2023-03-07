import React from 'react';

import { PanelProps } from './types';

const styles = 'border border-solid shadow-sm mb-6';
const primaryStyle = 'border-background-primary';

export const Panel = ({ children, className }: PanelProps): JSX.Element => {
  // need to swap primaryStyles with bsStyle later
  const panelClassed = [styles, primaryStyle, className].join(' ');
  return <div className={panelClassed}>{children}</div>;
};
