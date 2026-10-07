// @ts-ignore TS6133
import { expect, test } from "vitest";

import { type SyncParseReturnType, isAborted, isDirty, isValid } from "../helpers/parseUtil.js";

test("parseUtil isInvalid should use structural typing", () => {
  // Test for issue #556: https://github.com/colinhacks/zod/issues/556
  const aborted: SyncParseReturnType = { status: "aborted" };
  const dirty: SyncParseReturnType = { status: "dirty", value: "whatever" };
  const valid: SyncParseReturnType = { status: "valid", value: "whatever" };

  expect(isAborted(aborted)).toBe(true);
  expect(isAborted(dirty)).toBe(false);
  expect(isAborted(valid)).toBe(false);

  expect(isDirty(aborted)).toBe(false);
  expect(isDirty(dirty)).toBe(true);
  expect(isDirty(valid)).toBe(false);

  expect(isValid(aborted)).toBe(false);
  expect(isValid(dirty)).toBe(false);
  expect(isValid(valid)).toBe(true);
});
