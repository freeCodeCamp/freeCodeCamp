import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";
import type { util } from "zod/v4/core";

test("z.boolean", () => {
  const a = z.boolean();
  expect(z.parse(a, true)).toEqual(true);
  expect(z.parse(a, false)).toEqual(false);
  expect(() => z.parse(a, 123)).toThrow();
  expect(() => z.parse(a, "true")).toThrow();
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<boolean>();
});

test("z.bigint", () => {
  const a = z.bigint();
  expect(z.parse(a, BigInt(123))).toEqual(BigInt(123));
  expect(() => z.parse(a, 123)).toThrow();
  expect(() => z.parse(a, "123")).toThrow();
});

test("z.symbol", () => {
  const a = z.symbol();
  const sym = Symbol();
  expect(z.parse(a, sym)).toEqual(sym);
  expect(() => z.parse(a, "symbol")).toThrow();
});

test("z.date", () => {
  const a = z.date();
  const date = new Date();
  expect(z.parse(a, date)).toEqual(date);
  expect(() => z.parse(a, "date")).toThrow();
});

test("z.coerce.string", () => {
  const a = z.coerce.string();
  expect(z.parse(a, 123)).toEqual("123");
  expect(z.parse(a, true)).toEqual("true");
  expect(z.parse(a, null)).toEqual("null");
  expect(z.parse(a, undefined)).toEqual("undefined");
});

test("z.coerce.number", () => {
  const a = z.coerce.number();
  expect(z.parse(a, "123")).toEqual(123);
  expect(z.parse(a, "123.45")).toEqual(123.45);
  expect(z.parse(a, true)).toEqual(1);
  expect(z.parse(a, false)).toEqual(0);
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.coerce.boolean", () => {
  const a = z.coerce.boolean();
  // test booleans
  expect(z.parse(a, true)).toEqual(true);
  expect(z.parse(a, false)).toEqual(false);
  expect(z.parse(a, "true")).toEqual(true);
  expect(z.parse(a, "false")).toEqual(true);
  expect(z.parse(a, 1)).toEqual(true);
  expect(z.parse(a, 0)).toEqual(false);
  expect(z.parse(a, {})).toEqual(true);
  expect(z.parse(a, [])).toEqual(true);
  expect(z.parse(a, undefined)).toEqual(false);
  expect(z.parse(a, null)).toEqual(false);
  expect(z.parse(a, "")).toEqual(false);
});

test("z.coerce.bigint", () => {
  const a = z.coerce.bigint();
  expect(z.parse(a, "123")).toEqual(BigInt(123));
  expect(z.parse(a, 123)).toEqual(BigInt(123));
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.coerce.date", () => {
  const a = z.coerce.date();
  const date = new Date();
  expect(z.parse(a, date.toISOString())).toEqual(date);
  expect(z.parse(a, date.getTime())).toEqual(date);
  expect(() => z.parse(a, "invalid date")).toThrow();
});

test("z.iso.datetime", () => {
  const d1 = "2021-01-01T00:00:00Z";
  const d2 = "2021-01-01T00:00:00.123Z";
  const d3 = "2021-01-01T00:00:00";
  const d4 = "2021-01-01T00:00:00+07:00";
  const d5 = "bad data";

  // local: false, offset: false, precision: null
  const a = z.iso.datetime();
  expect(z.safeParse(a, d1).success).toEqual(true);
  expect(z.safeParse(a, d2).success).toEqual(true);
  expect(z.safeParse(a, d3).success).toEqual(false);
  expect(z.safeParse(a, d4).success).toEqual(false);
  expect(z.safeParse(a, d5).success).toEqual(false);

  const b = z.iso.datetime({ local: true });
  expect(z.safeParse(b, d1).success).toEqual(true);
  expect(z.safeParse(b, d2).success).toEqual(true);
  expect(z.safeParse(b, d3).success).toEqual(true);
  expect(z.safeParse(b, d4).success).toEqual(false);
  expect(z.safeParse(b, d5).success).toEqual(false);

  const c = z.iso.datetime({ offset: true });
  expect(z.safeParse(c, d1).success).toEqual(true);
  expect(z.safeParse(c, d2).success).toEqual(true);
  expect(z.safeParse(c, d3).success).toEqual(false);
  expect(z.safeParse(c, d4).success).toEqual(true);
  expect(z.safeParse(c, d5).success).toEqual(false);

  const d = z.iso.datetime({ precision: 3 });
  expect(z.safeParse(d, d1).success).toEqual(false);
  expect(z.safeParse(d, d2).success).toEqual(true);
  expect(z.safeParse(d, d3).success).toEqual(false);
  expect(z.safeParse(d, d4).success).toEqual(false);
  expect(z.safeParse(d, d5).success).toEqual(false);
});

