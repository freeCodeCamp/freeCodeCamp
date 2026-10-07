import { describe, expect, test } from "vitest";
import * as z from "zod/v4";
// import * as zCore from "zod/v4/core";

describe("toJSONSchema", () => {
  test("primitive types", () => {
    expect(z.toJSONSchema(z.string())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.number())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.boolean())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "boolean",
      }
    `);
    expect(z.toJSONSchema(z.null())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "null",
      }
    `);
    expect(z.toJSONSchema(z.undefined(), { unrepresentable: "any" })).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
      }
    `);
    expect(z.toJSONSchema(z.any())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
      }
    `);
    expect(z.toJSONSchema(z.unknown())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
      }
    `);
    expect(z.toJSONSchema(z.never())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "not": {},
      }
    `);
    expect(z.toJSONSchema(z.email())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "email",
        "pattern": "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.datetime())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "date-time",
        "pattern": "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.date())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "date",
        "pattern": "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.time())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "time",
        "pattern": "^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.duration())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "duration",
        "pattern": "^P(?:(\\d+W)|(?!.*W)(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+([.,]\\d+)?S)?)?)$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.ipv4())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "ipv4",
        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.ipv6())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "ipv6",
        "pattern": "^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.uuid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uuid",
        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.guid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uuid",
        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.url())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uri",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.base64())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "contentEncoding": "base64",
        "format": "base64",
        "pattern": "^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.cuid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "cuid",
        "pattern": "^[cC][^\\s-]{8,}$",
        "type": "string",
      }
    `);
    // expect(z.toJSONSchema(z.regex(/asdf/))).toMatchInlineSnapshot();
    expect(z.toJSONSchema(z.emoji())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "emoji",
        "pattern": "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.nanoid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "nanoid",
        "pattern": "^[a-zA-Z0-9_-]{21}$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.cuid2())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "cuid2",
        "pattern": "^[0-9a-z]+$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.ulid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "ulid",
        "pattern": "^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$",
        "type": "string",
      }
    `);
    // expect(z.toJSONSchema(z.cidr())).toMatchInlineSnapshot();
    expect(z.toJSONSchema(z.number())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.int())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 9007199254740991,
        "minimum": -9007199254740991,
        "type": "integer",
      }
    `);
    expect(z.toJSONSchema(z.int32())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 2147483647,
        "minimum": -2147483648,
        "type": "integer",
      }
    `);
    expect(z.toJSONSchema(z.float32())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 3.4028234663852886e+38,
        "minimum": -3.4028234663852886e+38,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.float64())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 1.7976931348623157e+308,
        "minimum": -1.7976931348623157e+308,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.jwt())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "jwt",
        "type": "string",
      }
    `);
  });

  test("unsupported schema types", () => {
    expect(() => z.toJSONSchema(z.bigint())).toThrow("BigInt cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.int64())).toThrow("BigInt cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.symbol())).toThrow("Symbols cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.void())).toThrow("Void cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.undefined())).toThrow("Undefined cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.date())).toThrow("Date cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.map(z.string(), z.number()))).toThrow("Map cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.set(z.string()))).toThrow("Set cannot be represented in JSON Schema");
    expect(() => z.toJSONSchema(z.custom(() => true))).toThrow("Custom types cannot be represented in JSON Schema");

    // Transform
    const transformSchema = z.string().transform((val) => Number.parseInt(val));
    expect(() => z.toJSONSchema(transformSchema)).toThrow("Transforms cannot be represented in JSON Schema");

    // Static catch values
    const staticCatchSchema = z.string().catch(() => "sup");
    expect(z.toJSONSchema(staticCatchSchema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "default": "sup",
        "type": "string",
      }
    `);

    // Dynamic catch values
    const dynamicCatchSchema = z.string().catch((ctx) => `${ctx.issues.length}`);
    expect(() => z.toJSONSchema(dynamicCatchSchema)).toThrow("Dynamic catch values are not supported in JSON Schema");
  });

  test("string formats", () => {
    expect(z.toJSONSchema(z.string().email())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "email",
        "pattern": "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.string().uuid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uuid",
        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.datetime())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "date-time",
        "pattern": "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$",
        "type": "string",
      }
    `);

    expect(z.toJSONSchema(z.iso.date())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "date",
        "pattern": "^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.time())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "time",
        "pattern": "^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.iso.duration())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "duration",
        "pattern": "^P(?:(\\d+W)|(?!.*W)(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+([.,]\\d+)?S)?)?)$",
        "type": "string",
      }
    `);
    // expect(z.toJSONSchema(z.string().ip())).toMatchInlineSnapshot(`
    //   {
    //     "pattern": /\\(\\^\\(\\?:\\(\\?:25\\[0-5\\]\\|2\\[0-4\\]\\[0-9\\]\\|1\\[0-9\\]\\[0-9\\]\\|\\[1-9\\]\\[0-9\\]\\|\\[0-9\\]\\)\\\\\\.\\)\\{3\\}\\(\\?:25\\[0-5\\]\\|2\\[0-4\\]\\[0-9\\]\\|1\\[0-9\\]\\[0-9\\]\\|\\[1-9\\]\\[0-9\\]\\|\\[0-9\\]\\)\\$\\)\\|\\(\\^\\(\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{7\\}\\|::\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,6\\}\\|\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{1\\}:\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,5\\}\\|\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{2\\}:\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,4\\}\\|\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{3\\}:\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,3\\}\\|\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{4\\}:\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,2\\}\\|\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{5\\}:\\(\\[a-fA-F0-9\\]\\{1,4\\}:\\)\\{0,1\\}\\)\\(\\[a-fA-F0-9\\]\\{1,4\\}\\|\\(\\(\\(25\\[0-5\\]\\)\\|\\(2\\[0-4\\]\\[0-9\\]\\)\\|\\(1\\[0-9\\]\\{2\\}\\)\\|\\(\\[0-9\\]\\{1,2\\}\\)\\)\\\\\\.\\)\\{3\\}\\(\\(25\\[0-5\\]\\)\\|\\(2\\[0-4\\]\\[0-9\\]\\)\\|\\(1\\[0-9\\]\\{2\\}\\)\\|\\(\\[0-9\\]\\{1,2\\}\\)\\)\\)\\$\\)/,
    //     "type": "string",
    //   }
    // `);
    expect(z.toJSONSchema(z.ipv4())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "ipv4",
        "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$",
        "type": "string",
      }
    `);

    expect(z.toJSONSchema(z.ipv6())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "ipv6",
        "pattern": "^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$",
        "type": "string",
      }
    `);

    expect(z.toJSONSchema(z.base64())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "contentEncoding": "base64",
        "format": "base64",
        "pattern": "^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.url())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uri",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.guid())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "format": "uuid",
        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$",
        "type": "string",
      }
    `);
    expect(z.toJSONSchema(z.string().regex(/asdf/))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "pattern": "asdf",
        "type": "string",
      }
    `);
  });

  test("string patterns", () => {
    expect(
      z.toJSONSchema(
        z
          .string()
          .startsWith("hello")
          .includes("cruel")
          .includes("dark", { position: 10 })
          .endsWith("world")
          .regex(/stuff/)
      )
    ).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "allOf": [
          {
            "pattern": "^hello.*",
          },
          {
            "pattern": "cruel",
          },
          {
            "pattern": "^.{10}dark",
          },
          {
            "pattern": ".*world$",
          },
          {
            "pattern": "stuff",
          },
        ],
        "type": "string",
      }
    `);

    expect(
      z.toJSONSchema(
        z
          .string()
          .startsWith("hello")
          .includes("cruel")
          .includes("dark", { position: 10 })
          .endsWith("world")
          .regex(/stuff/),
        {
          target: "draft-7",
        }
      )
    ).toMatchInlineSnapshot(`
      {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "allOf": [
          {
            "pattern": "^hello.*",
            "type": "string",
          },
          {
            "pattern": "cruel",
            "type": "string",
          },
          {
            "pattern": "^.{10}dark",
            "type": "string",
          },
          {
            "pattern": ".*world$",
            "type": "string",
          },
          {
            "pattern": "stuff",
            "type": "string",
          },
        ],
        "type": "string",
      }
    `);
  });

  test("number constraints", () => {
    expect(z.toJSONSchema(z.number().min(5).max(10))).toMatchInlineSnapshot(
      `
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 10,
        "minimum": 5,
        "type": "number",
      }
    `
    );

    expect(z.toJSONSchema(z.number().gt(5).gt(10))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "exclusiveMinimum": 10,
        "type": "number",
      }
    `);

    expect(z.toJSONSchema(z.number().gt(5).gte(10))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "minimum": 10,
        "type": "number",
      }
    `);

    expect(z.toJSONSchema(z.number().lt(5).lt(3))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "exclusiveMaximum": 3,
        "type": "number",
      }
    `);

    expect(z.toJSONSchema(z.number().lt(5).lt(3).lte(2))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 2,
        "type": "number",
      }
    `);

    expect(z.toJSONSchema(z.number().lt(5).lte(3))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 3,
        "type": "number",
      }
    `);

    expect(z.toJSONSchema(z.number().gt(5).lt(10))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "exclusiveMaximum": 10,
        "exclusiveMinimum": 5,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.number().gte(5).lte(10))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 10,
        "minimum": 5,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.number().positive())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "exclusiveMinimum": 0,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.number().negative())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "exclusiveMaximum": 0,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.number().nonpositive())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "maximum": 0,
        "type": "number",
      }
    `);
    expect(z.toJSONSchema(z.number().nonnegative())).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "minimum": 0,
        "type": "number",
      }
    `);
  });

  test("arrays", () => {
    expect(z.toJSONSchema(z.array(z.string()))).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "items": {
          "type": "string",
        },
        "type": "array",
      }
    `);
  });

  test("unions", () => {
    const schema = z.union([z.string(), z.number()]);
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "anyOf": [
          {
            "type": "string",
          },
          {
            "type": "number",
          },
        ],
      }
    `);
  });

  test("intersections", () => {
    const schema = z.intersection(z.object({ name: z.string() }), z.object({ age: z.number() }));

    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "allOf": [
          {
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
              },
            },
            "required": [
              "name",
            ],
            "type": "object",
          },
          {
            "additionalProperties": false,
            "properties": {
              "age": {
                "type": "number",
              },
            },
            "required": [
              "age",
            ],
            "type": "object",
          },
        ],
      }
    `);
  });

  test("record", () => {
    const schema = z.record(z.string(), z.boolean());
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": {
          "type": "boolean",
        },
        "propertyNames": {
          "type": "string",
        },
        "type": "object",
      }
    `);
  });

  test("tuple", () => {
    const schema = z.tuple([z.string(), z.number()]).rest(z.boolean());
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "items": {
          "type": "boolean",
        },
        "prefixItems": [
          {
            "type": "string",
          },
          {
            "type": "number",
          },
        ],
        "type": "array",
      }
    `);
  });

  test("promise", () => {
    const schema = z.promise(z.string());
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "string",
      }
    `);
  });

  test("lazy", () => {
    const schema = z.lazy(() => z.string());
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "string",
      }
    `);
  });

  // enum
  test("enum", () => {
    const a = z.enum(["a", "b", "c"]);
    expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "enum": [
          "a",
          "b",
          "c",
        ],
        "type": "string",
      }
    `);

    enum B {
      A = 0,
      B = 1,
      C = 2,
    }

    const b = z.enum(B);
    expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "enum": [
          0,
          1,
          2,
        ],
        "type": "number",
      }
    `);
  });

  // literal
  test("literal", () => {
    const a = z.literal("hello");
    expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "const": "hello",
        "type": "string",
      }
    `);

    const b = z.literal(7);
    expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "const": 7,
        "type": "number",
      }
    `);

    const c = z.literal(["hello", undefined, null, 5, BigInt(1324)]);
    expect(() => z.toJSONSchema(c)).toThrow();

    const d = z.literal(["hello", null, 5]);
    expect(z.toJSONSchema(d)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "enum": [
          "hello",
          null,
          5,
        ],
      }
    `);

    const e = z.literal(["hello", "zod", "v4"]);
    expect(z.toJSONSchema(e)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "enum": [
          "hello",
          "zod",
          "v4",
        ],
        "type": "string",
      }
    `);
  });

  // pipe
  test("pipe", () => {
    const schema = z
      .string()
      .transform((val) => Number.parseInt(val))
      .pipe(z.number());
    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "number",
      }
    `);
  });

  test("simple objects", () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });

    expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(
      `
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "age": {
            "type": "number",
          },
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
          "age",
        ],
        "type": "object",
      }
    `
    );
  });

  test("additionalproperties in z.object", () => {
    const a = z.object({
      name: z.string(),
    });
    expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
    expect(z.toJSONSchema(a, { io: "input" })).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
    expect(
      z.toJSONSchema(a, {
        io: "input",
        override(ctx) {
          const def = ctx.zodSchema._zod.def;
          if (def.type === "object" && !def.catchall) {
            (ctx.jsonSchema as z.core.JSONSchema.ObjectSchema).additionalProperties = false;
          }
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
  });

  test("catchall objects", () => {
    const a = z.strictObject({
      name: z.string(),
      age: z.number(),
    });

    expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "age": {
            "type": "number",
          },
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
          "age",
        ],
        "type": "object",
      }
    `);

    const b = z
      .object({
        name: z.string(),
      })
      .catchall(z.string());

    expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": {
          "type": "string",
        },
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);

    const c = z.looseObject({
      name: z.string(),
    });

    expect(z.toJSONSchema(c)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": {},
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
  });

  test("optional fields - object", () => {
    const schema = z.object({
      required: z.string(),
      optional: z.string().optional(),
      nonoptional: z.string().optional().nonoptional(),
    });

    const result = z.toJSONSchema(schema);

    expect(result).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "nonoptional": {
            "type": "string",
          },
          "optional": {
            "type": "string",
          },
          "required": {
            "type": "string",
          },
        },
        "required": [
          "required",
          "nonoptional",
        ],
        "type": "object",
      }
    `);
  });

  test("recursive object", () => {
    interface Category {
      name: string;
      subcategories: Category[];
    }

    const categorySchema: z.ZodType<Category> = z.object({
      name: z.string(),
      subcategories: z.array(z.lazy(() => categorySchema)),
    });

    const result = z.toJSONSchema(categorySchema);
    expect(result).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "name": {
            "type": "string",
          },
          "subcategories": {
            "items": {
              "$ref": "#",
            },
            "type": "array",
          },
        },
        "required": [
          "name",
          "subcategories",
        ],
        "type": "object",
      }
    `);
  });

  test("simple interface", () => {
    const userSchema = z.object({
      name: z.string(),
      age: z.number().optional(),
    });

    const result = z.toJSONSchema(userSchema);
    expect(result).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "age": {
            "type": "number",
          },
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
  });

  test("catchall interface", () => {
    const a = z.strictObject({
      name: z.string(),
      age: z.number(),
    });

    expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": false,
        "properties": {
          "age": {
            "type": "number",
          },
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
          "age",
        ],
        "type": "object",
      }
    `);

    const b = z
      .object({
        name: z.string(),
      })
      .catchall(z.string());

    expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": {
          "type": "string",
        },
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);

    const c = z.looseObject({
      name: z.string(),
    });

    expect(z.toJSONSchema(c)).toMatchInlineSnapshot(`
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "additionalProperties": {},
        "properties": {
          "name": {
            "type": "string",
          },
        },
        "required": [
          "name",
        ],
        "type": "object",
      }
    `);
  });

  test("recursive interface schemas", () => {
    const TreeNodeSchema = z.object({
      id: z.string(),
      get children() {
        return TreeNodeSchema;
      },
    });

    const result = z.toJSONSchema(TreeNodeSchema);

    // Should have definitions for recursive schema
    expect(JSON.stringify(result, null, 2)).toMatchInlineSnapshot(
      `
      "{
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "children": {
            "$ref": "#"
          }
        },
        "required": [
          "id",
          "children"
        ],
        "additionalProperties": false
      }"
    `
    );
  });

  test("mutually recursive interface schemas", () => {
    const FolderSchema = z.object({
      name: z.string(),
      get files() {
        return z.array(FileSchema);
      },
    });

    const FileSchema = z.object({
      name: z.string(),
      get parent() {
        return FolderSchema;
      },
    });

    const result = z.toJSONSchema(FolderSchema);

    // Should have definitions for both schemas
    expect(JSON.stringify(result, null, 2)).toMatchInlineSnapshot(
      `
      "{
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "files": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "parent": {
                  "$ref": "#"
                }
              },
              "required": [
                "name",
                "parent"
              ],
              "additionalProperties": false
            }
          }
        },
        "required": [
          "name",
          "files"
        ],
        "additionalProperties": false
      }"
    `
    );
  });
});

