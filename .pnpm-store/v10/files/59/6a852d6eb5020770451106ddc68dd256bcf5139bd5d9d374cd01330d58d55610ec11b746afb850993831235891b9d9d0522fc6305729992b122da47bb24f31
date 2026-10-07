import { expect, test } from "vitest";
import * as z from "zod/v4";

test("continuability", () => {
  /** 
   *  | $ZodGUID
  | $ZodUUID
  | $ZodEmail
  | $ZodURL
  | $ZodEmoji
  | $ZodNanoID
  | $ZodCUID
  | $ZodCUID2
  | $ZodULID
  | $ZodXID
  | $ZodKSUID
  | $ZodISODateTime
  | $ZodISODate
  | $ZodISOTime
  | $ZodISODuration
  | $ZodIPv4
  | $ZodIPv6
  | $ZodCIDRv4
  | $ZodCIDRv6
  | $ZodBase64
  | $ZodBase64URL
  | $ZodE164
  | $ZodJWT;
   */
  expect(
    z
      .email()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "email",
        "message": "Invalid email address",
        "origin": "string",
        "path": [],
        "pattern": "/^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .uuid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "uuid",
        "message": "Invalid UUID",
        "origin": "string",
        "path": [],
        "pattern": "/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .url()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "url",
        "message": "Invalid URL",
        "path": [],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .jwt()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "jwt",
        "message": "Invalid JWT",
        "path": [],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .cidrv4()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "cidrv4",
        "message": "Invalid IPv4 range",
        "origin": "string",
        "path": [],
        "pattern": "/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\/([0-9]|[1-2][0-9]|3[0-2])$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .cidrv6()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "cidrv6",
        "message": "Invalid IPv6 range",
        "path": [],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .ipv4()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "ipv4",
        "message": "Invalid IPv4 address",
        "origin": "string",
        "path": [],
        "pattern": "/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .ipv6()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "ipv6",
        "message": "Invalid IPv6 address",
        "path": [],
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .emoji()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "emoji",
        "message": "Invalid emoji",
        "origin": "string",
        "path": [],
        "pattern": "/^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$/u",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .nanoid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "nanoid",
        "message": "Invalid nanoid",
        "origin": "string",
        "path": [],
        "pattern": "/^[a-zA-Z0-9_-]{21}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .cuid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "cuid",
        "message": "Invalid cuid",
        "origin": "string",
        "path": [],
        "pattern": "/^[cC][^\\s-]{8,}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .cuid2()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "cuid2",
        "message": "Invalid cuid2",
        "origin": "string",
        "path": [],
        "pattern": "/^[0-9a-z]+$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .ulid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "ulid",
        "message": "Invalid ULID",
        "origin": "string",
        "path": [],
        "pattern": "/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .xid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "xid",
        "message": "Invalid XID",
        "origin": "string",
        "path": [],
        "pattern": "/^[0-9a-vA-V]{20}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
  expect(
    z
      .ksuid()
      .refine(() => false)
      .safeParse("invalid_value").error!.issues
  ).toMatchInlineSnapshot(`
    [
      {
        "code": "invalid_format",
        "format": "ksuid",
        "message": "Invalid KSUID",
        "origin": "string",
        "path": [],
        "pattern": "/^[A-Za-z0-9]{27}$/",
      },
      {
        "code": "custom",
        "message": "Invalid input",
        "path": [],
      },
    ]
  `);
});