test("z.iso.date", () => {
  const d1 = "2021-01-01";
  const d2 = "bad data";

  const a = z.iso.date();
  expect(z.safeParse(a, d1).success).toEqual(true);
  expect(z.safeParse(a, d2).success).toEqual(false);

  const b = z.string().check(z.iso.date());
  expect(z.safeParse(b, d1).success).toEqual(true);
  expect(z.safeParse(b, d2).success).toEqual(false);
});

test("z.iso.time", () => {
  const d1 = "00:00:00";
  const d2 = "00:00:00.123";
  const d3 = "bad data";

  const a = z.iso.time();
  expect(z.safeParse(a, d1).success).toEqual(true);
  expect(z.safeParse(a, d2).success).toEqual(true);
  expect(z.safeParse(a, d3).success).toEqual(false);

  const b = z.iso.time({ precision: 3 });
  expect(z.safeParse(b, d1).success).toEqual(false);
  expect(z.safeParse(b, d2).success).toEqual(true);
  expect(z.safeParse(b, d3).success).toEqual(false);

  const c = z.string().check(z.iso.time());
  expect(z.safeParse(c, d1).success).toEqual(true);
  expect(z.safeParse(c, d2).success).toEqual(true);
  expect(z.safeParse(c, d3).success).toEqual(false);
});

test("z.iso.duration", () => {
  const d1 = "P3Y6M4DT12H30M5S";
  const d2 = "bad data";

  const a = z.iso.duration();
  expect(z.safeParse(a, d1).success).toEqual(true);
  expect(z.safeParse(a, d2).success).toEqual(false);

  const b = z.string().check(z.iso.duration());
  expect(z.safeParse(b, d1).success).toEqual(true);
  expect(z.safeParse(b, d2).success).toEqual(false);
});

test("z.undefined", () => {
  const a = z.undefined();
  expect(z.parse(a, undefined)).toEqual(undefined);
  expect(() => z.parse(a, "undefined")).toThrow();
});

test("z.null", () => {
  const a = z.null();
  expect(z.parse(a, null)).toEqual(null);
  expect(() => z.parse(a, "null")).toThrow();
});

test("z.any", () => {
  const a = z.any();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, 123)).toEqual(123);
  expect(z.parse(a, true)).toEqual(true);
  expect(z.parse(a, null)).toEqual(null);
  expect(z.parse(a, undefined)).toEqual(undefined);
  z.parse(a, {});
  z.parse(a, []);
  z.parse(a, Symbol());
  z.parse(a, new Date());
});

test("z.unknown", () => {
  const a = z.unknown();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, 123)).toEqual(123);
  expect(z.parse(a, true)).toEqual(true);
  expect(z.parse(a, null)).toEqual(null);
  expect(z.parse(a, undefined)).toEqual(undefined);
  z.parse(a, {});
  z.parse(a, []);
  z.parse(a, Symbol());
  z.parse(a, new Date());
});

test("z.never", () => {
  const a = z.never();
  expect(() => z.parse(a, "hello")).toThrow();
});

test("z.void", () => {
  const a = z.void();
  expect(z.parse(a, undefined)).toEqual(undefined);
  expect(() => z.parse(a, null)).toThrow();
});

test("z.array", () => {
  const a = z.array(z.string());
  expect(z.parse(a, ["hello", "world"])).toEqual(["hello", "world"]);
  expect(() => z.parse(a, [123])).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
});

test("z.union", () => {
  const a = z.union([z.string(), z.number()]);
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, 123)).toEqual(123);
  expect(() => z.parse(a, true)).toThrow();
});