test("override", () => {
  const schema = z.z.toJSONSchema(z.string(), {
    override: (ctx) => {
      ctx.zodSchema;
      ctx.jsonSchema;
      ctx.jsonSchema.whatever = "sup";
    },
  });
  expect(schema).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string",
      "whatever": "sup",
    }
  `);
});

test("override: do not run on references", () => {
  let overrideCount = 0;
  const schema = z
    .union([z.string().date(), z.string().datetime(), z.string().datetime({ local: true })])
    .meta({ a: true })
    .transform((str) => new Date(str))
    .meta({ b: true })
    .pipe(z.date())
    .meta({ c: true })
    .brand("dateIn");
  z.z.toJSONSchema(schema, {
    unrepresentable: "any",
    io: "input",
    override(_) {
      overrideCount++;
    },
  });

  expect(overrideCount).toBe(6);
});

test("override with refs", () => {
  const a = z.string().optional();
  const result = z.z.toJSONSchema(a, {
    override(ctx) {
      if (ctx.zodSchema._zod.def.type === "string") {
        ctx.jsonSchema.type = "STRING" as "string";
      }
    },
  });

  expect(result).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "STRING",
    }
  `);
});

test("override execution order", () => {
  const schema = z.union([z.string(), z.number()]);
  let unionSchema!: any;
  z.z.toJSONSchema(schema, {
    override(ctx) {
      if (ctx.zodSchema._zod.def.type === "union") {
        unionSchema = ctx.jsonSchema;
      }
    },
  });

  expect(unionSchema).toMatchInlineSnapshot(`
    {
      "anyOf": [
        {
          "type": "string",
        },
        {
          "type": "number",
        },
      ],
    }
  `);
});

