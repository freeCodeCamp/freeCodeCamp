"use strict";

exports.__esModule = true;
exports.useId = useId;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Copied from https://github.com/carbon-design-system/carbon
// License: Apache-2.0
// Copyright IBM Corp. 2016, 2018
// Entrypoint: packages/react/src/internal/useId.js

function setupGetInstanceId() {
  let instanceId = 0;
  return function getInstanceId() {
    return ++instanceId;
  };
}
const getId = setupGetInstanceId();
const useIsomorphicLayoutEffect = canUseDOM() ? React.useLayoutEffect : React.useEffect;
function canUseDOM() {
  return !!(typeof window !== `undefined` && window.document && window.document.createElement);
}
let serverHandoffCompleted = false;

/**
 * Generate a unique ID with an optional prefix prepended to it
 * @param {string} [prefix]
 * @returns {string}
 */
function useId(prefix = `id`) {
  const [id, setId] = React.useState(() => {
    if (serverHandoffCompleted) {
      return `${prefix}-${getId()}`;
    }
    return null;
  });
  useIsomorphicLayoutEffect(() => {
    if (id === null) {
      setId(`${prefix}-${getId()}`);
    }
  }, [getId]);
  React.useEffect(() => {
    if (serverHandoffCompleted === false) {
      serverHandoffCompleted = true;
    }
  }, []);
  return id;
}
//# sourceMappingURL=use-id.js.map