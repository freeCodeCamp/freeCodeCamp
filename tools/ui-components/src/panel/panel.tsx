import React, { createContext, useMemo } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'bsStyle'>;
const PanelContext = createContext<PanelContextProps>({});

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
  const context = useMemo(() => ({ bsStyle }), [bsStyle]);
  if (bsStyle === 'primary') [buttonStyles].concat(primaryStyle).join(' ');
  else if (bsStyle === 'danger') [buttonStyles].concat(dangerStyle).join(' ');
  else if (bsStyle === 'info') [buttonStyles].concat(infoStyle).join(' ');

  const panelClassed = [buttonStyles, className].join(' ');
  return (
    <PanelContext.Provider value={context}>
      <div className={panelClassed}>{children}</div>
    </PanelContext.Provider>
  );
};
