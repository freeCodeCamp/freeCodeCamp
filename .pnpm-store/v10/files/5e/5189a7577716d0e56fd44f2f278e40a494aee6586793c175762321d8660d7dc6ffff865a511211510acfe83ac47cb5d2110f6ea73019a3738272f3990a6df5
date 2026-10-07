import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("z.stringbool", () => {
  const a = z.stringbool();
  type a = z.infer<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<boolean>();
  type a_in = z.input<typeof a>;
  expectTypeOf<a_in>().toEqualTypeOf<string>();

  expect(z.parse(a, "true")).toEqual(true);
  expect(z.parse(a, "yes")).toEqual(true);
  expect(z.parse(a, "1")).toEqual(true);
  expect(z.parse(a, "on")).toEqual(true);
  expect(z.parse(a, "y")).toEqual(true);
  expect(z.parse(a, "enabled")).toEqual(true);
  expect(z.parse(a, "TRUE")).toEqual(true);

  expect(z.parse(a, "false")).toEqual(false);
  expect(z.parse(a, "no")).toEqual(false);
  expect(z.parse(a, "0")).toEqual(false);
  expect(z.parse(a, "off")).toEqual(false);
  expect(z.parse(a, "n")).toEqual(false);
  expect(z.parse(a, "disabled")).toEqual(false);
  expect(z.parse(a, "FALSE")).toEqual(false);

  expect(z.safeParse(a, "other")).toMatchObject({ success: false });
  expect(z.safeParse(a, "")).toMatchObject({ success: false });
  expect(z.safeParse(a, undefined)).toMatchObject({ success: false });
  expect(z.safeParse(a, {})).toMatchObject({ success: false });
  expect(z.safeParse(a, true)).toMatchObject({ success: false });
  expect(z.safeParse(a, false)).toMatchObject({ success: false });
});

test("custom values", () => {
  const b = z.stringbool({
    truthy: ["y"],
    falsy: ["N"],
  });
  expect(z.parse(b, "y")).toEqual(true);
  expect(z.parse(b, "Y")).toEqual(true);
  expect(z.parse(b, "n")).toEqual(false);
  expect(z.parse(b, "N")).toEqual(false);
  expect(z.safeParse(b, "true")).toMatchObject({ success: false });
  expect(z.safeParse(b, "false")).toMatchObject({ success: false });
});

test("custom values - case sensitive", () => {
  const c = z.stringbool({
    truthy: ["y"],
    falsy: ["N"],
    case: "sensitive",
  });
  expect(z.parse(c, "y")).toEqual(true);
  expect(z.safeParse(c, "Y")).toMatchObject({ success: false });
  expect(z.parse(c, "N")).toEqual(false);
  expect(z.safeParse(c, "n")).toMatchObject({ success: false });
  expect(z.safeParse(c, "TRUE")).toMatchObject({ success: false });
});

// test custom error messages
test("z.stringbool with custom error messages", () => {
  const a = z.stringbool("wrong!");

  expect(() => a.parse("")).toThrowError("wrong!");
});
