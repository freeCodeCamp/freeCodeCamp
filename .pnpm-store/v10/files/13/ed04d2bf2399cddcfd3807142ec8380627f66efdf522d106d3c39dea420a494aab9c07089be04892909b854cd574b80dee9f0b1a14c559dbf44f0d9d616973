const isActualPromise = (p) => p instanceof Promise && !p[kChainedCopy];
const kChainedCopy = /* @__PURE__ */ Symbol("chained PromiseLike");
const chainAndCopyPromiseLike = (original, onSuccess, onError) => {
  const chained = original.then(
    (value) => {
      onSuccess(value);
      return value;
    },
    (err) => {
      onError(err);
      throw err;
    }
  );
  return isActualPromise(chained) && isActualPromise(original) ? chained : copyProps(original, chained);
};
const copyProps = (original, chained) => {
  if (!chained) return original;
  let mutated = false;
  for (const key in original) {
    if (key in chained) continue;
    mutated = true;
    const value = original[key];
    if (typeof value === "function") {
      Object.defineProperty(chained, key, {
        value: (...args) => value.apply(original, args),
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      chained[key] = value;
    }
  }
  if (mutated) Object.assign(chained, { [kChainedCopy]: true });
  return chained;
};

export { chainAndCopyPromiseLike };
//# sourceMappingURL=chain-and-copy-promiselike.js.map
