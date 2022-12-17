import React from 'react';

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  srOnly?: boolean;
}
