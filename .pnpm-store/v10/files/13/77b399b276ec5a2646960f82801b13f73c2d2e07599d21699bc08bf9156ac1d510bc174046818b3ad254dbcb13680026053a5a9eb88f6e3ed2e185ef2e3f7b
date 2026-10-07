import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4";

test("basic defaults", () => {
  expect(z.string().default("default").parse(undefined)).toBe("default");
});

test("default with optional", () => {
  const schema = z.string().optional().default("default");
  expect(schema.parse(undefined)).toBe("default");
  expect(schema.unwrap().parse(undefined)).toBe(undefined);
});

test("default with transform", () => {
  const stringWithDefault = z
    .string()
    .transform((val) => val.toUpperCase())
    .default("default");
  expect(stringWithDefault.parse(undefined)).toBe("default");
  expect(stringWithDefault).toBeInstanceOf(z.ZodDefault);
  expect(stringWithDefault.unwrap()).toBeInstanceOf(z.ZodPipe);
  expect(stringWithDefault.unwrap().in).toBeInstanceOf(z.ZodString);
  expect(stringWithDefault.unwrap().out).toBeInstanceOf(z.ZodTransform);

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | undefined>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("default on existing optional", () => {
  const stringWithDefault = z.string().optional().default("asdf");
  expect(stringWithDefault.parse(undefined)).toBe("asdf");
  expect(stringWithDefault).toBeInstanceOf(z.ZodDefault);
  expect(stringWithDefault.unwrap()).toBeInstanceOf(z.ZodOptional);
  expect(stringWithDefault.unwrap().unwrap()).toBeInstanceOf(z.ZodString);

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | undefined>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("optional on default", () => {
  const stringWithDefault = z.string().default("asdf").optional();

  type inp = z.input<typeof stringWithDefault>;
  expectTypeOf<inp>().toEqualTypeOf<string | undefined>();
  type out = z.output<typeof stringWithDefault>;
  expectTypeOf<out>().toEqualTypeOf<string | undefined>();

  expect(stringWithDefault.parse(undefined)).toBe("asdf");
});

// test("complex chain example", () => {
//   const complex = z
//     .string()
//     .default("asdf")
//     .transform((val) => val.toUpperCase())
//     .default("qwer")
//     .unwrap()
//     .optional()
//     .default("asdfasdf");

//   expect(complex.parse(undefined)).toBe("asdfasdf");
// });

test("removeDefault", () => {
  const stringWithRemovedDefault = z.string().default("asdf").removeDefault();

  type out = z.output<typeof stringWithRemovedDefault>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("apply default at output", () => {
  const schema = z
    .string()
    .transform((_) => (Math.random() > 0 ? undefined : _))
    .default("asdf");
  expect(schema.parse("")).toEqual("asdf");
});

test("nested", () => {
  const inner = z.string().default("asdf");
  const outer = z.object({ inner }).default({
    inner: "qwer",
  });
  type input = z.input<typeof outer>;
  expectTypeOf<input>().toEqualTypeOf<{ inner?: string | undefined } | undefined>();
  type out = z.output<typeof outer>;
  expectTypeOf<out>().toEqualTypeOf<{ inner: string }>();
  expect(outer.parse(undefined)).toEqual({ inner: "qwer" });
  expect(outer.parse({})).toEqual({ inner: "asdf" });
  expect(outer.parse({ inner: undefined })).toEqual({ inner: "asdf" });
});

test("chained defaults", () => {
  const stringWithDefault = z.string().default("inner").default("outer");
  const result = stringWithDefault.parse(undefined);
  expect(result).toEqual("outer");
});

test("object optionality", () => {
  const schema = z.object({
    hi: z.string().default("hi"),
  });
  type schemaInput = z.input<typeof schema>;
  type schemaOutput = z.output<typeof schema>;
  expectTypeOf<schemaInput>().toEqualTypeOf<{ hi?: string | undefined }>();
  expectTypeOf<schemaOutput>().toEqualTypeOf<{ hi: string }>();
  expect(schema.parse({})).toEqual({
    hi: "hi",
  });
});

test("nested prefault/default", () => {
  const a = z
    .string()
    .default("a")
    .refine((val) => val.startsWith("a"));
  const b = z
    .string()
    .refine((val) => val.startsWith("b"))
    .default("b");
  const c = z
    .string()
    .prefault("c")
    .refine((val) => val.startsWith("c"));
  const d = z
    .string()
    .refine((val) => val.startsWith("d"))
    .prefault("d");

  const obj = z.object({
    a,
    b,
    c,
    d,
  });

  expect(obj.safeParse({ a: "a1", b: "b1", c: "c1", d: "d1" })).toMatchInlineSnapshot(`
    {
      "data": {
        "a": "a1",
        "b": "b1",
        "c": "c1",
        "d": "d1",
      },
      "success": true,
    }
  `);

  expect(obj.safeParse({ a: "f", b: "f", c: "f", d: "f" })).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "path": [
          "a"
        ],
        "message": "Invalid input"
      },
      {
        "code": "custom",
        "path": [
          "b"
        ],
        "message": "Invalid input"
      },
      {
        "code": "custom",
        "path": [
          "c"
        ],
        "message": "Invalid input"
      },
      {
        "code": "custom",
        "path": [
          "d"
        ],
        "message": "Invalid input"
      }
    ]],
      "success": false,
    }
  `);

  expect(obj.safeParse({})).toMatchInlineSnapshot(`
    {
      "data": {
        "a": "a",
        "b": "b",
        "c": "c",
        "d": "d",
      },
      "success": true,
    }
  `);

  expect(obj.safeParse({ a: undefined, b: undefined, c: undefined, d: undefined })).toMatchInlineSnapshot(`
    {
      "data": {
        "a": "a",
        "b": "b",
        "c": "c",
        "d": "d",
      },
      "success": true,
    }
  `);

  const obj2 = z.object({
    a: a.optional(),
    b: b.optional(),
    c: c.optional(),
    d: d.optional(),
  });
  expect(obj2.safeParse({ a: undefined, b: undefined, c: undefined, d: undefined })).toMatchInlineSnapshot(`
    {
      "data": {
        "a": "a",
        "b": "b",
        "c": "c",
        "d": "d",
      },
      "success": true,
    }
  `);

  expect(a.parse(undefined)).toBe("a");
  expect(b.parse(undefined)).toBe("b");
  expect(c.parse(undefined)).toBe("c");
  expect(d.parse(undefined)).toBe("d");
});

test("failing default", () => {
  const a = z
    .string()
    .default("z")
    .refine((val) => val.startsWith("a"));
  const b = z
    .string()
    .refine((val) => val.startsWith("b"))
    .default("z");
  const c = z
    .string()
    .prefault("z")
    .refine((val) => val.startsWith("c"));
  const d = z
    .string()
    .refine((val) => val.startsWith("d"))
    .prefault("z");

  const obj = z.object({
    a,
    b,
    c,
    d,
  });

  expect(
    obj.safeParse({
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
    }).error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [
          "a",
        ],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [
          "c",
        ],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [
          "d",
        ],
      },
    ]
  `);
});

test("partial should not clobber defaults", () => {
  const objWithDefaults = z.object({
    a: z.string().default("defaultA"),
    b: z.string().default("defaultB"),
    c: z.string().default("defaultC"),
  });

  const objPartialWithOneRequired = objWithDefaults.partial(); //.required({ a: true });

  const test = objPartialWithOneRequired.parse({});
  expect(test).toMatchInlineSnapshot(`
    {
      "a": "defaultA",
      "b": "defaultB",
      "c": "defaultC",
    }
  `);
});
