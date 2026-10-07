/**
 * @internal
 *
 * Used for awsQueryCompatibility trait.
 */
export const _toStr = (val: unknown): string | undefined => {
  if (val == null) {
    return val as undefined;
  }
  if (typeof val === "number" || typeof val === "bigint") {
    const warning = new Error(`Received number ${val} where a string was expected.`);
    warning.name = "Warning";
    console.warn(warning);
    return String(val);
  }
  if (typeof val === "boolean") {
    const warning = new Error(`Received boolean ${val} where a string was expected.`);
    warning.name = "Warning";
    console.warn(warning);
    return String(val);
  }
  return val as string;
};

/**
 * @internal
 *
 * Used for awsQueryCompatibility trait.
 */
export const _toBool = (val: unknown): boolean | undefined => {
  if (val == null) {
    return val as undefined;
  }
  if (typeof val === "number") {
    // transmit to service to be rejected.
  }
  if (typeof val === "string") {
    const lowercase = val.toLowerCase();
    if (val !== "" && lowercase !== "false" && lowercase !== "true") {
      const warning = new Error(`Received string "${val}" where a boolean was expected.`);
      warning.name = "Warning";
      console.warn(warning);
    }
    return val !== "" && lowercase !== "false";
  }
  return val as boolean;
};

/**
 * @internal
 *
 * Used for awsQueryCompatibility trait.
 */
export const _toNum = (val: unknown): number | undefined => {
  if (val == null) {
    return val as undefined;
  }
  if (typeof val === "boolean") {
    // transmit to service to be rejected.
  }
  if (typeof val === "string") {
    const num = Number(val);
    if (num.toString() !== val) {
      const warning = new Error(`Received string "${val}" where a number was expected.`);
      warning.name = "Warning";
      console.warn(warning);
      return val as unknown as undefined;
    }
    return num;
  }
  return val as number;
};
