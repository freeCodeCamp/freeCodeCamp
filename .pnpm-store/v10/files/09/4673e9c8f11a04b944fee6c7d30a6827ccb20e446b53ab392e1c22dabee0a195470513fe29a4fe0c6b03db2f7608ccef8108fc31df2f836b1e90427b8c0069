import { expect, test } from "vitest";

import * as z from "zod/v4";

test("string format methods", () => {
  const a = z.email().min(10);
  const b = z.email().max(10);
  const c = z.email().length(10);
  const d = z.email().uppercase();
  const e = z.email().lowercase();

  // Positive and negative cases for `a`
  expect(a.safeParse("longemail@example.com").success).toBe(true); // Positive
  expect(a.safeParse("ort@e.co").success).toBe(false); // Negative

  // Positive and negative cases for `b`
  expect(b.safeParse("sho@e.co").success).toBe(true); // Positive
  expect(b.safeParse("longemail@example.com").success).toBe(false); // Negative

  // Positive and negative cases for `c`
  expect(c.safeParse("56780@e.co").success).toBe(true); // Positive
  expect(c.safeParse("shoasdfasdfrt@e.co").success).toBe(false); // Negative

  // Positive and negative cases for `d`
  expect(d.safeParse("EMAIL@EXAMPLE.COM").success).toBe(true); // Positive
  expect(d.safeParse("email@example.com").success).toBe(false); // Negative

  // Positive and negative cases for `e`
  expect(e.safeParse("email@example.com").success).toBe(true); // Positive
  expect(e.safeParse("EMAIL@EXAMPLE.COM").success).toBe(false); // Negative
});

test("z.stringFormat", () => {
  const ccRegex = /^(?:\d{14,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u;

  const a = z
    .stringFormat("creditCard", (val) => ccRegex.test(val), {
      error: `Invalid credit card number`,
    })
    .refine((_) => false, "Also bad");

  expect(a.safeParse("asdf")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_format",
        "format": "creditCard",
        "path": [],
        "message": "Invalid credit card number"
      },
      {
        "code": "custom",
        "path": [],
        "message": "Also bad"
      }
    ]],
      "success": false,
    }
  `);
  expect(a.safeParse("1234-5678-9012-3456")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "Also bad"
      }
    ]],
      "success": false,
    }
  `);
  expect(a.def.pattern).toMatchInlineSnapshot(`undefined`);

  const b = z
    .stringFormat("creditCard", ccRegex, {
      abort: true,
      error: `Invalid credit card number`,
    })
    .refine((_) => false, "Also bad");

  expect(b.safeParse("asdf")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_format",
        "format": "creditCard",
        "path": [],
        "message": "Invalid credit card number"
      }
    ]],
      "success": false,
    }
  `);
  expect(b.safeParse("1234-5678-9012-3456")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "Also bad"
      }
    ]],
      "success": false,
    }
  `);
  expect(b.def.pattern).toMatchInlineSnapshot(
    `/\\^\\(\\?:\\\\d\\{14,19\\}\\|\\\\d\\{4\\}\\(\\?: \\\\d\\{3,6\\}\\)\\{2,4\\}\\|\\\\d\\{4\\}\\(\\?:-\\\\d\\{3,6\\}\\)\\{2,4\\}\\)\\$/u`
  );
});
