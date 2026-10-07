import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4-mini";

const FAIL = { success: false };

test("z.string", async () => {
  const a = z.string();
  expect(z.parse(a, "hello")).toEqual("hello");
  expect(() => z.parse(a, 123)).toThrow();
  expect(() => z.parse(a, false)).toThrow();
  type a = z.infer<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<string>();
});

// test("z.string with description", () => {
//   const a = z.string({ description: "string description" });
//   a._def;
//   expect(a._def.description).toEqual("string description");
// });

test("z.string with custom error", () => {
  const a = z.string({ error: () => "BAD" });
  expect(z.safeParse(a, 123).error!.issues[0].message).toEqual("BAD");
});

test("inference in checks", () => {
  const a = z.string().check(z.refine((val) => val.length));
  z.parse(a, "___");
  expect(() => z.parse(a, "")).toThrow();
  const b = z.string().check(z.refine((val) => val.length));
  z.parse(b, "___");
  expect(() => z.parse(b, "")).toThrow();
  const c = z.string().check(z.refine((val) => val.length));
  z.parse(c, "___");
  expect(() => z.parse(c, "")).toThrow();
  const d = z.string().check(z.refine((val) => val.length));
  z.parse(d, "___");
  expect(() => z.parse(d, "")).toThrow();
});

test("z.string async", async () => {
  // async
  const a = z.string().check(z.refine(async (val) => val.length));
  expect(await z.parseAsync(a, "___")).toEqual("___");
  await expect(() => z.parseAsync(a, "")).rejects.toThrowError();
});

test("z.uuid", () => {
  const a = z.uuid();
  // parse uuid
  z.parse(a, "550e8400-e29b-41d4-a716-446655440000");
  z.parse(a, "550e8400-e29b-61d4-a716-446655440000");

  // bad uuid
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();

  const b = z.uuidv4();
  z.parse(b, "550e8400-e29b-41d4-a716-446655440000");
  expect(z.safeParse(b, "550e8400-e29b-61d4-a716-446655440000")).toMatchObject(FAIL);

  const c = z.uuidv6();
  z.parse(c, "550e8400-e29b-61d4-a716-446655440000");
  expect(z.safeParse(c, "550e8400-e29b-41d4-a716-446655440000")).toMatchObject(FAIL);

  const d = z.uuidv7();
  z.parse(d, "550e8400-e29b-71d4-a716-446655440000");
  expect(z.safeParse(d, "550e8400-e29b-41d4-a716-446655440000")).toMatchObject(FAIL);
  expect(z.safeParse(d, "550e8400-e29b-61d4-a716-446655440000")).toMatchObject(FAIL);
});

test("z.email", () => {
  const a = z.email();
  expect(z.parse(a, "test@test.com")).toEqual("test@test.com");
  expect(() => z.parse(a, "test")).toThrow();
  expect(z.safeParse(a, "bad email", { error: () => "bad email" }).error!.issues[0].message).toEqual("bad email");

  const b = z.email("bad email");
  expect(z.safeParse(b, "bad email").error!.issues[0].message).toEqual("bad email");

  const c = z.email({ error: "bad email" });
  expect(z.safeParse(c, "bad email").error!.issues[0].message).toEqual("bad email");

  const d = z.email({ error: () => "bad email" });
  expect(z.safeParse(d, "bad email").error!.issues[0].message).toEqual("bad email");
});

