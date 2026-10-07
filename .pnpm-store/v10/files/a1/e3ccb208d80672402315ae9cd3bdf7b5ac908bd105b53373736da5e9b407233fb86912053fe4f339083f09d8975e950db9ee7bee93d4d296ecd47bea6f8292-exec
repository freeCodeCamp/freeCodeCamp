// @flow

const PREFIX = '@@redux-saga-test-plan/id-';

export default function sagaIdFactory() {
  let id = 1;

  return function nextSagaId() {
    const newId = `${PREFIX}${id}`;
    id += 1;
    return newId;
  };
}
