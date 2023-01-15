import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createStore } from '../../redux/createStore';

import CertificationSettings from './certification';

it('should check certification button consistency', () => {
  const tree = renderer.create(
    <Provider store={createStore()}>
      <CertificationSettings />
    </Provider>
  );

  expect(tree).toMatchSnapshot();
});
