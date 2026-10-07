import { expect, expectTypeOf, test } from "vitest";

import * as z from "zod/v4";

test("_values", () => {
  expect(z.string()._zod.values).toEqual(undefined);
  expect(z.enum(["a", "b"])._zod.values).toEqual(new Set(["a", "b"]));
  expect(z.nativeEnum({ a: "A", b: "B" })._zod.values).toEqual(new Set(["A", "B"]));
  expect(z.literal("test")._zod.values).toEqual(new Set(["test"]));
  expect(z.literal(123)._zod.values).toEqual(new Set([123]));
  expect(z.literal(true)._zod.values).toEqual(new Set([true]));
  expect(z.literal(BigInt(123))._zod.values).toEqual(new Set([BigInt(123)]));
  expect(z.undefined()._zod.values).toEqual(new Set([undefined]));
  expect(z.null()._zod.values).toEqual(new Set([null]));

  const t = z.literal("test");
  expect(t.optional()._zod.values).toEqual(new Set(["test", undefined]));
  expect(t.nullable()._zod.values).toEqual(new Set(["test", null]));
  expect(t.default("test")._zod.values).toEqual(new Set(["test"]));
  expect(t.catch("test")._zod.values).toEqual(new Set(["test"]));

  const pre = z.preprocess((val) => String(val), z.string()).pipe(z.literal("test"));
  expect(pre._zod.values).toEqual(undefined);

  const post = z.literal("test").transform((_) => Math.random());
  expect(post._zod.values).toEqual(new Set(["test"]));

  // Test that readonly literals pass through their values property
  expect(z.literal("test").readonly()._zod.values).toEqual(new Set(["test"]));
});

test("valid parse - object", () => {
  expect(
    z
      .discriminatedUnion("type", [
        z.object({ type: z.literal("a"), a: z.string() }),
        z.object({ type: z.literal("b"), b: z.string() }),
      ])
      .parse({ type: "a", a: "abc" })
  ).toEqual({ type: "a", a: "abc" });
});

test("valid - include discriminator key (deprecated)", () => {
  expect(
    z
      .discriminatedUnion("type", [
        z.object({ type: z.literal("a"), a: z.string() }),
        z.object({ type: z.literal("b"), b: z.string() }),
      ])
      .parse({ type: "a", a: "abc" })
  ).toEqual({ type: "a", a: "abc" });
});

test("valid - optional discriminator (object)", () => {
  const schema = z.discriminatedUnion("type", [
    z.object({ type: z.literal("a").optional(), a: z.string() }),
    z.object({ type: z.literal("b"), b: z.string() }),
  ]);
  expect(schema.parse({ type: "a", a: "abc" })).toEqual({ type: "a", a: "abc" });
  expect(schema.parse({ a: "abc" })).toEqual({ a: "abc" });
});

test("valid - discriminator value of various primitive types", () => {
  const schema = z.discriminatedUnion("type", [
    z.object({ type: z.literal("1"), val: z.string() }),
    z.object({ type: z.literal(1), val: z.string() }),
    z.object({ type: z.literal(BigInt(1)), val: z.string() }),
    z.object({ type: z.literal("true"), val: z.string() }),
    z.object({ type: z.literal(true), val: z.string() }),
    z.object({ type: z.literal("null"), val: z.string() }),
    z.object({ type: z.null(), val: z.string() }),
    z.object({ type: z.literal("undefined"), val: z.string() }),
    z.object({ type: z.undefined(), val: z.string() }),
  ]);

  expect(schema.parse({ type: "1", val: "val" })).toEqual({ type: "1", val: "val" });
  expect(schema.parse({ type: 1, val: "val" })).toEqual({ type: 1, val: "val" });
  expect(schema.parse({ type: BigInt(1), val: "val" })).toEqual({
    type: BigInt(1),
    val: "val",
  });
  expect(schema.parse({ type: "true", val: "val" })).toEqual({
    type: "true",
    val: "val",
  });
  expect(schema.parse({ type: true, val: "val" })).toEqual({
    type: true,
    val: "val",
  });
  expect(schema.parse({ type: "null", val: "val" })).toEqual({
    type: "null",
    val: "val",
  });
  expect(schema.parse({ type: null, val: "val" })).toEqual({
    type: null,
    val: "val",
  });
  expect(schema.parse({ type: "undefined", val: "val" })).toEqual({
    type: "undefined",
    val: "val",
  });
  expect(schema.parse({ type: undefined, val: "val" })).toEqual({
    type: undefined,
    val: "val",
  });

  const fail = schema.safeParse({
    type: "not_a_key",
    val: "val",
  });
  expect(fail.error).toBeInstanceOf(z.ZodError);
});

