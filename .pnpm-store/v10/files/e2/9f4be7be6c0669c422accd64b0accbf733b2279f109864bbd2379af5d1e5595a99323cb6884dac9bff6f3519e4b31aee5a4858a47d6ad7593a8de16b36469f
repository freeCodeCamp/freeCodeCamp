import { expectUnion } from "@smithy/smithy-client";

/**
 * @internal
 *
 * Forwards to Smithy's expectUnion function, but also ignores
 * the `__type` field if it is present.
 */
export const awsExpectUnion = (value: unknown): Record<string, any> | undefined => {
  if (value == null) {
    return undefined;
  }
  if (typeof value === "object" && "__type" in value) {
    delete value.__type;
  }
  return expectUnion(value);
};
