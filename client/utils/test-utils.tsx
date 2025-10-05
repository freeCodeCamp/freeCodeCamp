import React, { type ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import type { Store } from 'redux';

function render(ui: ReactElement, store: Store) {
  function Wrapper({ children }: { children: ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';
// override render method
// eslint-disable-next-line import/export
export { render };
