import React, { createContext, useContext } from 'react';

import { PanelProps } from './types';

type PanelContextProps = Pick<PanelProps, 'variant'>;
const PanelContext = createContext<PanelContextProps>({});

const border = {
  primary: 'border-foreground-primary',
  danger: 'border-foreground-danger',
  info: 'border-foreground-info'
};

const heading = {
  primary:
    'outline-[1px] outline outline-foreground-primary text-foreground-primary',
  danger: 'bg-foreground-danger text-background-danger',
  info: 'bg-foreground-info text-background-info'
};

const Body = ({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>): JSX.Element => {
  const classes = [className, 'p-3.5'].join(' ');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const Heading = ({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>): JSX.Element => {
  const { variant } = useContext(PanelContext);

  const headingStyles = variant
    ? heading[variant]
    : 'outline outline-[1px] outline-background-tertiary';
  const classes = [className, headingStyles, 'px-3.5 py-2.5'].join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const Title = ({
  children,
  ...props
}: React.ComponentProps<'h3'>): JSX.Element => {
  return (
    <h3 className='text-inherit mb-0 text-xl' {...props}>
      {children}
    </h3>
  );
};

export const Panel = ({
  children,
  className,
  variant,
  ...restProps
}: PanelProps): JSX.Element => {
  const variantClass = variant ? border[variant] : 'border-background-tertiary';
  const panelClassed = [
    'border-1 border-solid shadow-sm mb-6',
    variantClass,
    className
  ].join(' ');

  return (
    <PanelContext.Provider value={{ variant }}>
      <div className={panelClassed} {...restProps}>
        {children}
      </div>
    </PanelContext.Provider>
  );
};

Panel.Body = Body;
Panel.Heading = Heading;
Panel.Title = Title;