test("invalid - null", () => {
  try {
    z.discriminatedUnion("type", [
      z.object({ type: z.literal("a"), a: z.string() }),
      z.object({ type: z.literal("b"), b: z.string() }),
    ]).parse(null);
    throw new Error();
  } catch (e: any) {
    // [
    //   {
    //     code: z.ZodIssueCode.invalid_type,
    //     expected: z.ZodParsedType.object,
    //     input: null,
    //     message: "Expected object, received null",
    //     received: z.ZodParsedType.null,
    //     path: [],
    //   },
    // ];
    expect(e.issues).toMatchInlineSnapshot(`
      [
        {
          "code": "invalid_type",
          "expected": "object",
          "message": "Invalid input: expected object, received null",
          "path": [],
        },
      ]
    `);
  }
});

test("invalid discriminator value", () => {
  const result = z
    .discriminatedUnion("type", [
      z.object({ type: z.literal("a"), a: z.string() }),
      z.object({ type: z.literal("b"), b: z.string() }),
    ])
    .safeParse({ type: "x", a: "abc" });

  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_union",
        "errors": [],
        "note": "No matching discriminator",
        "path": [
          "type"
        ],
        "message": "Invalid input"
      }
    ]],
      "success": false,
    }
  `);
});

test("invalid discriminator value - unionFallback", () => {
  const result = z
    .discriminatedUnion(
      "type",
      [z.object({ type: z.literal("a"), a: z.string() }), z.object({ type: z.literal("b"), b: z.string() })],
      { unionFallback: true }
    )
    .safeParse({ type: "x", a: "abc" });
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "invalid_union",
        "errors": [
          [
            {
              "code": "invalid_value",
              "values": [
                "a"
              ],
              "path": [
                "type"
              ],
              "message": "Invalid input: expected \\"a\\""
            }
          ],
          [
            {
              "code": "invalid_value",
              "values": [
                "b"
              ],
              "path": [
                "type"
              ],
              "message": "Invalid input: expected \\"b\\""
            },
            {
              "expected": "string",
              "code": "invalid_type",
              "path": [
                "b"
              ],
              "message": "Invalid input: expected string, received undefined"
            }
          ]
        ],
        "path": [],
        "message": "Invalid input"
      }
    ]],
      "success": false,
    }
  `);
});

test("valid discriminator value, invalid data", () => {
  const result = z
    .discriminatedUnion("type", [
      z.object({ type: z.literal("a"), a: z.string() }),
      z.object({ type: z.literal("b"), b: z.string() }),
    ])
    .safeParse({ type: "a", b: "abc" });

  // [
  //   {
  //     code: z.ZodIssueCode.invalid_type,
  //     expected: z.ZodParsedType.string,
  //     message: "Required",
  //     path: ["a"],
  //     received: z.ZodParsedType.undefined,
  //   },
  // ];
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "a"
        ],
        "message": "Invalid input: expected string, received undefined"
      }
    ]],
      "success": false,
    }
  `);
});

test("wrong schema - missing discriminator", () => {
  try {
    z.discriminatedUnion("type", [
      z.object({ type: z.literal("a"), a: z.string() }),
      z.object({ b: z.string() }) as any,
    ])._zod.propValues;
    throw new Error();
  } catch (e: any) {
    expect(e.message.includes("Invalid discriminated union option")).toBe(true);
  }
});

// removed to account for unions of unions
// test("wrong schema - duplicate discriminator values", () => {
//   try {
//     z.discriminatedUnion("type",[
//       z.object({ type: z.literal("a"), a: z.string() }),
//       z.object({ type: z.literal("a"), b: z.string() }),
//     ]);
//     throw new Error();
//   } catch (e: any) {
//     expect(e.message.includes("Duplicate discriminator value")).toEqual(true);
//   }
// });

test("async - valid", async () => {
  const schema = await z.discriminatedUnion("type", [
    z.object({
      type: z.literal("a"),
      a: z
        .string()
        .refine(async () => true)
        .transform(async (val) => Number(val)),
    }),
    z.object({
      type: z.literal("b"),
      b: z.string(),
    }),
  ]);
  const data = { type: "a", a: "1" };
  const result = await schema.safeParseAsync(data);
  expect(result.data).toEqual({ type: "a", a: 1 });
});

test("async - invalid", async () => {
  // try {
  const a = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("a"),
      a: z
        .string()
        .refine(async () => true)
        .transform(async (val) => val),
    }),
    z.object({
      type: z.literal("b"),
      b: z.string(),
    }),
  ]);
  const result = await a.safeParseAsync({ type: "a", a: 1 });

  // expect(JSON.parse(e.message)).toEqual([
  //   {
  //     code: "invalid_type",
  //     expected: "string",
  //     input: 1,
  //     received: "number",
  //     path: ["a"],
  //     message: "Expected string, received number",
  //   },
  // ]);
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "a"
        ],
        "message": "Invalid input: expected string, received number"
      }
    ]]
  `);
});

