import { expect, expectTypeOf, test } from "vitest";
import { z } from "zod/v4";

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
    get subcategories() {
      return z.array(Category).optional().nullable();
    },
  });
  type Category = z.infer<typeof Category>;
  interface _Category {
    name: string;
    subcategories?: _Category[] | undefined | null;
  }
  expectTypeOf<Category>().toEqualTypeOf<_Category>();
  Category.parse(data);
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
    get next() {
      return LL.nullable();
    },
  });
  type LL = z.infer<typeof LL>;
  type _LL = {
    value: number;
    next: _LL | null;
  };
  expectTypeOf<LL>().toEqualTypeOf<_LL>();

  LL.parse(data);
});

test("mutual recursion - native", () => {
  const Alazy = z.object({
    val: z.number(),
    get b() {
      return Blazy;
    },
  });

  const Blazy = z.object({
    val: z.number(),
    get a() {
      return Alazy.optional();
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

  type Alazy = z.infer<typeof Alazy>;
  type Blazy = z.infer<typeof Blazy>;
  interface _Alazy {
    val: number;
    b: _Blazy;
  }
  interface _Blazy {
    val: number;
    a?: _Alazy | undefined;
  }
  expectTypeOf<Alazy>().toEqualTypeOf<_Alazy>();
  expectTypeOf<Blazy>().toEqualTypeOf<_Blazy>();
  Alazy.parse(testData);
  Blazy.parse(testData.b);

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

  const PickedCategory = Category.pick({ name: true });
  const OmittedCategory = Category.omit({ subcategories: true });

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
    get features(): z.ZodOptional<z.ZodArray<typeof Feature>> {
      return z.optional(z.array(Feature)); //.optional();
    },
  });
  // type Feature = z.infer<typeof Feature>;

  const Output = z.object({
    id: z.int(), //.nonnegative(),
    name: z.string(),
    get features(): z.ZodArray<typeof Feature> {
      return Feature.array();
    },
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

  // expectTypeOf<Feature>().toEqualTypeOf<_Feature>();
  expectTypeOf<Output>().toEqualTypeOf<_Output>();
});

test("deferred mutual recursion", () => {
  const Slot = z.object({
    slotCode: z.string(),

    get blocks() {
      return z.array(Block);
    },
  });
  type Slot = z.infer<typeof Slot>;

  const Block = z.object({
    blockCode: z.string(),
    get slots() {
      return z.array(Slot).optional();
    },
  });
  type Block = z.infer<typeof Block>;

  const Page = z.object({
    slots: z.array(Slot),
  });
  type Page = z.infer<typeof Page>;

  type _Slot = {
    slotCode: string;
    blocks: _Block[];
  };
  type _Block = {
    blockCode: string;
    slots?: _Slot[] | undefined;
  };
  type _Page = {
    slots: _Slot[];
  };
  expectTypeOf<Slot>().toEqualTypeOf<_Slot>();
  expectTypeOf<Block>().toEqualTypeOf<_Block>();
  expectTypeOf<Page>().toEqualTypeOf<_Page>();
});

test("mutual recursion with meta", () => {
  const A = z
    .object({
      name: z.string(),
      get b() {
        return B;
      },
    })
    .readonly()
    .meta({ id: "A" })
    .optional();

  const B = z
    .object({
      name: z.string(),
      get a() {
        return A;
      },
    })
    .readonly()
    .meta({ id: "B" });

  type A = z.infer<typeof A>;
  type B = z.infer<typeof B>;

  type _A =
    | Readonly<{
        name: string;
        b: _B;
      }>
    | undefined;
  // | undefined;
  type _B = Readonly<{
    name: string;
    a?: _A;
  }>;
  expectTypeOf<A>().toEqualTypeOf<_A>();
  expectTypeOf<B>().toEqualTypeOf<_B>();
});

test("recursion compatibility", () => {
  // array
  const A = z.object({
    get array() {
      return A.array();
    },
    get optional() {
      return A.optional();
    },
    get nullable() {
      return A.nullable();
    },
    get nonoptional() {
      return A.nonoptional();
    },
    get readonly() {
      return A.readonly();
    },
    get describe() {
      return A.describe("A recursive type");
    },
    get meta() {
      return A.meta({ description: "A recursive type" });
    },
    get pipe() {
      return A.pipe(z.any());
    },
    get strict() {
      return A.strict();
    },
    get tuple() {
      return z.tuple([A, A]);
    },
    get object() {
      return z
        .object({
          subcategories: A,
        })
        .strict()
        .loose();
    },
    get union() {
      return z.union([A, A]);
    },
    get intersection() {
      return z.intersection(A, A);
    },
    get record() {
      return z.record(z.string(), A);
    },
    get map() {
      return z.map(z.string(), A);
    },
    get set() {
      return z.set(A);
    },
    get lazy() {
      return z.lazy(() => A);
    },
    get promise() {
      return z.promise(A);
    },
  });
});

// biome-ignore lint: sadf
export type RecursiveA = z.ZodUnion<
  [
    z.ZodObject<{
      a: z.ZodDefault<RecursiveA>;
      b: z.ZodPrefault<RecursiveA>;
      c: z.ZodNonOptional<RecursiveA>;
      d: z.ZodOptional<RecursiveA>;
      e: z.ZodNullable<RecursiveA>;
      g: z.ZodReadonly<RecursiveA>;
      h: z.ZodPipe<RecursiveA, z.ZodString>;
      i: z.ZodArray<RecursiveA>;
      j: z.ZodSet<RecursiveA>;
      k: z.ZodMap<RecursiveA, RecursiveA>;
      l: z.ZodRecord<z.ZodString, RecursiveA>;
      m: z.ZodUnion<[RecursiveA, RecursiveA]>;
      n: z.ZodIntersection<RecursiveA, RecursiveA>;
      o: z.ZodLazy<RecursiveA>;
      p: z.ZodPromise<RecursiveA>;
      q: z.ZodCatch<RecursiveA>;
      r: z.ZodSuccess<RecursiveA>;
      s: z.ZodTransform<RecursiveA, string>;
      t: z.ZodTuple<[RecursiveA, RecursiveA]>;
      u: z.ZodObject<{
        a: RecursiveA;
      }>;
    }>,
  ]
>;