test("z.intersection", () => {
  const a = z.intersection(z.object({ a: z.string() }), z.object({ b: z.number() }));
  expect(z.parse(a, { a: "hello", b: 123 })).toEqual({ a: "hello", b: 123 });
  expect(() => z.parse(a, { a: "hello" })).toThrow();
  expect(() => z.parse(a, { b: 123 })).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
});

test("z.tuple", () => {
  const a = z.tuple([z.string(), z.number()]);
  expect(z.parse(a, ["hello", 123])).toEqual(["hello", 123]);
  expect(() => z.parse(a, ["hello", "world"])).toThrow();
  expect(() => z.parse(a, [123, 456])).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();

  // tuple with rest
  const b = z.tuple([z.string(), z.number(), z.optional(z.string())], z.boolean());
  type b = z.output<typeof b>;

  expectTypeOf<b>().toEqualTypeOf<[string, number, string?, ...boolean[]]>();
  const datas = [
    ["hello", 123],
    ["hello", 123, "world"],
    ["hello", 123, "world", true],
    ["hello", 123, "world", true, false, true],
  ];
  for (const data of datas) {
    expect(z.parse(b, data)).toEqual(data);
  }

  expect(() => z.parse(b, ["hello", 123, 123])).toThrow();
  expect(() => z.parse(b, ["hello", 123, "world", 123])).toThrow();

  // tuple with readonly args
  const cArgs = [z.string(), z.number(), z.optional(z.string())] as const;
  const c = z.tuple(cArgs, z.boolean());
  type c = z.output<typeof c>;
  expectTypeOf<c>().toEqualTypeOf<[string, number, string?, ...boolean[]]>();
  // type c = z.output<typeof c>;
});