test("override with path", () => {
  const userSchema = z.object({
    name: z.string(),
    age: z.number(),
  });

  const capturedPaths: (string | number)[][] = [];

  z.toJSONSchema(userSchema, {
    override(ctx) {
      capturedPaths.push(ctx.path);
    },
  });

  expect(capturedPaths).toMatchInlineSnapshot(`
    [
      [
        "properties",
        "age",
      ],
      [
        "properties",
        "name",
      ],
      [],
    ]
  `);
});

test("pipe", () => {
  const mySchema = z
    .string()
    .transform((val) => val.length)
    .pipe(z.number());
  // ZodPipe

  const a = z.z.toJSONSchema(mySchema);
  expect(a).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "number",
    }
  `);
  // => { type: "number" }

  const b = z.z.toJSONSchema(mySchema, { io: "input" });
  expect(b).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string",
    }
  `);
  // => { type: "string" }
});

test("passthrough schemas", () => {
  const Internal = z.object({
    num: z.number(),
    str: z.string(),
  });
  //.meta({ id: "Internal" });

  const External = z.object({
    a: Internal,
    b: Internal.optional(),
    c: z.lazy(() => Internal),
    d: z.promise(Internal),
    e: z.pipe(Internal, Internal),
  });

  const result = z.z.toJSONSchema(External, {
    reused: "ref",
  });
  expect(result).toMatchInlineSnapshot(`
    {
      "$defs": {
        "__schema0": {
          "additionalProperties": false,
          "properties": {
            "num": {
              "type": "number",
            },
            "str": {
              "type": "string",
            },
          },
          "required": [
            "num",
            "str",
          ],
          "type": "object",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "a": {
          "$ref": "#/$defs/__schema0",
        },
        "b": {
          "$ref": "#/$defs/__schema0",
        },
        "c": {
          "$ref": "#/$defs/__schema0",
        },
        "d": {
          "$ref": "#/$defs/__schema0",
        },
        "e": {
          "$ref": "#/$defs/__schema0",
        },
      },
      "required": [
        "a",
        "c",
        "d",
        "e",
      ],
      "type": "object",
    }
  `);
});

