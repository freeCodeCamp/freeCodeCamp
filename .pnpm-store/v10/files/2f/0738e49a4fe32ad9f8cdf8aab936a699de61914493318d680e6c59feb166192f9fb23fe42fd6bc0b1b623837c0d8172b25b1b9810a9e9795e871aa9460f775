// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";
test("void", () => {
  const v = z.void();
  v.parse(undefined);

  expect(() => v.parse(null)).toThrow();
  expect(() => v.parse("")).toThrow();

  type v = z.infer<typeof v>;
  util.assertEqual<v, void>(true);
});
