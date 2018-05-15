import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import toUrl from './to-url.js';
import createHandler from './handle-press.js';
import { routesMapSelector } from './redux';

const mapStateToProps = createSelector(
  routesMapSelector,
  routesMap => ({ routesMap })
);

const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  onClick: PropTypes.func,
  redirect: PropTypes.bool,
  replace: PropTypes.bool,
  routesMap: PropTypes.object,
  shouldDispatch: PropTypes.bool,
  style: PropTypes.object,
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
    routesMap,
    shouldDispatch = true,
    style,
    target,
    to
  }
) => {
  const url = toUrl(to, routesMap);
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
      style={ style }
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

export default connect(mapStateToProps)(Link);
