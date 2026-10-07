// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";
import { Mocker } from "./Mocker.js";

const literalStringSchema = z.literal("asdf");
const literalNumberSchema = z.literal(12);
const literalBooleanSchema = z.literal(true);
const literalBigIntSchema = z.literal(BigInt(42));
const MySymbol = Symbol("stuff");
const literalSymbolSchema = z.literal(MySymbol);
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

const val = new Mocker();

test("literal string correct", () => {
  expect(literalStringSchema.parse("asdf")).toBe("asdf");
});

test("literal string incorrect", () => {
  const f = () => literalStringSchema.parse("not_asdf");
  expect(f).toThrow();
});

test("literal string number", () => {
  const f = () => literalStringSchema.parse(123);
  expect(f).toThrow();
});

test("literal string boolean", () => {
  const f = () => literalStringSchema.parse(true);
  expect(f).toThrow();
});

test("literal string boolean", () => {
  const f = () => literalStringSchema.parse(true);
  expect(f).toThrow();
});

test("literal string object", () => {
  const f = () => literalStringSchema.parse({});
  expect(f).toThrow();
});

test("literal number correct", () => {
  expect(literalNumberSchema.parse(12)).toBe(12);
});

test("literal number incorrect", () => {
  const f = () => literalNumberSchema.parse(13);
  expect(f).toThrow();
});

test("literal number number", () => {
  const f = () => literalNumberSchema.parse(val.string);
  expect(f).toThrow();
});

