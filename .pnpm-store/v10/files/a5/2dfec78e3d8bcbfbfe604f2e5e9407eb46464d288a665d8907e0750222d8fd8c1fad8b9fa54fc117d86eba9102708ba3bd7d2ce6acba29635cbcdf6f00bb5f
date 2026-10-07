import { expectTypeOf, test } from "vitest";
import * as z from "../index.js";

test("branded types", () => {
  const mySchema = z
    .object({
      name: z.string(),
    })
    .brand<"superschema">();

  // simple branding
  type MySchema = z.infer<typeof mySchema>;
  // Using true for type equality assertion
  expectTypeOf<MySchema>().toEqualTypeOf<{ name: string } & z.$brand<"superschema">>();

  const doStuff = (arg: MySchema) => arg;
  doStuff(z.parse(mySchema, { name: "hello there" }));

  // inheritance
  const extendedSchema = mySchema.brand<"subschema">();
  type ExtendedSchema = z.infer<typeof extendedSchema>;
  expectTypeOf<ExtendedSchema>().toEqualTypeOf<{ name: string } & z.$brand<"superschema"> & z.$brand<"subschema">>();

  doStuff(z.parse(extendedSchema, { name: "hello again" }));

  // number branding
  const numberSchema = z.number().brand<42>();
  type NumberSchema = z.infer<typeof numberSchema>;
  expectTypeOf<NumberSchema>().toEqualTypeOf<number & { [z.$brand]: { 42: true } }>();

  // symbol branding
  const MyBrand: unique symbol = Symbol("hello");
  type MyBrand = typeof MyBrand;
  const symbolBrand = z.number().brand<"sup">().brand<typeof MyBrand>();
  type SymbolBrand = z.infer<typeof symbolBrand>;
  // number & { [z.$brand]: { sup: true, [MyBrand]: true } }
  expectTypeOf<SymbolBrand>().toEqualTypeOf<number & z.$brand<"sup"> & z.$brand<MyBrand>>();

  // keeping brands out of input types
  const age = z.number().brand<"age">();
  type Age1 = z.infer<typeof age>;
  type AgeInput1 = z.input<typeof age>;

  // Using not for type inequality assertion
  expectTypeOf<AgeInput1>().not.toEqualTypeOf<Age1>();
  expectTypeOf<number>().toEqualTypeOf<AgeInput1>();
  expectTypeOf<number & z.$brand<"age">>().toEqualTypeOf<Age1>();

  // @ts-expect-error
  doStuff({ name: "hello there!" });
});
