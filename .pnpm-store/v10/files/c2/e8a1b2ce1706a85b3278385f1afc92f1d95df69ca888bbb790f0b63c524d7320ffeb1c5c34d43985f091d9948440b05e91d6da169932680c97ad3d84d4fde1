/** @internal */
export const make = (label, startTime) => ({
  label,
  startTime
});
/**
 * Sanitize a given string by replacing spaces, equal signs, and double quotes with underscores.
 *
 * @internal
 */
export const formatLabel = key => key.replace(/[\s="]/g, "_");
/** @internal */
export const render = now => self => {
  const label = formatLabel(self.label);
  return `${label}=${now - self.startTime}ms`;
};
//# sourceMappingURL=logSpan.js.map