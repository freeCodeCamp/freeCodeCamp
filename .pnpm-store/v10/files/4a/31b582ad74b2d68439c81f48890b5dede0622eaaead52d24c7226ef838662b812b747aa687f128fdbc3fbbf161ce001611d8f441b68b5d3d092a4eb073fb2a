// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

test("instanceof", async () => {
  class Test {}
  class Subtest extends Test {}
  abstract class AbstractBar {
    constructor(public val: string) {}
  }
  class Bar extends AbstractBar {}

  const TestSchema = z.instanceof(Test);
  const SubtestSchema = z.instanceof(Subtest);
  const AbstractSchema = z.instanceof(AbstractBar);
  const BarSchema = z.instanceof(Bar);

  TestSchema.parse(new Test());
  TestSchema.parse(new Subtest());
  SubtestSchema.parse(new Subtest());
  AbstractSchema.parse(new Bar("asdf"));
  const bar = BarSchema.parse(new Bar("asdf"));
  expect(bar.val).toEqual("asdf");

  await expect(() => SubtestSchema.parse(new Test())).toThrow(/Input not instance of Subtest/);
  await expect(() => TestSchema.parse(12)).toThrow(/Input not instance of Test/);

  util.assertEqual<Test, z.infer<typeof TestSchema>>(true);
});

test("instanceof fatal", () => {
  const schema = z.instanceof(Date).refine((d) => d.toString());
  const res = schema.safeParse(null);
  expect(res.success).toBe(false);
});
