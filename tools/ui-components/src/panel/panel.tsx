import React from 'react';

import { PanelProps } from './types';

const styles = 'border border-solid border-foreground-primary shadow-sm mb-6';
const primaryStyle = 'border-background-primary';
const dangerStyle = 'border-foreground-danger';
const infoStyle = 'border-sky-300';
// const primaryHeadingStyle = 'text-background-primary'
// const infoHeadingStyle = 'bg-sky-200 text-sky-500'

export const Panel = ({
  children,
  className,
  bsStyle
}: PanelProps): JSX.Element => {
  const buttonStyles = styles;
  if (bsStyle === 'primary') [buttonStyles].concat(primaryStyle).join(' ');
  else if (bsStyle === 'danger') [buttonStyles].concat(dangerStyle).join(' ');
  else if (bsStyle === 'info') [buttonStyles].concat(infoStyle).join(' ');

  const panelClassed = [buttonStyles, className].join(' ');
  return <div className={panelClassed}>{children}</div>;
};
