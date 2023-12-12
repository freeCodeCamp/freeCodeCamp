import React from 'react';

export type FormControlProps<
  TElement extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'input'
> = {
  componentClass?: TElement | string;
} & React.ComponentProps<TElement>;