test("literal number boolean", () => {
  const f = () => literalNumberSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("literal number object", () => {
  const f = () => literalStringSchema.parse({});
  expect(f).toThrow();
});

test("literal boolean correct", () => {
  expect(literalBooleanSchema.parse(true)).toBe(true);
});

test("literal boolean incorrect", () => {
  const f = () => literalBooleanSchema.parse(false);
  expect(f).toThrow();
});

test("literal boolean number", () => {
  const f = () => literalBooleanSchema.parse("asdf");
  expect(f).toThrow();
});

test("literal boolean boolean", () => {
  const f = () => literalBooleanSchema.parse(123);
  expect(f).toThrow();
});

test("literal boolean object", () => {
  const f = () => literalBooleanSchema.parse({});
  expect(f).toThrow();
});

test("literal bigint correct", () => {
  expect(literalBigIntSchema.parse(BigInt(42))).toBe(BigInt(42));
});

test("literal bigint incorrect", () => {
  const f = () => literalBigIntSchema.parse(BigInt(43));
  expect(f).toThrow();
});

test("literal bigint number", () => {
  const f = () => literalBigIntSchema.parse("asdf");
  expect(f).toThrow();
});

test("literal bigint boolean", () => {
  const f = () => literalBigIntSchema.parse(123);
  expect(f).toThrow();
});

test("literal bigint object", () => {
  const f = () => literalBigIntSchema.parse({});
  expect(f).toThrow();
});

test("literal symbol", () => {
  util.assertEqual<z.infer<typeof literalSymbolSchema>, typeof MySymbol>(true);
  literalSymbolSchema.parse(MySymbol);
  expect(() => literalSymbolSchema.parse(Symbol("asdf"))).toThrow();
});

test("parse stringSchema string", () => {
  stringSchema.parse(val.string);
});

test("parse stringSchema number", () => {
  const f = () => stringSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse stringSchema boolean", () => {
  const f = () => stringSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse stringSchema undefined", () => {
  const f = () => stringSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse stringSchema null", () => {
  const f = () => stringSchema.parse(val.null);
  expect(f).toThrow();
});

test("parse numberSchema string", () => {
  const f = () => numberSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse numberSchema number", () => {
  numberSchema.parse(val.number);
});

test("parse numberSchema bigint", () => {
  const f = () => numberSchema.parse(val.bigint);
  expect(f).toThrow();
});

test("parse numberSchema boolean", () => {
  const f = () => numberSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse numberSchema undefined", () => {
  const f = () => numberSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse numberSchema null", () => {
  const f = () => numberSchema.parse(val.null);
  expect(f).toThrow();
});

test("parse bigintSchema string", () => {
  const f = () => bigintSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse bigintSchema number", () => {
  const f = () => bigintSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse bigintSchema bigint", () => {
  bigintSchema.parse(val.bigint);
});

test("parse bigintSchema boolean", () => {
  const f = () => bigintSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse bigintSchema undefined", () => {
  const f = () => bigintSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse bigintSchema null", () => {
  const f = () => bigintSchema.parse(val.null);
  expect(f).toThrow();
});

test("parse booleanSchema string", () => {
  const f = () => booleanSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse booleanSchema number", () => {
  const f = () => booleanSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse booleanSchema boolean", () => {
  booleanSchema.parse(val.boolean);
});

test("parse booleanSchema undefined", () => {
  const f = () => booleanSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse booleanSchema null", () => {
  const f = () => booleanSchema.parse(val.null);
  expect(f).toThrow();
});

// ==============

test("parse dateSchema string", () => {
  const f = () => dateSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse dateSchema number", () => {
  const f = () => dateSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse dateSchema boolean", () => {
  const f = () => dateSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse dateSchema date", () => {
  dateSchema.parse(val.date);
});

test("parse dateSchema undefined", () => {
  const f = () => dateSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse dateSchema null", () => {
  const f = () => dateSchema.parse(val.null);
  expect(f).toThrow();
});

test("parse dateSchema invalid date", async () => {
  try {
    await dateSchema.parseAsync(new Date("invalid"));
  } catch (err) {
    expect((err as z.ZodError).issues[0].code).toEqual(z.ZodIssueCode.invalid_date);
  }
});
// ==============

test("parse symbolSchema string", () => {
  const f = () => symbolSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse symbolSchema number", () => {
  const f = () => symbolSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse symbolSchema boolean", () => {
  const f = () => symbolSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse symbolSchema date", () => {
  const f = () => symbolSchema.parse(val.date);
  expect(f).toThrow();
});

test("parse symbolSchema symbol", () => {
  symbolSchema.parse(val.symbol);
});

test("parse symbolSchema undefined", () => {
  const f = () => symbolSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse symbolSchema null", () => {
  const f = () => symbolSchema.parse(val.null);
  expect(f).toThrow();
});

// ==============

test("parse undefinedSchema string", () => {
  const f = () => undefinedSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse undefinedSchema number", () => {
  const f = () => undefinedSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse undefinedSchema boolean", () => {
  const f = () => undefinedSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse undefinedSchema undefined", () => {
  undefinedSchema.parse(val.undefined);
});

test("parse undefinedSchema null", () => {
  const f = () => undefinedSchema.parse(val.null);
  expect(f).toThrow();
});

test("parse nullSchema string", () => {
  const f = () => nullSchema.parse(val.string);
  expect(f).toThrow();
});

test("parse nullSchema number", () => {
  const f = () => nullSchema.parse(val.number);
  expect(f).toThrow();
});

test("parse nullSchema boolean", () => {
  const f = () => nullSchema.parse(val.boolean);
  expect(f).toThrow();
});

test("parse nullSchema undefined", () => {
  const f = () => nullSchema.parse(val.undefined);
  expect(f).toThrow();
});

test("parse nullSchema null", () => {
  nullSchema.parse(val.null);
});

test("primitive inference", () => {
  util.assertEqual<z.TypeOf<typeof literalStringSchema>, "asdf">(true);
  util.assertEqual<z.TypeOf<typeof literalNumberSchema>, 12>(true);
  util.assertEqual<z.TypeOf<typeof literalBooleanSchema>, true>(true);
  util.assertEqual<z.TypeOf<typeof literalBigIntSchema>, bigint>(true);
  util.assertEqual<z.TypeOf<typeof stringSchema>, string>(true);
  util.assertEqual<z.TypeOf<typeof numberSchema>, number>(true);
  util.assertEqual<z.TypeOf<typeof bigintSchema>, bigint>(true);
  util.assertEqual<z.TypeOf<typeof booleanSchema>, boolean>(true);
  util.assertEqual<z.TypeOf<typeof dateSchema>, Date>(true);
  util.assertEqual<z.TypeOf<typeof symbolSchema>, symbol>(true);

  util.assertEqual<z.TypeOf<typeof nullSchema>, null>(true);
  util.assertEqual<z.TypeOf<typeof undefinedSchema>, undefined>(true);
  util.assertEqual<z.TypeOf<typeof stringSchemaOptional>, string | undefined>(true);
  util.assertEqual<z.TypeOf<typeof stringSchemaNullable>, string | null>(true);
  util.assertEqual<z.TypeOf<typeof numberSchemaOptional>, number | undefined>(true);
  util.assertEqual<z.TypeOf<typeof numberSchemaNullable>, number | null>(true);
  util.assertEqual<z.TypeOf<typeof bigintSchemaOptional>, bigint | undefined>(true);
  util.assertEqual<z.TypeOf<typeof bigintSchemaNullable>, bigint | null>(true);
  util.assertEqual<z.TypeOf<typeof booleanSchemaOptional>, boolean | undefined>(true);
  util.assertEqual<z.TypeOf<typeof booleanSchemaNullable>, boolean | null>(true);
  util.assertEqual<z.TypeOf<typeof dateSchemaOptional>, Date | undefined>(true);
  util.assertEqual<z.TypeOf<typeof dateSchemaNullable>, Date | null>(true);
  util.assertEqual<z.TypeOf<typeof symbolSchemaOptional>, symbol | undefined>(true);
  util.assertEqual<z.TypeOf<typeof symbolSchemaNullable>, symbol | null>(true);

  // [
  //   literalStringSchemaTest,
  //   literalNumberSchemaTest,
  //   literalBooleanSchemaTest,
  //   literalBigIntSchemaTest,
  //   stringSchemaTest,
  //   numberSchemaTest,
  //   bigintSchemaTest,
  //   booleanSchemaTest,
  //   dateSchemaTest,
  //   symbolSchemaTest,

  //   nullSchemaTest,
  //   undefinedSchemaTest,
  //   stringSchemaOptionalTest,
  //   stringSchemaNullableTest,
  //   numberSchemaOptionalTest,
  //   numberSchemaNullableTest,
  //   bigintSchemaOptionalTest,
  //   bigintSchemaNullableTest,
  //   booleanSchemaOptionalTest,
  //   booleanSchemaNullableTest,
  //   dateSchemaOptionalTest,
  //   dateSchemaNullableTest,
  //   symbolSchemaOptionalTest,
  //   symbolSchemaNullableTest,

  // ];
});

test("get literal value", () => {
  expect(literalStringSchema.value).toEqual("asdf");
});

test("optional convenience method", () => {
  z.ostring().parse(undefined);
  z.onumber().parse(undefined);
  z.oboolean().parse(undefined);
});
