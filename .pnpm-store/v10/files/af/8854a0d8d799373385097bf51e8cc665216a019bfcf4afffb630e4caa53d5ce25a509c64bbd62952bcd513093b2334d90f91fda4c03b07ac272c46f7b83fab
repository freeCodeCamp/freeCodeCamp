// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

const Test = z.object({
  f1: z.number(),
  f2: z.string().optional(),
  f3: z.string().nullable(),
  f4: z.array(z.object({ t: z.union([z.string(), z.boolean()]) })),
});

test("object type inference", () => {
  type TestType = {
    f1: number;
    f2?: string | undefined;
    f3: string | null;
    f4: { t: string | boolean }[];
  };

  util.assertEqual<z.TypeOf<typeof Test>, TestType>(true);
});

test("unknown throw", () => {
  const asdf: unknown = 35;
  expect(() => Test.parse(asdf)).toThrow();
});

test("shape() should return schema of particular key", () => {
  const f1Schema = Test.shape.f1;
  const f2Schema = Test.shape.f2;
  const f3Schema = Test.shape.f3;
  const f4Schema = Test.shape.f4;

  expect(f1Schema).toBeInstanceOf(z.ZodNumber);
  expect(f2Schema).toBeInstanceOf(z.ZodOptional);
  expect(f3Schema).toBeInstanceOf(z.ZodNullable);
  expect(f4Schema).toBeInstanceOf(z.ZodArray);
});

test("correct parsing", () => {
  Test.parse({
    f1: 12,
    f2: "string",
    f3: "string",
    f4: [
      {
        t: "string",
      },
    ],
  });

  Test.parse({
    f1: 12,
    f3: null,
    f4: [
      {
        t: false,
      },
    ],
  });
});

test("incorrect #1", () => {
  expect(() => Test.parse({} as any)).toThrow();
});

test("nonstrict by default", () => {
  z.object({ points: z.number() }).parse({
    points: 2314,
    unknown: "asdf",
  });
});

const data = {
  points: 2314,
  unknown: "asdf",
};

test("strip by default", () => {
  const val = z.object({ points: z.number() }).parse(data);
  expect(val).toEqual({ points: 2314 });
});

test("unknownkeys override", () => {
  const val = z.object({ points: z.number() }).strict().passthrough().strip().nonstrict().parse(data);

  expect(val).toEqual(data);
});

test("passthrough unknown", () => {
  const val = z.object({ points: z.number() }).passthrough().parse(data);

  expect(val).toEqual(data);
});

test("strip unknown", () => {
  const val = z.object({ points: z.number() }).strip().parse(data);

  expect(val).toEqual({ points: 2314 });
});

test("strict", () => {
  const val = z.object({ points: z.number() }).strict().safeParse(data);

  expect(val.success).toEqual(false);
});

test("catchall inference", () => {
  const o1 = z
    .object({
      first: z.string(),
    })
    .catchall(z.number());

  const d1 = o1.parse({ first: "asdf", num: 1243 });
  util.assertEqual<number, (typeof d1)["asdf"]>(true);
  util.assertEqual<string, (typeof d1)["first"]>(true);
});

test("catchall overrides strict", () => {
  const o1 = z.object({ first: z.string().optional() }).strict().catchall(z.number());

  // should run fine
  // setting a catchall overrides the unknownKeys behavior
  o1.parse({
    asdf: 1234,
  });

  // should only run catchall validation
  // against unknown keys
  o1.parse({
    first: "asdf",
    asdf: 1234,
  });
});

test("catchall overrides strict", () => {
  const o1 = z
    .object({
      first: z.string(),
    })
    .strict()
    .catchall(z.number());

  // should run fine
  // setting a catchall overrides the unknownKeys behavior
  o1.parse({
    first: "asdf",
    asdf: 1234,
  });
});

test("test that optional keys are unset", async () => {
  const SNamedEntity = z.object({
    id: z.string(),
    set: z.string().optional(),
    unset: z.string().optional(),
  });
  const result = await SNamedEntity.parse({
    id: "asdf",
    set: undefined,
  });
  // eslint-disable-next-line ban/ban
  expect(Object.keys(result)).toEqual(["id", "set"]);
});

