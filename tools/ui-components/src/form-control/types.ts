import React from 'react';

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type ChangibleValues =
  | {
      value?: never;
      onChange?: never;
      readonly?: never;
    }
  | {
      value?: string;
      onChange?: never;
      readonly: boolean;
    }
  | {
      value?: string;
      onChange: (event: React.ChangeEvent<FormControlElement>) => void;
      readonly?: never;
    };

export type FormControlProps = React.HTMLAttributes<FormControlElement> & {
  testId?: string;
  componentClass?: 'textarea' | 'input';
  name?: string;
  required?: boolean;
  rows?: number;
  type?: 'text' | 'email' | 'url';
} & ChangibleValues;

export type FormControlVariationProps = Pick<
  FormControlProps,
  'className' | 'children' | 'id' | 'testId'
>;
