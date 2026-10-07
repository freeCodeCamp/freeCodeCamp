// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

/// string
const stringSchema = z.string();

test("string async parse", async () => {
  const goodData = "XXX";
  const badData = 12;

  const goodResult = await stringSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await stringSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// number
const numberSchema = z.number();
test("number async parse", async () => {
  const goodData = 1234.2353;
  const badData = "1234";

  const goodResult = await numberSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await numberSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// bigInt
const bigIntSchema = z.bigint();
test("bigInt async parse", async () => {
  const goodData = BigInt(145);
  const badData = 134;

  const goodResult = await bigIntSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await bigIntSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// boolean
const booleanSchema = z.boolean();
test("boolean async parse", async () => {
  const goodData = true;
  const badData = 1;

  const goodResult = await booleanSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await booleanSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// date
const dateSchema = z.date();
test("date async parse", async () => {
  const goodData = new Date();
  const badData = new Date().toISOString();

  const goodResult = await dateSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await dateSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// undefined
const undefinedSchema = z.undefined();
test("undefined async parse", async () => {
  const goodData = undefined;
  const badData = "XXX";

  const goodResult = await undefinedSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(undefined);

  const badResult = await undefinedSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// null
const nullSchema = z.null();
test("null async parse", async () => {
  const goodData = null;
  const badData = undefined;

  const goodResult = await nullSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await nullSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// any
const anySchema = z.any();
test("any async parse", async () => {
  const goodData = [{}];
  // const badData = 'XXX';

  const goodResult = await anySchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  // const badResult = await anySchema.safeParseAsync(badData);
  // expect(badResult.success).toBe(false);
  // if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// unknown
const unknownSchema = z.unknown();
test("unknown async parse", async () => {
  const goodData = ["asdf", 124, () => {}];
  // const badData = 'XXX';

  const goodResult = await unknownSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  // const badResult = await unknownSchema.safeParseAsync(badData);
  // expect(badResult.success).toBe(false);
  // if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// void
const voidSchema = z.void();
test("void async parse", async () => {
  const goodData = undefined;
  const badData = 0;

  const goodResult = await voidSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await voidSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// array
const arraySchema = z.array(z.string());
test("array async parse", async () => {
  const goodData = ["XXX"];
  const badData = "XXX";

  const goodResult = await arraySchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await arraySchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// object
const objectSchema = z.object({ string: z.string() });
test("object async parse", async () => {
  const goodData = { string: "XXX" };
  const badData = { string: 12 };

  const goodResult = await objectSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await objectSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// union
const unionSchema = z.union([z.string(), z.undefined()]);
test("union async parse", async () => {
  const goodData = undefined;
  const badData = null;

  const goodResult = await unionSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await unionSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// record
const recordSchema = z.record(z.object({}));
test("record async parse", async () => {
  const goodData = { adsf: {}, asdf: {} };
  const badData = [{}];

  const goodResult = await recordSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await recordSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// function
const functionSchema = z.function();
test("function async parse", async () => {
  const goodData = () => {};
  const badData = "XXX";

  const goodResult = await functionSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(typeof goodResult.data).toEqual("function");

  const badResult = await functionSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// literal
const literalSchema = z.literal("asdf");
test("literal async parse", async () => {
  const goodData = "asdf";
  const badData = "asdff";

  const goodResult = await literalSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await literalSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// enum
const enumSchema = z.enum(["fish", "whale"]);
test("enum async parse", async () => {
  const goodData = "whale";
  const badData = "leopard";

  const goodResult = await enumSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await enumSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// nativeEnum
enum nativeEnumTest {
  asdf = "qwer",
}
// @ts-ignore
const nativeEnumSchema = z.nativeEnum(nativeEnumTest);
test("nativeEnum async parse", async () => {
  const goodData = nativeEnumTest.asdf;
  const badData = "asdf";

  const goodResult = await nativeEnumSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) expect(goodResult.data).toEqual(goodData);

  const badResult = await nativeEnumSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(false);
  if (!badResult.success) expect(badResult.error).toBeInstanceOf(z.ZodError);
});

/// promise
const promiseSchema = z.promise(z.number());
test("promise async parse good", async () => {
  const goodData = Promise.resolve(123);

  const goodResult = await promiseSchema.safeParseAsync(goodData);
  expect(goodResult.success).toBe(true);
  if (goodResult.success) {
    expect(goodResult.data).toBeInstanceOf(Promise);
    const data = await goodResult.data;
    expect(data).toEqual(123);
    // expect(goodResult.data).resolves.toEqual(124);
    // return goodResult.data;
  } else {
    throw new Error("success should be true");
  }
});

test("promise async parse bad", async () => {
  const badData = Promise.resolve("XXX");
  const badResult = await promiseSchema.safeParseAsync(badData);
  expect(badResult.success).toBe(true);
  if (badResult.success) {
    await expect(badResult.data).rejects.toBeInstanceOf(z.ZodError);
  } else {
    throw new Error("success should be true");
  }
});

test("async validation non-empty strings", async () => {
  const base = z.object({
    hello: z.string().refine((x) => x && x.length > 0),
    foo: z.string().refine((x) => x && x.length > 0),
  });

  const testval = { hello: "", foo: "" };
  const result1 = base.safeParse(testval);
  const result2 = base.safeParseAsync(testval);

  const r1 = result1;
  await result2.then((r2) => {
    if (r1.success === false && r2.success === false) expect(r1.error.issues.length).toBe(r2.error.issues.length); // <--- r1 has length 2, r2 has length 1
  });
});

test("async validation multiple errors 1", async () => {
  const base = z.object({
    hello: z.string(),
    foo: z.number(),
  });

  const testval = { hello: 3, foo: "hello" };
  const result1 = base.safeParse(testval);
  const result2 = base.safeParseAsync(testval);

  const r1 = result1;
  await result2.then((r2) => {
    if (r1.success === false && r2.success === false) expect(r2.error.issues.length).toBe(r1.error.issues.length);
  });
});

test("async validation multiple errors 2", async () => {
  const base = (is_async?: boolean) =>
    z.object({
      hello: z.string(),
      foo: z.object({
        bar: z.number().refine(is_async ? async () => false : () => false),
      }),
    });

  const testval = { hello: 3, foo: { bar: 4 } };
  const result1 = base().safeParse(testval);
  const result2 = base(true).safeParseAsync(testval);

  const r1 = result1;
  await result2.then((r2) => {
    if (r1.success === false && r2.success === false) expect(r2.error.issues.length).toBe(r1.error.issues.length);
  });
});

test("ensure early async failure prevents follow-up refinement checks", async () => {
  let count = 0;
  const base = z.object({
    hello: z.string(),
    foo: z
      .number()
      .refine(async () => {
        count++;
        return true;
      })
      .refine(async () => {
        count++;
        return true;
      }, "Good"),
  });

  const testval = { hello: "bye", foo: 3 };
  const result = await base.safeParseAsync(testval);
  if (result.success === false) {
    expect(result.error.issues.length).toBe(1);
    expect(count).toBe(1);
  }

  // await result.then((r) => {
  //   if (r.success === false) expect(r.error.issues.length).toBe(1);
  //   expect(count).toBe(2);
  // });
});
