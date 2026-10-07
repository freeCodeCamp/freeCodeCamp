// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";
import { util } from "../helpers/util.js";

test("create enum", () => {
  const MyEnum = z.enum(["Red", "Green", "Blue"]);
  expect(MyEnum.Values.Red).toEqual("Red");
  expect(MyEnum.Enum.Red).toEqual("Red");
  expect(MyEnum.enum.Red).toEqual("Red");
});

test("infer enum", () => {
  const MyEnum = z.enum(["Red", "Green", "Blue"]);
  type MyEnum = z.infer<typeof MyEnum>;
  util.assertEqual<MyEnum, "Red" | "Green" | "Blue">(true);
});

test("get options", () => {
  expect(z.enum(["tuna", "trout"]).options).toEqual(["tuna", "trout"]);
});

test("readonly enum", () => {
  const HTTP_SUCCESS = ["200", "201"] as const;
  const arg = z.enum(HTTP_SUCCESS);
  type arg = z.infer<typeof arg>;
  util.assertEqual<arg, "200" | "201">(true);

  arg.parse("201");
  expect(() => arg.parse("202")).toThrow();
});

test("error params", () => {
  const result = z.enum(["test"], { required_error: "REQUIRED" }).safeParse(undefined);
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues[0].message).toEqual("REQUIRED");
  }
});

test("extract/exclude", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods);
  const ItalianEnum = FoodEnum.extract(["Pasta", "Pizza"]);
  const UnhealthyEnum = FoodEnum.exclude(["Salad"]);
  const EmptyFoodEnum = FoodEnum.exclude(foods);

  util.assertEqual<z.infer<typeof ItalianEnum>, "Pasta" | "Pizza">(true);
  util.assertEqual<z.infer<typeof UnhealthyEnum>, "Pasta" | "Pizza" | "Tacos" | "Burgers">(true);
  // @ts-expect-error TS2344
  util.assertEqual<typeof EmptyFoodEnum, z.ZodEnum<[]>>(true);
  util.assertEqual<z.infer<typeof EmptyFoodEnum>, never>(true);
});

test("error map in extract/exclude", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods, {
    errorMap: () => ({ message: "This is not food!" }),
  });
  const ItalianEnum = FoodEnum.extract(["Pasta", "Pizza"]);
  const foodsError = FoodEnum.safeParse("Cucumbers");
  const italianError = ItalianEnum.safeParse("Tacos");
  if (!foodsError.success && !italianError.success) {
    expect(foodsError.error.issues[0].message).toEqual(italianError.error.issues[0].message);
  }

  const UnhealthyEnum = FoodEnum.exclude(["Salad"], {
    errorMap: () => ({ message: "This is not healthy food!" }),
  });
  const unhealthyError = UnhealthyEnum.safeParse("Salad");
  if (!unhealthyError.success) {
    expect(unhealthyError.error.issues[0].message).toEqual("This is not healthy food!");
  }
});

test("readonly in ZodEnumDef", () => {
  let _t!: z.ZodEnumDef<readonly ["a", "b"]>;
  _t;
});