test("extract schemas with id", () => {
  const name = z.string().meta({ id: "name" });
  const result = z.z.toJSONSchema(
    z.object({
      first_name: name,
      last_name: name.nullable(),
      middle_name: name.optional(),
      age: z.number().meta({ id: "age" }),
    })
  );
  expect(result).toMatchInlineSnapshot(`
    {
      "$defs": {
        "age": {
          "id": "age",
          "type": "number",
        },
        "name": {
          "id": "name",
          "type": "string",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "age": {
          "$ref": "#/$defs/age",
        },
        "first_name": {
          "$ref": "#/$defs/name",
        },
        "last_name": {
          "anyOf": [
            {
              "$ref": "#/$defs/name",
            },
            {
              "type": "null",
            },
          ],
        },
        "middle_name": {
          "$ref": "#/$defs/name",
        },
      },
      "required": [
        "first_name",
        "last_name",
        "age",
      ],
      "type": "object",
    }
  `);
});

test("unrepresentable literal values are ignored", () => {
  const a = z.z.toJSONSchema(z.literal(["hello", null, 5, BigInt(1324), undefined]), { unrepresentable: "any" });
  expect(a).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "enum": [
        "hello",
        null,
        5,
        1324,
      ],
    }
  `);

  const b = z.z.toJSONSchema(z.literal([undefined, null, 5, BigInt(1324)]), { unrepresentable: "any" });
  expect(b).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "enum": [
        null,
        5,
        1324,
      ],
    }
  `);

  const c = z.z.toJSONSchema(z.literal([undefined]), { unrepresentable: "any" });
  expect(c).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
    }
  `);
});

test("describe with id", () => {
  const jobId = z.string().meta({ id: "jobId" });

  const a = z.z.toJSONSchema(
    z.object({
      current: jobId.describe("Current job"),
      previous: jobId.describe("Previous job"),
    })
  );
  expect(a).toMatchInlineSnapshot(`
    {
      "$defs": {
        "jobId": {
          "id": "jobId",
          "type": "string",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "current": {
          "$ref": "#/$defs/jobId",
          "description": "Current job",
        },
        "previous": {
          "$ref": "#/$defs/jobId",
          "description": "Previous job",
        },
      },
      "required": [
        "current",
        "previous",
      ],
      "type": "object",
    }
  `);
});

test("overwrite id", () => {
  const jobId = z.string().meta({ id: "aaa" });

  const a = z.z.toJSONSchema(
    z.object({
      current: jobId,
      previous: jobId.meta({ id: "bbb" }),
    })
  );
  expect(a).toMatchInlineSnapshot(`
    {
      "$defs": {
        "aaa": {
          "id": "aaa",
          "type": "string",
        },
        "bbb": {
          "$ref": "#/$defs/aaa",
          "id": "bbb",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "current": {
          "$ref": "#/$defs/aaa",
        },
        "previous": {
          "$ref": "#/$defs/bbb",
        },
      },
      "required": [
        "current",
        "previous",
      ],
      "type": "object",
    }
  `);

  const b = z.z.toJSONSchema(
    z.object({
      current: jobId,
      previous: jobId.meta({ id: "ccc" }),
    }),
    {
      reused: "ref",
    }
  );
  expect(b).toMatchInlineSnapshot(`
    {
      "$defs": {
        "aaa": {
          "id": "aaa",
          "type": "string",
        },
        "ccc": {
          "$ref": "#/$defs/aaa",
          "id": "ccc",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "current": {
          "$ref": "#/$defs/aaa",
        },
        "previous": {
          "$ref": "#/$defs/ccc",
        },
      },
      "required": [
        "current",
        "previous",
      ],
      "type": "object",
    }
  `);
});

test("overwrite descriptions", () => {
  const field = z.string().describe("a").describe("b").describe("c");

  const a = z.z.toJSONSchema(
    z.object({
      d: field.describe("d"),
      e: field.describe("e"),
    })
  );
  expect(a).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "d": {
          "description": "d",
          "type": "string",
        },
        "e": {
          "description": "e",
          "type": "string",
        },
      },
      "required": [
        "d",
        "e",
      ],
      "type": "object",
    }
  `);

  const b = z.z.toJSONSchema(
    z.object({
      d: field.describe("d"),
      e: field.describe("e"),
    }),
    {
      reused: "ref",
    }
  );
  expect(b).toMatchInlineSnapshot(`
    {
      "$defs": {
        "__schema0": {
          "description": "c",
          "type": "string",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "d": {
          "$ref": "#/$defs/__schema0",
          "description": "d",
        },
        "e": {
          "$ref": "#/$defs/__schema0",
          "description": "e",
        },
      },
      "required": [
        "d",
        "e",
      ],
      "type": "object",
    }
  `);
});

