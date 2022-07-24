import * as React from 'react';

interface FormContextProps {
  controlId?: string;
  children: React.ReactNode;
}

export const FormContext = React.createContext<FormContextProps>({
  children: Element
});
