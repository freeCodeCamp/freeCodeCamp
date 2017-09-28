import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectLocationState } from 'redux-first-router';

import toUrl from './to-url.js';
import createHandler from './handle-press.js';
import { langSelector } from './redux';

const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  onClick: PropTypes.func,
  redirect: PropTypes.bool,
  replace: PropTypes.bool,
  shouldDispatch: PropTypes.bool,
  target: PropTypes.string,
  to: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]).isRequired
};

export const Link = (
  {
    children,
    dispatch,
    onClick,
    redirect,
    replace,
    shouldDispatch = true,
    target,
    to
  },
  { store }
) => {
  const state = store.getState();
  const lang = langSelector(state);
  const location = selectLocationState(state);
  const { routesMap } = location;
  const url = toUrl(to, routesMap, lang);
  const handler = createHandler(
    url,
    routesMap,
    onClick,
    shouldDispatch,
    target,
    dispatch,
    to,
    replace || redirect
  );

  const localProps = {};

  if (url) {
    localProps.href = url;
  }

  if (handler) {
    localProps.onMouseDown = handler;
    localProps.onTouchStart = handler;
  }

  if (target) {
    localProps.target = target;
  }

  return (
    <a
      onClick={ handler }
      { ...localProps }
      >
      {children}
    </a>
  );
};

Link.contextTypes = {
  store: PropTypes.object.isRequired
};
Link.propTypes = propTypes;

export default connect()(Link);
