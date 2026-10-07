import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4";

test("basic prefault", () => {
  const a = z.prefault(z.string().trim(), "  default  ");
  expect(a).toBeInstanceOf(z.ZodPrefault);
  expect(a.parse("  asdf  ")).toEqual("asdf");
  expect(a.parse(undefined)).toEqual("default");

  type inp = z.input<typeof a>;
  expectTypeOf<inp>().toEqualTypeOf<string | undefined>();
  type out = z.output<typeof a>;
  expectTypeOf<out>().toEqualTypeOf<string>();
});

test("prefault inside object", () => {
  // test optinality
  const a = z.object({
    name: z.string().optional(),
    age: z.number().default(1234),
    email: z.string().prefault("1234"),
  });

  type inp = z.input<typeof a>;
  expectTypeOf<inp>().toEqualTypeOf<{
    name?: string | undefined;
    age?: number | undefined;
    email?: string | undefined;
  }>();

  type out = z.output<typeof a>;
  expectTypeOf<out>().toEqualTypeOf<{
    name?: string | undefined;
    age: number;
    email: string;
  }>();
});
