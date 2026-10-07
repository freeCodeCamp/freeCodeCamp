import { expect, test } from "vitest";
import * as z from "zod/v4-mini";

declare module "zod/v4/core" {
  interface $ZodType {
    /** @deprecated */
    _core(): string;
  }
}

test("prototype extension", () => {
  z.core.$ZodType.prototype._core = function () {
    return "_core";
  };

  // should pass
  const result = z.string()._core();
  expect(result).toBe("_core");
  // expectTypeOf<typeof result>().toEqualTypeOf<string>();

  // clean up
  z.ZodMiniType.prototype._core = undefined;
});

declare module "zod/v4/mini" {
  interface ZodMiniType {
    /** @deprecated */
    _mini(): string;
  }
}

test("prototype extension", () => {
  z.ZodMiniType.prototype._mini = function () {
    return "_mini";
  };

  // should pass
  const result = z.string()._mini();
  expect(result).toBe("_mini");

  // clean up
  z.ZodMiniType.prototype._mini = undefined;
});
