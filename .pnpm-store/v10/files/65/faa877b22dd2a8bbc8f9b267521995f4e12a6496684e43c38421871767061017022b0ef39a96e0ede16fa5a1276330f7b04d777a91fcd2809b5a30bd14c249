// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

const RealSet = Set;
const RealMap = Map;
const RealDate = Date;

test("doesn’t throw when Date is undefined", () => {
  delete (globalThis as any).Date;
  const result = z.object({}).safeParse({});
  expect(result.success).toEqual(true);
  globalThis.Date = RealDate;
});

test("doesn’t throw when Set is undefined", () => {
  delete (globalThis as any).Set;
  const result = z.object({}).safeParse({});
  expect(result.success).toEqual(true);
  globalThis.Set = RealSet;
});

test("doesn’t throw when Map is undefined", () => {
  delete (globalThis as any).Map;
  const result = z.object({}).safeParse({});
  expect(result.success).toEqual(true);
  globalThis.Map = RealMap;
});
