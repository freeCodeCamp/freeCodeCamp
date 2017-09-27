import debug from 'debug';

const log = debug('fcc:server:react:utils');

export const errorThrowerMiddleware = () => next => action => {
  if (action.error) {
    throw action.payload;
  }
  return next(action);
};

export const loggerMiddleware = () => next => action => {
  log('action: \n', action);
  return next(action);
};