test("top-level readonly", () => {
  const A = z
    .object({
      name: z.string(),
      get b() {
        return B;
      },
    })
    .readonly()
    .meta({ id: "A" });
  // z.globalRegistry.add(A, { id: "A" });
  // .meta({ id: "A" });

  const B = z
    .object({
      name: z.string(),
      get a() {
        return A;
      },
    })
    .readonly()
    .meta({ id: "B" });
  // z.globalRegistry.add(B, { id: "B" });
  // .meta({ id: "B" });

  const result = z.z.toJSONSchema(A);
  expect(result).toMatchInlineSnapshot(`
    {
      "$defs": {
        "B": {
          "additionalProperties": false,
          "id": "B",
          "properties": {
            "a": {
              "$ref": "#",
            },
            "name": {
              "type": "string",
            },
          },
          "readOnly": true,
          "required": [
            "name",
            "a",
          ],
          "type": "object",
        },
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "id": "A",
      "properties": {
        "b": {
          "$ref": "#/$defs/B",
        },
        "name": {
          "type": "string",
        },
      },
      "readOnly": true,
      "required": [
        "name",
        "b",
      ],
      "type": "object",
    }
  `);
});

test("basic registry", () => {
  const myRegistry = z.registry<{ id: string }>();
  const User = z.object({
    name: z.string(),
    get posts() {
      return z.array(Post);
    },
  });

  const Post = z.object({
    title: z.string(),
    content: z.string(),
    get author() {
      return User;
    },
  });

  myRegistry.add(User, { id: "User" });
  myRegistry.add(Post, { id: "Post" });

  const result = z.z.toJSONSchema(myRegistry, { uri: (id) => `https://example.com/${id}.json` });
  expect(result).toMatchInlineSnapshot(`
    {
      "schemas": {
        "Post": {
          "$id": "https://example.com/Post.json",
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "additionalProperties": false,
          "properties": {
            "author": {
              "$ref": "https://example.com/User.json",
            },
            "content": {
              "type": "string",
            },
            "title": {
              "type": "string",
            },
          },
          "required": [
            "title",
            "content",
            "author",
          ],
          "type": "object",
        },
        "User": {
          "$id": "https://example.com/User.json",
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "additionalProperties": false,
          "properties": {
            "name": {
              "type": "string",
            },
            "posts": {
              "items": {
                "$ref": "https://example.com/Post.json",
              },
              "type": "array",
            },
          },
          "required": [
            "name",
            "posts",
          ],
          "type": "object",
        },
      },
    }
  `);
});

