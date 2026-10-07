import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";
import * as core from "zod/v4/core";

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

  expectTypeOf<z.TypeOf<typeof Test>>().toEqualTypeOf<TestType>();
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

test("nonstrict by default", () => {
  z.object({ points: z.number() }).parse({
    points: 2314,
    unknown: "asdf",
  });
});

test("parse optional keys ", () => {
  const schema = z.object({
    a: z.string().optional(),
  });
  expect(schema.parse({ a: "asdf" })).toEqual({ a: "asdf" });
});

test("empty object", () => {
  const schema = z.object({});
  expect(schema.parse({})).toEqual({});
  expect(schema.parse({ name: "asdf" })).toEqual({});
  expect(schema.safeParse(null).success).toEqual(false);
  expect(schema.safeParse("asdf").success).toEqual(false);
  expectTypeOf<z.output<typeof schema>>().toEqualTypeOf<Record<string, never>>();
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
  const val = z.object({ points: z.number() }).strict().passthrough().strip().passthrough().parse(data);

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
  // expectTypeOf<(typeof d1)["asdf"]>().toEqualTypeOf<number>();
  expectTypeOf<(typeof d1)["first"]>().toEqualTypeOf<string>();
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

test("optional keys are unset", async () => {
  const SNamedEntity = z.object({
    id: z.string(),
    set: z.string().optional(),
    unset: z.string().optional(),
  });
  const result = await SNamedEntity.parse({
    id: "asdf",
    set: undefined,
  });
  expect(Object.keys(result)).toEqual(["id", "set"]);
});

test("catchall parsing", async () => {
  const result = z.object({ name: z.string() }).catchall(z.number()).parse({ name: "Foo", validExtraKey: 61 });

  expect(result).toEqual({ name: "Foo", validExtraKey: 61 });

  const result2 = z
    .object({ name: z.string() })
    .catchall(z.number())
    .safeParse({ name: "Foo", validExtraKey: 61, invalid: "asdf" });

  expect(result2.success).toEqual(false);
});

test("nonexistent keys", async () => {
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

  expectTypeOf<asdf>().toEqualTypeOf<{ a: number }>();
});

test("inferred type with Record shape", () => {
  type A = z.ZodObject<Record<string, z.ZodType<string, number>>>;
  expectTypeOf<z.infer<A>>().toEqualTypeOf<Record<string, string>>();
  expectTypeOf<z.input<A>>().toEqualTypeOf<Record<string, number>>();

  type B = z.ZodObject;
  expectTypeOf<z.infer<B>>().toEqualTypeOf<Record<string, unknown>>();
  expectTypeOf<z.input<B>>().toEqualTypeOf<Record<string, unknown>>();
});

test("inferred merged object type with optional properties", async () => {
  const Merged = z
    .object({ a: z.string(), b: z.string().optional() })
    .merge(z.object({ a: z.string().optional(), b: z.string() }));
  type Merged = z.infer<typeof Merged>;
  expectTypeOf<Merged>().toEqualTypeOf<{ a?: string; b: string }>();
  expectTypeOf<Merged>().toEqualTypeOf<{ a?: string; b: string }>();
});

test("inferred unioned object type with optional properties", async () => {
  const Unioned = z.union([
    z.object({ a: z.string(), b: z.string().optional() }),
    z.object({ a: z.string().optional(), b: z.string() }),
  ]);
  type Unioned = z.infer<typeof Unioned>;
  expectTypeOf<Unioned>().toEqualTypeOf<{ a: string; b?: string } | { a?: string; b: string }>();
});

test("inferred enum type", async () => {
  const Enum = z.object({ a: z.string(), b: z.string().optional() }).keyof();

  expect(Enum.enum).toEqual({
    a: "a",
    b: "b",
  });

  expect(Enum._zod.def.entries).toEqual({
    a: "a",
    b: "b",
  });
  type Enum = z.infer<typeof Enum>;
  expectTypeOf<Enum>().toEqualTypeOf<"a" | "b">();
});

test("inferred partial object type with optional properties", async () => {
  const Partial = z.object({ a: z.string(), b: z.string().optional() }).partial();
  type Partial = z.infer<typeof Partial>;
  expectTypeOf<Partial>().toEqualTypeOf<{ a?: string; b?: string }>();
});

test("inferred picked object type with optional properties", async () => {
  const Picked = z.object({ a: z.string(), b: z.string().optional() }).pick({ b: true });
  type Picked = z.infer<typeof Picked>;
  expectTypeOf<Picked>().toEqualTypeOf<{ b?: string }>();
});

test("inferred type for unknown/any keys", () => {
  const myType = z.object({
    anyOptional: z.any().optional(),
    anyRequired: z.any(),
    unknownOptional: z.unknown().optional(),
    unknownRequired: z.unknown(),
  });
  type myType = z.infer<typeof myType>;
  expectTypeOf<myType>().toEqualTypeOf<{
    anyOptional?: any;
    anyRequired: any;
    unknownOptional?: unknown;
    unknownRequired: unknown;
  }>();
});

test("strictObject", async () => {
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
  expect(z.intersection(schema, schema).parse({ a: new Date(1637353595983) })).toEqual({
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
  expect(z.intersection(schema, schema).parse({ a: new Date(1637353595983) })).toEqual({
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
  expectTypeOf<keyof Example>().toEqualTypeOf<"prop" | "opt" | "arr">();
});

test("catchall", () => {
  const a = z.object({});
  expect(a._zod.def.catchall).toBeUndefined();

  const b = z.strictObject({});
  expect(b._zod.def.catchall).toBeInstanceOf(core.$ZodNever);

  const c = z.looseObject({});
  expect(c._zod.def.catchall).toBeInstanceOf(core.$ZodUnknown);

  const d = z.object({}).catchall(z.number());
  expect(d._zod.def.catchall).toBeInstanceOf(core.$ZodNumber);
});

test("unknownkeys merging", () => {
  // This one is "strict"
  const a = z.looseObject({
    a: z.string(),
  });

  const b = z.strictObject({ b: z.string() });

  // incoming object overrides
  const c = a.merge(b);
  expect(c._zod.def.catchall).toBeInstanceOf(core.$ZodNever);
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
  expectTypeOf<keyof PersonWithNickname>().toEqualTypeOf<"firstName" | "lastName" | "nickName">();
  expectTypeOf<PersonWithNickname>().toEqualTypeOf<{ firstName: string; lastName: string; nickName: string }>();
});

test("extend() should have power to override existing key", () => {
  const PersonWithNumberAsLastName = personToExtend.extend({
    lastName: z.number(),
  });
  type PersonWithNumberAsLastName = z.infer<typeof PersonWithNumberAsLastName>;

  const expected = { firstName: "f", lastName: 42 };
  const actual = PersonWithNumberAsLastName.parse(expected);

  expect(actual).toEqual(expected);
  expectTypeOf<PersonWithNumberAsLastName>().toEqualTypeOf<{ firstName: string; lastName: number }>();
});

test("passthrough index signature", () => {
  const a = z.object({ a: z.string() });
  type a = z.infer<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<{ a: string }>();
  const b = a.passthrough();
  type b = z.infer<typeof b>;
  expectTypeOf<b>().toEqualTypeOf<{ a: string; [k: string]: unknown }>();
});

// test("xor", () => {
//   type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
//   type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

//   type A = { name: string; a: number };
//   type B = { name: string; b: number };
//   type C = XOR<A, B>;
//   type Outer = { data: C };
//   const Outer = z.object({
//     data: z.union([z.object({ name: z.string(), a: z.number() }), z.object({ name: z.string(), b: z.number() })]),
//   }) satisfies z.ZodType<Outer, any>;
// });

test("assignability", () => {
  z.object({ a: z.string() }) satisfies z.ZodObject<{ a: z.ZodString }>;
  z.object({ a: z.string() }).catchall(z.number()) satisfies z.ZodObject<{ a: z.ZodString }>;
  z.object({ a: z.string() }).strict() satisfies z.ZodObject;
  z.object({}) satisfies z.ZodObject;

  z.looseObject({ name: z.string() }) satisfies z.ZodObject<
    {
      name: z.ZodString;
    },
    z.core.$loose
  >;
  z.looseObject({ name: z.string() }) satisfies z.ZodObject<{
    name: z.ZodString;
  }>;
  z.strictObject({ name: z.string() }) satisfies z.ZodObject<
    {
      name: z.ZodString;
    },
    z.core.$loose
  >;
  z.strictObject({ name: z.string() }) satisfies z.ZodObject<
    {
      name: z.ZodString;
    },
    z.core.$strict
  >;
  z.object({ name: z.string() }) satisfies z.ZodObject<{
    name: z.ZodString;
  }>;
  z.object({
    a: z.string(),
    b: z.number(),
    c: z.boolean(),
  }) satisfies z.core.$ZodObject;
});

test("null prototype", () => {
  const schema = z.object({ a: z.string() });
  const obj = Object.create(null);
  obj.a = "foo";
  expect(schema.parse(obj)).toEqual({ a: "foo" });
});

test("empty objects", () => {
  const A = z.looseObject({});
  type Ain = z.input<typeof A>;
  expectTypeOf<Ain>().toEqualTypeOf<Record<string, unknown>>();
  type Aout = z.output<typeof A>;
  expectTypeOf<Aout>().toEqualTypeOf<Record<string, unknown>>();

  const B = z.object({});
  type Bout = z.output<typeof B>;
  expectTypeOf<Bout>().toEqualTypeOf<Record<string, never>>();
  type Bin = z.input<typeof B>;
  expectTypeOf<Bin>().toEqualTypeOf<Record<string, never>>();

  const C = z.strictObject({});
  type Cout = z.output<typeof C>;
  expectTypeOf<Cout>().toEqualTypeOf<Record<string, never>>();
  type Cin = z.input<typeof C>;
  expectTypeOf<Cin>().toEqualTypeOf<Record<string, never>>();
});

test("preserve key order", () => {
  const schema = z.object({
    a: z.string().optional(),
    b: z.string(),
  });
  const r1 = schema.safeParse({ a: "asdf", b: "qwer" });
  const r2 = schema.safeParse({ a: "asdf", b: "qwer" }, { jitless: true });

  expect(Object.keys(r1.data!)).toMatchInlineSnapshot(`
    [
      "a",
      "b",
    ]
  `);
  expect(Object.keys(r1.data!)).toEqual(Object.keys(r2.data!));
});

test("empty shape", () => {
  const a = z.object({});

  a.parse({});
  a.parse({}, { jitless: true });
  a.parse(Object.create(null));
  a.parse(Object.create(null), { jitless: true });

  expect(() => a.parse([])).toThrow();
  expect(() => a.parse([], { jitless: true })).toThrow();
});

test("zodtype assignability", () => {
  // Does not error
  z.object({ hello: z.string().optional() }) satisfies z.ZodType<{ hello?: string | undefined }>;
  z.object({ hello: z.string() }) satisfies z.ZodType<{ hello?: string | undefined }>;
  // @ts-expect-error
  z.object({}) satisfies z.ZodType<{ hello: string | undefined }>;
  // @ts-expect-error
  z.object({ hello: z.string().optional() }) satisfies z.ZodType<{ hello: string | undefined }>;
  // @ts-expect-error
  z.object({ hello: z.string().optional() }) satisfies z.ZodType<{ hello: string }>;
  // @ts-expect-error
  z.object({ hello: z.number() }) satisfies z.ZodType<{ hello?: string | undefined }>;
});

test("index signature in shape", () => {
  function makeZodObj<const T extends string>(key: T) {
    return z.looseObject({
      [key]: z.string(),
    });
  }

  const schema = makeZodObj("foo");
  type schema = z.infer<typeof schema>;

  expectTypeOf<schema>().toEqualTypeOf<Record<string, string>>();
});
