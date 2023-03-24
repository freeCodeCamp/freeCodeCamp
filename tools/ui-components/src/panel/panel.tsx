import React, { createContext, useContext } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'bsStyle'>;
const PanelContext = createContext<PanelContextProps>({});

const styles = ['border-1', 'border-solid', 'shadow-sm', 'mb-6'];
const defaultBorder = 'border-background-tertiary';
const primaryBorder = 'border-foreground-primary';
const dangerBorder = 'border-foreground-danger';
const infoBorder = 'border-foreground-info';
const defaultHeadingStyle =
  'border-b-1 border-solid border-background-tertiary';
const primaryHeadingStyle =
  'border-b-1 border-solid border-foreground-primary text-foreground-primary';
const infoHeadingStyle = 'text-background-info bg-foreground-info';
const dangerHeadingStyle = 'text-background-danger bg-foreground-danger';

const Body = ({
  children,
  props
}: {
  children?: React.ReactNode;
  props?: React.ComponentProps<'div'>;
}): JSX.Element => {
  return (
    <div className='p-3.5' {...props}>
      {children}
    </div>
  );
};

export const Heading = ({
  children,
  props
}: {
  children?: React.ReactNode;
  props?: React.ComponentProps<'div'>;
}): JSX.Element => {
  const { bsStyle } = useContext(PanelContext);
  const styles =
    bsStyle === 'primary'
      ? primaryHeadingStyle
      : bsStyle === 'info'
      ? infoHeadingStyle
      : bsStyle === 'danger'
      ? dangerHeadingStyle
      : defaultHeadingStyle;

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};

export const Title = ({
  children,
  props
}: {
  children?: React.ReactNode;
  props?: React.ComponentProps<'h3'>;
}): JSX.Element => {
  return (
    <h3 className='text-inherit mb-0 text-xl' {...props}>
      {children}
    </h3>
  );
};

export const Panel = ({
  children,
  className,
  bsStyle,
  ...restProps
}: PanelProps): JSX.Element => {
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
    <PanelContext.Provider value={{ bsStyle }}>
      <div className={panelClassed} {...restProps}>
        {children}
      </div>
    </PanelContext.Provider>
  );
};

Panel.Body = Body;
Panel.Heading = Heading;
Panel.Title = Title;
