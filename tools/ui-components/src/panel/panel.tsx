import React, { createContext, useMemo } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'bsStyle'>;
export const PanelContext = createContext<PanelContextProps>({});

const styles = ['border-1', 'border-solid', 'shadow-sm', 'mb-6'];
const defaultBorder = 'border-background-tertiary';
const primaryBorder = 'border-foreground-primary';
const dangerBorder = 'border-foreground-danger';
const infoBorder = 'border-foreground-info';

export const Panel = ({
  children,
  className,
  bsStyle,
  ...restProps
}: PanelProps): JSX.Element => {
  const context = useMemo(() => ({ bsStyle }), [bsStyle]);

  const bsStyleClass =
    bsStyle === 'primary'
      ? primaryBorder
      : bsStyle === 'danger'
      ? dangerBorder
      : bsStyle === 'info'
      ? infoBorder
      : defaultBorder;
  const panelStyles = bsStyleClass
    ? styles.concat(bsStyleClass).join(' ')
    : styles.join(' ');
  const panelClassed = [panelStyles, className].join(' ');

  return (
    <PanelContext.Provider value={context}>
      <div className={panelClassed} {...restProps}>
        {children}
      </div>
    </PanelContext.Provider>
  );
};
