import { expect, test } from "vitest";

import * as z from "zod/v4";

test("string to number pipe", () => {
  const schema = z.string().transform(Number).pipe(z.number());
  expect(schema.parse("1234")).toEqual(1234);
});

test("string to number pipe async", async () => {
  const schema = z
    .string()
    .transform(async (val) => Number(val))
    .pipe(z.number());
  expect(await schema.parseAsync("1234")).toEqual(1234);
});

test("string with default fallback", () => {
  const stringWithDefault = z
    .pipe(
      z.transform((v) => (v === "none" ? undefined : v)),
      z.string()
    )
    .catch("default");

  expect(stringWithDefault.parse("ok")).toBe("ok");
  expect(stringWithDefault.parse(undefined)).toBe("default");
  expect(stringWithDefault.parse("none")).toBe("default");
  expect(stringWithDefault.parse(15)).toBe("default");
});

test("continue on non-fatal errors", () => {
  const schema = z
    .string()
    .refine((c) => c === "1234", "A")
    .transform((val) => Number(val))
    .refine((c) => c === 1234, "B");

  schema.parse("1234");

  expect(schema.safeParse("4321")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "A"
      },
      {
        "code": "custom",
        "path": [],
        "message": "B"
      }
    ]],
      "success": false,
    }
  `);
});

test("break on fatal errors", () => {
  const schema = z
    .string()
    .refine((c) => c === "1234", { message: "A", abort: true })
    .transform((val) => Number(val))
    .refine((c) => c === 1234, "B");

  schema.parse("1234");

  expect(schema.safeParse("4321")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "A"
      }
    ]],
      "success": false,
    }
  `);
});
