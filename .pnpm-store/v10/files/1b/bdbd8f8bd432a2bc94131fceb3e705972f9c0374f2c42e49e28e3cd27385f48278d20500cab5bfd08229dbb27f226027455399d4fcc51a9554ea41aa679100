/**
 * Create UUID according to
 * https://www.ietf.org/rfc/rfc4122.txt.
 *
 * @returns Generated UUID.
 */
export function createUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    /* eslint-disable no-bitwise */
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    /* eslint-enable */
    return v.toString(16);
  });
}
