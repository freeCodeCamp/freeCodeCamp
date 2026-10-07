// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

const promSchema = z.promise(
  z.object({
    name: z.string(),
    age: z.number(),
  })
);

test("promise inference", () => {
  type promSchemaType = z.infer<typeof promSchema>;
  util.assertEqual<promSchemaType, Promise<{ name: string; age: number }>>(true);
});

test("promise parsing success", async () => {
  const pr = promSchema.parse(Promise.resolve({ name: "Bobby", age: 10 }));
  expect(pr).toBeInstanceOf(Promise);
  const result = await pr;
  expect(typeof result).toBe("object");
  expect(typeof result.age).toBe("number");
  expect(typeof result.name).toBe("string");
});

test("promise parsing success 2", () => {
  const fakePromise = {
    then() {
      return this;
    },
    catch() {
      return this;
    },
  };
  promSchema.parse(fakePromise);
});

test("promise parsing fail", async () => {
  const bad = promSchema.parse(Promise.resolve({ name: "Bobby", age: "10" }));
  // return await expect(bad).resolves.toBe({ name: 'Bobby', age: '10' });
  return await expect(bad).rejects.toBeInstanceOf(z.ZodError);
  // done();
});

test("promise parsing fail 2", async () => {
  const failPromise = promSchema.parse(Promise.resolve({ name: "Bobby", age: "10" }));
  await expect(failPromise).rejects.toBeInstanceOf(z.ZodError);
  // done();/z
});

test("promise parsing fail", () => {
  const bad = () => promSchema.parse({ then: () => {}, catch: {} });
  expect(bad).toThrow();
});

// test('sync promise parsing', () => {
//   expect(() => z.promise(z.string()).parse(Promise.resolve('asfd'))).toThrow();
// });

const asyncFunction = z.function(z.tuple([]), promSchema);

test("async function pass", async () => {
  const validatedFunction = asyncFunction.implement(async () => {
    return { name: "jimmy", age: 14 };
  });
  await expect(validatedFunction()).resolves.toEqual({
    name: "jimmy",
    age: 14,
  });
});

test("async function fail", async () => {
  const validatedFunction = asyncFunction.implement(() => {
    return Promise.resolve("asdf" as any);
  });
  await expect(validatedFunction()).rejects.toBeInstanceOf(z.ZodError);
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
