import { expect, test } from "vitest";

import * as z from "zod/v4";

const description = "a description";

// test("passing `description` to schema should add a description", () => {
//   expect(z.string({ description }).description).toEqual(description);
//   expect(z.number({ description }).description).toEqual(description);
//   expect(z.boolean({ description }).description).toEqual(description);
// });

test(".describe", () => {
  expect(z.string().describe(description).description).toEqual(description);
  expect(z.number().describe(description).description).toEqual(description);
  expect(z.boolean().describe(description).description).toEqual(description);
});

test("adding description with z.globalRegistry", () => {
  const schema = z.string();
  z.core.globalRegistry.add(schema, { description });
  z.core.globalRegistry.get(schema);
  expect(schema.description).toEqual(description);
});

// in Zod 4 descriptions are not inherited
// test("description should carry over to chained schemas", () => {
//   const schema = z.string().describe(description);
//   expect(schema.description).toEqual(description);
//   expect(schema.optional().description).toEqual(description);
//   expect(schema.optional().nullable().default("default").description).toEqual(description);
// });
