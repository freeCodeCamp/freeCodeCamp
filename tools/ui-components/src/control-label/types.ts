import React from 'react';

export interface ControlLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  htmlFor?: string;
  srOnly?: boolean;
}
