"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEffectExpectation = createEffectExpectation;
exports.createReturnExpectation = createReturnExpectation;
exports.createStoreStateExpectation = createStoreStateExpectation;
exports.createErrorExpectation = createErrorExpectation;

var _util = _interopRequireDefault(require("util"));

var _lodash = _interopRequireDefault(require("lodash.ismatch"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _SagaTestError = _interopRequireDefault(require("../shared/SagaTestError"));

var _serializeEffect = _interopRequireDefault(require("../shared/serializeEffect"));

var _reportActualEffects = _interopRequireDefault(require("./reportActualEffects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_util.default.inspect.defaultOptions = {
  depth: 3
};

function createEffectExpectation({
  effectName,
  expectedEffect,
  storeKey,
  like,
  extractEffect,
  store,
  expected
}) {
  return () => {
    const deleted = like ? store.deleteBy(item => (0, _lodash.default)(extractEffect(item), expectedEffect)) : store.delete(expectedEffect);
    let errorMessage = '';

    if (deleted && !expected) {
      const serializedEffect = (0, _serializeEffect.default)(expectedEffect, storeKey);
      errorMessage = `\n${effectName} expectation unmet:` + `\n\nNot Expected\n------------\n${serializedEffect}\n`;
    } else if (!deleted && expected) {
      const serializedEffect = (0, _serializeEffect.default)(expectedEffect, storeKey);
      errorMessage = `\n${effectName} expectation unmet:` + `\n\nExpected\n--------\n${serializedEffect}\n`;
      errorMessage += (0, _reportActualEffects.default)(store, storeKey, effectName);
    }

    if (errorMessage) {
      throw new _SagaTestError.default(errorMessage);
    }
  };
}

function createReturnExpectation({
  value,
  expected
}) {
  return ({
    returnValue
  }) => {
    if (expected && !(0, _lodash2.default)(value, returnValue)) {
      const serializedActual = _util.default.inspect(returnValue);

      const serializedExpected = _util.default.inspect(value);

      const errorMessage = `
Expected to return:
-------------------
${serializedExpected}

But returned instead:
---------------------
${serializedActual}
`;
      throw new _SagaTestError.default(errorMessage);
    } else if (!expected && (0, _lodash2.default)(value, returnValue)) {
      const serializedExpected = _util.default.inspect(value);

      const errorMessage = `
Did not expect to return:
-------------------------
${serializedExpected}
`;
      throw new _SagaTestError.default(errorMessage);
    }
  };
}

function createStoreStateExpectation({
  state: expectedState,
  expected
}) {
  return ({
    storeState
  }) => {
    if (expected && !(0, _lodash2.default)(expectedState, storeState)) {
      const serializedActual = _util.default.inspect(storeState);

      const serializedExpected = _util.default.inspect(expectedState);

      const errorMessage = `
Expected to have final store state:
-----------------------------------
${serializedExpected}

But instead had final store state:
----------------------------------
${serializedActual}
`;
      throw new _SagaTestError.default(errorMessage);
    } else if (!expected && (0, _lodash2.default)(expectedState, storeState)) {
      const serializedExpected = _util.default.inspect(expectedState);

      const errorMessage = `
Expected to not have final store state:
---------------------------------------
${serializedExpected}
`;
      throw new _SagaTestError.default(errorMessage);
    }
  };
}

function createErrorExpectation({
  type,
  expected
}) {
  return ({
    errorValue
  }) => {
    let serializedExpected = typeof type;

    if (typeof type === 'object') {
      serializedExpected = _util.default.inspect(type);
    } else if (typeof type === 'function') {
      serializedExpected = type.name;
    }

    const matches = () => typeof type === 'object' && (0, _lodash2.default)(type, errorValue) || typeof type === 'function' && errorValue instanceof type;

    if (!expected) {
      if (typeof errorValue === 'undefined' || !matches()) return;
      throw new _SagaTestError.default(`
Expected not to throw:
----------------------
${serializedExpected}
`);
    } else if (typeof errorValue === 'undefined') {
      throw new _SagaTestError.default(`
Expected to throw:
-------------------
${serializedExpected}

But no error thrown
---------------------
`);
    } else if (typeof type === 'object' && !matches()) {
      const serializedActual = _util.default.inspect(errorValue);

      throw new _SagaTestError.default(`
Expected to throw:
-------------------
${serializedExpected}

But instead threw:
---------------------
${serializedActual}
`);
    } else if (typeof type === 'function' && !matches()) {
      const serializedActual = typeof errorValue === 'function' ? errorValue.constructor.name : typeof errorValue;
      throw new _SagaTestError.default(`
Expected to throw error of type:
--------------------------------
${serializedExpected}

But instead threw:
--------------------------------
${serializedActual}
`);
    }
  };
}