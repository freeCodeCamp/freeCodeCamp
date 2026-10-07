// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

function checkErrors(a: z.ZodTypeAny, bad: any) {
  let expected: any;
  try {
    a.parse(bad);
  } catch (error) {
    expected = (error as z.ZodError).formErrors;
  }
  try {
    a.optional().parse(bad);
  } catch (error) {
    expect((error as z.ZodError).formErrors).toEqual(expected);
  }
}

test("Should have error messages appropriate for the underlying type", () => {
  checkErrors(z.string().min(2), 1);
  z.string().min(2).optional().parse(undefined);
  checkErrors(z.number().gte(2), 1);
  z.number().gte(2).optional().parse(undefined);
  checkErrors(z.boolean(), "");
  z.boolean().optional().parse(undefined);
  checkErrors(z.undefined(), null);
  z.undefined().optional().parse(undefined);
  checkErrors(z.null(), {});
  z.null().optional().parse(undefined);
  checkErrors(z.object({}), 1);
  z.object({}).optional().parse(undefined);
  checkErrors(z.tuple([]), 1);
  z.tuple([]).optional().parse(undefined);
  checkErrors(z.unknown(), 1);
  z.unknown().optional().parse(undefined);
});

test("unwrap", () => {
  const unwrapped = z.string().optional().unwrap();
  expect(unwrapped).toBeInstanceOf(z.ZodString);
});
