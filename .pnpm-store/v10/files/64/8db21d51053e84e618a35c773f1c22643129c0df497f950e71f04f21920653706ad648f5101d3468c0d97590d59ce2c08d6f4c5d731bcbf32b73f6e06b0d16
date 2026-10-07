import { format } from "outvariant";
const LIBRARY_PREFIX = "[MSW]";
function formatMessage(message, ...positionals) {
  const interpolatedMessage = format(message, ...positionals);
  return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
}
function warn(message, ...positionals) {
  console.warn(formatMessage(message, ...positionals));
}
function error(message, ...positionals) {
  console.error(formatMessage(message, ...positionals));
}
const devUtils = {
  formatMessage,
  warn,
  error
};
class InternalError extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalError";
  }
}
export {
  InternalError,
  devUtils
};
//# sourceMappingURL=devUtils.mjs.map