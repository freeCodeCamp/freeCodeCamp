import React from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type ChangibleValues =
  | {
      value: string;
      onChange?: never;
      readonly: boolean;
    }
  | {
      value: string;
      onChange: (event: React.ChangeEvent<FormControlElement>) => void;
      readonly?: never;
    };

export type FormControlProps = ChangibleValues &
  React.HTMLAttributes<FormControlElement> & {
    className?: string;
    id?: string;
    testId?: string;
    componentClass?: typeof React.Component;
    placeholder?: string;
    name?: string;
    required?: boolean;
    rows?: number;
    type?: 'text' | 'email' | 'url';
  };

export interface FormControlVariationProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  testId?: string;
}
