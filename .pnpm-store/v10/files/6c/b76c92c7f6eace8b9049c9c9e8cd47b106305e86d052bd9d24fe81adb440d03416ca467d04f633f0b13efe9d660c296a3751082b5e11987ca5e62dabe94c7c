// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

test("object intersection", () => {
  const BaseTeacher = z.object({
    subjects: z.array(z.string()),
  });
  const HasID = z.object({ id: z.string() });

  const Teacher = z.intersection(BaseTeacher.passthrough(), HasID); // BaseTeacher.merge(HasID);
  const data = {
    subjects: ["math"],
    id: "asdfasdf",
  };
  expect(Teacher.parse(data)).toEqual(data);
  expect(() => Teacher.parse({ subject: data.subjects })).toThrow();
  expect(Teacher.parse({ ...data, extra: 12 })).toEqual({ ...data, extra: 12 });

  expect(() => z.intersection(BaseTeacher.strict(), HasID).parse({ ...data, extra: 12 })).toThrow();
});

test("deep intersection", () => {
  const Animal = z.object({
    properties: z.object({
      is_animal: z.boolean(),
    }),
  });
  const Cat = z
    .object({
      properties: z.object({
        jumped: z.boolean(),
      }),
    })
    .and(Animal);

  type _Cat = z.infer<typeof Cat>;
  // const cat:Cat = 'asdf' as any;
  const cat = Cat.parse({ properties: { is_animal: true, jumped: true } });
  expect(cat.properties).toEqual({ is_animal: true, jumped: true });
});

test("deep intersection of arrays", async () => {
  const Author = z.object({
    posts: z.array(
      z.object({
        post_id: z.number(),
      })
    ),
  });
  const Registry = z
    .object({
      posts: z.array(
        z.object({
          title: z.string(),
        })
      ),
    })
    .and(Author);

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

  const syncResult = numberIntersection.safeParse(1234);
  expect(syncResult.success).toEqual(false);
  if (!syncResult.success) {
    expect(syncResult.error.issues[0].code).toEqual(z.ZodIssueCode.invalid_intersection_types);
  }

  const asyncResult = await numberIntersection.spa(1234);
  expect(asyncResult.success).toEqual(false);
  if (!asyncResult.success) {
    expect(asyncResult.error.issues[0].code).toEqual(z.ZodIssueCode.invalid_intersection_types);
  }
});

test("invalid array merge", async () => {
  const stringArrInt = z.intersection(
    z.string().array(),
    z
      .string()
      .array()
      .transform((val) => [...val, "asdf"])
  );
  const syncResult = stringArrInt.safeParse(["asdf", "qwer"]);
  expect(syncResult.success).toEqual(false);
  if (!syncResult.success) {
    expect(syncResult.error.issues[0].code).toEqual(z.ZodIssueCode.invalid_intersection_types);
  }

  const asyncResult = await stringArrInt.spa(["asdf", "qwer"]);
  expect(asyncResult.success).toEqual(false);
  if (!asyncResult.success) {
    expect(asyncResult.error.issues[0].code).toEqual(z.ZodIssueCode.invalid_intersection_types);
  }
});
