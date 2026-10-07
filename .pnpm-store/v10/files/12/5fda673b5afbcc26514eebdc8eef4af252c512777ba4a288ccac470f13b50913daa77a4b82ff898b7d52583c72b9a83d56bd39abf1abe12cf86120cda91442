import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v3";

test("test", () => {
  expect(true).toBe(true);
});

test("test2", () => {
  expect(() => z.string().parse(234)).toThrowErrorMatchingInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_type",
        "expected": "string",
        "received": "number",
        "path": [],
        "message": "Expected string, received number"
      }
    ]]
  `);
});

test("async validation", async () => {
  const testTuple = z
    .tuple([z.string().refine(async () => true), z.number().refine(async () => true)])
    .refine(async () => true);
  expectTypeOf<typeof testTuple._output>().toEqualTypeOf<[string, number]>();

  const val = await testTuple.parseAsync(["asdf", 1234]);
  expect(val).toEqual(val);

  const r1 = await testTuple.safeParseAsync(["asdf", "asdf"]);
  expect(r1.success).toEqual(false);
  expect(r1.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_type",
        "expected": "number",
        "received": "string",
        "path": [
          1
        ],
        "message": "Expected number, received string"
      }
    ]]
  `);
});
