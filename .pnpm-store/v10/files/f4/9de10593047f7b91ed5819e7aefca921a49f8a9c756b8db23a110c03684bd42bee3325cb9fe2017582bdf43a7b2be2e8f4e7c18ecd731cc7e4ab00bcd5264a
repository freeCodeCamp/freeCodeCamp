import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

const literalStringSchema = z.literal("asdf");
const literalNumberSchema = z.literal(12);
const literalBooleanSchema = z.literal(true);
const literalBigIntSchema = z.literal(BigInt(42));

const stringSchema = z.string();
const numberSchema = z.number();
const bigintSchema = z.bigint();
const booleanSchema = z.boolean();
const dateSchema = z.date();
const symbolSchema = z.symbol();
const nullSchema = z.null();
const undefinedSchema = z.undefined();
const stringSchemaOptional = z.string().optional();
const stringSchemaNullable = z.string().nullable();
const numberSchemaOptional = z.number().optional();
const numberSchemaNullable = z.number().nullable();
const bigintSchemaOptional = z.bigint().optional();
const bigintSchemaNullable = z.bigint().nullable();
const booleanSchemaOptional = z.boolean().optional();
const booleanSchemaNullable = z.boolean().nullable();
const dateSchemaOptional = z.date().optional();
const dateSchemaNullable = z.date().nullable();
const symbolSchemaOptional = z.symbol().optional();
const symbolSchemaNullable = z.symbol().nullable();

test("literal string schema", () => {
  expect(literalStringSchema.parse("asdf")).toBe("asdf");
  expect(() => literalStringSchema.parse("not_asdf")).toThrow();
  expect(() => literalStringSchema.parse(123)).toThrow();
  expect(() => literalStringSchema.parse(true)).toThrow();
  expect(() => literalStringSchema.parse({})).toThrow();
});

test("literal number schema", () => {
  expect(literalNumberSchema.parse(12)).toBe(12);
  expect(() => literalNumberSchema.parse(13)).toThrow();
  expect(() => literalNumberSchema.parse("foo")).toThrow();
  expect(() => literalNumberSchema.parse(true)).toThrow();
  expect(() => literalNumberSchema.parse({})).toThrow();
});

test("literal boolean schema", () => {
  expect(literalBooleanSchema.parse(true)).toBe(true);
  expect(() => literalBooleanSchema.parse(false)).toThrow();
  expect(() => literalBooleanSchema.parse("asdf")).toThrow();
  expect(() => literalBooleanSchema.parse(123)).toThrow();
  expect(() => literalBooleanSchema.parse({})).toThrow();
});

test("literal bigint schema", () => {
  expect(literalBigIntSchema.parse(BigInt(42))).toBe(BigInt(42));
  expect(() => literalBigIntSchema.parse(BigInt(43))).toThrow();
  expect(() => literalBigIntSchema.parse("asdf")).toThrow();
  expect(() => literalBigIntSchema.parse(123)).toThrow();
  expect(() => literalBigIntSchema.parse({})).toThrow();
});

test("string schema", () => {
  stringSchema.parse("foo");
  expect(() => stringSchema.parse(Math.random())).toThrow();
  expect(() => stringSchema.parse(true)).toThrow();
  expect(() => stringSchema.parse(undefined)).toThrow();
  expect(() => stringSchema.parse(null)).toThrow();
});

test("number schema", () => {
  numberSchema.parse(Math.random());
  expect(() => numberSchema.parse("foo")).toThrow();
  expect(() => numberSchema.parse(BigInt(17))).toThrow();
  expect(() => numberSchema.parse(true)).toThrow();
  expect(() => numberSchema.parse(undefined)).toThrow();
  expect(() => numberSchema.parse(null)).toThrow();
});

test("bigint schema", () => {
  bigintSchema.parse(BigInt(17));
  expect(() => bigintSchema.parse("foo")).toThrow();
  expect(() => bigintSchema.parse(Math.random())).toThrow();
  expect(() => bigintSchema.parse(true)).toThrow();
  expect(() => bigintSchema.parse(undefined)).toThrow();
  expect(() => bigintSchema.parse(null)).toThrow();
});

test("boolean schema", () => {
  booleanSchema.parse(true);
  expect(() => booleanSchema.parse("foo")).toThrow();
  expect(() => booleanSchema.parse(Math.random())).toThrow();
  expect(() => booleanSchema.parse(undefined)).toThrow();
  expect(() => booleanSchema.parse(null)).toThrow();
});

