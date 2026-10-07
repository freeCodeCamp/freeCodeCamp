import { describe, expect, it } from "vitest";
import be from "../../../locales/be.js";

describe("Belarusian localization", () => {
  const localeError = be().localeError;

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
      expect(error).toContain("-2 элементы");
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
      expect(error).toContain("0 элементаў");
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
      { count: 2, expected: "2 элементы" },
      { count: 5, expected: "5 элементаў" },
      { count: 11, expected: "11 элементаў" },
      { count: 21, expected: "21 элемент" },
      { count: 22, expected: "22 элементы" },
      { count: 25, expected: "25 элементаў" },
      { count: 101, expected: "101 элемент" },
      { count: 111, expected: "111 элементаў" },
    ],
  },
  {
    type: "set",
    cases: [
      { count: 1, expected: "1 элемент" },
      { count: 2, expected: "2 элементы" },
      { count: 5, expected: "5 элементаў" },
      { count: 11, expected: "11 элементаў" },
      { count: 21, expected: "21 элемент" },
      { count: 22, expected: "22 элементы" },
      { count: 25, expected: "25 элементаў" },
      { count: 101, expected: "101 элемент" },
      { count: 111, expected: "111 элементаў" },
    ],
  },
  {
    type: "string",
    cases: [
      { count: 1, expected: "1 сімвал" },
      { count: 2, expected: "2 сімвалы" },
      { count: 5, expected: "5 сімвалаў" },
      { count: 11, expected: "11 сімвалаў" },
      { count: 21, expected: "21 сімвал" },
      { count: 22, expected: "22 сімвалы" },
      { count: 25, expected: "25 сімвалаў" },
    ],
  },
  {
    type: "file",
    cases: [
      { count: 0, expected: "0 байтаў" },
      { count: 1, expected: "1 байт" },
      { count: 2, expected: "2 байты" },
      { count: 5, expected: "5 байтаў" },
      { count: 11, expected: "11 байтаў" },
      { count: 21, expected: "21 байт" },
      { count: 22, expected: "22 байты" },
      { count: 25, expected: "25 байтаў" },
      { count: 101, expected: "101 байт" },
      { count: 110, expected: "110 байтаў" },
    ],
  },
] as const;
