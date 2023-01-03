import React from 'react';

export interface ControlLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  srOnly?: boolean;
}
