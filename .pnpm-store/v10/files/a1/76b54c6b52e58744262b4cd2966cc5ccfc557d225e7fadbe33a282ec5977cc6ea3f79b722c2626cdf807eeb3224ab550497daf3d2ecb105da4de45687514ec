import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

const stringSet = z.set(z.string());
type stringSet = z.infer<typeof stringSet>;

const minTwo = z.set(z.string()).min(2);
const maxTwo = z.set(z.string()).max(2);
const justTwo = z.set(z.string()).size(2);
const nonEmpty = z.set(z.string()).nonempty();
const nonEmptyMax = z.set(z.string()).nonempty().max(2);

test("type inference", () => {
  expectTypeOf<stringSet>().toEqualTypeOf<Set<string>>();
});

test("valid parse", () => {
  const result = stringSet.safeParse(new Set(["first", "second"]));
  expect(result.success).toEqual(true);
  expect(result.data!.has("first")).toEqual(true);
  expect(result.data!.has("second")).toEqual(true);
  expect(result.data!.has("third")).toEqual(false);

  expect(() => {
    minTwo.parse(new Set(["a", "b"]));
    minTwo.parse(new Set(["a", "b", "c"]));
    maxTwo.parse(new Set(["a", "b"]));
    maxTwo.parse(new Set(["a"]));
    justTwo.parse(new Set(["a", "b"]));
    nonEmpty.parse(new Set(["a"]));
    nonEmptyMax.parse(new Set(["a"]));
  }).not.toThrow();
});

test("valid parse async", async () => {
  const result = await stringSet.spa(new Set(["first", "second"]));
  expect(result.success).toEqual(true);
  expect(result.data!.has("first")).toEqual(true);
  expect(result.data!.has("second")).toEqual(true);
  expect(result.data!.has("third")).toEqual(false);

  const asyncResult = await stringSet.safeParse(new Set(["first", "second"]));
  expect(asyncResult.success).toEqual(true);
  expect(asyncResult.data!.has("first")).toEqual(true);
  expect(asyncResult.data!.has("second")).toEqual(true);
  expect(asyncResult.data!.has("third")).toEqual(false);
});

test("valid parse: size-related methods", () => {
  expect(() => {
    minTwo.parse(new Set(["a", "b"]));
    minTwo.parse(new Set(["a", "b", "c"]));
    maxTwo.parse(new Set(["a", "b"]));
    maxTwo.parse(new Set(["a"]));
    justTwo.parse(new Set(["a", "b"]));
    nonEmpty.parse(new Set(["a"]));
    nonEmptyMax.parse(new Set(["a"]));
  }).not.toThrow();

  const sizeZeroResult = stringSet.parse(new Set());
  expect(sizeZeroResult.size).toBe(0);

  const sizeTwoResult = minTwo.parse(new Set(["a", "b"]));
  expect(sizeTwoResult.size).toBe(2);
});

test("failing when parsing empty set in nonempty ", () => {
  const result = nonEmpty.safeParse(new Set());
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  expect(result.error!.issues[0].code).toEqual("too_small");
});

test("failing when set is smaller than min() ", () => {
  const result = minTwo.safeParse(new Set(["just_one"]));
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  expect(result.error!.issues[0].code).toEqual("too_small");
});

test("failing when set is bigger than max() ", () => {
  const result = maxTwo.safeParse(new Set(["one", "two", "three"]));
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  expect(result.error!.issues[0].code).toEqual("too_big");
});

test("doesn’t throw when an empty set is given", () => {
  const result = stringSet.safeParse(new Set([]));
  expect(result.success).toEqual(true);
});

test("throws when a Map is given", () => {
  const result = stringSet.safeParse(new Map([]));
  expect(result.success).toEqual(false);
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "set",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected set, received Map"
      }
    ]]
  `);
});

test("throws when the given set has invalid input", () => {
  const result = stringSet.safeParse(new Set([Symbol()]));
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected string, received symbol"
      }
    ]]
  `);
});

test("throws when the given set has multiple invalid entries", () => {
  const result = stringSet.safeParse(new Set([1, 2] as any[]));
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(2);
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected string, received number"
      },
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected string, received number"
      }
    ]]
  `);
});

test("min/max", async () => {
  const schema = z.set(z.string()).min(4).max(5);

  const r1 = schema.safeParse(new Set(["a", "b", "c", "d"]));
  expect(r1.success).toEqual(true);

  const r2 = schema.safeParse(new Set(["a", "b", "c"]));
  expect(r2.success).toEqual(false);
  expect(r2.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_small",
        "message": "Too small: expected set to have >4 items",
        "minimum": 4,
        "origin": "set",
        "path": [],
      },
    ]
  `);

  const r3 = schema.safeParse(new Set(["a", "b", "c", "d", "e", "f"]));
  expect(r3.success).toEqual(false);
  expect(r3.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_big",
        "maximum": 5,
        "message": "Too big: expected set to have <5 items",
        "origin": "set",
        "path": [],
      },
    ]
  `);
});
