import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4";
import type { util } from "zod/v4/core";

test("basic catch", () => {
  expect(z.string().catch("default").parse(undefined)).toBe("default");
});

test("catch fn does not run when parsing succeeds", () => {
  let isCalled = false;
  const cb = () => {
    isCalled = true;
    return "asdf";
  };
  expect(z.string().catch(cb).parse("test")).toBe("test");
  expect(isCalled).toEqual(false);
});

test("basic catch async", async () => {
  const result = await z.string().catch("default").parseAsync(1243);
  expect(result).toBe("default");
});

test("catch replace wrong types", () => {
  expect(z.string().catch("default").parse(true)).toBe("default");
  expect(z.string().catch("default").parse(true)).toBe("default");
  expect(z.string().catch("default").parse(15)).toBe("default");
  expect(z.string().catch("default").parse([])).toBe("default");
  expect(z.string().catch("default").parse(new Map())).toBe("default");
  expect(z.string().catch("default").parse(new Set())).toBe("default");
  expect(z.string().catch("default").parse({})).toBe("default");
});

test("catch with transform", () => {
  const stringWithDefault = z
    .string()
    .transform((val) => val.toUpperCase())
    .catch("default");

  expect(stringWithDefault.parse(undefined)).toBe("default");
  expect(stringWithDefault.parse(15)).toBe("default");
  expect(stringWithDefault).toBeInstanceOf(z.ZodCatch);
  expect(stringWithDefault.unwrap()).toBeInstanceOf(z.ZodPipe);
  expect(stringWithDefault.unwrap().in).toBeInstanceOf(z.ZodString);
  expect(stringWithDefault.unwrap().out).toBeInstanceOf(z.ZodTransform);

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | util.Whatever>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("catch on existing optional", () => {
  const stringWithDefault = z.string().optional().catch("asdf");
  expect(stringWithDefault.parse(undefined)).toBe(undefined);
  expect(stringWithDefault.parse(15)).toBe("asdf");
  expect(stringWithDefault).toBeInstanceOf(z.ZodCatch);
  expect(stringWithDefault.unwrap()).toBeInstanceOf(z.ZodOptional);
  expect(stringWithDefault.unwrap().unwrap()).toBeInstanceOf(z.ZodString);

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | undefined | util.Whatever>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string | undefined>();
});

test("optional on catch", () => {
  const stringWithDefault = z.string().catch("asdf").optional();

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | util.Whatever>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string | undefined>();
});

test("complex chain example", () => {
  const complex = z
    .string()
    .catch("asdf")
    .transform((val) => `${val}!`)
    .transform((val) => val.toUpperCase())
    .catch("qwer")
    .unwrap()
    .optional()
    .catch("asdfasdf");

  expect(complex.parse("qwer")).toBe("QWER!");
  expect(complex.parse(15)).toBe("ASDF!");
  expect(complex.parse(true)).toBe("ASDF!");
});

test("removeCatch", () => {
  const stringWithRemovedDefault = z.string().catch("asdf").unwrap();

  type out = z.output<typeof stringWithRemovedDefault>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("nested", () => {
  const inner = z.string().catch("asdf");
  const outer = z.object({ inner }).catch({
    inner: "asdf",
  });
  type input = z.input<typeof outer>;
  expectTypeOf<input>().toEqualTypeOf<{ inner: string | util.Whatever } | util.Whatever>();
  type out = z.output<typeof outer>;

  expectTypeOf<out>().toEqualTypeOf<{ inner: string }>();
  expect(outer.parse(undefined)).toEqual({ inner: "asdf" });
  expect(outer.parse({})).toEqual({ inner: "asdf" });
  expect(outer.parse({ inner: undefined })).toEqual({ inner: "asdf" });
});

test("chained catch", () => {
  const stringWithDefault = z.string().catch("inner").catch("outer");
  const result = stringWithDefault.parse(undefined);
  expect(result).toEqual("inner");
  const resultDiff = stringWithDefault.parse(5);
  expect(resultDiff).toEqual("inner");
});

test("native enum", () => {
  enum Fruits {
    apple = "apple",
    orange = "orange",
  }

  const schema = z.object({
    fruit: z.nativeEnum(Fruits).catch(Fruits.apple),
  });

  expect(schema.parse({})).toEqual({ fruit: Fruits.apple });
  expect(schema.parse({ fruit: 15 })).toEqual({ fruit: Fruits.apple });
});

test("enum", () => {
  const schema = z.object({
    fruit: z.enum(["apple", "orange"]).catch("apple"),
  });

  expect(schema.parse({})).toEqual({ fruit: "apple" });
  expect(schema.parse({ fruit: true })).toEqual({ fruit: "apple" });
  expect(schema.parse({ fruit: 15 })).toEqual({ fruit: "apple" });
});

test("reported issues with nested usage", () => {
  const schema = z.object({
    string: z.string(),
    obj: z.object({
      sub: z.object({
        lit: z.literal("a"),
        subCatch: z.number().catch(23),
      }),
      midCatch: z.number().catch(42),
    }),
    number: z.number().catch(0),
    bool: z.boolean(),
  });

  try {
    schema.parse({
      string: {},
      obj: {
        sub: {
          lit: "b",
          subCatch: "24",
        },
        midCatch: 444,
      },
      number: "",
      bool: "yes",
    });
  } catch (error) {
    const issues = (error as z.ZodError).issues;

    expect(issues.length).toEqual(3);
    expect(issues).toMatchInlineSnapshot(`
      [
        {
          "code": "invalid_type",
          "expected": "string",
          "message": "Invalid input: expected string, received object",
          "path": [
            "string",
          ],
        },
        {
          "code": "invalid_value",
          "message": "Invalid input: expected "a"",
          "path": [
            "obj",
            "sub",
            "lit",
          ],
          "values": [
            "a",
          ],
        },
        {
          "code": "invalid_type",
          "expected": "boolean",
          "message": "Invalid input: expected boolean, received string",
          "path": [
            "bool",
          ],
        },
      ]
    `);
    // expect(issues[0].message).toMatch("string");
    // expect(issues[1].message).toMatch("literal");
    // expect(issues[2].message).toMatch("boolean");
  }
});

test("catch error", () => {
  const schema = z.object({
    age: z.number(),
    name: z.string().catch((ctx) => {
      ctx.issues;
      // issues = ctx.issues;

      return "John Doe";
    }),
  });

  const result = schema.safeParse({
    age: null,
    name: null,
  });

  expect(result.success).toEqual(false);
  expect(result.error!).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "number",
        "code": "invalid_type",
        "path": [
          "age"
        ],
        "message": "Invalid input: expected number, received null"
      }
    ]]
  `);
});

test("ctx.input", () => {
  const schema = z.string().catch((ctx) => {
    return String(ctx.input);
  });

  expect(schema.parse(123)).toEqual("123");
});
