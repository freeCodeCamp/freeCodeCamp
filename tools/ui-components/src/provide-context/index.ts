import { createContext } from 'react';

export type ContextProps<T = string> = {
  data?: T;
};

export const ProvideContext = createContext<ContextProps>({});
