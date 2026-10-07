import { expect, expectTypeOf, test } from "vitest";

import * as z from "zod/v4";

test("opt passthrough", () => {
  const object = z.object({
    a: z.lazy(() => z.string()),
    b: z.lazy(() => z.string().optional()),
    c: z.lazy(() => z.string().default("default")),
  });

  type ObjectTypeIn = z.input<typeof object>;
  expectTypeOf<ObjectTypeIn>().toEqualTypeOf<{
    a: string;
    b?: string | undefined;
    c?: string | undefined;
  }>();

  type ObjectTypeOut = z.output<typeof object>;
  expectTypeOf<ObjectTypeOut>().toEqualTypeOf<{
    a: string;
    b?: string | undefined;
    c: string;
  }>();

  const result = object.parse(
    {
      a: "hello",
      b: undefined,
    },
    { jitless: true }
  );
  expect(result).toEqual({
    a: "hello",
    // b: undefined,
    c: "default",
  });

  expect(z.lazy(() => z.string())._zod.optin).toEqual(undefined);
  expect(z.lazy(() => z.string())._zod.optout).toEqual(undefined);

  expect(z.lazy(() => z.string().optional())._zod.optin).toEqual("optional");
  expect(z.lazy(() => z.string().optional())._zod.optout).toEqual("optional");

  expect(z.lazy(() => z.string().default("asdf"))._zod.optin).toEqual("optional");
  expect(z.lazy(() => z.string().default("asdf"))._zod.optout).toEqual(undefined);
});

//////////////   LAZY   //////////////

test("schema getter", () => {
  z.lazy(() => z.string()).parse("asdf");
});

test("lazy proxy", () => {
  const schema = z.lazy(() => z.string())._zod.innerType.min(6);
  schema.parse("123456");
  expect(schema.safeParse("12345").success).toBe(false);
});

interface Category {
  name: string;
  subcategories: Category[];
}

const testCategory: Category = {
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

test("recursion with z.lazy", () => {
  const Category: z.ZodType<Category> = z.lazy(() =>
    z.object({
      name: z.string(),
      subcategories: z.array(Category),
    })
  );
  Category.parse(testCategory);
});

type LinkedList = null | { value: number; next: LinkedList };

const linkedListExample = {
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

test("recursive union wit z.lazy", () => {
  const LinkedListSchema: z.ZodType<LinkedList> = z.lazy(() =>
    z.union([
      z.null(),
      z.object({
        value: z.number(),
        next: LinkedListSchema,
      }),
    ])
  );
  LinkedListSchema.parse(linkedListExample);
});

interface A {
  val: number;
  b: B;
}

interface B {
  val: number;
  a?: A | undefined;
}

test("mutual recursion with lazy", () => {
  const Alazy: z.ZodType<A> = z.lazy(() =>
    z.object({
      val: z.number(),
      b: Blazy,
    })
  );

  const Blazy: z.ZodType<B> = z.lazy(() =>
    z.object({
      val: z.number(),
      a: Alazy.optional(),
    })
  );

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

  expect(() => Alazy.parse({ val: "asdf" })).toThrow();
});

// TODO
test("mutual recursion with cyclical data", () => {
  const a: any = { val: 1 };
  const b: any = { val: 2 };
  a.b = b;
  b.a = a;
});

test("complicated self-recursion", () => {
  const Category = z.object({
    name: z.string(),
    age: z.optional(z.number()),
    get nullself() {
      return Category.nullable();
    },
    get optself() {
      return Category.optional();
    },
    get self() {
      return Category;
    },
    get subcategories() {
      return z.array(Category);
    },
    nested: z.object({
      get sub() {
        return Category;
      },
    }),
  });

  type _Category = z.output<typeof Category>;
});

test("lazy initialization", () => {
  const a: any = z.lazy(() => a).optional();
  const b: any = z.lazy(() => b).nullable();
  const c: any = z.lazy(() => c).default({} as any);
  const d: any = z.lazy(() => d).prefault({} as any);
  const e: any = z.lazy(() => e).nonoptional();
  const f: any = z.lazy(() => f).catch({} as any);
  const g: any = z.lazy(() => z.object({ g })).readonly();

  const baseCategorySchema = z.object({
    name: z.string(),
  });
  type Category = z.infer<typeof baseCategorySchema> & {
    subcategories: Category[];
  };
  const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
    subcategories: z.lazy(() => categorySchema.array()),
  });
});
