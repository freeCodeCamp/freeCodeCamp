import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("globalRegistry", () => {
  const reg = z.registry();

  const a = z.string();
  reg.add(a);
  expect(reg.has(a)).toEqual(true);

  reg.remove(a);
  expect(reg.has(a)).toEqual(false);

  a.register(z.globalRegistry, { field: "sup" });
  expect(z.globalRegistry.has(a)).toEqual(true);
  expect(z.globalRegistry.get(a)).toEqual({ field: "sup" });

  z.globalRegistry.remove(a);
  expect(z.globalRegistry.has(a)).toEqual(false);
});

test("z.registry", () => {
  const fieldRegistry = z.registry<{ name: string; description: string }>();

  const a = z.string();
  fieldRegistry.add(a, { name: "hello", description: "world" });
  const a_meta = fieldRegistry.get(a);
  expect(a_meta).toEqual({ name: "hello", description: "world" });

  fieldRegistry.remove(a);
  expect(fieldRegistry.has(a)).toEqual(false);
  expect(fieldRegistry.get(a)).toEqual(undefined);
});

test("z.registry no metadata", () => {
  const fieldRegistry = z.registry();

  const a = z.string();
  fieldRegistry.add(a);
  fieldRegistry.add(z.number());
  expect(fieldRegistry.get(a)).toEqual(undefined);
  expect(fieldRegistry.has(a)).toEqual(true);
});

test("z.registry with schema constraints", () => {
  const fieldRegistry = z.registry<{ name: string; description: string }, z.ZodString>();

  const a = z.string();
  fieldRegistry.add(a, { name: "hello", description: "world" });
  // @ts-expect-error
  fieldRegistry.add(z.number(), { name: "test" });
  // @ts-expect-error
  z.number().register(fieldRegistry, { name: "test", description: "test" });
});

// test("z.namedRegistry", () => {
//   const namedReg = z
//     .namedRegistry<{ name: string; description: string }>()
//     .add(z.string(), { name: "hello", description: "world" })
//     .add(z.number(), { name: "number", description: "number" });

//   expect(namedReg.get("hello")).toEqual({
//     name: "hello",
//     description: "world",
//   });
//   expect(namedReg.has("hello")).toEqual(true);
//   expect(namedReg.get("number")).toEqual({
//     name: "number",
//     description: "number",
//   });

//   // @ts-expect-error
//   namedReg.get("world");
//   // @ts-expect-error
//   expect(namedReg.get("world")).toEqual(undefined);

//   const hello = namedReg.get("hello");
//   expect(hello).toEqual({ name: "hello", description: "world" });
//   expectTypeOf<typeof hello>().toEqualTypeOf<{
//     name: "hello";
//     description: "world";
//   }>();
//   expectTypeOf<typeof namedReg.items>().toEqualTypeOf<{
//     hello: { name: "hello"; description: "world" };
//     number: { name: "number"; description: "number" };
//   }>();
// });

test("output type in registry meta", () => {
  const reg = z.registry<{ out: z.$output }>();
  const a = z.string();
  reg.add(a, { out: "asdf" });
  // @ts-expect-error
  reg.add(a, 1234);
  expectTypeOf(reg.get(a)).toEqualTypeOf<{ out: string } | undefined>();
});

test("output type in registry meta - objects and arrays", () => {
  const reg = z.registry<{ name: string; examples: z.$output[] }>();
  const a = z.string();
  reg.add(a, { name: "hello", examples: ["world"] });

  // @ts-expect-error
  reg.add(a, { name: "hello", examples: "world" });
  expectTypeOf(reg.get(a)).toEqualTypeOf<{ name: string; examples: string[] } | undefined>();
});

test("input type in registry meta", () => {
  const reg = z.registry<{ in: z.$input }>();
  const a = z.pipe(z.number(), z.transform(String));
  reg.add(a, { in: 1234 });
  // @ts-expect-error
  reg.add(a, "1234");
  expectTypeOf(reg.get(a)).toEqualTypeOf<{ in: number } | undefined>();
});

test("input type in registry meta - objects and arrays", () => {
  const reg = z.registry<{ name: string; examples: z.$input[] }>();
  const a = z.pipe(z.number(), z.transform(String));
  reg.add(a, { name: "hello", examples: [1234] });

  // @ts-expect-error
  reg.add(a, { name: "hello", examples: "world" });
  expectTypeOf(reg.get(a)).toEqualTypeOf<{ name: string; examples: number[] } | undefined>();
});

test(".meta method", () => {
  const a1 = z.string();
  const a2 = a1.meta({ name: "hello" });

  expect(a1.meta()).toEqual(undefined);
  expect(a2.meta()).toEqual({ name: "hello" });
  expect(a1 === a2).toEqual(false);
});

test(".meta metadata does not bubble up", () => {
  const a1 = z.string().meta({ name: "hello" });
  const a2 = a1.optional();

  expect(a1.meta()).toEqual({ name: "hello" });
  expect(a2.meta()).toEqual(undefined);
});

test(".describe", () => {
  const a1 = z.string();
  const a2 = a1.describe("Hello");

  expect(a1.description).toEqual(undefined);
  expect(a2.description).toEqual("Hello");
});

test("inherit across clone", () => {
  const A = z.string().meta({ a: true });
  expect(A.meta()).toEqual({ a: true });
  const B = A.meta({ b: true });
  expect(B.meta()).toEqual({ a: true, b: true });
  const C = B.describe("hello");
  expect(C.meta()).toEqual({ a: true, b: true, description: "hello" });
});

test("loose examples", () => {
  z.string().register(z.globalRegistry, {
    examples: ["example"],
  });
});

test("function meta witout replacement", () => {
  const myReg = z.registry<{
    defaulter: (arg: string, test: boolean) => number;
  }>();

  const mySchema = z.date();
  myReg.add(mySchema, {
    defaulter: (arg, _test) => {
      return arg.length;
    },
  });

  expect(myReg.get(mySchema)!.defaulter("hello", true)).toEqual(5);
});

test("function meta with replacement", () => {
  const myReg = z.registry<{
    defaulter: (arg: z.$input, test: boolean) => z.$output;
  }>();

  const mySchema = z.string().transform((val) => val.length);
  myReg.add(mySchema, {
    defaulter: (arg, _test) => {
      return arg.length;
    },
  });

  expect(myReg.get(mySchema)!.defaulter("hello", true)).toEqual(5);
});

test("test .clear()", () => {
  const reg = z.registry();
  const a = z.string();
  reg.add(a);
  expect(reg.has(a)).toEqual(true);
  reg.clear();
  expect(reg.has(a)).toEqual(false);
});
