import { test } from "vitest";
import * as z from "zod/v3";

const crazySchema = z.object({
  tuple: z.tuple([
    z.string().nullable().optional(),
    z.number().nullable().optional(),
    z.boolean().nullable().optional(),
    z.null().nullable().optional(),
    z.undefined().nullable().optional(),
    z.literal("1234").nullable().optional(),
  ]),
  merged: z
    .object({
      k1: z.string().optional(),
    })
    .merge(z.object({ k1: z.string().nullable(), k2: z.number() })),
  union: z.array(z.union([z.literal("asdf"), z.literal(12)])).nonempty(),
  array: z.array(z.number()),
  // sumTransformer: z.transformer(z.array(z.number()), z.number(), (arg) => {
  //   return arg.reduce((a, b) => a + b, 0);
  // }),
  sumMinLength: z.array(z.number()).refine((arg) => arg.length > 5),
  intersection: z.intersection(z.object({ p1: z.string().optional() }), z.object({ p1: z.number().optional() })),
  enum: z.intersection(z.enum(["zero", "one"]), z.enum(["one", "two"])),
  nonstrict: z.object({ points: z.number() }).nonstrict(),
  numProm: z.promise(z.number()),
  lenfun: z.function(z.tuple([z.string()]), z.boolean()),
});

// const asyncCrazySchema = crazySchema.extend({
//   // async_transform: z.transformer(
//   //   z.array(z.number()),
//   //   z.number(),
//   //   async (arg) => {
//   //     return arg.reduce((a, b) => a + b, 0);
//   //   }
//   // ),
//   async_refine: z.array(z.number()).refine(async (arg) => arg.length > 5),
// });

test("parse", () => {
  crazySchema.parse({
    tuple: ["asdf", 1234, true, null, undefined, "1234"],
    merged: { k1: "asdf", k2: 12 },
    union: ["asdf", 12, "asdf", 12, "asdf", 12],
    array: [12, 15, 16],
    // sumTransformer: [12, 15, 16],
    sumMinLength: [12, 15, 16, 98, 24, 63],
    intersection: {},
    enum: "one",
    nonstrict: { points: 1234 },
    numProm: Promise.resolve(12),
    lenfun: (x: string) => x.length,
  });
});