test("_ref", () => {
  // const a = z.promise(z.string().describe("a"));
  const a = z.z.toJSONSchema(z.promise(z.string().describe("a")));
  expect(a).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "description": "a",
      "type": "string",
    }
  `);

  const b = z.z.toJSONSchema(z.lazy(() => z.string().describe("a")));
  expect(b).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "description": "a",
      "type": "string",
    }
  `);

  const c = z.z.toJSONSchema(z.optional(z.string().describe("a")));
  expect(c).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "description": "a",
      "type": "string",
    }
  `);
});

test("defaults/prefaults", () => {
  const a = z
    .string()
    .transform((val) => val.length)
    .pipe(z.number());
  const b = a.prefault("hello");
  const c = a.default(1234);

  // a
  expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "number",
    }
  `);
  expect(z.toJSONSchema(a, { io: "input" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string",
    }
  `);

  // b
  expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "number",
    }
  `);
  expect(z.toJSONSchema(b, { io: "input" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "default": "hello",
      "type": "string",
    }
  `);
  // c
  expect(z.toJSONSchema(c)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "default": 1234,
      "type": "number",
    }
  `);
  expect(z.toJSONSchema(c, { io: "input" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string",
    }
  `);
});

test("input type", () => {
  const schema = z.object({
    a: z.string(),
    b: z.string().optional(),
    c: z.string().default("hello"),
    d: z.string().nullable(),
    e: z.string().prefault("hello"),
    f: z.string().catch("hello"),
    g: z.never(),
    h: z.union([z.string(), z.number().default(2)]),
    i: z.union([z.string(), z.string().optional()]),
  });
  expect(z.toJSONSchema(schema, { io: "input" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "properties": {
        "a": {
          "type": "string",
        },
        "b": {
          "type": "string",
        },
        "c": {
          "default": "hello",
          "type": "string",
        },
        "d": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "type": "null",
            },
          ],
        },
        "e": {
          "default": "hello",
          "type": "string",
        },
        "f": {
          "default": "hello",
          "type": "string",
        },
        "g": {
          "not": {},
        },
        "h": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "default": 2,
              "type": "number",
            },
          ],
        },
        "i": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "type": "string",
            },
          ],
        },
      },
      "required": [
        "a",
        "d",
        "g",
      ],
      "type": "object",
    }
  `);
  expect(z.toJSONSchema(schema, { io: "output" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties": false,
      "properties": {
        "a": {
          "type": "string",
        },
        "b": {
          "type": "string",
        },
        "c": {
          "default": "hello",
          "type": "string",
        },
        "d": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "type": "null",
            },
          ],
        },
        "e": {
          "type": "string",
        },
        "f": {
          "default": "hello",
          "type": "string",
        },
        "g": {
          "not": {},
        },
        "h": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "default": 2,
              "type": "number",
            },
          ],
        },
        "i": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "type": "string",
            },
          ],
        },
      },
      "required": [
        "a",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
      ],
      "type": "object",
    }
  `);
});

test("examples on pipe", () => {
  const schema = z
    .string()
    .meta({ examples: ["test"] })
    .transform(Number)
    // .pipe(z.transform(Number).meta({ examples: [4] }))
    .meta({ examples: [4] });

  const i = z.z.toJSONSchema(schema, { io: "input", unrepresentable: "any" });
  expect(i).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "examples": [
        "test",
      ],
      "type": "string",
    }
  `);
  const o = z.z.toJSONSchema(schema, { io: "output", unrepresentable: "any" });
  expect(o).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "examples": [
        4,
      ],
    }
  `);
});

// test("number checks", () => {
//   expect(z.z.toJSONSchema(z.number().int())).toMatchInlineSnapshot(`
//     {
//       "maximum": 9007199254740991,
//       "minimum": -9007199254740991,
//       "type": "integer",
//     }
//   `);
//   expect(z.z.toJSONSchema(z.int())).toMatchInlineSnapshot(`
//     {
//       "maximum": 9007199254740991,
//       "minimum": -9007199254740991,
//       "type": "integer",
//     }
//   `);
//   expect(z.z.toJSONSchema(z.int().positive())).toMatchInlineSnapshot(`
//     {
//       "exclusiveMinimum": 0,
//       "maximum": 9007199254740991,
//       "minimum": -9007199254740991,
//       "type": "integer",
//     }
//   `);
//   expect(z.z.toJSONSchema(z.int().nonnegative())).toMatchInlineSnapshot(`
//     {
//       "maximum": 9007199254740991,
//       "minimum": 0,
//       "type": "integer",
//     }
//   `);
//   expect(z.z.toJSONSchema(z.int().gt(0))).toMatchInlineSnapshot(`
//     {
//       "exclusiveMinimum": 0,
//       "maximum": 9007199254740991,
//       "minimum": -9007199254740991,
//       "type": "integer",
//     }
//   `);
//   expect(z.z.toJSONSchema(z.int().gte(0))).toMatchInlineSnapshot(`
//     {
//       "maximum": 9007199254740991,
//       "minimum": 0,
//       "type": "integer",
//     }
//   `);

