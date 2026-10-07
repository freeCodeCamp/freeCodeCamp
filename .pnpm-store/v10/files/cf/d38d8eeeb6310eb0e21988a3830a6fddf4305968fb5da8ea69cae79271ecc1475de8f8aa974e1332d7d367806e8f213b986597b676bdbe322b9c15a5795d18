/**
 * Converts a [TOML](https://toml.io/) string into an object.
 *
 * @NOTE Comments and indentation is not preserved after parsing.
 *
 * @template T The type of the return value.
 * @param text The TOML string to parse.
 * @returns The JavaScript value converted from the TOML string.
 */
declare function parseTOML<T = unknown>(text: string): T;
/**
 * Converts a JavaScript value to a [TOML](https://toml.io/) string.
 *
 * @NOTE Comments and indentation is not preserved in the output.
 *
 * @param value
 * @param options
 * @returns The YAML string converted from the JavaScript value.
 */
declare function stringifyTOML(value: any): string;

export { parseTOML, stringifyTOML };
