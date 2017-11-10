import { pathToAction, redirect, getOptions } from 'redux-first-router';

const isAction = to => typeof to === 'object' &&
  !Array.isArray(to);

const isModified = e => !!(
  e.metaKey ||
  e.altKey ||
  e.ctrlKey ||
  e.shiftKey
);

export default (
  url,
  routesMap,
  onClick,
  shouldDispatch,
  target,
  dispatch,
  to,
  dispatchRedirect
) => e => {
  let shouldGo = true;

  if (onClick) {
    // onClick can return false to prevent dispatch
    shouldGo = onClick(e);
    shouldGo = typeof shouldGo === 'undefined' ? true : shouldGo;
  }

  const prevented = e.defaultPrevented;

  if (!target && e && e.preventDefault && !isModified(e)) {
    e.preventDefault();
  }

  if (
    shouldGo &&
    shouldDispatch &&
    !target &&
    !prevented &&
    e.button === 0 &&
    !isModified(e)
  ) {
    const { querySerializer: serializer } = getOptions();
    let action = isAction(to) ? to : pathToAction(url, routesMap, serializer);
    action = dispatchRedirect ? redirect(action) : action;
    dispatch(action);
  }
};
