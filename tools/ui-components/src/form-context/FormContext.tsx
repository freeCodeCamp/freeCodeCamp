import * as React from 'react';

interface FormContextProps {
  controlId?: HTMLElement;
}

export const FormContext = React.createContext<FormContextProps>({});
