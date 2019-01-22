import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { createStore } from './src/redux/createStore';
import AppMountNotifier from './src/components/AppMountNotifier';
import GuideNavContextProvider from './src/contexts/GuideNavigationContext';
import DefaultLayout from './src/components/layouts/Default';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <GuideNavContextProvider>
        <AppMountNotifier render={() => element} />
      </GuideNavContextProvider>
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const wrapPageElement = ({ element, props }) => {
  const {
    location: { pathname }
  } = props;
  if (pathname === '/') {
    return (
      <DefaultLayout disableSettings={true} landingPage={true}>
        {element}
      </DefaultLayout>
    );
  }
  return <DefaultLayout>{element}</DefaultLayout>;
};

wrapPageElement.propTypes = {
  element: PropTypes.any,
  location: PropTypes.objectOf({ pathname: PropTypes.string }),
  props: PropTypes.any
};
