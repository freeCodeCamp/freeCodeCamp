import { langSelector } from './';

// This enhancers sole purpose is to add the lang prop to route actions so that
// they do not need to be explicitly added when using a RFR route action.
export default function addLangToRouteEnhancer(routesMap) {
  return createStore => (...args) => {
    const store = createStore(...args);

    return {
      ...store,
      dispatch(action) {
        if (
          routesMap[action.type] &&
          (!action.payload || !action.payload.lang)
        ) {
          action = {
            ...action,
            payload: {
              ...action.payload,
              lang: langSelector(store.getState()) || 'en'
            }
          };
        }
        return store.dispatch(action);
      }
    };
  };
}
