import { describe, expect, test } from "vitest";
import * as z from "zod/v4";

describe("basic refinement functionality", () => {
  test("should create a new schema instance when refining", () => {
    const obj1 = z.object({
      first: z.string(),
      second: z.string(),
    });
    const obj2 = obj1.partial().strict();
    const obj3 = obj2.refine((data) => data.first || data.second, "Either first or second should be filled in.");

    expect(obj1 === (obj2 as any)).toEqual(false);
    expect(obj2 === (obj3 as any)).toEqual(false);
  });

  test("should validate according to refinement logic", () => {
    const schema = z
      .object({
        first: z.string(),
        second: z.string(),
      })
      .partial()
      .strict()
      .refine((data) => data.first || data.second, "Either first or second should be filled in.");

    // Should fail on empty object
    expect(() => schema.parse({})).toThrow();

    // Should pass with first property
    expect(schema.parse({ first: "a" })).toEqual({ first: "a" });

    // Should pass with second property
    expect(schema.parse({ second: "a" })).toEqual({ second: "a" });

    // Should pass with both properties
    expect(schema.parse({ first: "a", second: "a" })).toEqual({ first: "a", second: "a" });
  });

  test("should validate strict mode correctly", () => {
    const schema = z
      .object({
        first: z.string(),
        second: z.string(),
      })
      .partial()
      .strict();

    // Should throw on extra properties
    expect(() => schema.parse({ third: "adsf" })).toThrow();
  });
});

describe("refinement with custom error messages", () => {
  test("should use custom error message when validation fails", () => {
    const validationSchema = z
      .object({
        email: z.string().email(),
        password: z.string(),
        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, "Both password and confirmation must match");

    const result = validationSchema.safeParse({
      email: "aaaa@gmail.com",
      password: "aaaaaaaa",
      confirmPassword: "bbbbbbbb",
    });

    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toEqual("Both password and confirmation must match");
    }
  });
});

describe("async refinements", () => {
  test("should support async refinement functions", async () => {
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

    // Should pass with matching passwords
    const validData = {
      email: "aaaa@gmail.com",
      password: "password",
      confirmPassword: "password",
    };

    await expect(validationSchema.parseAsync(validData)).resolves.toEqual(validData);

    // Should fail with non-matching passwords
    await expect(
      validationSchema.parseAsync({
        email: "aaaa@gmail.com",
        password: "password",
        confirmPassword: "different",
      })
    ).rejects.toThrow();
  });
});

describe("early termination options", () => {
  test("should abort early with continue: false", () => {
    const schema = z
      .string()
      .superRefine((val, ctx) => {
        if (val.length < 2) {
          ctx.addIssue({
            code: "custom",
            message: "BAD",
            continue: false,
          });
        }
      })
      .refine((_) => false);

    const result = schema.safeParse("");
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(1);
      expect(result.error.issues[0].message).toEqual("BAD");
    }
  });

  test("should abort early with fatal: true", () => {
    const schema = z
      .string()
      .superRefine((val, ctx) => {
        if (val.length < 2) {
          ctx.addIssue({
            code: "custom",
            fatal: true,
            message: "BAD",
          });
        }
      })
      .refine((_) => false);

    const result = schema.safeParse("");
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(1);
      expect(result.error.issues[0].message).toEqual("BAD");
    }
  });

  test("should abort early with abort flag", () => {
    const schema = z
      .string()
      .refine((_) => false, { abort: true })
      .refine((_) => false);

    const result = schema.safeParse("");
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(1);
    }
  });
});

describe("custom error paths", () => {
  test("should use custom path in error message", async () => {
    const result = await z
      .object({ password: z.string(), confirm: z.string() })
      .refine((data) => data.confirm === data.password, { path: ["confirm"] })
      .safeParse({ password: "asdf", confirm: "qewr" });

    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(["confirm"]);
    }
  });
});

describe("superRefine functionality", () => {
  test("should support multiple validation rules", () => {
    const Strings = z.array(z.string()).superRefine((val, ctx) => {
      if (val.length > 3) {
        ctx.addIssue({
          input: val,
          code: "too_big",
          origin: "array",
          maximum: 3,
          inclusive: true,
          exact: true,
          message: "Too many items 😡",
        });
      }

      if (val.length !== new Set(val).size) {
        ctx.addIssue({
          input: val,
          code: "custom",
          message: `No duplicates allowed.`,
        });
      }
    });

    // Should fail with too many items and duplicates
    const result = Strings.safeParse(["asfd", "asfd", "asfd", "asfd"]);
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(2);
      expect(result.error.issues[0].message).toEqual("Too many items 😡");
      expect(result.error.issues[1].message).toEqual("No duplicates allowed.");
    }

    // Should pass with valid input
    const validArray = ["asfd", "qwer"];
    expect(Strings.parse(validArray)).toEqual(validArray);
  });

  test("should support async superRefine", async () => {
    const Strings = z.array(z.string()).superRefine(async (val, ctx) => {
      if (val.length > 3) {
        ctx.addIssue({
          input: val,
          code: "too_big",
          origin: "array",
          maximum: 3,
          inclusive: true,
          message: "Too many items 😡",
        });
      }

      if (val.length !== new Set(val).size) {
        ctx.addIssue({
          input: val,
          code: "custom",
          message: `No duplicates allowed.`,
        });
      }
    });

    // Should fail with too many items and duplicates
    const result = await Strings.safeParseAsync(["asfd", "asfd", "asfd", "asfd"]);
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(2);
    }

    // Should pass with valid input
    const validArray = ["asfd", "qwer"];
    await expect(Strings.parseAsync(validArray)).resolves.toEqual(validArray);
  });

  test("should accept string as shorthand for custom error message", () => {
    const schema = z.string().superRefine((_, ctx) => {
      ctx.addIssue("bad stuff");
    });

    const result = schema.safeParse("asdf");
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues).toHaveLength(1);
      expect(result.error.issues[0].message).toEqual("bad stuff");
    }
  });

  test("should respect fatal flag in superRefine", () => {
    const schema = z
      .string()
      .superRefine((val, ctx) => {
        if (val === "") {
          ctx.addIssue({
            input: val,
            code: "custom",
            message: "foo",
            fatal: true,
          });
        }
      })
      .superRefine((val, ctx) => {
        if (val !== " ") {
          ctx.addIssue({
            input: val,
            code: "custom",
            message: "bar",
          });
        }
      });

    const result = schema.safeParse("");
    expect(result.success).toEqual(false);
    if (!result.success) {
      expect(result.error.issues.length).toEqual(1);
      expect(result.error.issues[0].message).toEqual("foo");
    }
  });
});