test("z.record", () => {
  // record schema with enum keys
  const a = z.record(z.string(), z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<Record<string, string>>();

  const b = z.record(z.union([z.string(), z.number(), z.symbol()]), z.string());
  type b = z.output<typeof b>;
  expectTypeOf<b>().toEqualTypeOf<Record<string | number | symbol, string>>();
  expect(z.parse(b, { a: "hello", 1: "world", [Symbol.for("asdf")]: "symbol" })).toEqual({
    a: "hello",
    1: "world",
    [Symbol.for("asdf")]: "symbol",
  });

  // enum keys
  const c = z.record(z.enum(["a", "b", "c"]), z.string());
  type c = z.output<typeof c>;
  expectTypeOf<c>().toEqualTypeOf<Record<"a" | "b" | "c", string>>();
  expect(z.parse(c, { a: "hello", b: "world", c: "world" })).toEqual({
    a: "hello",
    b: "world",
    c: "world",
  });
  // missing keys
  expect(() => z.parse(c, { a: "hello", b: "world" })).toThrow();
  // extra keys
  expect(() => z.parse(c, { a: "hello", b: "world", c: "world", d: "world" })).toThrow();

  // partial enum
  const d = z.record(z.enum(["a", "b"]).or(z.never()), z.string());
  type d = z.output<typeof d>;
  expectTypeOf<d>().toEqualTypeOf<Record<"a" | "b", string>>();
});

test("z.map", () => {
  const a = z.map(z.string(), z.number());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<Map<string, number>>();
  expect(z.parse(a, new Map([["hello", 123]]))).toEqual(new Map([["hello", 123]]));
  expect(() => z.parse(a, new Map([["hello", "world"]]))).toThrow();
  expect(() => z.parse(a, new Map([[1243, "world"]]))).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();

  const r1 = z.safeParse(a, new Map([[123, 123]]));
  expect(r1.error?.issues[0].code).toEqual("invalid_type");
  expect(r1.error?.issues[0].path).toEqual([123]);

  const r2: any = z.safeParse(a, new Map([[BigInt(123), 123]]));
  expect(r2.error!.issues[0].code).toEqual("invalid_key");
  expect(r2.error!.issues[0].path).toEqual([]);

  const r3: any = z.safeParse(a, new Map([["hello", "world"]]));
  expect(r3.error!.issues[0].code).toEqual("invalid_type");
  expect(r3.error!.issues[0].path).toEqual(["hello"]);
});

test("z.map invalid_element", () => {
  const a = z.map(z.bigint(), z.number());
  const r1 = z.safeParse(a, new Map([[BigInt(123), BigInt(123)]]));

  expect(r1.error!.issues[0].code).toEqual("invalid_element");
  expect(r1.error!.issues[0].path).toEqual([]);
});

test("z.map async", async () => {
  const a = z.map(z.string().check(z.refine(async () => true)), z.number().check(z.refine(async () => true)));
  const d1 = new Map([["hello", 123]]);
  expect(await z.parseAsync(a, d1)).toEqual(d1);

  await expect(z.parseAsync(a, new Map([[123, 123]]))).rejects.toThrow();
  await expect(z.parseAsync(a, new Map([["hi", "world"]]))).rejects.toThrow();
  await expect(z.parseAsync(a, new Map([[1243, "world"]]))).rejects.toThrow();
  await expect(z.parseAsync(a, "hello")).rejects.toThrow();

  const r = await z.safeParseAsync(a, new Map([[123, 123]]));
  expect(r.success).toEqual(false);
  expect(r.error!.issues[0].code).toEqual("invalid_type");
  expect(r.error!.issues[0].path).toEqual([123]);
});

test("z.set", () => {
  const a = z.set(z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<Set<string>>();
  expect(z.parse(a, new Set(["hello", "world"]))).toEqual(new Set(["hello", "world"]));
  expect(() => z.parse(a, new Set([123]))).toThrow();
  expect(() => z.parse(a, ["hello", "world"])).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();

  const b = z.set(z.number());
  expect(z.parse(b, new Set([1, 2, 3]))).toEqual(new Set([1, 2, 3]));
  expect(() => z.parse(b, new Set(["hello"]))).toThrow();
  expect(() => z.parse(b, [1, 2, 3])).toThrow();
  expect(() => z.parse(b, 123)).toThrow();
});

test("z.enum", () => {
  const a = z.enum(["A", "B", "C"]);
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<"A" | "B" | "C">();
  expect(z.parse(a, "A")).toEqual("A");
  expect(z.parse(a, "B")).toEqual("B");
  expect(z.parse(a, "C")).toEqual("C");
  expect(() => z.parse(a, "D")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();

  expect(a.enum.A).toEqual("A");
  expect(a.enum.B).toEqual("B");
  expect(a.enum.C).toEqual("C");
  expect((a.enum as any).D).toEqual(undefined);
});

test("z.enum - native", () => {
  enum NativeEnum {
    A = "A",
    B = "B",
    C = "C",
  }
  const a = z.enum(NativeEnum);
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<NativeEnum>();
  expect(z.parse(a, NativeEnum.A)).toEqual(NativeEnum.A);
  expect(z.parse(a, NativeEnum.B)).toEqual(NativeEnum.B);
  expect(z.parse(a, NativeEnum.C)).toEqual(NativeEnum.C);
  expect(() => z.parse(a, "D")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();

  // test a.enum
  a;
  expect(a.enum.A).toEqual(NativeEnum.A);
  expect(a.enum.B).toEqual(NativeEnum.B);
  expect(a.enum.C).toEqual(NativeEnum.C);
});

test("z.nativeEnum", () => {
  enum NativeEnum {
    A = "A",
    B = "B",
    C = "C",
  }
  const a = z.nativeEnum(NativeEnum);
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<NativeEnum>();
  expect(z.parse(a, NativeEnum.A)).toEqual(NativeEnum.A);
  expect(z.parse(a, NativeEnum.B)).toEqual(NativeEnum.B);
  expect(z.parse(a, NativeEnum.C)).toEqual(NativeEnum.C);
  expect(() => z.parse(a, "D")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();

  // test a.enum
  a;
  expect(a.enum.A).toEqual(NativeEnum.A);
  expect(a.enum.B).toEqual(NativeEnum.B);
  expect(a.enum.C).toEqual(NativeEnum.C);
});

test("z.literal", () => {
  const a = z.literal("hello");
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<"hello">();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, "world")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.file", () => {
  const a = z.file();
  const file = new File(["content"], "filename.txt", { type: "text/plain" });
  expect(z.parse(a, file)).toEqual(file);
  expect(() => z.parse(a, "file")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.transform", () => {
  const a = z.pipe(
    z.string(),
    z.transform((val) => val.toUpperCase())
  );
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(z.parse(a, "hello")).toEqual("HELLO");
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.transform async", async () => {
  const a = z.pipe(
    z.string(),
    z.transform(async (val) => val.toUpperCase())
  );
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(await z.parseAsync(a, "hello")).toEqual("HELLO");
  await expect(() => z.parseAsync(a, 123)).rejects.toThrow();
});

test("z.preprocess", () => {
  const a = z.pipe(
    z.transform((val) => String(val).toUpperCase()),
    z.string()
  );
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(z.parse(a, 123)).toEqual("123");
  expect(z.parse(a, true)).toEqual("TRUE");
  expect(z.parse(a, BigInt(1234))).toEqual("1234");
  // expect(() => z.parse(a, Symbol("asdf"))).toThrow();
});

// test("z.preprocess async", () => {
//   const a = z.preprocess(async (val) => String(val), z.string());
//   type a = z.output<typeof a>;
//   expectTypeOf<a>().toEqualTypeOf<string>();
//   expect(z.parse(a, 123)).toEqual("123");
//   expect(z.parse(a, true)).toEqual("true");
//   expect(() => z.parse(a, {})).toThrow();
// });

test("z.optional", () => {
  const a = z.optional(z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string | undefined>();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, undefined)).toEqual(undefined);
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.nullable", () => {
  const a = z.nullable(z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string | null>();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, null)).toEqual(null);
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.default", () => {
  const a = z._default(z.string(), "default");
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(z.parse(a, undefined)).toEqual("default");
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, 123)).toThrow();

  const b = z._default(z.string(), () => "default");
  expect(z.parse(b, undefined)).toEqual("default");
  expect(z.parse(b, "hello")).toEqual("hello");
  expect(() => z.parse(b, 123)).toThrow();
});

test("z.catch", () => {
  const a = z.catch(z.string(), "default");
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, 123)).toEqual("default");

  const b = z.catch(z.string(), () => "default");
  expect(z.parse(b, "hello")).toEqual("hello");
  expect(z.parse(b, 123)).toEqual("default");

  const c = z.catch(z.string(), (ctx) => {
    return `${ctx.error.issues.length}issues`;
  });
  expect(z.parse(c, 1234)).toEqual("1issues");
});

