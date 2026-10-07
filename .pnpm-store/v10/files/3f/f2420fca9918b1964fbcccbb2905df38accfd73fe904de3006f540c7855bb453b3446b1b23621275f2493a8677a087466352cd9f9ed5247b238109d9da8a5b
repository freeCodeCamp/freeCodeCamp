// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

test("string coercion", () => {
  const schema = z.coerce.string();
  expect(schema.parse("sup")).toEqual("sup");
  expect(schema.parse("")).toEqual("");
  expect(schema.parse(12)).toEqual("12");
  expect(schema.parse(0)).toEqual("0");
  expect(schema.parse(-12)).toEqual("-12");
  expect(schema.parse(3.14)).toEqual("3.14");
  expect(schema.parse(BigInt(15))).toEqual("15");
  expect(schema.parse(Number.NaN)).toEqual("NaN");
  expect(schema.parse(Number.POSITIVE_INFINITY)).toEqual("Infinity");
  expect(schema.parse(Number.NEGATIVE_INFINITY)).toEqual("-Infinity");
  expect(schema.parse(true)).toEqual("true");
  expect(schema.parse(false)).toEqual("false");
  expect(schema.parse(null)).toEqual("null");
  expect(schema.parse(undefined)).toEqual("undefined");
  expect(schema.parse({ hello: "world!" })).toEqual("[object Object]");
  expect(schema.parse(["item", "another_item"])).toEqual("item,another_item");
  expect(schema.parse([])).toEqual("");
  expect(schema.parse(new Date("2022-01-01T00:00:00.000Z"))).toEqual(new Date("2022-01-01T00:00:00.000Z").toString());
});

test("number coercion", () => {
  const schema = z.coerce.number();
  expect(schema.parse("12")).toEqual(12);
  expect(schema.parse("0")).toEqual(0);
  expect(schema.parse("-12")).toEqual(-12);
  expect(schema.parse("3.14")).toEqual(3.14);
  expect(schema.parse("")).toEqual(0);
  expect(() => schema.parse("NOT_A_NUMBER")).toThrow(); // z.ZodError
  expect(schema.parse(12)).toEqual(12);
  expect(schema.parse(0)).toEqual(0);
  expect(schema.parse(-12)).toEqual(-12);
  expect(schema.parse(3.14)).toEqual(3.14);
  expect(schema.parse(BigInt(15))).toEqual(15);
  expect(() => schema.parse(Number.NaN)).toThrow(); // z.ZodError
  expect(schema.parse(Number.POSITIVE_INFINITY)).toEqual(Number.POSITIVE_INFINITY);
  expect(schema.parse(Number.NEGATIVE_INFINITY)).toEqual(Number.NEGATIVE_INFINITY);
  expect(schema.parse(true)).toEqual(1);
  expect(schema.parse(false)).toEqual(0);
  expect(schema.parse(null)).toEqual(0);
  expect(() => schema.parse(undefined)).toThrow(); // z.ZodError
  expect(() => schema.parse({ hello: "world!" })).toThrow(); // z.ZodError
  expect(() => schema.parse(["item", "another_item"])).toThrow(); // z.ZodError
  expect(schema.parse([])).toEqual(0);
  expect(schema.parse(new Date(1670139203496))).toEqual(1670139203496);
});

test("boolean coercion", () => {
  const schema = z.coerce.boolean();
  expect(schema.parse("true")).toEqual(true);
  expect(schema.parse("false")).toEqual(true);
  expect(schema.parse("0")).toEqual(true);
  expect(schema.parse("1")).toEqual(true);
  expect(schema.parse("")).toEqual(false);
  expect(schema.parse(1)).toEqual(true);
  expect(schema.parse(0)).toEqual(false);
  expect(schema.parse(-1)).toEqual(true);
  expect(schema.parse(3.14)).toEqual(true);
  expect(schema.parse(BigInt(15))).toEqual(true);
  expect(schema.parse(Number.NaN)).toEqual(false);
  expect(schema.parse(Number.POSITIVE_INFINITY)).toEqual(true);
  expect(schema.parse(Number.NEGATIVE_INFINITY)).toEqual(true);
  expect(schema.parse(true)).toEqual(true);
  expect(schema.parse(false)).toEqual(false);
  expect(schema.parse(null)).toEqual(false);
  expect(schema.parse(undefined)).toEqual(false);
  expect(schema.parse({ hello: "world!" })).toEqual(true);
  expect(schema.parse(["item", "another_item"])).toEqual(true);
  expect(schema.parse([])).toEqual(true);
  expect(schema.parse(new Date(1670139203496))).toEqual(true);
});

