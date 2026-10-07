import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4-mini";

test("recursion with z.lazy", () => {
  const data = {
    name: "I",
    subcategories: [
      {
        name: "A",
        subcategories: [
          {
            name: "1",
            subcategories: [
              {
                name: "a",
                subcategories: [],
              },
            ],
          },
        ],
      },
    ],
  };

  const Category = z.object({
    name: z.string(),
    get subcategories(): z.ZodMiniOptional<z.ZodMiniArray<typeof Category>> {
      return z.optional(z.array(Category));
    },
  });
  Category.parse(data);

  type Category = z.infer<typeof Category>;
  interface _Category {
    name: string;
    subcategories?: _Category[];
  }
  expectTypeOf<Category>().toEqualTypeOf<_Category>();
});

test("recursion involving union type", () => {
  const data = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  const LL = z.object({
    value: z.number(),
    get next(): z.ZodMiniNullable<typeof LL> {
      return z.nullable(LL);
    },
  });

  LL.parse(data);
  type LL = z.infer<typeof LL>;
  type _LL = {
    value: number;
    next: _LL | null;
  };
  expectTypeOf<LL>().toEqualTypeOf<_LL>();
});

test("mutual recursion - native", () => {
  const Alazy = z.object({
    val: z.number(),
    get b() {
      return z.optional(Blazy);
    },
  });

  const Blazy = z.object({
    val: z.number(),
    get a() {
      return z.optional(Alazy);
    },
  });
  const testData = {
    val: 1,
    b: {
      val: 5,
      a: {
        val: 3,
        b: {
          val: 4,
          a: {
            val: 2,
            b: {
              val: 1,
            },
          },
        },
      },
    },
  };

  Alazy.parse(testData);
  Blazy.parse(testData.b);

  type Alazy = z.infer<typeof Alazy>;
  type Blazy = z.infer<typeof Blazy>;
  interface _Alazy {
    val: number;
    b?: _Blazy | undefined;
  }
  interface _Blazy {
    val: number;
    a?: _Alazy | undefined;
  }
  expectTypeOf<Alazy>().toEqualTypeOf<_Alazy>();
  expectTypeOf<Blazy>().toEqualTypeOf<_Blazy>();

  expect(() => Alazy.parse({ val: "asdf" })).toThrow();
});

test("pick and omit with getter", () => {
  const Category = z.strictObject({
    name: z.string(),
    get subcategories() {
      return z.array(Category);
    },
  });

  type Category = z.infer<typeof Category>;
  interface _Category {
    name: string;
    subcategories: _Category[];
  }
  expectTypeOf<Category>().toEqualTypeOf<_Category>();

  const PickedCategory = z.pick(Category, { name: true });
  const OmittedCategory = z.omit(Category, { subcategories: true });
  type PickedCategory = z.infer<typeof PickedCategory>;
  type OmittedCategory = z.infer<typeof OmittedCategory>;
  interface _PickedCategory {
    name: string;
  }
  interface _OmittedCategory {
    name: string;
  }
  expectTypeOf<PickedCategory>().toEqualTypeOf<_PickedCategory>();
  expectTypeOf<OmittedCategory>().toEqualTypeOf<_OmittedCategory>();

  const picked = { name: "test" };
  const omitted = { name: "test" };

  PickedCategory.parse(picked);
  OmittedCategory.parse(omitted);

  expect(() => PickedCategory.parse({ name: "test", subcategories: [] })).toThrow();
  expect(() => OmittedCategory.parse({ name: "test", subcategories: [] })).toThrow();
});

test("deferred self-recursion", () => {
  const Feature = z.object({
    title: z.string(),
    get features(): z.ZodMiniOptional<z.ZodMiniArray<typeof Feature>> {
      return z.optional(z.array(Feature)); //.optional();
    },
  });
  type Feature = z.infer<typeof Feature>;

  const Output = z.object({
    id: z.int(), //.nonnegative(),
    name: z.string(),
    features: z.array(Feature), //.array(), // <—
  });

  type Output = z.output<typeof Output>;

  type _Feature = {
    title: string;
    features?: _Feature[] | undefined;
  };

  type _Output = {
    id: number;
    name: string;
    features: _Feature[];
  };

  expectTypeOf<Feature>().toEqualTypeOf<_Feature>();
  expectTypeOf<Output>().toEqualTypeOf<_Output>();
});

test("recursion compatibility", () => {
  // array
  const A = z.object({
    get subcategories() {
      return z.array(A);
    },
  });
  // tuple
  const B = z.object({
    get subcategories() {
      return z.tuple([B, B]);
    },
  });
  // object
  const C = z.object({
    get subcategories() {
      return z.object({
        subcategories: C,
      });
    },
  });
  // union
  const D = z.object({
    get subcategories() {
      return z.union([D, z.string()]);
    },
  });
  // intersection
  const E = z.object({
    get subcategories() {
      return z.intersection(E, E);
    },
  });
  // record
  const F = z.object({
    get subcategories() {
      return z.record(z.string(), F);
    },
  });
  // map
  const G = z.object({
    get subcategories() {
      return z.map(z.string(), G);
    },
  });
  // set
  const H = z.object({
    get subcategories() {
      return z.set(H);
    },
  });
  // optional
  const I = z.object({
    get subcategories() {
      return z.optional(I);
    },
  });
  // nullable
  const J = z.object({
    get subcategories() {
      return z.nullable(J);
    },
  });
  // optional
  const L = z.object({
    get subcategories() {
      return z.optional(L);
    },
  });
  // nullable
  const M = z.object({
    get subcategories() {
      return z.nullable(M);
    },
  });
  // nonoptional
  const N = z.object({
    get subcategories() {
      return z.nonoptional(N);
    },
  });
});
