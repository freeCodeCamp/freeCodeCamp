import { expect, test } from "vitest";

import * as z from "zod/v4";

test("async refine .parse()", async () => {
  // throws ZodAsyncError
  const s1 = z.string().refine(async (_val) => true);
  expect(() => s1.safeParse("asdf")).toThrow();
});

test("async refine", async () => {
  const s1 = z.string().refine(async (_val) => true);
  const r1 = await s1.parseAsync("asdf");
  expect(r1).toEqual("asdf");

  const s2 = z.string().refine(async (_val) => false);
  const r2 = await s2.safeParseAsync("asdf");
  expect(r2.success).toBe(false);
  expect(r2).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "Invalid input"
      }
    ]],
      "success": false,
    }
  `);
});

test("async refine with Promises", async () => {
  // expect.assertions(2);

  const schema1 = z.string().refine((_val) => Promise.resolve(true));
  const v1 = await schema1.parseAsync("asdf");
  expect(v1).toEqual("asdf");

  const schema2 = z.string().refine((_val) => Promise.resolve(false));
  await expect(schema2.parseAsync("asdf")).rejects.toBeDefined();

  const schema3 = z.string().refine((_val) => Promise.resolve(true));
  await expect(schema3.parseAsync("asdf")).resolves.toEqual("asdf");
  return await expect(schema3.parseAsync("qwer")).resolves.toEqual("qwer");
});

test("async refine that uses value", async () => {
  const schema1 = z.string().refine(async (val) => {
    return val.length > 5;
  });

  const r1 = await schema1.safeParseAsync("asdf");
  expect(r1.success).toBe(false);
  expect(r1.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "Invalid input"
      }
    ]]
  `);

  const r2 = await schema1.safeParseAsync("asdf123");
  expect(r2.success).toBe(true);
  expect(r2.data).toEqual("asdf123");
});
