import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("enum from string array", () => {
  const MyEnum = z.enum(["Red", "Green", "Blue"]);
  expect(MyEnum.enum.Red).toEqual("Red");

  type MyEnum = z.infer<typeof MyEnum>;
  expectTypeOf<MyEnum>().toEqualTypeOf<"Red" | "Green" | "Blue">();
});

test("enum from const object", () => {
  const Fruits: { Apple: "apple"; Banana: "banana" } = {
    Apple: "apple",
    Banana: "banana",
  };
  const fruitEnum = z.nativeEnum(Fruits);
  type fruitEnum = z.infer<typeof fruitEnum>;
  fruitEnum.parse("apple");
  fruitEnum.parse("banana");
  fruitEnum.parse(Fruits.Apple);
  fruitEnum.parse(Fruits.Banana);
  expectTypeOf<fruitEnum>().toEqualTypeOf<"apple" | "banana">();
});

test("enum from native enum", () => {
  enum Fruits {
    Apple = "apple",
    Banana = "banana",
    Orange = 3,
  }
  // @ts-ignore
  const fruitEnum = z.nativeEnum(Fruits);
  type fruitEnum = z.infer<typeof fruitEnum>;
  fruitEnum.parse("apple");
  fruitEnum.parse("banana");
  fruitEnum.parse(Fruits.Apple);
  fruitEnum.parse(Fruits.Banana);

  expect(fruitEnum.safeParse("Apple").success).toEqual(false);
  expect(fruitEnum.safeParse("Cantaloupe").success).toEqual(false);

  expectTypeOf<fruitEnum>().toMatchTypeOf<Fruits>();
  expectTypeOf<Fruits>().toMatchTypeOf<fruitEnum>();
});

test("enum from native enum with numeric keys", () => {
  const FruitValues = {
    Apple: 10,
    Banana: 20,
    // @ts-ignore
  } as const;
  const fruitEnum = z.nativeEnum(FruitValues);
  type fruitEnum = z.infer<typeof fruitEnum>;
  fruitEnum.parse(10);
  fruitEnum.parse(20);
  fruitEnum.parse(FruitValues.Apple);
  fruitEnum.parse(FruitValues.Banana);
  expectTypeOf<fruitEnum>().toEqualTypeOf<10 | 20>();
});

test("issue metadata", () => {
  const schema = z.enum(["Red", "Green", "Blue"]);
  const result = schema.safeParse("Yellow");
  expect(result.error!.issues[0]).toMatchInlineSnapshot(`
    {
      "code": "invalid_value",
      "message": "Invalid option: expected one of "Red"|"Green"|"Blue"",
      "path": [],
      "values": [
        "Red",
        "Green",
        "Blue",
      ],
    }
  `);
});

test("enum from non-const inputs", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"];
  const FoodEnum = z.enum(foods);

  expectTypeOf<z.infer<typeof FoodEnum>>().toEqualTypeOf<string>();
  expect(FoodEnum.safeParse("Pasta").success).toEqual(true);
  expect(FoodEnum.safeParse("Cucumbers").success).toEqual(false);
});

test("get options", () => {
  expect(z.enum(["tuna", "trout"]).options).toEqual(["tuna", "trout"]);
});

test("readonly enum", () => {
  const HTTP_SUCCESS = ["200", "201"] as const;
  const arg = z.enum(HTTP_SUCCESS);
  type arg = z.infer<typeof arg>;
  expectTypeOf<arg>().toEqualTypeOf<"200" | "201">();

  arg.parse("201");
  expect(() => arg.parse("202")).toThrow();
});

test("error map", () => {
  const result = z
    .enum(["test"], { error: (iss) => (iss.input === undefined ? "REQUIRED" : undefined) })
    .safeParse(undefined);
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues[0].message).toEqual("REQUIRED");
  }
});

test("type signatures", () => {
  const a = z.enum(["a", "b", "c"]);
  const b = z.enum(a.options);
  expectTypeOf(a).toEqualTypeOf(b);

  const c = z.enum({ a: 1, b: 2 } as const);
  expectTypeOf(c.enum).toEqualTypeOf<{
    readonly a: 1;
    readonly b: 2;
  }>();

  enum Fruit {
    Apple = "apple",
    Banana = "banana",
    Orange = "orange",
  }
  const d = z.enum(Fruit);
  expectTypeOf(d.enum).toEqualTypeOf(Fruit);

  const e = z.enum({ a: 1, b: 2 });
  expectTypeOf(e.enum).toEqualTypeOf<{
    readonly a: 1;
    readonly b: 2;
  }>();
});

