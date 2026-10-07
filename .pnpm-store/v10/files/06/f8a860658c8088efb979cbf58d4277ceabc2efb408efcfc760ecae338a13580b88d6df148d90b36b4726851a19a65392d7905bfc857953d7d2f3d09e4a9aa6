import { expect, test } from "vitest";
import * as z from "zod/v4";

declare module "zod/v4" {
  interface ZodType {
    /** @deprecated */
    _classic(): string;
  }
}

test("prototype extension", () => {
  z.ZodType.prototype._classic = function () {
    return "_classic";
  };

  // should pass
  const result = z.string()._classic();
  expect(result).toBe("_classic");
  // expectTypeOf<typeof result>().toEqualTypeOf<string>();

  // clean up
  z.ZodType.prototype._classic = undefined;
});
