/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */
export declare const instanceOf: (
  value: unknown,
  constructor: Constructor,
) => boolean;
interface Constructor extends Function {
  prototype: {
    [Symbol.toStringTag]: string;
  };
}
export {};
