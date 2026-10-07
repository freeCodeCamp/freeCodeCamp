// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

test("preprocess", () => {
  const schema = z.preprocess((data) => [data], z.string().array());

  const value = schema.parse("asdf");
  expect(value).toEqual(["asdf"]);
  util.assertEqual<(typeof schema)["_input"], unknown>(true);
});

test("async preprocess", async () => {
  const schema = z.preprocess(async (data) => [data], z.string().array());

  const value = await schema.parseAsync("asdf");
  expect(value).toEqual(["asdf"]);
});

test("preprocess ctx.addIssue with parse", () => {
  expect(() => {
    z.preprocess((data, ctx) => {
      ctx.addIssue({
        code: "custom",
        message: `${data} is not one of our allowed strings`,
      });
      return data;
    }, z.string()).parse("asdf");
  }).toThrow(
    JSON.stringify(
      [
        {
          code: "custom",
          message: "asdf is not one of our allowed strings",
          path: [],
        },
      ],
      null,
      2
    )
  );
});

test("preprocess ctx.addIssue non-fatal by default", () => {
  try {
    z.preprocess((data, ctx) => {
      ctx.addIssue({
        code: "custom",
        message: `custom error`,
      });
      return data;
    }, z.string()).parse(1234);
  } catch (err) {
    z.ZodError.assert(err);
    expect(err.issues.length).toEqual(2);
  }
});

test("preprocess ctx.addIssue fatal true", () => {
  try {
    z.preprocess((data, ctx) => {
      ctx.addIssue({
        code: "custom",
        message: `custom error`,
        fatal: true,
      });
      return data;
    }, z.string()).parse(1234);
  } catch (err) {
    z.ZodError.assert(err);
    expect(err.issues.length).toEqual(1);
  }
});

test("async preprocess ctx.addIssue with parse", async () => {
  const schema = z.preprocess(async (data, ctx) => {
    ctx.addIssue({
      code: "custom",
      message: `custom error`,
    });
    return data;
  }, z.string());

  expect(await schema.safeParseAsync("asdf")).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "code": "custom",
        "message": "custom error",
        "path": []
      }
    ]],
      "success": false,
    }
  `);
});

test("preprocess ctx.addIssue with parseAsync", async () => {
  const result = await z
    .preprocess(async (data, ctx) => {
      ctx.addIssue({
        code: "custom",
        message: `${data} is not one of our allowed strings`,
      });
      return data;
    }, z.string())
    .safeParseAsync("asdf");

  expect(JSON.parse(JSON.stringify(result))).toEqual({
    success: false,
    error: {
      issues: [
        {
          code: "custom",
          message: "asdf is not one of our allowed strings",
          path: [],
        },
      ],
      name: "ZodError",
    },
  });
});

test("z.NEVER in preprocess", () => {
  const foo = z.preprocess((val, ctx) => {
    if (!val) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "bad" });
      return z.NEVER;
    }
    return val;
  }, z.number());

  type foo = z.infer<typeof foo>;
  util.assertEqual<foo, number>(true);
  const arg = foo.safeParse(undefined);
  expect(arg.error!.issues).toHaveLength(2);
  expect(arg.error!.issues[0].message).toEqual("bad");
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
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues.length).toEqual(2);
    expect(result.error.issues[0].code).toEqual(z.ZodIssueCode.too_small);
    expect(result.error.issues[1].code).toEqual(z.ZodIssueCode.too_small);
  }
});

test("preprocess validates with sibling errors", () => {
  expect(() => {
    z.object({
      // Must be first
      missing: z.string().refine(() => false),
      preprocess: z.preprocess((data: any) => data?.trim(), z.string().regex(/ asdf/)),
    }).parse({ preprocess: " asdf" });
  }).toThrow(
    JSON.stringify(
      [
        {
          code: "invalid_type",
          expected: "string",
          received: "undefined",
          path: ["missing"],
          message: "Required",
        },
        {
          validation: "regex",
          code: "invalid_string",
          message: "Invalid",
          path: ["preprocess"],
        },
      ],
      null,
      2
    )
  );
});
