import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("successful validation", () => {
  const testTuple = z.tuple([z.string(), z.number()]);
  expectTypeOf<typeof testTuple._output>().toEqualTypeOf<[string, number]>();

  const val = testTuple.parse(["asdf", 1234]);
  expect(val).toEqual(val);

  const r1 = testTuple.safeParse(["asdf", "asdf"]);
  expect(r1.success).toEqual(false);
  expect(r1.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "path": [
          1
        ],
        "message": "Invalid input: expected number, received string"
      }
    ]]
  `);

  const r2 = testTuple.safeParse(["asdf", 1234, true]);
  expect(r2.success).toEqual(false);
  expect(r2.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "origin": "array",
        "code": "too_big",
        "maximum": 2,
        "path": [],
        "message": "Too big: expected array to have <2 items"
      }
    ]]
  `);

  const r3 = testTuple.safeParse({});
  expect(r3.success).toEqual(false);
  expect(r3.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "tuple",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected tuple, received object"
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
        "expected": "number",
        "code": "invalid_type",
        "path": [
          1
        ],
        "message": "Invalid input: expected number, received string"
      }
    ]]
  `);

  const r2 = await testTuple.safeParseAsync(["asdf", 1234, true]);
  expect(r2.success).toEqual(false);
  expect(r2.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "origin": "array",
        "code": "too_big",
        "maximum": 2,
        "path": [],
        "message": "Too big: expected array to have <2 items"
      }
    ]]
  `);

  const r3 = await testTuple.safeParseAsync({});
  expect(r3.success).toEqual(false);
  expect(r3.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "tuple",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected tuple, received object"
      }
    ]]
  `);
});

test("tuple with optional elements", () => {
  const myTuple = z.tuple([z.string(), z.number().optional(), z.string().optional()]).rest(z.boolean());
  expectTypeOf<typeof myTuple._output>().toEqualTypeOf<[string, number?, string?, ...boolean[]]>();

  const goodData = [["asdf"], ["asdf", 1234], ["asdf", 1234, "asdf"], ["asdf", 1234, "asdf", true, false, true]];
  for (const data of goodData) {
    expect(myTuple.parse(data)).toEqual(data);
  }

  const badData = [
    ["asdf", "asdf"],
    ["asdf", 1234, "asdf", "asdf"],
    ["asdf", 1234, "asdf", true, false, "asdf"],
  ];
  for (const data of badData) {
    expect(() => myTuple.parse(data)).toThrow();
  }
});

test("tuple with optional elements followed by required", () => {
  const myTuple = z.tuple([z.string(), z.number().optional(), z.string()]).rest(z.boolean());
  expectTypeOf<typeof myTuple._output>().toEqualTypeOf<[string, number | undefined, string, ...boolean[]]>();

  const goodData = [
    ["asdf", 1234, "asdf"],
    ["asdf", 1234, "asdf", true, false, true],
  ];
  for (const data of goodData) {
    expect(myTuple.parse(data)).toEqual(data);
  }

  const badData = [
    ["asdf"],
    ["asdf", 1234],
    ["asdf", 1234, "asdf", "asdf"],
    ["asdf", 1234, "asdf", true, false, "asdf"],
  ];
  for (const data of badData) {
    expect(() => myTuple.parse(data)).toThrow();
  }
});

test("tuple with rest schema", () => {
  const myTuple = z.tuple([z.string(), z.number()]).rest(z.boolean());
  expect(myTuple.parse(["asdf", 1234, true, false, true])).toEqual(["asdf", 1234, true, false, true]);

  expect(myTuple.parse(["asdf", 1234])).toEqual(["asdf", 1234]);

  expect(() => myTuple.parse(["asdf", 1234, "asdf"])).toThrow();
  type t1 = z.output<typeof myTuple>;

  expectTypeOf<t1>().toEqualTypeOf<[string, number, ...boolean[]]>();
});

test("sparse array input", () => {
  const schema = z.tuple([z.string(), z.number()]);
  expect(() => schema.parse(new Array(2))).toThrow();
});
