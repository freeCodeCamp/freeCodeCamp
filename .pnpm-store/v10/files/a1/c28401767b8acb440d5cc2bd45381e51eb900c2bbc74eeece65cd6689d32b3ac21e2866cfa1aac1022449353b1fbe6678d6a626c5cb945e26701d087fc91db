import { expect, test } from "vitest";

import * as z from "zod/v4";

test("z.number() basic validation", () => {
  const schema = z.number();
  expect(schema.parse(1234)).toEqual(1234);
});

test("NaN validation", () => {
  const schema = z.number();
  expect(() => schema.parse(Number.NaN)).toThrow();
});

test("Infinity validation", () => {
  const schema = z.number();
  expect(schema.safeParse(Number.POSITIVE_INFINITY)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "received": "Infinity",
        "path": [],
        "message": "Invalid input: expected number, received number"
      }
    ]],
      "success": false,
    }
  `);
  expect(schema.safeParse(Number.NEGATIVE_INFINITY)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "received": "Infinity",
        "path": [],
        "message": "Invalid input: expected number, received number"
      }
    ]],
      "success": false,
    }
  `);
});

test(".gt() validation", () => {
  const schema = z.number().gt(0).gt(5);
  expect(schema.parse(6)).toEqual(6);
  expect(() => schema.parse(5)).toThrow();
});

test(".gte() validation", () => {
  const schema = z.number().gt(0).gte(1).gte(5);
  expect(schema.parse(5)).toEqual(5);
  expect(() => schema.parse(4)).toThrow();
});

test(".min() validation", () => {
  const schema = z.number().min(0).min(5);
  expect(schema.parse(5)).toEqual(5);
  expect(() => schema.parse(4)).toThrow();
});

test(".lt() validation", () => {
  const schema = z.number().lte(10).lt(5);
  expect(schema.parse(4)).toEqual(4);
  expect(() => schema.parse(5)).toThrow();
});

test(".lte() validation", () => {
  const schema = z.number().lte(10).lte(5);
  expect(schema.parse(5)).toEqual(5);
  expect(() => schema.parse(6)).toThrow();
});

test(".max() validation", () => {
  const schema = z.number().max(10).max(5);
  expect(schema.parse(5)).toEqual(5);
  expect(() => schema.parse(6)).toThrow();
});

test(".int() validation", () => {
  const schema = z.number().int();
  expect(schema.parse(4)).toEqual(4);
  expect(() => schema.parse(3.14)).toThrow();
});

test(".positive() validation", () => {
  const schema = z.number().positive();
  expect(schema.parse(1)).toEqual(1);
  expect(() => schema.parse(0)).toThrow();
  expect(() => schema.parse(-1)).toThrow();
});

test(".negative() validation", () => {
  const schema = z.number().negative();
  expect(schema.parse(-1)).toEqual(-1);
  expect(() => schema.parse(0)).toThrow();
  expect(() => schema.parse(1)).toThrow();
});

test(".nonpositive() validation", () => {
  const schema = z.number().nonpositive();
  expect(schema.parse(0)).toEqual(0);
  expect(schema.parse(-1)).toEqual(-1);
  expect(() => schema.parse(1)).toThrow();
});

test(".nonnegative() validation", () => {
  const schema = z.number().nonnegative();
  expect(schema.parse(0)).toEqual(0);
  expect(schema.parse(1)).toEqual(1);
  expect(() => schema.parse(-1)).toThrow();
});

test(".multipleOf() with positive divisor", () => {
  const schema = z.number().multipleOf(5);
  expect(schema.parse(15)).toEqual(15);
  expect(schema.parse(-15)).toEqual(-15);
  expect(() => schema.parse(7.5)).toThrow();
  expect(() => schema.parse(-7.5)).toThrow();
});

test(".multipleOf() with negative divisor", () => {
  const schema = z.number().multipleOf(-5);
  expect(schema.parse(-15)).toEqual(-15);
  expect(schema.parse(15)).toEqual(15);
  expect(() => schema.parse(-7.5)).toThrow();
  expect(() => schema.parse(7.5)).toThrow();
});

