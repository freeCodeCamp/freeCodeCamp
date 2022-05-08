import React from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface FormControlProps
  extends React.HTMLAttributes<FormControlElement> {
  className?: string;
  id?: string;
  testId?: string;
  onChange?: React.ChangeEventHandler<FormControlElement>;
  value?: string;
  componentClass?: typeof React.Component;
  placeholder?: string;
  name?: string;
  required?: boolean;
  rows?: number;
  type?: 'text' | 'email' | 'url';
}

export interface FormControlVariationProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  testId?: string;
}
