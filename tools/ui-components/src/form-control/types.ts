import React from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type Values = {
  value: string;
  onChange?: (event: React.ChangeEvent<FormControlElement>) => void;
  readOnly?: boolean;
} | {
  value?: never;
  onChange?: never;
  readOnly?: never;
}

export type FormControlProps = Values &
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