test("z.nan", () => {
  const a = z.nan();
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<number>();
  expect(z.parse(a, Number.NaN)).toEqual(Number.NaN);
  expect(() => z.parse(a, 123)).toThrow();
  expect(() => z.parse(a, "NaN")).toThrow();
});

test("z.pipe", () => {
  const a = z.pipe(
    z.pipe(
      z.string(),
      z.transform((val) => val.length)
    ),
    z.number()
  );
  type a_in = z.input<typeof a>;
  expectTypeOf<a_in>().toEqualTypeOf<string>();
  type a_out = z.output<typeof a>;
  expectTypeOf<a_out>().toEqualTypeOf<number>();

  expect(z.parse(a, "123")).toEqual(3);
  expect(z.parse(a, "hello")).toEqual(5);
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.readonly", () => {
  const a = z.readonly(z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<Readonly<string>>();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.templateLiteral", () => {
  const a = z.templateLiteral([z.string(), z.number()]);
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<`${string}${number}`>();
  expect(z.parse(a, "hello123")).toEqual("hello123");
  expect(() => z.parse(a, "hello")).toThrow();
  expect(() => z.parse(a, 123)).toThrow();

  // multipart
  const b = z.templateLiteral([z.string(), z.number(), z.string()]);
  type b = z.output<typeof b>;
  expectTypeOf<b>().toEqualTypeOf<`${string}${number}${string}`>();
  expect(z.parse(b, "hello123world")).toEqual("hello123world");
  expect(z.parse(b, "123")).toEqual("123");
  expect(() => z.parse(b, "hello")).toThrow();
  expect(() => z.parse(b, 123)).toThrow();

  // include boolean
  const c = z.templateLiteral([z.string(), z.boolean()]);
  type c = z.output<typeof c>;
  expectTypeOf<c>().toEqualTypeOf<`${string}${boolean}`>();
  expect(z.parse(c, "hellotrue")).toEqual("hellotrue");
  expect(z.parse(c, "hellofalse")).toEqual("hellofalse");
  expect(() => z.parse(c, "hello")).toThrow();
  expect(() => z.parse(c, 123)).toThrow();

  // include literal prefix
  const d = z.templateLiteral([z.literal("hello"), z.number()]);
  type d = z.output<typeof d>;
  expectTypeOf<d>().toEqualTypeOf<`hello${number}`>();
  expect(z.parse(d, "hello123")).toEqual("hello123");
  expect(() => z.parse(d, 123)).toThrow();
  expect(() => z.parse(d, "world123")).toThrow();

  // include literal union
  const e = z.templateLiteral([z.literal(["aa", "bb"]), z.number()]);
  type e = z.output<typeof e>;
  expectTypeOf<e>().toEqualTypeOf<`aa${number}` | `bb${number}`>();
  expect(z.parse(e, "aa123")).toEqual("aa123");
  expect(z.parse(e, "bb123")).toEqual("bb123");
  expect(() => z.parse(e, "cc123")).toThrow();
  expect(() => z.parse(e, 123)).toThrow();
});

// this returns both a schema and a check
test("z.custom schema", () => {
  const a = z.custom((val) => {
    return typeof val === "string";
  });
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.custom check", () => {
  // @ts-expect-error Inference not possible, use z.refine()
  z.date().check(z.custom((val) => val.getTime() > 0));
});

test("z.check", () => {
  // this is a more flexible version of z.custom that accepts an arbitrary _parse logic
  // the function should return base.$ZodResult
  const a = z.any().check(
    z.check<string>((ctx) => {
      if (typeof ctx.value === "string") return;
      ctx.issues.push({
        code: "custom",
        origin: "custom",
        message: "Expected a string",
        input: ctx.value,
      });
    })
  );
  expect(z.safeParse(a, "hello")).toMatchObject({
    success: true,
    data: "hello",
  });
  expect(z.safeParse(a, 123)).toMatchObject({
    success: false,
    error: { issues: [{ code: "custom", message: "Expected a string" }] },
  });
});

test("z.instanceof", () => {
  class A {}

  const a = z.instanceof(A);
  expect(z.parse(a, new A())).toBeInstanceOf(A);
  expect(() => z.parse(a, {})).toThrow();
});

test("z.refine", () => {
  const a = z.number().check(
    z.refine((val) => val > 3),
    z.refine((val) => val < 10)
  );
  expect(z.parse(a, 5)).toEqual(5);
  expect(() => z.parse(a, 2)).toThrow();
  expect(() => z.parse(a, 11)).toThrow();
  expect(() => z.parse(a, "hi")).toThrow();
});

// test("z.superRefine", () => {
//   const a = z.number([
//     z.superRefine((val, ctx) => {
//       if (val < 3) {
//         return ctx.addIssue({
//           code: "custom",
//           origin: "custom",
//           message: "Too small",
//           input: val,
//         });
//       }
//       if (val > 10) {
//         return ctx.addIssue("Too big");
//       }
//     }),
//   ]);

//   expect(z.parse(a, 5)).toEqual(5);
//   expect(() => z.parse(a, 2)).toThrow();
//   expect(() => z.parse(a, 11)).toThrow();
//   expect(() => z.parse(a, "hi")).toThrow();
// });

test("z.transform", () => {
  const a = z.transform((val: number) => {
    return `${val}`;
  });
  type a_in = z.input<typeof a>;
  expectTypeOf<a_in>().toEqualTypeOf<number>();
  type a_out = z.output<typeof a>;
  expectTypeOf<a_out>().toEqualTypeOf<string>();
  expect(z.parse(a, 123)).toEqual("123");
});

test("z.$brand()", () => {
  const a = z.string().brand<"my-brand">();
  type a = z.output<typeof a>;
  const branded = (_: a) => {};
  // @ts-expect-error
  branded("asdf");
});

test("z.lazy", () => {
  const a = z.lazy(() => z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, 123)).toThrow();
});

