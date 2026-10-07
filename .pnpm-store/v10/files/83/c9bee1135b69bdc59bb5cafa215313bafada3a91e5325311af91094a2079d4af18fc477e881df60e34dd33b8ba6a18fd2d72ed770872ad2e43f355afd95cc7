import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("preprocess", () => {
  const schema = z.preprocess((data) => [data], z.string().array());
  const value = schema.parse("asdf");
  expect(value).toEqual(["asdf"]);
  expectTypeOf<(typeof schema)["_input"]>().toEqualTypeOf<unknown>();
});

test("async preprocess", async () => {
  const schema = z.preprocess(async (data) => {
    return [data];
  }, z.string().array());
  const value = await schema.safeParseAsync("asdf");
  expect(value.data).toEqual(["asdf"]);
  expect(value).toMatchInlineSnapshot(`
    {
      "data": [
        "asdf",
      ],
      "success": true,
    }
  `);
});

test("ctx.addIssue accepts string", () => {
  const schema = z.preprocess((_, ctx) => {
    ctx.addIssue("bad stuff");
  }, z.string());
  const result = schema.safeParse("asdf");
  expect(result.error!.issues).toHaveLength(1);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "message": "bad stuff",
        "code": "custom",
        "path": []
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess ctx.addIssue with parse", () => {
  const a = z.preprocess((data, ctx) => {
    ctx.addIssue({
      input: data,
      code: "custom",
      message: `${data} is not one of our allowed strings`,
    });
    return data;
  }, z.string());

  const result = a.safeParse("asdf");

  // expect(result.error!.toJSON()).toContain("not one of our allowed strings");

  expect(result.error!.issues).toHaveLength(1);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "message": "asdf is not one of our allowed strings",
        "path": []
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess ctx.addIssue non-fatal by default", () => {
  const schema = z.preprocess((data, ctx) => {
    ctx.addIssue({
      code: "custom",
      message: `custom error`,
    });
    return data;
  }, z.string());
  const result = schema.safeParse(1234);

  expect(result.error!.issues).toHaveLength(2);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "message": "custom error",
        "path": []
      },
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected string, received number"
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess ctx.addIssue fatal true", () => {
  const schema = z.preprocess((data, ctx) => {
    ctx.addIssue({
      input: data,
      code: "custom",
      origin: "custom",
      message: `custom error`,
      fatal: true,
    });
    return data;
  }, z.string());

  const result = schema.safeParse(1234);

  expect(result.error!.issues).toHaveLength(1);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "origin": "custom",
        "message": "custom error",
        "fatal": true,
        "path": []
      }
    ]],
      "success": false,
    }
  `);
});

test("async preprocess ctx.addIssue with parseAsync", async () => {
  const schema = z.preprocess(async (data, ctx) => {
    ctx.addIssue({
      input: data,
      code: "custom",
      message: `${data} is not one of our allowed strings`,
    });
    return data;
  }, z.string());

  const result = await schema.safeParseAsync("asdf");

  expect(result.error!.issues).toHaveLength(1);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "message": "asdf is not one of our allowed strings",
        "path": []
      }
    ]],
      "success": false,
    }
  `);
});

test("z.NEVER in preprocess", () => {
  const foo = z.preprocess((val, ctx) => {
    if (!val) {
      ctx.addIssue({ input: val, code: "custom", message: "bad" });
      return z.NEVER;
    }
    return val;
  }, z.number());

  type foo = z.infer<typeof foo>;
  expectTypeOf<foo>().toEqualTypeOf<number>();
  const result = foo.safeParse(undefined);

  expect(result.error!.issues).toHaveLength(2);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "message": "bad",
        "path": []
      },
      {
        "expected": "number",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected number, received object"
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess as the second property of object", () => {
  const schema = z.object({
    nonEmptyStr: z.string().min(1),
    positiveNum: z.preprocess((v) => Number(v), z.number().positive()),
  });
  const result = schema.safeParse({
    nonEmptyStr: "",
    positiveNum: "",
  });

  expect(result.error!.issues).toHaveLength(2);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "string",
        "code": "too_small",
        "minimum": 1,
        "inclusive": true,
        "path": [
          "nonEmptyStr"
        ],
        "message": "Too small: expected string to have >=1 characters"
      },
      {
        "origin": "number",
        "code": "too_small",
        "minimum": 0,
        "inclusive": false,
        "path": [
          "positiveNum"
        ],
        "message": "Too small: expected number to be >0"
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess validates with sibling errors", () => {
  const schema = z.object({
    missing: z.string().refine(() => false),
    preprocess: z.preprocess((data: any) => data?.trim(), z.string().regex(/ asdf/)),
  });

  const result = schema.safeParse({ preprocess: " asdf" });

  expect(result.error!.issues).toHaveLength(2);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "missing"
        ],
        "message": "Invalid input: expected string, received undefined"
      },
      {
        "origin": "string",
        "code": "invalid_format",
        "format": "regex",
        "pattern": "/ asdf/",
        "path": [
          "preprocess"
        ],
        "message": "Invalid string: must match pattern / asdf/"
      }
    ]],
      "success": false,
    }
  `);
});

test("perform transform with non-fatal issues", () => {
  const A = z
    .string()
    .refine((_) => false)
    .min(4)
    .transform((val) => val.length)
    .pipe(z.number())
    .refine((_) => false);
  expect(A.safeParse("asdfasdf").error!.issues).toHaveLength(2);
  expect(A.safeParse("asdfasdf").error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "custom",
        "path": [],
        "message": "Invalid input"
      },
      {
        "code": "custom",
        "path": [],
        "message": "Invalid input"
      }
    ]]
  `);
});
