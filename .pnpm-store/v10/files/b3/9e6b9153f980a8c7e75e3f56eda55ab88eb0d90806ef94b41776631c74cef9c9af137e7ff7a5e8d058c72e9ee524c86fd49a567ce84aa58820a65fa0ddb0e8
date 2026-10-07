import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

const args1 = z.tuple([z.string()]);
const returns1 = z.number();
const func1 = z.function({
  input: args1,

  output: returns1,
});

test("function parsing", () => {
  const parsed = func1.implement((arg: any) => arg.length);
  const result = parsed("asdf");
  expect(result).toBe(4);
});

test("parsed function fail 1", () => {
  // @ts-expect-error
  const parsed = func1.implement((x: string) => x);
  expect(() => parsed("asdf")).toThrow();
});

test("parsed function fail 2", () => {
  // @ts-expect-error
  const parsed = func1.implement((x: string) => x);
  expect(() => parsed(13 as any)).toThrow();
});

test("function inference 1", () => {
  type func1 = (typeof func1)["_input"];
  expectTypeOf<func1>().toEqualTypeOf<(k: string) => number>();
});

// test("method parsing", () => {
//   const methodObject = z.object({
//     property: z.number(),
//     method: z
//       .function()
//       .input(z.tuple([z.string()]))
//       .output(z.number()),
//   });
//   const methodInstance = {
//     property: 3,
//     method: function (s: string) {
//       return s.length + this.property;
//     },
//   };
//   const parsed = methodObject.parse(methodInstance);
//   expect(parsed.method("length=8")).toBe(11); // 8 length + 3 property
// });

// test("async method parsing", async () => {
//   const methodObject = z.object({
//     property: z.number(),
//     method: z.function().input(z.string()).output(z.promise(z.number())),
//   });
//   const methodInstance = {
//     property: 3,
//     method: async function (s: string) {
//       return s.length + this.property;
//     },
//   };
//   const parsed = methodObject.parse(methodInstance);
//   expect(await parsed.method("length=8")).toBe(11); // 8 length + 3 property
// });

test("args method", () => {
  const t1 = z.function();
  type t1 = (typeof t1)["_input"];
  expectTypeOf<t1>().toEqualTypeOf<(...args_1: never[]) => unknown>();
  t1._input;

  const t2args = z.tuple([z.string()], z.unknown());

  const t2 = t1.input(t2args);
  type t2 = (typeof t2)["_input"];
  expectTypeOf<t2>().toEqualTypeOf<(arg: string, ...args_1: unknown[]) => unknown>();

  const t3 = t2.output(z.boolean());
  type t3 = (typeof t3)["_input"];
  expectTypeOf<t3>().toEqualTypeOf<(arg: string, ...args_1: unknown[]) => boolean>();
});

// test("custom args", () => {
//   const fn = z.function().implement((_a: string, _b: number) => {
//     return new Date();
//   });

//   expectTypeOf(fn).toEqualTypeOf<(a: string, b: number) => Date>();
// });

const args2 = z.tuple([
  z.object({
    f1: z.number(),
    f2: z.string().nullable(),
    f3: z.array(z.boolean().optional()).optional(),
  }),
]);
const returns2 = z.union([z.string(), z.number()]);

const func2 = z.function({
  input: args2,
  output: returns2,
});

test("function inference 2", () => {
  type func2 = (typeof func2)["_input"];

  expectTypeOf<func2>().toEqualTypeOf<
    (arg: {
      f3?: (boolean | undefined)[] | undefined;
      f1: number;
      f2: string | null;
    }) => string | number
  >();
});

test("valid function run", () => {
  const validFunc2Instance = func2.implement((_x) => {
    _x.f2;
    _x.f3![0];
    return "adf" as any;
  });

  validFunc2Instance({
    f1: 21,
    f2: "asdf",
    f3: [true, false],
  });
});

test("input validation error", () => {
  const schema = z.function({
    input: z.tuple([z.string()]),
    output: z.void(),
  });
  const fn = schema.implement(() => 1234 as any);

  // @ts-expect-error
  const checker = () => fn();

  try {
    checker();
  } catch (e: any) {
    expect(e.issues).toMatchInlineSnapshot(`
      [
        {
          "code": "invalid_type",
          "expected": "string",
          "message": "Invalid input: expected string, received undefined",
          "path": [
            0,
          ],
        },
      ]
    `);
  }
});

test("array inputs", () => {
  const a = z.function({
    input: [
      z.object({
        name: z.string(),
        age: z.number().int(),
      }),
    ],
    output: z.string(),
  });

  a.implement((args) => {
    return `${args.age}`;
  });

  const b = z.function({
    input: [
      z.object({
        name: z.string(),
        age: z.number().int(),
      }),
    ],
  });
  b.implement((args) => {
    return `${args.age}`;
  });
});

test("output validation error", () => {
  const schema = z.function({
    input: z.tuple([]),
    output: z.string(),
  });
  const fn = schema.implement(() => 1234 as any);
  try {
    fn();
  } catch (e: any) {
    expect(e.issues).toMatchInlineSnapshot(`
      [
        {
          "code": "invalid_type",
          "expected": "string",
          "message": "Invalid input: expected string, received number",
          "path": [],
        },
      ]
    `);
  }
});

test("function with async refinements", async () => {
  const schema = z
    .function()
    .input([z.string().refine(async (val) => val.length > 10)])
    .output(z.promise(z.number().refine(async (val) => val > 10)));

  const func = schema.implementAsync(async (val) => {
    return val.length;
  });
  const results = [];
  try {
    await func("asdfasdf");
    results.push("success");
  } catch (_) {
    results.push("fail");
  }
  try {
    await func("asdflkjasdflkjsf");
    results.push("success");
  } catch (_) {
    results.push("fail");
  }

  expect(results).toEqual(["fail", "success"]);
});

test("non async function with async refinements should fail", async () => {
  const func = z
    .function()
    .input([z.string().refine(async (val) => val.length > 10)])
    .output(z.number().refine(async (val) => val > 10))
    .implement((val) => {
      return val.length;
    });

  const results = [];
  try {
    await func("asdasdfasdffasdf");
    results.push("success");
  } catch (_) {
    results.push("fail");
  }

  expect(results).toEqual(["fail"]);
});

test("extra parameters with rest", () => {
  const maxLength5 = z
    .function()
    .input([z.string()], z.unknown())
    .output(z.boolean())
    .implement((str, _arg, _qewr) => {
      return str.length <= 5;
    });

  const filteredList = ["apple", "orange", "pear", "banana", "strawberry"].filter(maxLength5);
  expect(filteredList.length).toEqual(2);
});
