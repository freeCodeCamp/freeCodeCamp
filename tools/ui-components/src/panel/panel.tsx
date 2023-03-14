import React, { createContext, useMemo } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'bsStyle'>;
export const PanelContext = createContext<PanelContextProps>({});

const styles = [
  'border-1',
  'border-solid',
  'border-foreground-primary',
  'shadow-sm',
  'mb-6'
];
const primaryStyle = 'border-background-primary';
const dangerStyle = 'border-foreground-danger';
const infoStyle = 'border-sky-300';

export const Panel = ({
  children,
  className,
  bsStyle
}: PanelProps): JSX.Element => {
  const context = useMemo(() => ({ bsStyle }), [bsStyle]);

  const bsStyleClass =
    bsStyle === 'primary'
      ? primaryStyle
      : bsStyle === 'danger'
      ? dangerStyle
      : bsStyle === 'info'
      ? infoStyle
      : undefined;
  const panelStyles = bsStyleClass
    ? styles.concat(bsStyleClass).join(' ')
    : styles.join(' ');
  const panelClassed = [panelStyles, className].join(' ');

  return (
    <PanelContext.Provider value={context}>
      <div className={panelClassed}>{children}</div>
    </PanelContext.Provider>
  );
};