describe("chained refinements", () => {
  test("should collect all validation errors when appropriate", () => {
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

    // Should fail with one error
    const r1 = objectSchema.safeParse({
      length: 4,
      size: 9,
    });
    expect(r1.success).toEqual(false);
    if (!r1.success) {
      expect(r1.error.issues.length).toEqual(1);
      expect(r1.error.issues[0].path).toEqual(["length"]);
    }

    // Should fail with two errors
    const r2 = objectSchema.safeParse({
      length: 4,
      size: 3,
    });
    expect(r2.success).toEqual(false);
    if (!r2.success) {
      expect(r2.error.issues.length).toEqual(2);
    }

    // Should pass with valid input
    const validData = {
      length: 6,
      size: 8,
    };
    expect(objectSchema.parse(validData)).toEqual(validData);
  });
});

// Commented tests can be uncommented once type-checking issues are resolved
/*
describe("type refinement", () => {
  test("refinement type guard", () => {
    const validationSchema = z.object({
      a: z.string().refine((s): s is "a" => s === "a"),
    });
    type Input = z.input<typeof validationSchema>;
    type Schema = z.infer<typeof validationSchema>;

    expectTypeOf<Input["a"]>().not.toEqualTypeOf<"a">();
    expectTypeOf<Input["a"]>().toEqualTypeOf<string>();

    expectTypeOf<Schema["a"]>().toEqualTypeOf<"a">();
    expectTypeOf<Schema["a"]>().not.toEqualTypeOf<string>();
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
            input: arg,
            code: "custom",
            message: "cannot be null",
            fatal: true,
          });
          return false;
        }
        return true;
      });

    expectTypeOf<z.infer<typeof schema>>().toEqualTypeOf<NarrowType>();

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
        expectTypeOf<typeof arg>().toEqualTypeOf<firstRefinement>();
        if (arg.first !== "bob") {
          ctx.addIssue({
            input: arg,
            code: "custom",
            message: "`first` property must be `bob`",
          });
          return false;
        }
        return true;
      })
      .refine((arg): arg is thirdRefinement => {
        expectTypeOf<typeof arg>().toEqualTypeOf<secondRefinement>();
        return arg.second === 33;
      });

    expectTypeOf<z.infer<typeof schema>>().toEqualTypeOf<thirdRefinement>();
  });
});
*/

test("when", () => {
  const schema = z
    .strictObject({
      password: z.string().min(8),
      confirmPassword: z.string(),
      other: z.string(),
    })
    .refine(
      (data) => {
        console.log("running check...");
        console.log(data);
        console.log(data.password);
        return data.password === data.confirmPassword;
      },
      {
        message: "Passwords do not match",
        path: ["confirmPassword"],
        when(payload) {
          if (payload.value === undefined) return false;
          if (payload.value === null) return false;
          // no issues with confirmPassword or password
          return payload.issues.every((iss) => iss.path?.[0] !== "confirmPassword" && iss.path?.[0] !== "password");
        },
      }
    );

  expect(schema.safeParse(undefined)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "object",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected object, received undefined"
      }
    ]],
      "success": false,
    }
  `);
  expect(schema.safeParse(null)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "object",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected object, received null"
      }
    ]],
      "success": false,
    }
  `);
  expect(
    schema.safeParse({
      password: "asdf",
      confirmPassword: "asdfg",
      other: "qwer",
    })
  ).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "string",
        "code": "too_small",
        "minimum": 8,
        "inclusive": true,
        "path": [
          "password"
        ],
        "message": "Too small: expected string to have >=8 characters"
      }
    ]],
      "success": false,
    }
  `);

  expect(
    schema.safeParse({
      password: "asdf",
      confirmPassword: "asdfg",
      other: 1234,
    })
  ).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "string",
        "code": "too_small",
        "minimum": 8,
        "inclusive": true,
        "path": [
          "password"
        ],
        "message": "Too small: expected string to have >=8 characters"
      },
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "other"
        ],
        "message": "Invalid input: expected string, received number"
      }
    ]],
      "success": false,
    }
  `);
});