test("date schema", async () => {
  dateSchema.parse(new Date());
  expect(() => dateSchema.parse("foo")).toThrow();
  expect(() => dateSchema.parse(Math.random())).toThrow();
  expect(() => dateSchema.parse(true)).toThrow();
  expect(() => dateSchema.parse(undefined)).toThrow();
  expect(() => dateSchema.parse(null)).toThrow();
  expect(await dateSchema.safeParseAsync(new Date("invalid"))).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "date",
        "code": "invalid_type",
        "received": "Invalid Date",
        "path": [],
        "message": "Invalid input: expected date, received Date"
      }
    ]],
      "success": false,
    }
  `);
});

test("symbol schema", () => {
  symbolSchema.parse(Symbol("foo"));
  expect(() => symbolSchema.parse("foo")).toThrow();
  expect(() => symbolSchema.parse(Math.random())).toThrow();
  expect(() => symbolSchema.parse(true)).toThrow();
  expect(() => symbolSchema.parse(new Date())).toThrow();
  expect(() => symbolSchema.parse(undefined)).toThrow();
  expect(() => symbolSchema.parse(null)).toThrow();
});

test("undefined schema", () => {
  undefinedSchema.parse(undefined);
  expect(() => undefinedSchema.parse("foo")).toThrow();
  expect(() => undefinedSchema.parse(Math.random())).toThrow();
  expect(() => undefinedSchema.parse(true)).toThrow();
  expect(() => undefinedSchema.parse(null)).toThrow();
});

test("null schema", () => {
  nullSchema.parse(null);
  expect(() => nullSchema.parse("foo")).toThrow();
  expect(() => nullSchema.parse(Math.random())).toThrow();
  expect(() => nullSchema.parse(true)).toThrow();
  expect(() => nullSchema.parse(undefined)).toThrow();
});

test("primitive inference", () => {
  expectTypeOf<z.TypeOf<typeof literalStringSchema>>().toEqualTypeOf<"asdf">();
  expectTypeOf<z.TypeOf<typeof literalNumberSchema>>().toEqualTypeOf<12>();
  expectTypeOf<z.TypeOf<typeof literalBooleanSchema>>().toEqualTypeOf<true>();
  expectTypeOf<z.TypeOf<typeof literalBigIntSchema>>().toEqualTypeOf<bigint>();
  expectTypeOf<z.TypeOf<typeof stringSchema>>().toEqualTypeOf<string>();
  expectTypeOf<z.TypeOf<typeof numberSchema>>().toEqualTypeOf<number>();
  expectTypeOf<z.TypeOf<typeof bigintSchema>>().toEqualTypeOf<bigint>();
  expectTypeOf<z.TypeOf<typeof booleanSchema>>().toEqualTypeOf<boolean>();
  expectTypeOf<z.TypeOf<typeof dateSchema>>().toEqualTypeOf<Date>();
  expectTypeOf<z.TypeOf<typeof symbolSchema>>().toEqualTypeOf<symbol>();
  expectTypeOf<z.TypeOf<typeof nullSchema>>().toEqualTypeOf<null>();
  expectTypeOf<z.TypeOf<typeof undefinedSchema>>().toEqualTypeOf<undefined>();
  expectTypeOf<z.TypeOf<typeof stringSchemaOptional>>().toEqualTypeOf<string | undefined>();
  expectTypeOf<z.TypeOf<typeof stringSchemaNullable>>().toEqualTypeOf<string | null>();
  expectTypeOf<z.TypeOf<typeof numberSchemaOptional>>().toEqualTypeOf<number | undefined>();
  expectTypeOf<z.TypeOf<typeof numberSchemaNullable>>().toEqualTypeOf<number | null>();
  expectTypeOf<z.TypeOf<typeof bigintSchemaOptional>>().toEqualTypeOf<bigint | undefined>();
  expectTypeOf<z.TypeOf<typeof bigintSchemaNullable>>().toEqualTypeOf<bigint | null>();
  expectTypeOf<z.TypeOf<typeof booleanSchemaOptional>>().toEqualTypeOf<boolean | undefined>();
  expectTypeOf<z.TypeOf<typeof booleanSchemaNullable>>().toEqualTypeOf<boolean | null>();
  expectTypeOf<z.TypeOf<typeof dateSchemaOptional>>().toEqualTypeOf<Date | undefined>();
  expectTypeOf<z.TypeOf<typeof dateSchemaNullable>>().toEqualTypeOf<Date | null>();
  expectTypeOf<z.TypeOf<typeof symbolSchemaOptional>>().toEqualTypeOf<symbol | undefined>();
  expectTypeOf<z.TypeOf<typeof symbolSchemaNullable>>().toEqualTypeOf<symbol | null>();
});

test("get literal values", () => {
  expect(literalStringSchema.values).toEqual(new Set(["asdf"]));
  expect(literalStringSchema._zod.def.values).toEqual(["asdf"]);
});
