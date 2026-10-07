import invariant from 'invariant';
import isFunction from './utils/isFunction';
import identity from './utils/identity';
import isNull from './utils/isNull';

export default function createAction(
  type,
  payloadCreator = identity,
  metaCreator
) {
  invariant(
    isFunction(payloadCreator) || isNull(payloadCreator),
    'Expected payloadCreator to be a function, undefined or null'
  );

  const finalPayloadCreator =
    isNull(payloadCreator) || payloadCreator === identity
      ? identity
      : (head, ...args) =>
          head instanceof Error ? head : payloadCreator(head, ...args);

  const hasMeta = isFunction(metaCreator);
  const typeString = type.toString();

  const actionCreator = (...args) => {
    const payload = finalPayloadCreator(...args);
    const action = { type };

    if (payload instanceof Error) {
      action.error = true;
    }

    if (payload !== undefined) {
      action.payload = payload;
    }

    if (hasMeta) {
      action.meta = metaCreator(...args);
    }

    return action;
  };

  actionCreator.toString = () => typeString;

  return actionCreator;
}