test("test catchall parsing", async () => {
  const result = z.object({ name: z.string() }).catchall(z.number()).parse({ name: "Foo", validExtraKey: 61 });

  expect(result).toEqual({ name: "Foo", validExtraKey: 61 });

  const result2 = z
    .object({ name: z.string() })
    .catchall(z.number())
    .safeParse({ name: "Foo", validExtraKey: 61, invalid: "asdf" });

  expect(result2.success).toEqual(false);
});

test("test nonexistent keys", async () => {
  const Schema = z.union([z.object({ a: z.string() }), z.object({ b: z.number() })]);
  const obj = { a: "A" };
  const result = await Schema.spa(obj); // Works with 1.11.10, breaks with 2.0.0-beta.21
  expect(result.success).toBe(true);
});

test("test async union", async () => {
  const Schema2 = z.union([
    z.object({
      ty: z.string(),
    }),
    z.object({
      ty: z.number(),
    }),
  ]);

  const obj = { ty: "A" };
  const result = await Schema2.spa(obj); // Works with 1.11.10, breaks with 2.0.0-beta.21
  expect(result.success).toEqual(true);
});

test("test inferred merged type", async () => {
  const asdf = z.object({ a: z.string() }).merge(z.object({ a: z.number() }));
  type asdf = z.infer<typeof asdf>;
  util.assertEqual<asdf, { a: number }>(true);
});

test("inferred merged object type with optional properties", async () => {
  const Merged = z
    .object({ a: z.string(), b: z.string().optional() })
    .merge(z.object({ a: z.string().optional(), b: z.string() }));
  type Merged = z.infer<typeof Merged>;
  util.assertEqual<Merged, { a?: string; b: string }>(true);
  // todo
  // util.assertEqual<Merged, { a?: string; b: string }>(true);
});

test("inferred unioned object type with optional properties", async () => {
  const Unioned = z.union([
    z.object({ a: z.string(), b: z.string().optional() }),
    z.object({ a: z.string().optional(), b: z.string() }),
  ]);
  type Unioned = z.infer<typeof Unioned>;
  util.assertEqual<Unioned, { a: string; b?: string } | { a?: string; b: string }>(true);
});

test("inferred enum type", async () => {
  const Enum = z.object({ a: z.string(), b: z.string().optional() }).keyof();

  expect(Enum.Values).toEqual({
    a: "a",
    b: "b",
  });
  expect(Enum.enum).toEqual({
    a: "a",
    b: "b",
  });
  expect(Enum._def.values).toEqual(["a", "b"]);
  type Enum = z.infer<typeof Enum>;
  util.assertEqual<Enum, "a" | "b">(true);
});

test("inferred partial object type with optional properties", async () => {
  const Partial = z.object({ a: z.string(), b: z.string().optional() }).partial();
  type Partial = z.infer<typeof Partial>;
  util.assertEqual<Partial, { a?: string; b?: string }>(true);
});

test("inferred picked object type with optional properties", async () => {
  const Picked = z.object({ a: z.string(), b: z.string().optional() }).pick({ b: true });
  type Picked = z.infer<typeof Picked>;
  util.assertEqual<Picked, { b?: string }>(true);
});

test("inferred type for unknown/any keys", () => {
  const myType = z.object({
    anyOptional: z.any().optional(),
    anyRequired: z.any(),
    unknownOptional: z.unknown().optional(),
    unknownRequired: z.unknown(),
  });
  type myType = z.infer<typeof myType>;
  util.assertEqual<
    myType,
    {
      anyOptional?: any;
      anyRequired?: any;
      unknownOptional?: unknown;
      unknownRequired?: unknown;
    }
  >(true);
});

test("setKey", () => {
  const base = z.object({ name: z.string() });
  const withNewKey = base.setKey("age", z.number());

  type withNewKey = z.infer<typeof withNewKey>;
  util.assertEqual<withNewKey, { name: string; age: number }>(true);
  withNewKey.parse({ name: "asdf", age: 1234 });
});

test("strictcreate", async () => {
  const strictObj = z.strictObject({
    name: z.string(),
  });

  const syncResult = strictObj.safeParse({ name: "asdf", unexpected: 13 });
  expect(syncResult.success).toEqual(false);

  const asyncResult = await strictObj.spa({ name: "asdf", unexpected: 13 });
  expect(asyncResult.success).toEqual(false);
});

