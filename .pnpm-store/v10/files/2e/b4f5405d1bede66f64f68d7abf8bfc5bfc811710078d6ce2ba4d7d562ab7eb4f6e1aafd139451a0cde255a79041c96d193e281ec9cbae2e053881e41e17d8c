// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

const literalTuna = z.literal("tuna");
const literalFortyTwo = z.literal(42);
const literalTrue = z.literal(true);

const terrificSymbol = Symbol("terrific");
const literalTerrificSymbol = z.literal(terrificSymbol);

test("passing validations", () => {
  literalTuna.parse("tuna");
  literalFortyTwo.parse(42);
  literalTrue.parse(true);
  literalTerrificSymbol.parse(terrificSymbol);
});

test("failing validations", () => {
  expect(() => literalTuna.parse("shark")).toThrow();
  expect(() => literalFortyTwo.parse(43)).toThrow();
  expect(() => literalTrue.parse(false)).toThrow();
  expect(() => literalTerrificSymbol.parse(Symbol("terrific"))).toThrow();
});

test("invalid_literal should have `received` field with data", () => {
  const data = "shark";
  const result = literalTuna.safeParse(data);
  if (!result.success) {
    const issue = result.error.issues[0];
    if (issue.code === "invalid_literal") {
      expect(issue.received).toBe(data);
    }
  }
});
