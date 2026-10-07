import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

enum testEnum {
  A = 0,
  B = 1,
}

test("flat inference", () => {
  const readonlyString = z.string().readonly();
  const readonlyNumber = z.number().readonly();
  const readonlyNaN = z.nan().readonly();
  const readonlyBigInt = z.bigint().readonly();
  const readonlyBoolean = z.boolean().readonly();
  const readonlyDate = z.date().readonly();
  const readonlyUndefined = z.undefined().readonly();
  const readonlyNull = z.null().readonly();
  const readonlyAny = z.any().readonly();
  const readonlyUnknown = z.unknown().readonly();
  const readonlyVoid = z.void().readonly();
  const readonlyStringArray = z.array(z.string()).readonly();
  const readonlyTuple = z.tuple([z.string(), z.number()]).readonly();
  const readonlyMap = z.map(z.string(), z.date()).readonly();
  const readonlySet = z.set(z.string()).readonly();
  const readonlyStringRecord = z.record(z.string(), z.string()).readonly();
  const readonlyNumberRecord = z.record(z.string(), z.number()).readonly();
  const readonlyObject = z.object({ a: z.string(), 1: z.number() }).readonly();
  const readonlyEnum = z.nativeEnum(testEnum).readonly();
  const readonlyPromise = z.promise(z.string()).readonly();

  expectTypeOf<typeof readonlyString._output>().toEqualTypeOf<string>();
  expectTypeOf<typeof readonlyNumber._output>().toEqualTypeOf<number>();
  expectTypeOf<typeof readonlyNaN._output>().toEqualTypeOf<number>();
  expectTypeOf<typeof readonlyBigInt._output>().toEqualTypeOf<bigint>();
  expectTypeOf<typeof readonlyBoolean._output>().toEqualTypeOf<boolean>();
  expectTypeOf<typeof readonlyDate._output>().toEqualTypeOf<Date>();
  expectTypeOf<typeof readonlyUndefined._output>().toEqualTypeOf<undefined>();
  expectTypeOf<typeof readonlyNull._output>().toEqualTypeOf<null>();
  expectTypeOf<typeof readonlyAny._output>().toEqualTypeOf<any>();
  expectTypeOf<typeof readonlyUnknown._output>().toEqualTypeOf<Readonly<unknown>>();
  expectTypeOf<typeof readonlyVoid._output>().toEqualTypeOf<void>();
  expectTypeOf<typeof readonlyStringArray._output>().toEqualTypeOf<readonly string[]>();
  expectTypeOf<typeof readonlyTuple._output>().toEqualTypeOf<readonly [string, number]>();
  expectTypeOf<typeof readonlyMap._output>().toEqualTypeOf<ReadonlyMap<string, Date>>();
  expectTypeOf<typeof readonlySet._output>().toEqualTypeOf<ReadonlySet<string>>();
  expectTypeOf<typeof readonlyStringRecord._output>().toEqualTypeOf<Readonly<Record<string, string>>>();
  expectTypeOf<typeof readonlyNumberRecord._output>().toEqualTypeOf<Readonly<Record<string, number>>>();
  expectTypeOf<typeof readonlyObject._output>().toEqualTypeOf<{ readonly a: string; readonly 1: number }>();
  expectTypeOf<typeof readonlyEnum._output>().toEqualTypeOf<Readonly<testEnum>>();
  expectTypeOf<typeof readonlyPromise._output>().toEqualTypeOf<string>();
});

// test("deep inference", () => {
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[0]>>().toEqualTypeOf<string>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[1]>>().toEqualTypeOf<number>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[2]>>().toEqualTypeOf<number>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[3]>>().toEqualTypeOf<bigint>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[4]>>().toEqualTypeOf<boolean>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[5]>>().toEqualTypeOf<Date>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[6]>>().toEqualTypeOf<undefined>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[7]>>().toEqualTypeOf<null>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[8]>>().toEqualTypeOf<any>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[9]>
//   >().toEqualTypeOf<Readonly<unknown>>();
//   expectTypeOf<z.infer<(typeof deepReadonlySchemas_0)[10]>>().toEqualTypeOf<void>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[11]>
//   >().toEqualTypeOf<(args_0: string, args_1: number, ...args_2: unknown[]) => unknown>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[12]>
//   >().toEqualTypeOf<readonly string[]>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[13]>
//   >().toEqualTypeOf<readonly [string, number]>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[14]>
//   >().toEqualTypeOf<ReadonlyMap<string, Date>>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[15]>
//   >().toEqualTypeOf<ReadonlySet<Promise<string>>>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[16]>
//   >().toEqualTypeOf<Readonly<Record<string, string>>>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[17]>
//   >().toEqualTypeOf<Readonly<Record<string, number>>>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[18]>
//   >().toEqualTypeOf<{ readonly a: string; readonly 1: number }>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[19]>
//   >().toEqualTypeOf<Readonly<testEnum>>();
//   expectTypeOf<
//     z.infer<(typeof deepReadonlySchemas_0)[20]>
//   >().toEqualTypeOf<Promise<string>>();

