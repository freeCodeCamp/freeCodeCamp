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
    a.nullable().parse(bad);
  } catch (error) {
    expect((error as z.ZodError).formErrors).toEqual(expected);
  }
}

test("Should have error messages appropriate for the underlying type", () => {
  checkErrors(z.string().min(2), 1);
  z.string().min(2).nullable().parse(null);
  checkErrors(z.number().gte(2), 1);
  z.number().gte(2).nullable().parse(null);
  checkErrors(z.boolean(), "");
  z.boolean().nullable().parse(null);
  checkErrors(z.null(), null);
  z.null().nullable().parse(null);
  checkErrors(z.null(), {});
  z.null().nullable().parse(null);
  checkErrors(z.object({}), 1);
  z.object({}).nullable().parse(null);
  checkErrors(z.tuple([]), 1);
  z.tuple([]).nullable().parse(null);
  checkErrors(z.unknown(), 1);
  z.unknown().nullable().parse(null);
});

test("unwrap", () => {
  const unwrapped = z.string().nullable().unwrap();
  expect(unwrapped).toBeInstanceOf(z.ZodString);
});