test("z.url", () => {
  const a = z.url();
  // valid URLs
  expect(a.parse("http://example.com")).toEqual("http://example.com");
  expect(a.parse("https://example.com")).toEqual("https://example.com");
  expect(a.parse("ftp://example.com")).toEqual("ftp://example.com");
  expect(a.parse("http://sub.example.com")).toEqual("http://sub.example.com");
  expect(a.parse("https://example.com/path?query=123#fragment")).toEqual("https://example.com/path?query=123#fragment");
  expect(a.parse("http://localhost")).toEqual("http://localhost");
  expect(a.parse("https://localhost")).toEqual("https://localhost");
  expect(a.parse("http://localhost:3000")).toEqual("http://localhost:3000");
  expect(a.parse("https://localhost:3000")).toEqual("https://localhost:3000");

  // test trimming
  expect(a.parse("  http://example.com  ")).toEqual("http://example.com");
  expect(a.parse("  http://example.com/")).toEqual("http://example.com/");
  expect(a.parse("  http://example.com")).toEqual("http://example.com");
  expect(a.parse("  http://example.com//")).toEqual("http://example.com//");

  // invalid URLs
  expect(() => a.parse("not-a-url")).toThrow();
  // expect(() => a.parse("http:/example.com")).toThrow();
  expect(() => a.parse("://example.com")).toThrow();
  expect(() => a.parse("http://")).toThrow();
  expect(() => a.parse("example.com")).toThrow();

  // wrong type
  expect(() => a.parse(123)).toThrow();
  expect(() => a.parse(null)).toThrow();
  expect(() => a.parse(undefined)).toThrow();
});

test("z.url with optional hostname regex", () => {
  const a = z.url({ hostname: /example\.com$/ });
  expect(a.parse("http://example.com")).toEqual("http://example.com");
  expect(a.parse("https://sub.example.com")).toEqual("https://sub.example.com");
  expect(() => a.parse("http://examples.com")).toThrow();
  expect(() => a.parse("http://example.org")).toThrow();
  expect(() => a.parse("asdf")).toThrow();
});

test("z.url - file urls", () => {
  // file URLs
  const a = z.url({ hostname: /.*/ }); // allow any hostname
  expect(a.parse("file:///path/to/file.txt")).toEqual("file:///path/to/file.txt");
  expect(a.parse("file:///C:/path/to/file.txt")).toEqual("file:///C:/path/to/file.txt");
  expect(a.parse("file:///C:/path/to/file.txt?query=123#fragment")).toEqual(
    "file:///C:/path/to/file.txt?query=123#fragment"
  );
});
test("z.url with optional protocol regex", () => {
  const a = z.url({ protocol: /^https?$/ });
  expect(a.parse("http://example.com")).toEqual("http://example.com");
  expect(a.parse("https://example.com")).toEqual("https://example.com");
  expect(() => a.parse("ftp://example.com")).toThrow();
  expect(() => a.parse("mailto:example@example.com")).toThrow();
  expect(() => a.parse("asdf")).toThrow();
});

test("z.url with both hostname and protocol regexes", () => {
  const a = z.url({ hostname: /example\.com$/, protocol: /^https$/ });
  expect(a.parse("https://example.com")).toEqual("https://example.com");
  expect(a.parse("https://sub.example.com")).toEqual("https://sub.example.com");
  expect(() => a.parse("http://example.com")).toThrow();
  expect(() => a.parse("https://example.org")).toThrow();
  expect(() => a.parse("ftp://example.com")).toThrow();
  expect(() => a.parse("asdf")).toThrow();
});

test("z.url with invalid regex patterns", () => {
  const a = z.url({ hostname: /a+$/, protocol: /^ftp$/ });
  a.parse("ftp://a");
  a.parse("ftp://aaaaaaaa");
  expect(() => a.parse("http://aaa")).toThrow();
  expect(() => a.parse("https://example.com")).toThrow();
  expect(() => a.parse("ftp://asdfasdf")).toThrow();
  expect(() => a.parse("ftp://invalid")).toThrow();
});

test("z.emoji", () => {
  const a = z.emoji();
  expect(z.parse(a, "😀")).toEqual("😀");
  expect(() => z.parse(a, "hello")).toThrow();
});

