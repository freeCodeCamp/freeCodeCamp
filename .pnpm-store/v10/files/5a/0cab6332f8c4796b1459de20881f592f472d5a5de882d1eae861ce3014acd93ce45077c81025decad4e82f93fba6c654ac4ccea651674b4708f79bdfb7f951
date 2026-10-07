import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";
test("void", () => {
  const v = z.void();
  v.parse(undefined);

  expect(() => v.parse(null)).toThrow();
  expect(() => v.parse("")).toThrow();

  type v = z.infer<typeof v>;
  expectTypeOf<v>().toEqualTypeOf<void>();
});
