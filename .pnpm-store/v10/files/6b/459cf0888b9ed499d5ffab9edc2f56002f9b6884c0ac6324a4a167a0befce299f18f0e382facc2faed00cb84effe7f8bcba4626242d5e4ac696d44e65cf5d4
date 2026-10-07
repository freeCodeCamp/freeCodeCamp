// @ts-ignore
import { File as WebFile } from "@web-std/file";

import { afterEach, beforeEach, expect, test } from "vitest";

import * as z from "zod/v4";

const minCheck = z.file().min(5);
const maxCheck = z.file().max(8);
const mimeCheck = z.file().mime(["text/plain", "application/json"]);

const originalFile = global.File;
beforeEach(async () => {
  if (!globalThis.File) globalThis.File = WebFile;
});
afterEach(() => {
  if (globalThis.File !== originalFile) {
    globalThis.File = originalFile;
  }
});

test("passing validations", () => {
  minCheck.safeParse(new File(["12345"], "test.txt"));
  maxCheck.safeParse(new File(["12345678"], "test.txt"));
  mimeCheck.safeParse(new File([""], "test.csv", { type: "text/plain" }));
  expect(() => mimeCheck.parse(new File([""], "test.txt"))).toThrow();
  expect(() => mimeCheck.parse(new File([""], "test.txt", { type: "text/csv" }))).toThrow();
});

test("failing validations", () => {
  expect(minCheck.safeParse(new File(["1234"], "test.txt"))).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "file",
        "code": "too_small",
        "minimum": 5,
        "path": [],
        "message": "Too small: expected file to have >5 bytes"
      }
    ]],
      "success": false,
    }
  `);
  expect(maxCheck.safeParse(new File(["123456789"], "test.txt"))).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "file",
        "code": "too_big",
        "maximum": 8,
        "path": [],
        "message": "Too big: expected file to have <8 bytes"
      }
    ]],
      "success": false,
    }
  `);
  expect(mimeCheck.safeParse(new File([""], "test.csv"))).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_value",
        "values": [
          "text/plain",
          "application/json"
        ],
        "path": [],
        "message": "Invalid option: expected one of \\"text/plain\\"|\\"application/json\\""
      }
    ]],
      "success": false,
    }
  `);
  expect(mimeCheck.safeParse(new File([""], "test.csv", { type: "text/csv" }))).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_value",
        "values": [
          "text/plain",
          "application/json"
        ],
        "path": [],
        "message": "Invalid option: expected one of \\"text/plain\\"|\\"application/json\\""
      }
    ]],
      "success": false,
    }
  `);
});
