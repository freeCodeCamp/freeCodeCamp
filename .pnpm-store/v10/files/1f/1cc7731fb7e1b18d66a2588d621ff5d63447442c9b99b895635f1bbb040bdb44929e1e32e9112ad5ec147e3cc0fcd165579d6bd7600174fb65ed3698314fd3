// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { ZodNullable, ZodOptional } from "zod/v3";
import { util } from "../helpers/util.js";

const nested = z.object({
  name: z.string(),
  age: z.number(),
  outer: z.object({
    inner: z.string(),
  }),
  array: z.array(z.object({ asdf: z.string() })),
});

test("shallow inference", () => {
  const shallow = nested.partial();
  type shallow = z.infer<typeof shallow>;
  type correct = {
    name?: string | undefined;
    age?: number | undefined;
    outer?: { inner: string } | undefined;
    array?: { asdf: string }[];
  };
  util.assertEqual<shallow, correct>(true);
});

test("shallow partial parse", () => {
  const shallow = nested.partial();
  shallow.parse({});
  shallow.parse({
    name: "asdf",
    age: 23143,
  });
});

test("deep partial inference", () => {
  const deep = nested.deepPartial();
  const asdf = deep.shape.array.unwrap().element.shape.asdf.unwrap();
  asdf.parse("asdf");
  type deep = z.infer<typeof deep>;
  type correct = {
    array?: { asdf?: string }[];
    name?: string | undefined;
    age?: number | undefined;
    outer?: { inner?: string | undefined } | undefined;
  };

  util.assertEqual<deep, correct>(true);
});

test("deep partial parse", () => {
  const deep = nested.deepPartial();

  expect(deep.shape.name instanceof z.ZodOptional).toBe(true);
  expect(deep.shape.outer instanceof z.ZodOptional).toBe(true);
  expect(deep.shape.outer._def.innerType instanceof z.ZodObject).toBe(true);
  expect(deep.shape.outer._def.innerType.shape.inner instanceof z.ZodOptional).toBe(true);
  expect(deep.shape.outer._def.innerType.shape.inner._def.innerType instanceof z.ZodString).toBe(true);
});

test("deep partial runtime tests", () => {
  const deep = nested.deepPartial();
  deep.parse({});
  deep.parse({
    outer: {},
  });
  deep.parse({
    name: "asdf",
    age: 23143,
    outer: {
      inner: "adsf",
    },
  });
});

test("deep partial optional/nullable", () => {
  const schema = z
    .object({
      name: z.string().optional(),
      age: z.number().nullable(),
    })
    .deepPartial();

  expect(schema.shape.name.unwrap()).toBeInstanceOf(ZodOptional);
  expect(schema.shape.age.unwrap()).toBeInstanceOf(ZodNullable);
});

test("deep partial tuple", () => {
  const schema = z
    .object({
      tuple: z.tuple([
        z.object({
          name: z.string().optional(),
          age: z.number().nullable(),
        }),
      ]),
    })
    .deepPartial();

  expect(schema.shape.tuple.unwrap().items[0].shape.name).toBeInstanceOf(ZodOptional);
});

test("deep partial inference", () => {
  const mySchema = z.object({
    name: z.string(),
    array: z.array(z.object({ asdf: z.string() })),
    tuple: z.tuple([z.object({ value: z.string() })]),
  });

  const partialed = mySchema.deepPartial();
  type partialed = z.infer<typeof partialed>;
  type expected = {
    name?: string | undefined;
    array?:
      | {
          asdf?: string | undefined;
        }[]
      | undefined;
    tuple?: [{ value?: string }] | undefined;
  };
  util.assertEqual<expected, partialed>(true);
});

test("required", () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    nullableField: z.number().nullable(),
    nullishField: z.string().nullish(),
  });

  const requiredObject = object.required();
  expect(requiredObject.shape.name).toBeInstanceOf(z.ZodString);
  expect(requiredObject.shape.age).toBeInstanceOf(z.ZodNumber);
  expect(requiredObject.shape.field).toBeInstanceOf(z.ZodDefault);
  expect(requiredObject.shape.nullableField).toBeInstanceOf(z.ZodNullable);
  expect(requiredObject.shape.nullishField).toBeInstanceOf(z.ZodNullable);
});

test("required inference", () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    nullableField: z.number().nullable(),
    nullishField: z.string().nullish(),
  });

  const requiredObject = object.required();

  type required = z.infer<typeof requiredObject>;
  type expected = {
    name: string;
    age: number;
    field: string;
    nullableField: number | null;
    nullishField: string | null;
  };
  util.assertEqual<expected, required>(true);
});

test("required with mask", () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    country: z.string().optional(),
  });

  const requiredObject = object.required({ age: true });
  expect(requiredObject.shape.name).toBeInstanceOf(z.ZodString);
  expect(requiredObject.shape.age).toBeInstanceOf(z.ZodNumber);
  expect(requiredObject.shape.field).toBeInstanceOf(z.ZodDefault);
  expect(requiredObject.shape.country).toBeInstanceOf(z.ZodOptional);
});

test("required with mask -- ignore falsy values", () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    country: z.string().optional(),
  });

  // @ts-expect-error
  const requiredObject = object.required({ age: true, country: false });
  expect(requiredObject.shape.name).toBeInstanceOf(z.ZodString);
  expect(requiredObject.shape.age).toBeInstanceOf(z.ZodNumber);
  expect(requiredObject.shape.field).toBeInstanceOf(z.ZodDefault);
  expect(requiredObject.shape.country).toBeInstanceOf(z.ZodOptional);
});

test("partial with mask", async () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    country: z.string(),
  });

  const masked = object.partial({ age: true, field: true, name: true }).strict();

  expect(masked.shape.name).toBeInstanceOf(z.ZodOptional);
  expect(masked.shape.age).toBeInstanceOf(z.ZodOptional);
  expect(masked.shape.field).toBeInstanceOf(z.ZodOptional);
  expect(masked.shape.country).toBeInstanceOf(z.ZodString);

  masked.parse({ country: "US" });
  await masked.parseAsync({ country: "US" });
});

test("partial with mask -- ignore falsy values", async () => {
  const object = z.object({
    name: z.string(),
    age: z.number().optional(),
    field: z.string().optional().default("asdf"),
    country: z.string(),
  });

  // @ts-expect-error
  const masked = object.partial({ name: true, country: false }).strict();

  expect(masked.shape.name).toBeInstanceOf(z.ZodOptional);
  expect(masked.shape.age).toBeInstanceOf(z.ZodOptional);
  expect(masked.shape.field).toBeInstanceOf(z.ZodDefault);
  expect(masked.shape.country).toBeInstanceOf(z.ZodString);

  masked.parse({ country: "US" });
  await masked.parseAsync({ country: "US" });
});

test("deeppartial array", () => {
  const schema = z.object({ array: z.string().array().min(42) }).deepPartial();

  // works as expected
  schema.parse({});

  // should be false, but is true
  expect(schema.safeParse({ array: [] }).success).toBe(false);
});
