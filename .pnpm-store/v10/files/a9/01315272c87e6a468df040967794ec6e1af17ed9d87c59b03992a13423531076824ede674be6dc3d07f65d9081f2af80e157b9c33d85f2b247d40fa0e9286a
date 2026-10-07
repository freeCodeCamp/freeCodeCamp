import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4";

test("nonoptional", () => {
  const schema = z.string().nonoptional();
  expectTypeOf<typeof schema._input>().toEqualTypeOf<string>();
  expectTypeOf<typeof schema._output>().toEqualTypeOf<string>();

  const result = schema.safeParse(undefined);
  expect(result.success).toBe(false);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected string, received undefined"
      }
    ]],
      "success": false,
    }
  `);
});

test("nonoptional with default", () => {
  const schema = z.string().optional().nonoptional();
  expectTypeOf<typeof schema._input>().toEqualTypeOf<string>();
  expectTypeOf<typeof schema._output>().toEqualTypeOf<string>();

  const result = schema.safeParse(undefined);
  expect(result.success).toBe(false);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_type",
        "expected": "nonoptional",
        "path": [],
        "message": "Invalid input: expected nonoptional, received undefined"
      }
    ]],
      "success": false,
    }
  `);
});

test("nonoptional in object", () => {
  const schema = z.object({ hi: z.string().optional().nonoptional() });

  expectTypeOf<typeof schema._input>().toEqualTypeOf<{ hi: string }>();
  expectTypeOf<typeof schema._output>().toEqualTypeOf<{ hi: string }>();
  const r1 = schema.safeParse({ hi: "asdf" });
  expect(r1.success).toEqual(true);

  const r2 = schema.safeParse({ hi: undefined });
  // expect(schema.safeParse({ hi: undefined }).success).toEqual(false);
  expect(r2.success).toEqual(false);
  expect(r2.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_type",
        "expected": "nonoptional",
        "path": [
          "hi"
        ],
        "message": "Invalid input: expected nonoptional, received undefined"
      }
    ]]
  `);

  const r3 = schema.safeParse({});
  expect(r3.success).toEqual(false);
  expect(r3.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_type",
        "expected": "nonoptional",
        "path": [
          "hi"
        ],
        "message": "Invalid input: expected nonoptional, received undefined"
      }
    ]]
  `);
});
