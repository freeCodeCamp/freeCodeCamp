// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

const args1 = z.tuple([z.string()]);
const returns1 = z.number();
const func1 = z.function(args1, returns1);

test("function parsing", () => {
  const parsed = func1.parse((arg: any) => arg.length);
  parsed("asdf");
});

test("parsed function fail 1", () => {
  const parsed = func1.parse((x: string) => x);
  expect(() => parsed("asdf")).toThrow();
});

test("parsed function fail 2", () => {
  const parsed = func1.parse((x: string) => x);
  expect(() => parsed(13 as any)).toThrow();
});

test("function inference 1", () => {
  type func1 = z.TypeOf<typeof func1>;
  util.assertEqual<func1, (k: string) => number>(true);
});

test("method parsing", () => {
  const methodObject = z.object({
    property: z.number(),
    method: z.function().args(z.string()).returns(z.number()),
  });
  const methodInstance = {
    property: 3,
    method: function (s: string) {
      return s.length + this.property;
    },
  };
  const parsed = methodObject.parse(methodInstance);
  expect(parsed.method("length=8")).toBe(11); // 8 length + 3 property
});

test("async method parsing", async () => {
  const methodObject = z.object({
    property: z.number(),
    method: z.function().args(z.string()).returns(z.promise(z.number())),
  });
  const methodInstance = {
    property: 3,
    method: async function (s: string) {
      return s.length + this.property;
    },
  };
  const parsed = methodObject.parse(methodInstance);
  expect(await parsed.method("length=8")).toBe(11); // 8 length + 3 property
});

test("args method", () => {
  const t1 = z.function();
  type t1 = z.infer<typeof t1>;
  util.assertEqual<t1, (...args_1: unknown[]) => unknown>(true);

  const t2 = t1.args(z.string());
  type t2 = z.infer<typeof t2>;
  util.assertEqual<t2, (arg: string, ...args_1: unknown[]) => unknown>(true);

  const t3 = t2.returns(z.boolean());
  type t3 = z.infer<typeof t3>;
  util.assertEqual<t3, (arg: string, ...args_1: unknown[]) => boolean>(true);
});

const args2 = z.tuple([
  z.object({
    f1: z.number(),
    f2: z.string().nullable(),
    f3: z.array(z.boolean().optional()).optional(),
  }),
]);
const returns2 = z.union([z.string(), z.number()]);

const func2 = z.function(args2, returns2);

test("function inference 2", () => {
  type func2 = z.TypeOf<typeof func2>;
  util.assertEqual<
    func2,
    (arg: {
      f1: number;
      f2: string | null;
      f3?: (boolean | undefined)[] | undefined;
    }) => string | number
  >(true);
});

test("valid function run", () => {
  const validFunc2Instance = func2.validate((_x) => {
    return "adf" as any;
  });

  const checker = () => {
    validFunc2Instance({
      f1: 21,
      f2: "asdf",
      f3: [true, false],
    });
  };

  checker();
});

test("input validation error", () => {
  const invalidFuncInstance = func2.validate((_x) => {
    return "adf" as any;
  });

  const checker = () => {
    invalidFuncInstance("Invalid_input" as any);
  };

  expect(checker).toThrow();
});

test("output validation error", () => {
  const invalidFuncInstance = func2.validate((_x) => {
    return ["this", "is", "not", "valid", "output"] as any;
  });

  const checker = () => {
    invalidFuncInstance({
      f1: 21,
      f2: "asdf",
      f3: [true, false],
    });
  };

  expect(checker).toThrow();
});

z.function(z.tuple([z.string()])).args()._def.args;

test("special function error codes", () => {
  const checker = z.function(z.tuple([z.string()]), z.boolean()).implement((arg) => {
    return arg.length as any;
  });
  try {
    checker("12" as any);
  } catch (err) {
    const zerr = err as z.ZodError;
    const first = zerr.issues[0];
    if (first.code !== z.ZodIssueCode.invalid_return_type) throw new Error();

    expect(first.returnTypeError).toBeInstanceOf(z.ZodError);
  }

  try {
    checker(12 as any);
  } catch (err) {
    const zerr = err as z.ZodError;
    const first = zerr.issues[0];
    if (first.code !== z.ZodIssueCode.invalid_arguments) throw new Error();
    expect(first.argumentsError).toBeInstanceOf(z.ZodError);
  }
});

test("function with async refinements", async () => {
  const func = z
    .function()
    .args(z.string().refine(async (val) => val.length > 10))
    .returns(z.promise(z.number().refine(async (val) => val > 10)))
    .implement(async (val) => {
      return val.length;
    });
  const results = [];
  try {
    await func("asdfasdf");
    results.push("success");
  } catch (_err) {
    results.push("fail");
  }
  try {
    await func("asdflkjasdflkjsf");
    results.push("success");
  } catch (_err) {
    results.push("fail");
  }

  expect(results).toEqual(["fail", "success"]);
});

test("non async function with async refinements should fail", async () => {
  const func = z
    .function()
    .args(z.string().refine(async (val) => val.length > 10))
    .returns(z.number().refine(async (val) => val > 10))
    .implement((val) => {
      return val.length;
    });

  const results = [];
  try {
    await func("asdasdfasdffasdf");
    results.push("success");
  } catch (_err) {
    results.push("fail");
  }

  expect(results).toEqual(["fail"]);
});

test("allow extra parameters", () => {
  const maxLength5 = z
    .function()
    .args(z.string())
    .returns(z.boolean())
    .implement((str, _arg, _qewr) => {
      return str.length <= 5;
    });

  const filteredList = ["apple", "orange", "pear", "banana", "strawberry"].filter(maxLength5);
  expect(filteredList.length).toEqual(2);
});

test("params and returnType getters", () => {
  const func = z.function().args(z.string()).returns(z.string());

  func.parameters().items[0].parse("asdf");
  func.returnType().parse("asdf");
});

test("inference with transforms", () => {
  const funcSchema = z
    .function()
    .args(z.string().transform((val) => val.length))
    .returns(z.object({ val: z.number() }));
  const myFunc = funcSchema.implement((val) => {
    return { val, extra: "stuff" };
  });
  myFunc("asdf");

  util.assertEqual<typeof myFunc, (arg: string, ...args_1: unknown[]) => { val: number; extra: string }>(true);
});

test("fallback to OuterTypeOfFunction", () => {
  const funcSchema = z
    .function()
    .args(z.string().transform((val) => val.length))
    .returns(z.object({ arg: z.number() }).transform((val) => val.arg));

  const myFunc = funcSchema.implement((val) => {
    return { arg: val, arg2: false };
  });

  util.assertEqual<typeof myFunc, (arg: string, ...args_1: unknown[]) => number>(true);
});
