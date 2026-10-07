import * as Inspectable from "../../Inspectable.js";
/** @internal */
export const getKeysForIndexSignature = (input, parameter) => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input);
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from);
  }
};
/** @internal */
export const memoizeThunk = f => {
  let done = false;
  let a;
  return () => {
    if (done) {
      return a;
    }
    a = f();
    done = true;
    return a;
  };
};
/** @internal */
export const isNonEmpty = x => Array.isArray(x);
/** @internal */
export const isSingle = x => !Array.isArray(x);
/** @internal */
export const formatPathKey = key => `[${Inspectable.formatPropertyKey(key)}]`;
/** @internal */
export const formatPath = path => isNonEmpty(path) ? path.map(formatPathKey).join("") : formatPathKey(path);
//# sourceMappingURL=util.js.map