test("z.nanoid", () => {
  const a = z.nanoid();
  expect(z.parse(a, "8FHZpIxleEK3axQRBNNjN")).toEqual("8FHZpIxleEK3axQRBNNjN");
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.cuid", () => {
  const a = z.cuid();
  expect(z.parse(a, "cixs7y0c0000f7x3b1z6m3w6r")).toEqual("cixs7y0c0000f7x3b1z6m3w6r");
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.cuid2", () => {
  const a = z.cuid2();
  expect(z.parse(a, "cixs7y0c0000f7x3b1z6m3w6r")).toEqual("cixs7y0c0000f7x3b1z6m3w6r");
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.ulid", () => {
  const a = z.ulid();
  expect(z.parse(a, "01ETGRM9QYVX6S9V2F3B6JXG4N")).toEqual("01ETGRM9QYVX6S9V2F3B6JXG4N");
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.xid", () => {
  const a = z.xid();
  expect(z.parse(a, "9m4e2mr0ui3e8a215n4g")).toEqual("9m4e2mr0ui3e8a215n4g");
  expect(() => z.parse(a, "abc")).toThrow();
});

test("z.ksuid", () => {
  const a = z.ksuid();
  expect(z.parse(a, "2naeRjTrrHJAkfd3tOuEjw90WCA")).toEqual("2naeRjTrrHJAkfd3tOuEjw90WCA");
  expect(() => z.parse(a, "abc")).toThrow();
});

// test("z.ip", () => {
//   const a = z.ip();
//   expect(z.parse(a, "127.0.0.1")).toEqual("127.0.0.1");
//   expect(z.parse(a, "2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toEqual("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
//   expect(() => z.parse(a, "abc")).toThrow();
// });

test("z.ipv4", () => {
  const a = z.ipv4();
  // valid ipv4
  expect(z.parse(a, "192.168.1.1")).toEqual("192.168.1.1");
  expect(z.parse(a, "255.255.255.255")).toEqual("255.255.255.255");
  // invalid ipv4
  expect(() => z.parse(a, "999.999.999.999")).toThrow();
  expect(() => z.parse(a, "256.256.256.256")).toThrow();
  expect(() => z.parse(a, "192.168.1")).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.ipv6", () => {
  const a = z.ipv6();
  // valid ipv6
  expect(z.parse(a, "2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toEqual("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
  expect(z.parse(a, "::1")).toEqual("::1");
  // invalid ipv6
  expect(() => z.parse(a, "2001:db8::85a3::8a2e:370:7334")).toThrow();
  expect(() => z.parse(a, "2001:db8:85a3:0:0:8a2e:370g:7334")).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.base64", () => {
  const a = z.base64();
  // valid base64
  expect(z.parse(a, "SGVsbG8gd29ybGQ=")).toEqual("SGVsbG8gd29ybGQ=");
  expect(z.parse(a, "U29tZSBvdGhlciBzdHJpbmc=")).toEqual("U29tZSBvdGhlciBzdHJpbmc=");
  // invalid base64
  expect(() => z.parse(a, "SGVsbG8gd29ybGQ")).toThrow();
  expect(() => z.parse(a, "U29tZSBvdGhlciBzdHJpbmc")).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();
});

// test("z.jsonString", () => {
//   const a = z.jsonString();
//   // valid JSON string
//   expect(z.parse(a, '{"key":"value"}')).toEqual('{"key":"value"}');
//   expect(z.parse(a, '["item1", "item2"]')).toEqual('["item1", "item2"]');
//   // invalid JSON string
//   expect(() => z.parse(a, '{"key":value}')).toThrow();
//   expect(() => z.parse(a, '["item1", "item2"')).toThrow();
//   expect(() => z.parse(a, "hello")).toThrow();
//   // wrong type
//   expect(() => z.parse(a, 123)).toThrow();
// });

test("z.e164", () => {
  const a = z.e164();
  // valid e164
  expect(z.parse(a, "+1234567890")).toEqual("+1234567890");
  expect(z.parse(a, "+19876543210")).toEqual("+19876543210");
  // invalid e164
  expect(() => z.parse(a, "1234567890")).toThrow();
  expect(() => z.parse(a, "+12345")).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();
});

test("z.jwt", () => {
  const a = z.jwt();
  // valid jwt
  expect(
    z.parse(
      a,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    )
  ).toEqual(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  // invalid jwt
  expect(() => z.parse(a, "invalid.jwt.token")).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
  // wrong type
  expect(() => z.parse(a, 123)).toThrow();
});
