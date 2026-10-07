import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

const promSchema = z.promise(
  z.object({
    name: z.string(),
    age: z.number(),
  })
);

test("promise inference", () => {
  type promSchemaType = z.infer<typeof promSchema>;
  expectTypeOf<promSchemaType>().toEqualTypeOf<{ name: string; age: number }>();
});

test("promise parsing success", async () => {
  // expect(() => promSchema.parse(Promise.resolve({ name: "Bobby", age: 10 }))).toThrow();
  const pr = promSchema.parseAsync(Promise.resolve({ name: "Bobby", age: 10 }));
  expect(pr).toBeInstanceOf(Promise);
  const result = await pr;
  expect(result).toMatchInlineSnapshot(`
    {
      "age": 10,
      "name": "Bobby",
    }
  `);
});

test("promise parsing fail", async () => {
  const bad = await promSchema.safeParseAsync(Promise.resolve({ name: "Bobby", age: "10" }));
  expect(bad.success).toBe(false);
  expect(bad.error).toBeInstanceOf(z.ZodError);
});

test("promise parsing fail 2", async () => {
  const result = await promSchema.safeParseAsync(Promise.resolve({ name: "Bobby", age: "10" }));
  expect(result.success).toBe(false);
  expect(result.error).toBeInstanceOf(z.ZodError);
});

test("promise parsing fail", () => {
  const bad = () => promSchema.parse({ then: () => {}, catch: {} });
  expect(bad).toThrow();
});

test("sync promise parsing", () => {
  expect(() => z.promise(z.string()).parse(Promise.resolve("asfd"))).toThrow();
});

const asyncFunction = z.function({
  input: z.tuple([]),
  output: promSchema,
});

test("async function pass", async () => {
  const validatedFunction = asyncFunction.implementAsync(async () => {
    return { name: "jimmy", age: 14 };
  });
  await expect(validatedFunction()).resolves.toEqual({
    name: "jimmy",
    age: 14,
  });
});

test("async function fail", async () => {
  const validatedFunction = asyncFunction.implementAsync(() => {
    return Promise.resolve("asdf" as any);
  });
  await expect(validatedFunction()).rejects.toBeInstanceOf(z.core.$ZodError);
});

test("async promise parsing", () => {
  const res = z.promise(z.number()).parseAsync(Promise.resolve(12));
  expect(res).toBeInstanceOf(Promise);
});

test("resolves", () => {
  const foo = z.literal("foo");
  const res = z.promise(foo);
  expect(res.unwrap()).toEqual(foo);
});