test(".step() validation", () => {
  const schemaPointOne = z.number().step(0.1);
  const schemaPointZeroZeroZeroOne = z.number().step(0.0001);
  const schemaSixPointFour = z.number().step(6.4);

  expect(schemaPointOne.parse(6)).toEqual(6);
  expect(schemaPointOne.parse(6.1)).toEqual(6.1);
  expect(schemaSixPointFour.parse(12.8)).toEqual(12.8);
  expect(schemaPointZeroZeroZeroOne.parse(3.01)).toEqual(3.01);
  expect(() => schemaPointOne.parse(6.11)).toThrow();
  expect(() => schemaPointOne.parse(6.1000000001)).toThrow();
  expect(() => schemaSixPointFour.parse(6.41)).toThrow();
});

test(".finite() validation", () => {
  const schema = z.number().finite();
  expect(schema.parse(123)).toEqual(123);
  expect(schema.safeParse(Number.POSITIVE_INFINITY)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "received": "Infinity",
        "path": [],
        "message": "Invalid input: expected number, received number"
      }
    ]],
      "success": false,
    }
  `);
  expect(schema.safeParse(Number.NEGATIVE_INFINITY)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "received": "Infinity",
        "path": [],
        "message": "Invalid input: expected number, received number"
      }
    ]],
      "success": false,
    }
  `);
});

test(".safe() validation", () => {
  const schema = z.number().safe();
  expect(schema.parse(Number.MIN_SAFE_INTEGER)).toEqual(Number.MIN_SAFE_INTEGER);
  expect(schema.parse(Number.MAX_SAFE_INTEGER)).toEqual(Number.MAX_SAFE_INTEGER);
  expect(() => schema.parse(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  expect(() => schema.parse(Number.MAX_SAFE_INTEGER + 1)).toThrow();
});

test("min value getters", () => {
  expect(z.number().minValue).toBeNull;
  expect(z.number().lt(5).minValue).toBeNull;
  expect(z.number().lte(5).minValue).toBeNull;
  expect(z.number().max(5).minValue).toBeNull;
  expect(z.number().negative().minValue).toBeNull;
  expect(z.number().nonpositive().minValue).toBeNull;
  expect(z.number().int().minValue).toBeNull;
  expect(z.number().multipleOf(5).minValue).toBeNull;
  expect(z.number().finite().minValue).toBeNull;
  expect(z.number().gt(5).minValue).toEqual(5);
  expect(z.number().gte(5).minValue).toEqual(5);
  expect(z.number().min(5).minValue).toEqual(5);
  expect(z.number().min(5).min(10).minValue).toEqual(10);
  expect(z.number().positive().minValue).toEqual(0);
  expect(z.number().nonnegative().minValue).toEqual(0);
  expect(z.number().safe().minValue).toEqual(Number.MIN_SAFE_INTEGER);
});

test("max value getters", () => {
  expect(z.number().maxValue).toBeNull;
  expect(z.number().gt(5).maxValue).toBeNull;
  expect(z.number().gte(5).maxValue).toBeNull;
  expect(z.number().min(5).maxValue).toBeNull;
  expect(z.number().positive().maxValue).toBeNull;
  expect(z.number().nonnegative().maxValue).toBeNull;
  expect(z.number().int().minValue).toBeNull;
  expect(z.number().multipleOf(5).minValue).toBeNull;
  expect(z.number().finite().minValue).toBeNull;
  expect(z.number().lt(5).maxValue).toEqual(5);
  expect(z.number().lte(5).maxValue).toEqual(5);
  expect(z.number().max(5).maxValue).toEqual(5);
  expect(z.number().max(5).max(1).maxValue).toEqual(1);
  expect(z.number().negative().maxValue).toEqual(0);
  expect(z.number().nonpositive().maxValue).toEqual(0);
  expect(z.number().safe().maxValue).toEqual(Number.MAX_SAFE_INTEGER);
});

test("int getter", () => {
  expect(z.number().isInt).toEqual(false);
  expect(z.number().int().isInt).toEqual(true);
  expect(z.number().safe().isInt).toEqual(true);
  expect(z.number().multipleOf(5).isInt).toEqual(true);
});

/** In Zod 4, number schemas don't accept infinite values. */
test("finite getter", () => {
  expect(z.number().isFinite).toEqual(true);
});

test("string format methods", () => {
  const a = z.int32().min(5);
  expect(a.parse(6)).toEqual(6);
  expect(() => a.parse(1)).toThrow();
});

test("error customization", () => {
  z.number().gte(5, { error: (iss) => "Min: " + iss.minimum.valueOf() });
  z.number().lte(5, { error: (iss) => "Max: " + iss.maximum.valueOf() });
});
