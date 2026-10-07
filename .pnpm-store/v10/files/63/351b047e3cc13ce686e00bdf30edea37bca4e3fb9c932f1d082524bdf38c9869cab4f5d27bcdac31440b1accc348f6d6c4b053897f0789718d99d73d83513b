// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { ZodIssueCode } from "../ZodError.js";
import { util } from "../helpers/util.js";

test("refinement", () => {
  const obj1 = z.object({
    first: z.string(),
    second: z.string(),
  });
  const obj2 = obj1.partial().strict();

  const obj3 = obj2.refine((data) => data.first || data.second, "Either first or second should be filled in.");

  expect(obj1 === (obj2 as any)).toEqual(false);
  expect(obj2 === (obj3 as any)).toEqual(false);

  expect(() => obj1.parse({})).toThrow();
  expect(() => obj2.parse({ third: "adsf" })).toThrow();
  expect(() => obj3.parse({})).toThrow();
  obj3.parse({ first: "a" });
  obj3.parse({ second: "a" });
  obj3.parse({ first: "a", second: "a" });
});

test("refinement 2", () => {
  const validationSchema = z
    .object({
      email: z.string().email(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, "Both password and confirmation must match");

  expect(() =>
    validationSchema.parse({
      email: "aaaa@gmail.com",
      password: "aaaaaaaa",
      confirmPassword: "bbbbbbbb",
    })
  ).toThrow();
});

test("refinement type guard", () => {
  const validationSchema = z.object({
    a: z.string().refine((s): s is "a" => s === "a"),
  });
  type Input = z.input<typeof validationSchema>;
  type Schema = z.infer<typeof validationSchema>;

  util.assertEqual<"a", Input["a"]>(false);
  util.assertEqual<string, Input["a"]>(true);

  util.assertEqual<"a", Schema["a"]>(true);
  util.assertEqual<string, Schema["a"]>(false);
});

test("refinement Promise", async () => {
  const validationSchema = z
    .object({
      email: z.string().email(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine(
      (data) => Promise.resolve().then(() => data.password === data.confirmPassword),
      "Both password and confirmation must match"
    );

  await validationSchema.parseAsync({
    email: "aaaa@gmail.com",
    password: "password",
    confirmPassword: "password",
  });
});

test("custom path", async () => {
  const result = await z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.confirm === data.password, { path: ["confirm"] })
    .spa({ password: "asdf", confirm: "qewr" });
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues[0].path).toEqual(["confirm"]);
  }
});

test("use path in refinement context", async () => {
  const noNested = z.string()._refinement((_val, ctx) => {
    if (ctx.path.length > 0) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: `schema cannot be nested. path: ${ctx.path.join(".")}`,
      });
      return false;
    } else {
      return true;
    }
  });

  const data = z.object({
    foo: noNested,
  });

  const t1 = await noNested.spa("asdf");
  const t2 = await data.spa({ foo: "asdf" });

  expect(t1.success).toBe(true);
  expect(t2.success).toBe(false);
  if (t2.success === false) {
    expect(t2.error.issues[0].message).toEqual("schema cannot be nested. path: foo");
  }
});

test("superRefine", () => {
  const Strings = z.array(z.string()).superRefine((val, ctx) => {
    if (val.length > 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        maximum: 3,
        type: "array",
        inclusive: true,
        exact: true,
        message: "Too many items 😡",
      });
    }

    if (val.length !== new Set(val).size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates allowed.`,
      });
    }
  });

  const result = Strings.safeParse(["asfd", "asfd", "asfd", "asfd"]);

  expect(result.success).toEqual(false);
  if (!result.success) expect(result.error.issues.length).toEqual(2);

  Strings.parse(["asfd", "qwer"]);
});

test("superRefine async", async () => {
  const Strings = z.array(z.string()).superRefine(async (val, ctx) => {
    if (val.length > 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        maximum: 3,
        type: "array",
        inclusive: true,
        exact: true,
        message: "Too many items 😡",
      });
    }

    if (val.length !== new Set(val).size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates allowed.`,
      });
    }
  });

  const result = await Strings.safeParseAsync(["asfd", "asfd", "asfd", "asfd"]);

  expect(result.success).toEqual(false);
  if (!result.success) expect(result.error.issues.length).toEqual(2);

  Strings.parseAsync(["asfd", "qwer"]);
});

test("superRefine - type narrowing", () => {
  type NarrowType = { type: string; age: number };
  const schema = z
    .object({
      type: z.string(),
      age: z.number(),
    })
    .nullable()
    .superRefine((arg, ctx): arg is NarrowType => {
      if (!arg) {
        // still need to make a call to ctx.addIssue
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "cannot be null",
          fatal: true,
        });
        return false;
      }
      return true;
    });

  util.assertEqual<z.infer<typeof schema>, NarrowType>(true);

  expect(schema.safeParse({ type: "test", age: 0 }).success).toEqual(true);
  expect(schema.safeParse(null).success).toEqual(false);
});

test("chained mixed refining types", () => {
  type firstRefinement = { first: string; second: number; third: true };
  type secondRefinement = { first: "bob"; second: number; third: true };
  type thirdRefinement = { first: "bob"; second: 33; third: true };
  const schema = z
    .object({
      first: z.string(),
      second: z.number(),
      third: z.boolean(),
    })
    .nullable()
    .refine((arg): arg is firstRefinement => !!arg?.third)
    .superRefine((arg, ctx): arg is secondRefinement => {
      util.assertEqual<typeof arg, firstRefinement>(true);
      if (arg.first !== "bob") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "`first` property must be `bob`",
        });
        return false;
      }
      return true;
    })
    .refine((arg): arg is thirdRefinement => {
      util.assertEqual<typeof arg, secondRefinement>(true);
      return arg.second === 33;
    });

  util.assertEqual<z.infer<typeof schema>, thirdRefinement>(true);
});

test("get inner type", () => {
  z.string()
    .refine(() => true)
    .innerType()
    .parse("asdf");
});

test("chained refinements", () => {
  const objectSchema = z
    .object({
      length: z.number(),
      size: z.number(),
    })
    .refine(({ length }) => length > 5, {
      path: ["length"],
      message: "length greater than 5",
    })
    .refine(({ size }) => size > 7, {
      path: ["size"],
      message: "size greater than 7",
    });
  const r1 = objectSchema.safeParse({
    length: 4,
    size: 9,
  });
  expect(r1.success).toEqual(false);
  if (!r1.success) expect(r1.error.issues.length).toEqual(1);

  const r2 = objectSchema.safeParse({
    length: 4,
    size: 3,
  });
  expect(r2.success).toEqual(false);
  if (!r2.success) expect(r2.error.issues.length).toEqual(2);
});

test("fatal superRefine", () => {
  const Strings = z
    .string()
    .superRefine((val, ctx) => {
      if (val === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "foo",
          fatal: true,
        });
      }
    })
    .superRefine((val, ctx) => {
      if (val !== " ") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "bar",
        });
      }
    });

  const result = Strings.safeParse("");

  expect(result.success).toEqual(false);
  if (!result.success) expect(result.error.issues.length).toEqual(1);
});

test("superRefine after skipped transform", () => {
  const schema = z
    .string()
    .regex(/^\d+$/)
    .transform((val) => Number(val))
    .superRefine((val) => {
      if (typeof val !== "number") {
        throw new Error("Called without transform");
      }
    });

  const result = schema.safeParse("");

  expect(result.success).toEqual(false);
});
