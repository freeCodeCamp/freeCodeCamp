import * as React from 'react';

interface FormContextProps {
  controlId?: string;
}

export const FormContext = React.createContext<FormContextProps>({});
