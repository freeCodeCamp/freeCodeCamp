import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

function nest<TData extends z.ZodType>(schema: TData) {
  return z.object({
    nested: schema,
  });
}

test("generics", () => {
  const a = nest(z.object({ a: z.string() }));
  type a = z.infer<typeof a>;
  expectTypeOf<a>().toEqualTypeOf<{ nested: { a: string } }>();

  const b = nest(z.object({ a: z.string().optional() }));
  type b = z.infer<typeof b>;
  expectTypeOf<b>().toEqualTypeOf<{ nested: { a?: string | undefined } }>();
});

test("generics with optional", () => {
  async function stripOuter<TData extends z.ZodType>(schema: TData, data: unknown) {
    return z
      .object({
        nested: schema.optional(),
      })
      .transform((data) => {
        return data.nested;
      })
      .parse({ nested: data });
  }

  const result = stripOuter(z.object({ a: z.string() }), { a: "asdf" });
  expectTypeOf<typeof result>().toEqualTypeOf<Promise<{ a: string } | undefined>>();
});

// test("assignability", () => {
//   const createSchemaAndParse = <K extends string, VS extends z.ZodString>(key: K, valueSchema: VS, data: unknown) => {
//     const schema = z.object({
//       [key]: valueSchema,
//     });
//     // return { [key]: valueSchema };
//     const parsed = schema.parse(data);
//     return parsed;
//     // const inferred: z.infer<z.ZodObject<{ [k in K]: VS }>> = parsed;
//     // return inferred;
//   };
//   const parsed = createSchemaAndParse("foo", z.string(), { foo: "" });
//   expectTypeOf<typeof parsed>().toEqualTypeOf<{ foo: string }>();
// });

test("nested no undefined", () => {
  const inner = z.string().or(z.array(z.string()));
  const outer = z.object({ inner });
  type outerSchema = z.infer<typeof outer>;
  expectTypeOf<outerSchema>().toEqualTypeOf<{ inner: string | string[] }>();

  expect(outer.safeParse({ inner: undefined }).success).toEqual(false);
});

test("generic on output type", () => {
  const createV4Schema = <Output>(opts: {
    schema: z.ZodType<Output>;
  }) => {
    return opts.schema;
  };

  createV4Schema({
    schema: z.object({
      name: z.string(),
    }),
  })?._zod?.output?.name;
});