test("extract", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods);
  const ItalianEnum = FoodEnum.extract(["Pasta", "Pizza"]);

  expect(ItalianEnum.safeParse("Pasta").success).toEqual(true);
  expect(ItalianEnum.safeParse("Tacos").success).toEqual(false);

  expectTypeOf<z.infer<typeof ItalianEnum>>().toEqualTypeOf<"Pasta" | "Pizza">();
});

test("exclude", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods);
  const UnhealthyEnum = FoodEnum.exclude(["Salad"]);

  expect(UnhealthyEnum.safeParse("Pasta").success).toEqual(true);
  expect(UnhealthyEnum.safeParse("Salad").success).toEqual(false);
  expectTypeOf<z.infer<typeof UnhealthyEnum>>().toEqualTypeOf<"Pasta" | "Pizza" | "Tacos" | "Burgers">();

  const EmptyFoodEnum = FoodEnum.exclude(foods);
  expectTypeOf<typeof EmptyFoodEnum>().toEqualTypeOf<z.ZodEnum<{}>>();
  expectTypeOf<z.infer<typeof EmptyFoodEnum>>().toEqualTypeOf<never>();
});

test("error map inheritance", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods, { error: () => "This is not food!" });
  const ItalianEnum = FoodEnum.extract(["Pasta", "Pizza"]);

  const foodsError = FoodEnum.safeParse("Cucumbers");
  const italianError = ItalianEnum.safeParse("Tacos");

  expect(foodsError.error!.issues[0].message).toEqual(italianError.error!.issues[0].message);

  const UnhealthyEnum = FoodEnum.exclude(["Salad"], {
    error: () => ({ message: "This is not healthy food!" }),
  });
  const unhealthyError = UnhealthyEnum.safeParse("Salad");
  if (!unhealthyError.success) {
    expect(unhealthyError.error.issues[0].message).toEqual("This is not healthy food!");
  }
});

test("readonly in ZodEnumDef", () => {
  type _a = z.ZodEnum<{ readonly a: "a"; readonly b: "b" }>;
  type _b = z.ZodEnum<{ a: "a"; b: "b" }>;
});

test("enum error message, invalid enum elementstring", () => {
  const result = z.enum(["Tuna", "Trout"]).safeParse("Salmon");
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);

  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_value",
        "values": [
          "Tuna",
          "Trout"
        ],
        "path": [],
        "message": "Invalid option: expected one of \\"Tuna\\"|\\"Trout\\""
      }
    ]]
  `);
});

test("enum error message, invalid type", () => {
  const result = z.enum(["Tuna", "Trout"]).safeParse(12);
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  // expect(result.error!.issues[0].message).toEqual('Invalid input: expected one of "Tuna"|"Trout"');
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_value",
        "values": [
          "Tuna",
          "Trout"
        ],
        "path": [],
        "message": "Invalid option: expected one of \\"Tuna\\"|\\"Trout\\""
      }
    ]]
  `);
});

test("nativeEnum default error message", () => {
  enum Fish {
    Tuna = "Tuna",
    Trout = "Trout",
  }
  const result = z.nativeEnum(Fish).safeParse("Salmon");
  expect(result.success).toEqual(false);
  expect(result.error!.issues.length).toEqual(1);
  // expect(result.error!.issues[0].message).toEqual('Invalid input: expected one of "Tuna"|"Trout"');
  expect(result.error).toMatchInlineSnapshot(`
    [ZodError: [
      {
        "code": "invalid_value",
        "values": [
          "Tuna",
          "Trout"
        ],
        "path": [],
        "message": "Invalid option: expected one of \\"Tuna\\"|\\"Trout\\""
      }
    ]]
  `);
});

test("enum with message returns the custom error message", () => {
  const schema = z.enum(["apple", "banana"], {
    message: "the value provided is invalid",
  });

  const result1 = schema.safeParse("berries");
  expect(result1.success).toEqual(false);
  if (!result1.success) {
    expect(result1.error.issues[0].message).toEqual("the value provided is invalid");
  }

  const result2 = schema.safeParse(undefined);
  expect(result2.success).toEqual(false);
  if (!result2.success) {
    expect(result2.error.issues[0].message).toEqual("the value provided is invalid");
  }

  const result3 = schema.safeParse("banana");
  expect(result3.success).toEqual(true);

  const result4 = schema.safeParse(null);
  expect(result4.success).toEqual(false);
  if (!result4.success) {
    expect(result4.error.issues[0].message).toEqual("the value provided is invalid");
  }
});

test("enum with diagonal keys", () => {
  const schema_02 = z.enum({
    A: 1,
    B: "A",
  });

  expect(schema_02.safeParse("A")).toMatchObject({ success: true });
});
