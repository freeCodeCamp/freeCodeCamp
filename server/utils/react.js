export const errorThrowerMiddleware = () => next => action => {
  if (action.error) {
    throw action.payload;
  }
  return next(action);
};
