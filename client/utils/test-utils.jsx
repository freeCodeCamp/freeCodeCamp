import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

function render(ui, store) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
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
