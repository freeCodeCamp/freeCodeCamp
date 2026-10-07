"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sagaIdFactory;
const PREFIX = '@@redux-saga-test-plan/id-';

function sagaIdFactory() {
  let id = 1;
  return function nextSagaId() {
    const newId = `${PREFIX}${id}`;
    id += 1;
    return newId;
  };
}