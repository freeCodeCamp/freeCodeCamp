import { expect, test } from "vitest";
import { parsedType } from "../../../locales/en.js";

test("parsedType", () => {
  expect(parsedType("string")).toBe("string");
  expect(parsedType(1)).toBe("number");
  expect(parsedType(true)).toBe("boolean");
  expect(parsedType(null)).toBe("null");
  expect(parsedType(undefined)).toBe("undefined");
  expect(parsedType([])).toBe("array");
  expect(parsedType({})).toBe("object");
  expect(parsedType(new Date())).toBe("Date");
  expect(parsedType(new Map())).toBe("Map");
  expect(parsedType(new Set())).toBe("Set");
  expect(parsedType(new Error())).toBe("Error");

  const nullPrototype = Object.create(null);
  expect(parsedType(nullPrototype)).toBe("object");

  const doubleNullPrototype = Object.create(Object.create(null));
  expect(parsedType(doubleNullPrototype)).toBe("object");
});
