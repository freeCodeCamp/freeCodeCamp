// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

test("parse async test", async () => {
  const schema1 = z.string().refine(async (_val) => false);
  expect(() => schema1.parse("asdf")).toThrow();

  const schema2 = z.string().refine((_val) => Promise.resolve(true));
  return await expect(() => schema2.parse("asdf")).toThrow();
});

test("parseAsync async test", async () => {
  const schema1 = z.string().refine(async (_val) => true);
  await schema1.parseAsync("asdf");

  const schema2 = z.string().refine(async (_val) => false);
  return await expect(schema2.parseAsync("asdf")).rejects.toBeDefined();
  // expect(async () => await schema2.parseAsync('asdf')).toThrow();
});

test("parseAsync async test", async () => {
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

test("parseAsync async with value", async () => {
  const schema1 = z.string().refine(async (val) => {
    return val.length > 5;
  });
  await expect(schema1.parseAsync("asdf")).rejects.toBeDefined();

  const v = await schema1.parseAsync("asdf123");
  return await expect(v).toEqual("asdf123");
});
