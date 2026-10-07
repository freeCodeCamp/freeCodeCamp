import { expect, expectTypeOf, test } from "vitest";
import type { util } from "zod/v4/core";

import * as z from "zod/v4";

test("object intersection", () => {
  const A = z.object({ a: z.string() });
  const B = z.object({ b: z.string() });

  const C = z.intersection(A, B); // BaseC.merge(HasID);
  type C = z.infer<typeof C>;
  expectTypeOf<C>().toEqualTypeOf<{ a: string } & { b: string }>();
  const data = { a: "foo", b: "foo" };
  expect(C.parse(data)).toEqual(data);
  expect(() => C.parse({ a: "foo" })).toThrow();
});

test("object intersection: loose", () => {
  const A = z.looseObject({ a: z.string() });
  const B = z.object({ b: z.string() });

  const C = z.intersection(A, B); // BaseC.merge(HasID);
  type C = z.infer<typeof C>;
  expectTypeOf<C>().toEqualTypeOf<{ a: string; [x: string]: unknown } & { b: string }>();
  const data = { a: "foo", b: "foo", c: "extra" };
  expect(C.parse(data)).toEqual(data);
  expect(() => C.parse({ a: "foo" })).toThrow();
});

test("object intersection: strict", () => {
  const A = z.strictObject({ a: z.string() });
  const B = z.object({ b: z.string() });

  const C = z.intersection(A, B); // BaseC.merge(HasID);
  type C = z.infer<typeof C>;
  expectTypeOf<C>().toEqualTypeOf<{ a: string } & { b: string }>();
  const data = { a: "foo", b: "foo", c: "extra" };

  const result = C.safeParse(data);
  expect(result.success).toEqual(false);
});

test("deep intersection", () => {
  const Animal = z.object({
    properties: z.object({
      is_animal: z.boolean(),
    }),
  });
  const Cat = z.intersection(
    z.object({
      properties: z.object({
        jumped: z.boolean(),
      }),
    }),
    Animal
  );

  type Cat = util.Flatten<z.infer<typeof Cat>>;
  expectTypeOf<Cat>().toEqualTypeOf<{ properties: { is_animal: boolean } & { jumped: boolean } }>();
  const a = Cat.safeParse({ properties: { is_animal: true, jumped: true } });
  expect(a.data!.properties).toEqual({ is_animal: true, jumped: true });
});

test("deep intersection of arrays", async () => {
  const Author = z.object({
    posts: z.array(
      z.object({
        post_id: z.number(),
      })
    ),
  });
  const Registry = z.intersection(
    Author,
    z.object({
      posts: z.array(
        z.object({
          title: z.string(),
        })
      ),
    })
  );

  const posts = [
    { post_id: 1, title: "Novels" },
    { post_id: 2, title: "Fairy tales" },
  ];
  const cat = Registry.parse({ posts });
  expect(cat.posts).toEqual(posts);
  const asyncCat = await Registry.parseAsync({ posts });
  expect(asyncCat.posts).toEqual(posts);
});

test("invalid intersection types", async () => {
  const numberIntersection = z.intersection(
    z.number(),
    z.number().transform((x) => x + 1)
  );

  expect(() => {
    numberIntersection.parse(1234);
  }).toThrowErrorMatchingInlineSnapshot(`[Error: Unmergable intersection. Error path: []]`);
});

test("invalid array merge (incompatible lengths)", async () => {
  const stringArrInt = z.intersection(
    z.string().array(),
    z
      .string()
      .array()
      .transform((val) => [...val, "asdf"])
  );

  expect(() => stringArrInt.safeParse(["asdf", "qwer"])).toThrowErrorMatchingInlineSnapshot(
    `[Error: Unmergable intersection. Error path: []]`
  );
});

test("invalid array merge (incompatible elements)", async () => {
  const stringArrInt = z.intersection(
    z.string().array(),
    z
      .string()
      .array()
      .transform((val) => [...val.slice(0, -1), "asdf"])
  );

  expect(() => stringArrInt.safeParse(["asdf", "qwer"])).toThrowErrorMatchingInlineSnapshot(
    `[Error: Unmergable intersection. Error path: [1]]`
  );
});

test("invalid object merge", async () => {
  const Cat = z.object({
    phrase: z.string().transform((val) => `${val} Meow`),
  });
  const Dog = z.object({
    phrase: z.string().transform((val) => `${val} Woof`),
  });
  const CatDog = z.intersection(Cat, Dog);

  expect(() => CatDog.parse({ phrase: "Hello, my name is CatDog." })).toThrowErrorMatchingInlineSnapshot(
    `[Error: Unmergable intersection. Error path: ["phrase"]]`
  );
});

test("invalid deep merge of object and array combination", async () => {
  const University = z.object({
    students: z.array(
      z.object({
        name: z.string().transform((val) => `Student name: ${val}`),
      })
    ),
  });
  const Registry = z.intersection(
    University,
    z.object({
      students: z.array(
        z.object({
          name: z.string(),
          surname: z.string(),
        })
      ),
    })
  );

  const students = [{ name: "John", surname: "Doe" }];

  expect(() => Registry.parse({ students })).toThrowErrorMatchingInlineSnapshot(
    `[Error: Unmergable intersection. Error path: ["students",0,"name"]]`
  );
});
