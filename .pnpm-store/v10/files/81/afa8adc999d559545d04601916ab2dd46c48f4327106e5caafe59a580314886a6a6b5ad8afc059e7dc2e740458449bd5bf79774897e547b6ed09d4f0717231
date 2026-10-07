// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

test("passing validations", () => {
  const example1 = z.custom<number>((x) => typeof x === "number");
  example1.parse(1234);
  expect(() => example1.parse({})).toThrow();
});

test("string params", () => {
  const example1 = z.custom<number>((x) => typeof x !== "number", "customerr");
  const result = example1.safeParse(1234);
  expect(result.success).toEqual(false);
  // @ts-ignore
  expect(JSON.stringify(result.error).includes("customerr")).toEqual(true);
});

test("async validations", async () => {
  const example1 = z.custom<number>(async (x) => {
    return typeof x === "number";
  });
  const r1 = await example1.safeParseAsync(1234);
  expect(r1.success).toEqual(true);
  expect(r1.data).toEqual(1234);

  const r2 = await example1.safeParseAsync("asdf");
  expect(r2.success).toEqual(false);
  expect(r2.error!.issues.length).toEqual(1);
});
