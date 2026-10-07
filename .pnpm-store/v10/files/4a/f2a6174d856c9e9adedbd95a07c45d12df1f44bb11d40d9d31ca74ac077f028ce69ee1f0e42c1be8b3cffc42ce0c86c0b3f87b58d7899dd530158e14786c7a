import { isObject } from './isObject.mjs';
function hasRefCounted(value) {
  return (
    /**
     * @note Guard against non-object values.
     * E.g. `setTimeout` returns an object in Node.js but a number in the browser.
     */
    isObject(value) && typeof Reflect.get(value, "ref") === "function" && typeof Reflect.get(value, "unref") === "function"
  );
}
export {
  hasRefCounted
};
//# sourceMappingURL=hasRefCounted.mjs.map