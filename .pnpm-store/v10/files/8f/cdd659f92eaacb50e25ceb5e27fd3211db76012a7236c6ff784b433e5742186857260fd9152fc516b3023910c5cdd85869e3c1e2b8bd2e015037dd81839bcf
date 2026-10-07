import { expect, test } from "vitest";
import * as z from "zod/v4-mini";

test("no locale by default", () => {
  const result = z.safeParse(z.string(), 12);
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  expect(result.error!.issues[0].message).toEqual("Invalid input");
});

test("error inheritance", () => {
  const e1 = z.string().safeParse(123).error!;
  expect(e1).toBeInstanceOf(z.core.$ZodError);
  // expect(e1).not.toBeInstanceOf(Error);

  try {
    z.string().parse(123);
  } catch (e2) {
    expect(e2).toBeInstanceOf(z.core.$ZodRealError);
    expect(e2).toBeInstanceOf(Error);
  }
});
