import { isObject } from './isObject.mjs';
function mergeRight(left, right) {
  return Object.entries(right).reduce(
    (result, [key, rightValue]) => {
      const leftValue = result[key];
      if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
        result[key] = leftValue.concat(rightValue);
        return result;
      }
      if (isObject(leftValue) && isObject(rightValue)) {
        result[key] = mergeRight(leftValue, rightValue);
        return result;
      }
      result[key] = rightValue;
      return result;
    },
    Object.assign({}, left)
  );
}
export {
  mergeRight
};
//# sourceMappingURL=mergeRight.mjs.map