test("bigint coercion", () => {
  const schema = z.coerce.bigint();
  expect(schema.parse("5")).toEqual(BigInt(5));
  expect(schema.parse("0")).toEqual(BigInt(0));
  expect(schema.parse("-5")).toEqual(BigInt(-5));
  expect(() => schema.parse("3.14")).toThrow(); // not a z.ZodError!
  expect(schema.parse("")).toEqual(BigInt(0));
  expect(() => schema.parse("NOT_A_NUMBER")).toThrow(); // not a z.ZodError!
  expect(schema.parse(5)).toEqual(BigInt(5));
  expect(schema.parse(0)).toEqual(BigInt(0));
  expect(schema.parse(-5)).toEqual(BigInt(-5));
  expect(() => schema.parse(3.14)).toThrow(); // not a z.ZodError!
  expect(schema.parse(BigInt(5))).toEqual(BigInt(5));
  expect(() => schema.parse(Number.NaN)).toThrow(); // not a z.ZodError!
  expect(() => schema.parse(Number.POSITIVE_INFINITY)).toThrow(); // not a z.ZodError!
  expect(() => schema.parse(Number.NEGATIVE_INFINITY)).toThrow(); // not a z.ZodError!
  expect(schema.parse(true)).toEqual(BigInt(1));
  expect(schema.parse(false)).toEqual(BigInt(0));
  expect(() => schema.parse(null)).toThrow(); // not a z.ZodError!
  expect(() => schema.parse(undefined)).toThrow(); // not a z.ZodError!
  expect(() => schema.parse({ hello: "world!" })).toThrow(); // not a z.ZodError!
  expect(() => schema.parse(["item", "another_item"])).toThrow(); // not a z.ZodError!
  expect(schema.parse([])).toEqual(BigInt(0));
  expect(schema.parse(new Date(1670139203496))).toEqual(BigInt(1670139203496));
});

test("date coercion", () => {
  const schema = z.coerce.date();
  expect(schema.parse(new Date().toDateString())).toBeInstanceOf(Date);
  expect(schema.parse(new Date().toISOString())).toBeInstanceOf(Date);
  expect(schema.parse(new Date().toUTCString())).toBeInstanceOf(Date);
  expect(schema.parse("5")).toBeInstanceOf(Date);
  expect(schema.parse("2000-01-01")).toBeInstanceOf(Date);
  // expect(schema.parse("0")).toBeInstanceOf(Date);
  // expect(schema.parse("-5")).toBeInstanceOf(Date);
  // expect(schema.parse("3.14")).toBeInstanceOf(Date);
  expect(() => schema.parse("")).toThrow(); // z.ZodError
  expect(() => schema.parse("NOT_A_DATE")).toThrow(); // z.ZodError
  expect(schema.parse(5)).toBeInstanceOf(Date);
  expect(schema.parse(0)).toBeInstanceOf(Date);
  expect(schema.parse(-5)).toBeInstanceOf(Date);
  expect(schema.parse(3.14)).toBeInstanceOf(Date);
  expect(() => schema.parse(BigInt(5))).toThrow(); // not a z.ZodError!
  expect(() => schema.parse(Number.NaN)).toThrow(); // z.ZodError
  expect(() => schema.parse(Number.POSITIVE_INFINITY)).toThrow(); // z.ZodError
  expect(() => schema.parse(Number.NEGATIVE_INFINITY)).toThrow(); // z.ZodError
  expect(schema.parse(true)).toBeInstanceOf(Date);
  expect(schema.parse(false)).toBeInstanceOf(Date);
  expect(schema.parse(null)).toBeInstanceOf(Date);
  expect(() => schema.parse(undefined)).toThrow(); // z.ZodError
  expect(() => schema.parse({ hello: "world!" })).toThrow(); // z.ZodError
  expect(() => schema.parse(["item", "another_item"])).toThrow(); // z.ZodError
  expect(() => schema.parse([])).toThrow(); // z.ZodError
  expect(schema.parse(new Date())).toBeInstanceOf(Date);
});