// });

test("use output type for preprocess", () => {
  const a = z.preprocess((val) => String(val), z.string());

  expect(z.toJSONSchema(a, { io: "input" })).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string",
    }
  `);
});

// test("isTransforming", () => {
//   const tx = z.core.isTransforming;
//   expect(tx(z.string())).toEqual(false);
//   expect(tx(z.string().transform((val) => val))).toEqual(true);
//   expect(tx(z.string().pipe(z.string()))).toEqual(false);
//   expect(
//     tx(
//       z
//         .string()
//         .transform((val) => val)
//         .pipe(z.string())
//     )
//   ).toEqual(true);

//   const a = z.transform((val) => val);
//   expect(tx(z.transform((val) => val))).toEqual(true);
//   expect(tx(a.optional())).toEqual(true);

//   const b = z.string().optional();
//   expect(tx(b)).toEqual(false);

//   const c = z.string().prefault("hello");
//   expect(tx(c)).toEqual(false);

//   const d = z.string().default("hello");
//   expect(tx(d)).toEqual(false);
// });

test("flatten simple intersections", () => {
  const FirstSchema = z.object({
    testNum: z.number(),
  });

  const SecondSchema = z.object({
    testStr: z.string(),
  });

  const ThirdSchema = z.object({
    testBool: z.boolean(),
  });

  const HelloSchema = FirstSchema.and(SecondSchema).and(ThirdSchema).describe("123");

  // Zod 3
  // console.log(JSON.stringify(zodToJsonSchema(HelloSchema), null, 2));

  // Zod 4
  const result = z.toJSONSchema(HelloSchema, { target: "draft-7" });
  expect(result).toMatchInlineSnapshot(`
    {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "allOf": [
        {
          "additionalProperties": false,
          "properties": {
            "testNum": {
              "type": "number",
            },
          },
          "required": [
            "testNum",
          ],
          "type": "object",
        },
        {
          "additionalProperties": false,
          "properties": {
            "testStr": {
              "type": "string",
            },
          },
          "required": [
            "testStr",
          ],
          "type": "object",
        },
        {
          "additionalProperties": false,
          "properties": {
            "testBool": {
              "type": "boolean",
            },
          },
          "required": [
            "testBool",
          ],
          "type": "object",
        },
      ],
      "description": "123",
    }
  `);
});

test("z.file()", () => {
  const a = z.file();
  expect(z.toJSONSchema(a)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "contentEncoding": "binary",
      "format": "binary",
      "type": "string",
    }
  `);

  const b = z.file().mime("image/png").min(1000).max(10000);
  expect(z.toJSONSchema(b)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "contentEncoding": "binary",
      "contentMediaType": "image/png",
      "format": "binary",
      "maxLength": 10000,
      "minLength": 1000,
      "type": "string",
    }
  `);

  const c = z.file().mime(["image/png", "image/jpg"]).min(1000).max(10000);
  expect(z.toJSONSchema(c)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "anyOf": [
        {
          "contentEncoding": "binary",
          "contentMediaType": "image/png",
          "format": "binary",
          "maxLength": 10000,
          "minLength": 1000,
          "type": "string",
        },
        {
          "contentEncoding": "binary",
          "contentMediaType": "image/jpg",
          "format": "binary",
          "maxLength": 10000,
          "minLength": 1000,
          "type": "string",
        },
      ],
    }
  `);
});

test("custom toJSONSchema", () => {
  const schema = z.instanceof(Date);
  schema._zod.toJSONSchema = () => ({
    type: "string",
    format: "date-time",
  });

  expect(z.toJSONSchema(schema)).toMatchInlineSnapshot(`
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "format": "date-time",
      "type": "string",
    }
  `);
});

test("cycle detection - root", () => {
  const schema = z.object({
    name: z.string(),
    get subcategories() {
      return z.array(schema);
    },
  });

  expect(() => z.toJSONSchema(schema, { cycles: "throw" })).toThrowErrorMatchingInlineSnapshot(`
    [Error: Cycle detected: #/properties/subcategories/items/<root>

    Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.]
  `);
});

test("cycle detection - mutual recursion", () => {
  const A = z.object({
    name: z.string(),
    get subcategories() {
      return z.array(B);
    },
  });

  const B = z.object({
    name: z.string(),
    get subcategories() {
      return z.array(A);
    },
  });

  expect(() => z.toJSONSchema(A, { cycles: "throw" })).toThrowErrorMatchingInlineSnapshot(`
    [Error: Cycle detected: #/properties/subcategories/items/properties/subcategories/items/<root>

    Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.]
  `);
});
