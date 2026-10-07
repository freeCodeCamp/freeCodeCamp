const FALSY_ENV_VALUES = /* @__PURE__ */ new Set(["false", "f", "n", "no", "off", "0"]);
const TRUTHY_ENV_VALUES = /* @__PURE__ */ new Set(["true", "t", "y", "yes", "on", "1"]);
function envToBool(value, options) {
  const normalized = String(value).toLowerCase();
  if (FALSY_ENV_VALUES.has(normalized)) {
    return false;
  }
  if (TRUTHY_ENV_VALUES.has(normalized)) {
    return true;
  }
  return options?.strict ? null : Boolean(value);
}

export { FALSY_ENV_VALUES, TRUTHY_ENV_VALUES, envToBool };
//# sourceMappingURL=envToBool.js.map