test("valid - literals with .default or .pipe", () => {
  const schema = z.discriminatedUnion("type", [
    z.object({
      type: z.literal("foo").default("foo"),
      a: z.string(),
    }),
    z.object({
      type: z.literal("custom"),
      method: z.string(),
    }),
    z.object({
      type: z.literal("bar").transform((val) => val),
      c: z.string(),
    }),
  ]);
  expect(schema.parse({ type: "foo", a: "foo" })).toEqual({
    type: "foo",
    a: "foo",
  });
});

test("enum and nativeEnum", () => {
  enum MyEnum {
    d = 0,
    e = "e",
  }

  const schema = z.discriminatedUnion("key", [
    z.object({
      key: z.literal("a"),
      // Add other properties specific to this option
    }),
    z.object({
      key: z.enum(["b", "c"]),
      // Add other properties specific to this option
    }),
    z.object({
      key: z.nativeEnum(MyEnum),
      // Add other properties specific to this option
    }),
  ]);

  type schema = z.infer<typeof schema>;
  expectTypeOf<schema>().toEqualTypeOf<{ key: "a" } | { key: "b" | "c" } | { key: MyEnum.d | MyEnum.e }>();

  schema.parse({ key: "a" });
  schema.parse({ key: "b" });
  schema.parse({ key: "c" });
  schema.parse({ key: MyEnum.d });
  schema.parse({ key: MyEnum.e });
  schema.parse({ key: "e" });
});

test("branded", () => {
  const schema = z.discriminatedUnion("key", [
    z.object({
      key: z.literal("a"),
      // Add other properties specific to this option
    }),
    z.object({
      key: z.literal("b").brand<"asdfasdf">(),
      // Add other properties specific to this option
    }),
  ]);

  type schema = z.infer<typeof schema>;
  expectTypeOf<schema>().toEqualTypeOf<{ key: "a" } | { key: "b" & z.core.$brand<"asdfasdf"> }>();

  schema.parse({ key: "a" });
  schema.parse({ key: "b" });
  expect(() => {
    schema.parse({ key: "c" });
  }).toThrow();
});

test("optional and nullable", () => {
  const schema = z.discriminatedUnion("key", [
    z.object({
      key: z.literal("a").optional(),
      a: z.literal(true),
    }),
    z.object({
      key: z.literal("b").nullable(),
      b: z.literal(true),
      // Add other properties specific to this option
    }),
  ]);

  type schema = z.infer<typeof schema>;
  expectTypeOf<schema>().toEqualTypeOf<{ key?: "a" | undefined; a: true } | { key: "b" | null; b: true }>();

  schema.parse({ key: "a", a: true });
  schema.parse({ key: undefined, a: true });
  schema.parse({ key: "b", b: true });
  schema.parse({ key: null, b: true });
  expect(() => {
    schema.parse({ key: null, a: true });
  }).toThrow();
  expect(() => {
    schema.parse({ key: "b", a: true });
  }).toThrow();

  const value = schema.parse({ key: null, b: true });

  if (!("key" in value)) value.a;
  if (value.key === undefined) value.a;
  if (value.key === "a") value.a;
  if (value.key === "b") value.b;
  if (value.key === null) value.b;
});