//   expectTypeOf<
//     z.infer<typeof crazyDeepReadonlySchema>
//   >().toEqualTypeOf<ReadonlyMap<
//     ReadonlySet<readonly [string, number]>,
//     {
//       readonly a: {
//         readonly [x: string]: readonly any[];
//       };
//       readonly b: {
//         readonly c: {
//           readonly d: {
//             readonly e: {
//               readonly f: {
//                 readonly g?: {};
//               };
//             };
//           };
//         };
//       };
//     }
//   >>();
// });

test("object freezing", async () => {
  expect(Object.isFrozen(z.array(z.string()).readonly().parse(["a"]))).toBe(true);
  expect(Object.isFrozen(z.tuple([z.string(), z.number()]).readonly().parse(["a", 1]))).toBe(true);
  expect(
    Object.isFrozen(
      z
        .map(z.string(), z.date())
        .readonly()
        .parse(new Map([["a", new Date()]]))
    )
  ).toBe(true);

  expect(Object.isFrozen(z.record(z.string(), z.string()).readonly().parse({ a: "b" }))).toBe(true);
  expect(Object.isFrozen(z.record(z.string(), z.number()).readonly().parse({ a: 1 }))).toBe(true);
  expect(Object.isFrozen(z.object({ a: z.string(), 1: z.number() }).readonly().parse({ a: "b", 1: 2 }))).toBe(true);
  expect(
    Object.isFrozen(
      await z
        .set(z.promise(z.string()))
        .readonly()
        .parseAsync(new Set([Promise.resolve("a")]))
    )
  ).toBe(true);
  expect(Object.isFrozen(await z.promise(z.string()).readonly().parseAsync(Promise.resolve("a")))).toBe(true);
});

test("async object freezing", async () => {
  expect(Object.isFrozen(await z.array(z.string()).readonly().parseAsync(["a"]))).toBe(true);
  expect(Object.isFrozen(await z.tuple([z.string(), z.number()]).readonly().parseAsync(["a", 1]))).toBe(true);
  expect(
    Object.isFrozen(
      await z
        .map(z.string(), z.date())
        .readonly()
        .parseAsync(new Map([["a", new Date()]]))
    )
  ).toBe(true);
  expect(
    Object.isFrozen(
      await z
        .set(z.promise(z.string()))
        .readonly()
        .parseAsync(new Set([Promise.resolve("a")]))
    )
  ).toBe(true);
  expect(Object.isFrozen(await z.record(z.string(), z.string()).readonly().parseAsync({ a: "b" }))).toBe(true);
  expect(Object.isFrozen(await z.record(z.string(), z.number()).readonly().parseAsync({ a: 1 }))).toBe(true);
  expect(
    Object.isFrozen(await z.object({ a: z.string(), 1: z.number() }).readonly().parseAsync({ a: "b", 1: 2 }))
  ).toBe(true);
  expect(Object.isFrozen(await z.promise(z.string()).readonly().parseAsync(Promise.resolve("a")))).toBe(true);
});

test("readonly inference", () => {
  const readonlyStringArray = z.string().array().readonly();
  const readonlyStringTuple = z.tuple([z.string()]).readonly();
  const deepReadonly = z.object({ a: z.string() }).readonly();

  type readonlyStringArray = z.infer<typeof readonlyStringArray>;
  type readonlyStringTuple = z.infer<typeof readonlyStringTuple>;
  type deepReadonly = z.infer<typeof deepReadonly>;

  expectTypeOf<readonlyStringArray>().toEqualTypeOf<readonly string[]>();
  expectTypeOf<readonlyStringTuple>().toEqualTypeOf<readonly [string]>();
  expectTypeOf<deepReadonly>().toEqualTypeOf<{ readonly a: string }>();
});

