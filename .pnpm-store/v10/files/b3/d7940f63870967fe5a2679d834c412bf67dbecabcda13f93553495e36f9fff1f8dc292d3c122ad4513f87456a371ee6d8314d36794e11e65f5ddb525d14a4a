import { expect, test } from "vitest";
import * as z from "zod/v4-mini";
import { util as zc } from "zod/v4/core";

test("min/max", () => {
  const a = z.number().check(z.minimum(5), z.minimum(6), z.minimum(7), z.maximum(10), z.maximum(11), z.maximum(12));

  expect(a._zod.bag.minimum).toEqual(7);
  expect(a._zod.bag.maximum).toEqual(10);
});

test("multipleOf", () => {
  const b = z.number().check(z.multipleOf(5));
  expect(b._zod.bag.multipleOf).toEqual(5);
});

test("int64 format", () => {
  const c = z.int64();
  expect(c._zod.bag.format).toEqual("int64");
  expect(c._zod.bag.minimum).toEqual(zc.BIGINT_FORMAT_RANGES.int64[0]);
  expect(c._zod.bag.maximum).toEqual(zc.BIGINT_FORMAT_RANGES.int64[1]);
});

test("int32 format", () => {
  const d = z.int32();
  expect(d._zod.bag.format).toEqual("int32");
  expect(d._zod.bag.minimum).toEqual(zc.NUMBER_FORMAT_RANGES.int32[0]);
  expect(d._zod.bag.maximum).toEqual(zc.NUMBER_FORMAT_RANGES.int32[1]);
});

test("array size", () => {
  const e = z.array(z.string()).check(z.length(5));
  expect(e._zod.bag.length).toEqual(5);
  expect(e._zod.bag.minimum).toEqual(5);
  expect(e._zod.bag.maximum).toEqual(5);
});
