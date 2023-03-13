import React, { createContext, useMemo } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'bsStyle'>;
export const PanelContext = createContext<PanelContextProps>({});

const styles = 'border border-solid border-foreground-primary shadow-sm mb-6';
const primaryStyle = 'border-background-primary';
const dangerStyle = 'border-foreground-danger';
const infoStyle = 'border-sky-300';

export const Panel = ({
  children,
  className,
  bsStyle
}: PanelProps): JSX.Element => {
  const context = useMemo(() => ({ bsStyle }), [bsStyle]);

  if (bsStyle === 'primary') [styles].concat(primaryStyle).join(' ');
  else if (bsStyle === 'danger') [styles].concat(dangerStyle).join(' ');
  else if (bsStyle === 'info') [styles].concat(infoStyle).join(' ');

  const panelClassed = [styles, className].join(' ');
  return (
    <PanelContext.Provider value={context}>
      <div className={panelClassed}>{children}</div>
    </PanelContext.Provider>
  );
};
