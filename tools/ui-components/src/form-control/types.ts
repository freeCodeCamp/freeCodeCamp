import React from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type Values =
  | {
      value: string;
      onChange: (event: React.ChangeEvent<FormControlElement>) => void;
      defaultValue?: never;
    }
  | {
      value?: never;
      onChange?: never;
      defaultValue: string;
    }
  | {
      value: string;
      readOnly: true;
    };

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
