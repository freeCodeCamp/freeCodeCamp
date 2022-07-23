import React, { Context } from 'react';

// I had to alter this to  < React.ComponentPropsWithRef<Inner>, number> and I don't know why
export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  number
> &
  P;

export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As;
}

export interface BsPrefixOnlyProps {
  bsPrefix?: string;
}

export interface BsPrefixProps<As extends React.ElementType = React.ElementType>
  extends BsPrefixOnlyProps,
    AsProp<As> {}

export interface BsPrefixRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, BsPrefixProps<As> & P>>,
    context?: Context<string>
  ): React.ReactElement | null;
  propTypes?: React.ReactNode;
  contextTypes?: Context<string>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
