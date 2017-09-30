import { actionToPath, getOptions } from 'redux-first-router';

import { addLang } from '../utils/lang.js';


export default (to, routesMap, lang = 'en') => {
  if (to && typeof to === 'string') {
    return addLang(to, lang);
  }

  if (typeof to === 'object') {
    const { payload = {}, ...action } = to;

    try {
      const { querySerializer } = getOptions();
      return actionToPath(
        {
          ...action,
          payload: {
            ...payload,
            lang: payload.lang || lang
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
