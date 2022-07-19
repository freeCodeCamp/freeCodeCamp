import * as React from 'react';

interface FormContextProps {
  controlId?: HTMLElement;
}

const FormContext = React.createContext<FormContextProps>({});

export default FormContext;