// schema that validates JSON-like data
test("z.json", () => {
  const a = z.json();
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<util.JSONType>();

  expect(z.parse(a, "hello")).toEqual("hello");
  expect(z.parse(a, 123)).toEqual(123);
  expect(z.parse(a, true)).toEqual(true);
  expect(z.parse(a, null)).toEqual(null);
  expect(z.parse(a, {})).toEqual({});
  expect(z.parse(a, { a: "hello" })).toEqual({ a: "hello" });
  expect(z.parse(a, [1, 2, 3])).toEqual([1, 2, 3]);
  expect(z.parse(a, [{ a: "hello" }])).toEqual([{ a: "hello" }]);

  // fail cases
  expect(() => z.parse(a, new Date())).toThrow();
  expect(() => z.parse(a, Symbol())).toThrow();
  expect(() => z.parse(a, { a: new Date() })).toThrow();
  expect(() => z.parse(a, undefined)).toThrow();
  expect(() => z.parse(a, { a: undefined })).toThrow();
});

// promise
test("z.promise", async () => {
  const a = z.promise(z.string());
  type a = z.output<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();

  expect(await z.safeParseAsync(a, Promise.resolve("hello"))).toMatchObject({
    success: true,
    data: "hello",
  });
  expect(await z.safeParseAsync(a, Promise.resolve(123))).toMatchObject({
    success: false,
  });

  const b = z.string();
  expect(() => z.parse(b, Promise.resolve("hello"))).toThrow();
});
// test("type assertions", () => {
//   const schema = z.pipe(
//     z.string(),
//     z.transform((val) => val.length)
//   );
//   schema.assertInput<string>();
//   // @ts-expect-error
//   schema.assertInput<number>();