test("readonly parse", () => {
  const schema = z.array(z.string()).readonly();
  const readonlyArray = ["a", "b", "c"] as const;
  const mutableArray = ["a", "b", "c"];
  const result1 = schema.parse(readonlyArray);
  const result2 = schema.parse(mutableArray);
  expect(result1).toEqual(readonlyArray);
  expect(result2).toEqual(mutableArray);
});

test("readonly parse with tuples", () => {
  const schema = z.tuple([z.string(), z.number()]).readonly();
  schema.parse(["a", 1]);
});

test("readonly and the get method", () => {
  const readonlyString = z.string().readonly();
  const readonlyNumber1 = z.number().readonly();
  const readonlyNumber2 = z.number().readonly();
  const readonlyBigInt = z.bigint().readonly();
  const readonlyBoolean = z.boolean().readonly();
  const readonlyDate = z.date().readonly();
  const readonlyUndefined = z.undefined().readonly();
  const readonlyNull = z.null().readonly();
  const readonlyAny = z.any().readonly();
  const readonlyUnknown = z.unknown().readonly();
  const readonlyVoid = z.void().readonly();
  // const readonlyFunction = z.function(z.tuple([z.string(), z.number()]), z.unknown()).readonly();
  const readonlyStringArray = z.string().array().readonly();
  const readonlyTuple = z.tuple([z.string(), z.number()]).readonly();

  expectTypeOf<z.infer<typeof readonlyString>>().toEqualTypeOf<string>();
  expectTypeOf<z.infer<typeof readonlyNumber1>>().toEqualTypeOf<number>();
  expectTypeOf<z.infer<typeof readonlyNumber2>>().toEqualTypeOf<number>();
  expectTypeOf<z.infer<typeof readonlyBigInt>>().toEqualTypeOf<bigint>();
  expectTypeOf<z.infer<typeof readonlyBoolean>>().toEqualTypeOf<boolean>();
  expectTypeOf<z.infer<typeof readonlyDate>>().toEqualTypeOf<Date>();
  expectTypeOf<z.infer<typeof readonlyUndefined>>().toEqualTypeOf<undefined>();
  expectTypeOf<z.infer<typeof readonlyNull>>().toEqualTypeOf<null>();
  expectTypeOf<z.infer<typeof readonlyAny>>().toEqualTypeOf<any>();
  expectTypeOf<z.infer<typeof readonlyUnknown>>().toEqualTypeOf<Readonly<unknown>>();
  expectTypeOf<z.infer<typeof readonlyVoid>>().toEqualTypeOf<void>();
  // expectTypeOf<z.infer<typeof readonlyFunction>>().toEqualTypeOf<
  //   (args_0: string, args_1: number, ...args_2: unknown[]) => unknown
  // >();
  expectTypeOf<z.infer<typeof readonlyStringArray>>().toEqualTypeOf<readonly string[]>();
  expectTypeOf<z.infer<typeof readonlyTuple>>().toEqualTypeOf<readonly [string, number]>();

  expect(readonlyString.parse("asdf")).toEqual("asdf");
  expect(readonlyNumber1.parse(1234)).toEqual(1234);
  expect(readonlyNumber2.parse(1234)).toEqual(1234);
  const bigIntVal = BigInt(1);
  expect(readonlyBigInt.parse(bigIntVal)).toEqual(bigIntVal);
  expect(readonlyBoolean.parse(true)).toEqual(true);
  const dateVal = new Date();
  expect(readonlyDate.parse(dateVal)).toEqual(dateVal);
  expect(readonlyUndefined.parse(undefined)).toEqual(undefined);
  expect(readonlyNull.parse(null)).toEqual(null);
  expect(readonlyAny.parse("whatever")).toEqual("whatever");
  expect(readonlyUnknown.parse("whatever")).toEqual("whatever");
  expect(readonlyVoid.parse(undefined)).toEqual(undefined);
  // expect(readonlyFunction.parse(() => void 0)).toEqual(() => void 0);
  expect(readonlyStringArray.parse(["asdf"])).toEqual(["asdf"]);
  expect(readonlyTuple.parse(["asdf", 1234])).toEqual(["asdf", 1234]);
});