test("multiple discriminators", () => {
  const FreeConfig = z.object({
    type: z.literal("free"),
    min_cents: z.null(),
  });

  // console.log(FreeConfig.shape.type);
  const PricedConfig = z.object({
    type: z.literal("fiat-price"),
    // min_cents: z.int().nullable(),
    min_cents: z.null(),
  });

  const Config = z.discriminatedUnion("type", [FreeConfig, PricedConfig]);

  Config.parse({
    min_cents: null,
    type: "fiat-price",
    name: "Standard",
  });

  expect(() => {
    Config.parse({
      min_cents: null,
      type: "not real",
      name: "Standard",
    });
  }).toThrow();
});

test("single element union", () => {
  const schema = z.object({
    a: z.literal("discKey"),
    b: z.enum(["apple", "banana"]),
    c: z.object({ id: z.string() }),
  });

  const input = {
    a: "discKey",
    b: "apple",
    c: {}, // Invalid, as schema requires `id` property
  };

  // Validation must fail here, but it doesn't

  const u = z.discriminatedUnion("a", [schema]);
  const result = u.safeParse(input);
  expect(result).toMatchObject({ success: false });
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "c",
          "id"
        ],
        "message": "Invalid input: expected string, received undefined"
      }
    ]],
      "success": false,
    }
  `);

  expect(u.options.length).toEqual(1);
});

test("nested discriminated unions", () => {
  const BaseError = z.object({ status: z.literal("failed"), message: z.string() });
  const MyErrors = z.discriminatedUnion("code", [
    BaseError.extend({ code: z.literal(400) }),
    BaseError.extend({ code: z.literal(401) }),
    BaseError.extend({ code: z.literal(500) }),
  ]);

  const MyResult = z.discriminatedUnion("status", [
    z.object({ status: z.literal("success"), data: z.string() }),
    MyErrors,
  ]);

  expect(MyErrors._zod.propValues).toMatchInlineSnapshot(`
    {
      "code": Set {
        400,
        401,
        500,
      },
      "status": Set {
        "failed",
      },
    }
  `);
  expect(MyResult._zod.propValues).toMatchInlineSnapshot(`
    {
      "code": Set {
        400,
        401,
        500,
      },
      "status": Set {
        "success",
        "failed",
      },
    }
  `);

  const result = MyResult.parse({ status: "success", data: "hello" });
  expect(result).toMatchInlineSnapshot(`
    {
      "data": "hello",
      "status": "success",
    }
  `);
  const result2 = MyResult.parse({ status: "failed", code: 400, message: "bad request" });
  expect(result2).toMatchInlineSnapshot(`
    {
      "code": 400,
      "message": "bad request",
      "status": "failed",
    }
  `);
  const result3 = MyResult.parse({ status: "failed", code: 401, message: "unauthorized" });
  expect(result3).toMatchInlineSnapshot(`
    {
      "code": 401,
      "message": "unauthorized",
      "status": "failed",
    }
  `);
  const result4 = MyResult.parse({ status: "failed", code: 500, message: "internal server error" });
  expect(result4).toMatchInlineSnapshot(`
    {
      "code": 500,
      "message": "internal server error",
      "status": "failed",
    }
  `);
});

test("readonly literal discriminator", () => {
  const discUnion = z.discriminatedUnion("type", [
    z.object({ type: z.literal("a").readonly(), a: z.string() }),
    z.object({ type: z.literal("b"), b: z.number() }),
  ]);

  // Test that both discriminator values are correctly included in propValues
  const propValues = discUnion._zod.propValues;
  expect(propValues?.type?.has("a")).toBe(true);
  expect(propValues?.type?.has("b")).toBe(true);

  // Test that the discriminated union works correctly
  const result1 = discUnion.parse({ type: "a", a: "hello" });
  expect(result1).toEqual({ type: "a", a: "hello" });

  const result2 = discUnion.parse({ type: "b", b: 42 });
  expect(result2).toEqual({ type: "b", b: 42 });

  // Test that invalid discriminator values are rejected
  expect(() => {
    discUnion.parse({ type: "c", a: "hello" });
  }).toThrow();
});
