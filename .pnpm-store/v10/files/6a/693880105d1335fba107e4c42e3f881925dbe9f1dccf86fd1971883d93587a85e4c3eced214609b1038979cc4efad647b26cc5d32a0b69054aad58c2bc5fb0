// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

test("generics", () => {
  async function stripOuter<TData extends z.ZodTypeAny>(schema: TData, data: unknown) {
    return z
      .object({
        nested: schema, // as z.ZodTypeAny,
      })
      .transform((data) => {
        return data.nested!;
      })
      .parse({ nested: data });
  }

  const result = stripOuter(z.object({ a: z.string() }), { a: "asdf" });
  util.assertEqual<typeof result, Promise<{ a: string }>>(true);
});

// test("assignability", () => {
//   const createSchemaAndParse = <K extends string, VS extends z.ZodString>(
//     key: K,
//     valueSchema: VS,
//     data: unknown
//   ) => {
//     const schema = z.object({
//       [key]: valueSchema,
//     } as { [k in K]: VS });
//     return { [key]: valueSchema };
//     const parsed = schema.parse(data);
//     return parsed;
//     // const inferred: z.infer<z.ZodObject<{ [k in K]: VS }>> = parsed;
//     // return inferred;
//   };
//   const parsed = createSchemaAndParse("foo", z.string(), { foo: "" });
//   util.assertEqual<typeof parsed, { foo: string }>(true);
// });

test("nested no undefined", () => {
  const inner = z.string().or(z.array(z.string()));
  const outer = z.object({ inner });
  type outerSchema = z.infer<typeof outer>;
  z.util.assertEqual<outerSchema, { inner: string | string[] }>(true);
  expect(outer.safeParse({ inner: undefined }).success).toEqual(false);
});
