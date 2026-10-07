import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4-mini";

test("z.object", () => {
  const a = z.object({
    name: z.string(),
    age: z.number(),
    points: z.optional(z.number()),
    "test?": z.boolean(),
  });

  a._zod.def.shape["test?"];
  a._zod.def.shape.points._zod.optin;

  type a = z.output<typeof a>;

  expectTypeOf<a>().toEqualTypeOf<{
    name: string;
    age: number;
    points?: number;
    "test?": boolean;
  }>();
  expect(z.parse(a, { name: "john", age: 30, "test?": true })).toEqual({
    name: "john",
    age: 30,
    "test?": true,
  });
  // "test?" is required in ZodObject
  expect(() => z.parse(a, { name: "john", age: "30" })).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();

  // null prototype
  const schema = z.object({ a: z.string() });
  const obj = Object.create(null);
  obj.a = "foo";
  expect(schema.parse(obj)).toEqual({ a: "foo" });
});

test("z.object().check()", () => {
  const a = z.object({
    name: z.string(),
    age: z.number(),
    points: z.optional(z.number()),
    "test?": z.boolean(),
  });

  type a = z.output<typeof a>;

  a.check(({ value }) => {
    expectTypeOf(value).toEqualTypeOf<a>();
  });
});

test("z.strictObject", () => {
  const a = z.strictObject({
    name: z.string(),
  });
  expect(z.parse(a, { name: "john" })).toEqual({ name: "john" });
  expect(() => z.parse(a, { name: "john", age: 30 })).toThrow();
  expect(() => z.parse(a, "hello")).toThrow();
});

test("z.looseObject", () => {
  const a = z.looseObject({
    name: z.string(),
    age: z.number(),
  });
  expect(z.parse(a, { name: "john", age: 30 })).toEqual({
    name: "john",
    age: 30,
  });
  expect(z.parse(a, { name: "john", age: 30, extra: true })).toEqual({
    name: "john",
    age: 30,
    extra: true,
  });
  expect(() => z.parse(a, "hello")).toThrow();
});

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.optional(z.string()),
});

test("z.keyof", () => {
  // z.keyof returns an enum schema of the keys of an object schema
  const userKeysSchema = z.keyof(userSchema);
  type UserKeys = z.infer<typeof userKeysSchema>;
  expectTypeOf<UserKeys>().toEqualTypeOf<"name" | "age" | "email">();
  expect(userKeysSchema).toBeDefined();
  expect(z.safeParse(userKeysSchema, "name").success).toBe(true);
  expect(z.safeParse(userKeysSchema, "age").success).toBe(true);
  expect(z.safeParse(userKeysSchema, "email").success).toBe(true);
  expect(z.safeParse(userKeysSchema, "isAdmin").success).toBe(false);
});

test("z.extend", () => {
  const extendedSchema = z.extend(userSchema, {
    isAdmin: z.boolean(),
  });
  type ExtendedUser = z.infer<typeof extendedSchema>;
  expectTypeOf<ExtendedUser>().toEqualTypeOf<{
    name: string;
    age: number;
    email?: string;
    isAdmin: boolean;
  }>();
  expect(extendedSchema).toBeDefined();
  expect(z.safeParse(extendedSchema, { name: "John", age: 30, isAdmin: true }).success).toBe(true);
});

test("z.pick", () => {
  const pickedSchema = z.pick(userSchema, { name: true, email: true });
  type PickedUser = z.infer<typeof pickedSchema>;
  expectTypeOf<PickedUser>().toEqualTypeOf<{ name: string; email?: string }>();
  expect(pickedSchema).toBeDefined();
  expect(z.safeParse(pickedSchema, { name: "John", email: "john@example.com" }).success).toBe(true);
});

test("z.omit", () => {
  const omittedSchema = z.omit(userSchema, { age: true });
  type OmittedUser = z.infer<typeof omittedSchema>;
  expectTypeOf<OmittedUser>().toEqualTypeOf<{
    name: string;
    email?: string | undefined;
  }>();
  expect(omittedSchema).toBeDefined();
  expect(Reflect.ownKeys(omittedSchema._zod.def.shape)).toEqual(["name", "email"]);
  expect(z.safeParse(omittedSchema, { name: "John", email: "john@example.com" }).success).toBe(true);
});

test("z.partial", () => {
  const partialSchema = z.partial(userSchema);
  type PartialUser = z.infer<typeof partialSchema>;
  expectTypeOf<PartialUser>().toEqualTypeOf<{
    name?: string;
    age?: number;
    email?: string;
  }>();
  expect(z.safeParse(partialSchema, { name: "John" }).success).toBe(true);
});

test("z.partial with mask", () => {
  const partialSchemaWithMask = z.partial(userSchema, { name: true });
  type PartialUserWithMask = z.infer<typeof partialSchemaWithMask>;
  expectTypeOf<PartialUserWithMask>().toEqualTypeOf<{
    name?: string;
    age: number;
    email?: string;
  }>();
  expect(z.safeParse(partialSchemaWithMask, { age: 30 }).success).toBe(true);
  expect(z.safeParse(partialSchemaWithMask, { name: "John" }).success).toBe(false);
});

test("z.catchall", () => {
  // z.catchall()
  const schema = z.catchall(
    z.object({
      name: z.string(),
      // age: z.number(),
    }),
    z.string()
  );

  type schemaIn = z.input<typeof schema>;
  type schemaOut = z.output<typeof schema>;
  expectTypeOf<schemaIn>().toEqualTypeOf<{
    name: string;
    [key: string]: string;
  }>();

  expectTypeOf<schemaOut>().toEqualTypeOf<{
    name: string;
    [key: string]: string;
  }>();

  schema.parse({
    name: "john",
    age: "30",
    extra: "extra value",
  });

  expect(() => schema.parse({ name: "john", age: 30 })).toThrow();
});
