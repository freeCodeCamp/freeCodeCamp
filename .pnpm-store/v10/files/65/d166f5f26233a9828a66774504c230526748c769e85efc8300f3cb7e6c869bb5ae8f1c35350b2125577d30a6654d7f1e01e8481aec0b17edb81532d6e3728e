import { expect, test } from "vitest";

import * as z from "zod/v4";

test(".nullable()", () => {
  const nullable = z.string().nullable();
  expect(nullable.parse(null)).toBe(null);
  expect(nullable.parse("asdf")).toBe("asdf");
  expect(() => nullable.parse(123)).toThrow();
});

test(".nullable unwrap", () => {
  const schema = z.string().nullable();
  expect(schema).toBeInstanceOf(z.ZodNullable);
  expect(schema.unwrap()).toBeInstanceOf(z.ZodString);
});

test("z.null", () => {
  const n = z.null();
  expect(n.parse(null)).toBe(null);
  expect(() => n.parse("asdf")).toThrow();
});
