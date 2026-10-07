import { expect, test } from "vitest";

import * as z from "zod/v4";

const beforeBenchmarkDate = new Date(2022, 10, 4);
const benchmarkDate = new Date(2022, 10, 5);
const afterBenchmarkDate = new Date(2022, 10, 6);

const minCheck = z.date().min(benchmarkDate);
const maxCheck = z.date().max(benchmarkDate);

test("passing validations", () => {
  minCheck.parse(benchmarkDate);
  minCheck.parse(afterBenchmarkDate);

  maxCheck.parse(benchmarkDate);
  maxCheck.parse(beforeBenchmarkDate);
});

test("failing validations", () => {
  expect(() => minCheck.parse(beforeBenchmarkDate)).toThrow();
  expect(() => maxCheck.parse(afterBenchmarkDate)).toThrow();
});

test("min max getters", () => {
  expect(minCheck.minDate).toEqual(benchmarkDate);
  expect(minCheck.min(afterBenchmarkDate).minDate).toEqual(afterBenchmarkDate);

  expect(maxCheck.maxDate).toEqual(benchmarkDate);
  expect(maxCheck.max(beforeBenchmarkDate).maxDate).toEqual(beforeBenchmarkDate);
});
