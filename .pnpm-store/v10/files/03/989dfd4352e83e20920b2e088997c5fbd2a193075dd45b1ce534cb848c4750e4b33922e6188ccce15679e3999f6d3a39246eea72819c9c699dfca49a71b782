import { describe, expect, it } from "vitest";
import ru from "../../../locales/ru.js";

describe("Russian localization", () => {
  const localeError = ru().localeError;

  describe("pluralization rules", () => {
    for (const { type, cases } of TEST_CASES) {
      describe(`${type} pluralization`, () => {
        for (const { count, expected } of cases) {
          it(`correctly pluralizes ${count} ${type}`, () => {
            const error = localeError({
              code: "too_small",
              minimum: count,
              type: "number",
              inclusive: true,
              path: [],
              origin: type,
              input: count - 1,
            });

            expect(error).toContain(expected);
          });
        }
      });
    }

    it("handles negative numbers correctly", () => {
      const error = localeError({
        code: "too_small",
        minimum: -2,
        type: "number",
        inclusive: true,
        path: [],
        origin: "array",
        input: -3,
      });

      expect(error).toContain("-2 элемента");
    });

    it("handles zero correctly", () => {
      const error = localeError({
        code: "too_small",
        minimum: 0,
        type: "number",
        inclusive: true,
        path: [],
        origin: "array",
        input: -1,
      });

      expect(error).toContain("0 элементов");
    });

    it("handles bigint values correctly", () => {
      const error = localeError({
        code: "too_small",
        minimum: BigInt(21),
        type: "number",
        inclusive: true,
        path: [],
        origin: "array",
        input: BigInt(20),
      });

      expect(error).toContain("21 элемент");
    });
  });
});

const TEST_CASES = [
  {
    type: "array",
    cases: [
      { count: 1, expected: "1 элемент" },
      { count: 2, expected: "2 элемента" },
      { count: 5, expected: "5 элементов" },
      { count: 11, expected: "11 элементов" },
      { count: 21, expected: "21 элемент" },
      { count: 22, expected: "22 элемента" },
      { count: 25, expected: "25 элементов" },
      { count: 101, expected: "101 элемент" },
      { count: 111, expected: "111 элементов" },
    ],
  },
  {
    type: "set",
    cases: [
      { count: 1, expected: "1 элемент" },
      { count: 2, expected: "2 элемента" },
      { count: 5, expected: "5 элементов" },
      { count: 11, expected: "11 элементов" },
      { count: 21, expected: "21 элемент" },
      { count: 22, expected: "22 элемента" },
      { count: 25, expected: "25 элементов" },
      { count: 101, expected: "101 элемент" },
      { count: 111, expected: "111 элементов" },
    ],
  },
  {
    type: "string",
    cases: [
      { count: 1, expected: "1 символ" },
      { count: 2, expected: "2 символа" },
      { count: 5, expected: "5 символов" },
      { count: 11, expected: "11 символов" },
      { count: 21, expected: "21 символ" },
      { count: 22, expected: "22 символа" },
      { count: 25, expected: "25 символов" },
    ],
  },
  {
    type: "file",
    cases: [
      { count: 0, expected: "0 байт" },
      { count: 1, expected: "1 байт" },
      { count: 2, expected: "2 байта" },
      { count: 5, expected: "5 байт" },
      { count: 11, expected: "11 байт" },
      { count: 21, expected: "21 байт" },
      { count: 22, expected: "22 байта" },
      { count: 25, expected: "25 байт" },
      { count: 101, expected: "101 байт" },
      { count: 110, expected: "110 байт" },
    ],
  },
] as const;
