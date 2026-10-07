// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

const minTwo = z.string().array().min(2);
const maxTwo = z.string().array().max(2);
const justTwo = z.string().array().length(2);
const intNum = z.string().array().nonempty();
const nonEmptyMax = z.string().array().nonempty().max(2);

type t1 = z.infer<typeof nonEmptyMax>;
util.assertEqual<[string, ...string[]], t1>(true);

type t2 = z.infer<typeof minTwo>;
util.assertEqual<string[], t2>(true);

test("passing validations", () => {
  minTwo.parse(["a", "a"]);
  minTwo.parse(["a", "a", "a"]);
  maxTwo.parse(["a", "a"]);
  maxTwo.parse(["a"]);
  justTwo.parse(["a", "a"]);
  intNum.parse(["a"]);
  nonEmptyMax.parse(["a"]);
});

test("failing validations", () => {
  expect(() => minTwo.parse(["a"])).toThrow();
  expect(() => maxTwo.parse(["a", "a", "a"])).toThrow();
  expect(() => justTwo.parse(["a"])).toThrow();
  expect(() => justTwo.parse(["a", "a", "a"])).toThrow();
  expect(() => intNum.parse([])).toThrow();
  expect(() => nonEmptyMax.parse([])).toThrow();
  expect(() => nonEmptyMax.parse(["a", "a", "a"])).toThrow();
});

test("parse empty array in nonempty", () => {
  expect(() =>
    z
      .array(z.string())
      .nonempty()
      .parse([] as any)
  ).toThrow();
});

test("get element", () => {
  justTwo.element.parse("asdf");
  expect(() => justTwo.element.parse(12)).toThrow();
});

test("continue parsing despite array size error", () => {
  const schema = z.object({
    people: z.string().array().min(2),
  });

  const result = schema.safeParse({
    people: [123],
  });
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues.length).toEqual(2);
  }
});

test("parse should fail given sparse array", () => {
  const schema = z.array(z.string()).nonempty().min(1).max(3);

  expect(() => schema.parse(new Array(3))).toThrow();
});