//   schema.assertOutput<number>();
//   // @ts-expect-error
//   schema.assertOutput<string>();
// });

test("isPlainObject", () => {
  expect(z.core.util.isPlainObject({})).toEqual(true);
  expect(z.core.util.isPlainObject(Object.create(null))).toEqual(true);
  expect(z.core.util.isPlainObject([])).toEqual(false);
  expect(z.core.util.isPlainObject(new Date())).toEqual(false);
  expect(z.core.util.isPlainObject(null)).toEqual(false);
  expect(z.core.util.isPlainObject(undefined)).toEqual(false);
  expect(z.core.util.isPlainObject("string")).toEqual(false);
  expect(z.core.util.isPlainObject(123)).toEqual(false);
  expect(z.core.util.isPlainObject(Symbol())).toEqual(false);
});

test("def typing", () => {
  z.string().def.type satisfies "string";
  z.number().def.type satisfies "number";
  z.bigint().def.type satisfies "bigint";
  z.boolean().def.type satisfies "boolean";
  z.date().def.type satisfies "date";
  z.symbol().def.type satisfies "symbol";
  z.undefined().def.type satisfies "undefined";
  z.string().nullable().def.type satisfies "nullable";
  z.null().def.type satisfies "null";
  z.any().def.type satisfies "any";
  z.unknown().def.type satisfies "unknown";
  z.never().def.type satisfies "never";
  z.void().def.type satisfies "void";
  z.array(z.string()).def.type satisfies "array";
  z.object({ key: z.string() }).def.type satisfies "object";
  z.union([z.string(), z.number()]).def.type satisfies "union";
  z.intersection(z.string(), z.number()).def.type satisfies "intersection";
  z.tuple([z.string(), z.number()]).def.type satisfies "tuple";
  z.record(z.string(), z.number()).def.type satisfies "record";
  z.map(z.string(), z.number()).def.type satisfies "map";
  z.set(z.string()).def.type satisfies "set";
  z.literal("example").def.type satisfies "literal";
  z.enum(["a", "b", "c"]).def.type satisfies "enum";
  z.promise(z.string()).def.type satisfies "promise";
  z.lazy(() => z.string()).def.type satisfies "lazy";
  z.string().optional().def.type satisfies "optional";
  z.string().default("default").def.type satisfies "default";
  z.templateLiteral([z.literal("a"), z.literal("b")]).def.type satisfies "template_literal";
  z.custom<string>((val) => typeof val === "string").def.type satisfies "custom";
  z.transform((val) => val as string).def.type satisfies "transform";
  z.string().optional().nonoptional().def.type satisfies "nonoptional";
  z.object({ key: z.string() }).readonly().def.type satisfies "readonly";
  z.nan().def.type satisfies "nan";
  z.unknown().pipe(z.number()).def.type satisfies "pipe";
  z.success(z.string()).def.type satisfies "success";
  z.string().catch("fallback").def.type satisfies "catch";
  z.file().def.type satisfies "file";
});
