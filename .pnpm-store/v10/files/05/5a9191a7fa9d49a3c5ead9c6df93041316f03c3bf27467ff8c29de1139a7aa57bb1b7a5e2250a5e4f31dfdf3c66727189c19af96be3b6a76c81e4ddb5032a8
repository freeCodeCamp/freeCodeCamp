import { expect, test } from "vitest";

import * as z from "zod/v4";

test("length checks", async () => {
  const schema = z.string();
  const result = await schema["~standard"].validate(12);
  expect(result).toMatchInlineSnapshot(`
    {
      "issues": [
        {
          "code": "invalid_type",
          "expected": "string",
          "message": "Invalid input: expected string, received number",
          "path": [],
        },
      ],
    }
  `);
});

test("length checks", async () => {
  const schema = z.string();
  const result = await schema["~standard"].validate("asdf");
  expect(result).toMatchInlineSnapshot(`
    {
      "value": "asdf",
    }
  `);
});

test("length checks", async () => {
  const schema = z.string().refine(async (val) => val.length > 5);
  const result = await schema["~standard"].validate(12);
  expect(result).toMatchInlineSnapshot(`
    {
      "issues": [
        {
          "code": "invalid_type",
          "expected": "string",
          "message": "Invalid input: expected string, received number",
          "path": [],
        },
      ],
    }
  `);
});

test("length checks", async () => {
  const schema = z.string().refine(async (val) => val.length > 5);
  const result = await schema["~standard"].validate("234134134");
  expect(result).toMatchInlineSnapshot(`
    {
      "value": "234134134",
    }
  `);
});
