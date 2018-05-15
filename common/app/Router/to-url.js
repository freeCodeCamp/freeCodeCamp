import { actionToPath, getOptions } from 'redux-first-router';

export default (to, routesMap) => {
  if (to && typeof to === 'string') {
    return to;
  }

  if (typeof to === 'object') {
    const { payload = {}, ...action } = to;

    try {
      const { querySerializer } = getOptions();
      return actionToPath(
        {
          ...action,
          payload: {
            ...payload
          }
        },
        routesMap,
        querySerializer
      );
    } catch (e) {
      console.error(e);
      console.warn(
        '[Link] could not create path from action:',
        action,
        'For reference, here are your current routes:',
        routesMap
      );

      return '#';
    }
  }

  console.warn(
    '[Link] `to` prop must be a string or action object. You provided: ',
    to
  );
  return '#';
};