test("object with refine", async () => {
  const schema = z
    .object({
      a: z.string().default("foo"),
      b: z.number(),
    })
    .refine(() => true);
  expect(schema.parse({ b: 5 })).toEqual({ b: 5, a: "foo" });
  const result = await schema.parseAsync({ b: 5 });
  expect(result).toEqual({ b: 5, a: "foo" });
});

test("intersection of object with date", async () => {
  const schema = z.object({
    a: z.date(),
  });
  expect(schema.and(schema).parse({ a: new Date(1637353595983) })).toEqual({
    a: new Date(1637353595983),
  });
  const result = await schema.parseAsync({ a: new Date(1637353595983) });
  expect(result).toEqual({ a: new Date(1637353595983) });
});

test("intersection of object with refine with date", async () => {
  const schema = z
    .object({
      a: z.date(),
    })
    .refine(() => true);
  expect(schema.and(schema).parse({ a: new Date(1637353595983) })).toEqual({
    a: new Date(1637353595983),
  });
  const result = await schema.parseAsync({ a: new Date(1637353595983) });
  expect(result).toEqual({ a: new Date(1637353595983) });
});

test("constructor key", () => {
  const person = z
    .object({
      name: z.string(),
    })
    .strict();

  expect(() =>
    person.parse({
      name: "bob dylan",
      constructor: 61,
    })
  ).toThrow();
});

test("constructor key", () => {
  const Example = z.object({
    prop: z.string(),
    opt: z.number().optional(),
    arr: z.string().array(),
  });

  type Example = z.infer<typeof Example>;
  util.assertEqual<keyof Example, "prop" | "opt" | "arr">(true);
});

test("unknownkeys merging", () => {
  // This one is "strict"
  const schemaA = z
    .object({
      a: z.string(),
    })
    .strict();

  // This one is "strip"
  const schemaB = z
    .object({
      b: z.string(),
    })
    .catchall(z.string());

  const mergedSchema = schemaA.merge(schemaB);
  type mergedSchema = typeof mergedSchema;
  util.assertEqual<mergedSchema["_def"]["unknownKeys"], "strip">(true);
  expect(mergedSchema._def.unknownKeys).toEqual("strip");

  util.assertEqual<mergedSchema["_def"]["catchall"], z.ZodString>(true);
  expect(mergedSchema._def.catchall instanceof z.ZodString).toEqual(true);
});

const personToExtend = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

test("extend() should return schema with new key", () => {
  const PersonWithNickname = personToExtend.extend({ nickName: z.string() });
  type PersonWithNickname = z.infer<typeof PersonWithNickname>;

  const expected = { firstName: "f", nickName: "n", lastName: "l" };
  const actual = PersonWithNickname.parse(expected);

  expect(actual).toEqual(expected);
  util.assertEqual<keyof PersonWithNickname, "firstName" | "lastName" | "nickName">(true);
  util.assertEqual<PersonWithNickname, { firstName: string; lastName: string; nickName: string }>(true);
});

test("extend() should have power to override existing key", () => {
  const PersonWithNumberAsLastName = personToExtend.extend({
    lastName: z.number(),
  });
  type PersonWithNumberAsLastName = z.infer<typeof PersonWithNumberAsLastName>;

  const expected = { firstName: "f", lastName: 42 };
  const actual = PersonWithNumberAsLastName.parse(expected);

  expect(actual).toEqual(expected);
  util.assertEqual<PersonWithNumberAsLastName, { firstName: string; lastName: number }>(true);
});

test("passthrough index signature", () => {
  const a = z.object({ a: z.string() });
  type a = z.infer<typeof a>;
  util.assertEqual<{ a: string }, a>(true);
  const b = a.passthrough();
  type b = z.infer<typeof b>;
  util.assertEqual<{ a: string } & { [k: string]: unknown }, b>(true);
});

test("xor", () => {
  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  type A = { name: string; a: number };
  type B = { name: string; b: number };
  type C = XOR<A, B>;
  type Outer = { data: C };

  const _Outer: z.ZodType<Outer> = z.object({
    data: z.union([z.object({ name: z.string(), a: z.number() }), z.object({ name: z.string(), b: z.number() })]),
  });
});
