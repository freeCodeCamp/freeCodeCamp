import { expect, expectTypeOf, test } from "vitest";
import * as z from "zod/v4";

test("type inference", () => {
  const schema = z.string().array();
  expectTypeOf<z.infer<typeof schema>>().toEqualTypeOf<string[]>();
});

test("array min/max", async () => {
  const schema = z.array(z.string()).min(2).max(2);
  const r1 = await schema.safeParse(["asdf"]);
  expect(r1.success).toEqual(false);
  expect(r1.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_small",
        "inclusive": true,
        "message": "Too small: expected array to have >=2 items",
        "minimum": 2,
        "origin": "array",
        "path": [],
      },
    ]
  `);

  const r2 = await schema.safeParse(["asdf", "asdf", "asdf"]);
  expect(r2.success).toEqual(false);
  expect(r2.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_big",
        "inclusive": true,
        "maximum": 2,
        "message": "Too big: expected array to have <=2 items",
        "origin": "array",
        "path": [],
      },
    ]
  `);
});

test("array length", async () => {
  const schema = z.array(z.string()).length(2);
  schema.parse(["asdf", "asdf"]);

  const r1 = await schema.safeParse(["asdf"]);
  expect(r1.success).toEqual(false);
  expect(r1.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_small",
        "exact": true,
        "inclusive": true,
        "message": "Too small: expected array to have >=2 items",
        "minimum": 2,
        "origin": "array",
        "path": [],
      },
    ]
  `);

  const r2 = await schema.safeParse(["asdf", "asdf", "asdf"]);
  expect(r2.success).toEqual(false);
  expect(r2.error!.issues).toMatchInlineSnapshot(`
    [
      {
        "code": "too_big",
        "exact": true,
        "inclusive": true,
        "maximum": 2,
        "message": "Too big: expected array to have <=2 items",
        "origin": "array",
        "path": [],
      },
    ]
  `);
});

test("array.nonempty()", () => {
  const schema = z.string().array().nonempty();
  schema.parse(["a"]);
  expect(() => schema.parse([])).toThrow();
});

test("array.nonempty().max()", () => {
  const schema = z.string().array().nonempty().max(2);
  schema.parse(["a"]);
  expect(() => schema.parse([])).toThrow();
  expect(() => schema.parse(["a", "a", "a"])).toThrow();
});

test("parse empty array in nonempty", () => {
  expect(() =>
    z
      .array(z.string())
      .nonempty()
      .parse([] as any)
  ).toThrow();
});

test("get element", () => {
  const schema = z.string().array();
  schema.element.parse("asdf");
  expect(() => schema.element.parse(12)).toThrow();
});

test("continue parsing despite array size error", () => {
  const schema = z.object({
    people: z.string().array().min(2),
  });

  const result = schema.safeParse({
    people: [123],
  });
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          "people",
          0
        ],
        "message": "Invalid input: expected string, received number"
      },
      {
        "origin": "array",
        "code": "too_small",
        "minimum": 2,
        "inclusive": true,
        "path": [
          "people"
        ],
        "message": "Too small: expected array to have >=2 items"
      }
    ]],
      "success": false,
    }
  `);
});

test("parse should fail given sparse array", () => {
  const schema = z.array(z.string()).nonempty().min(1).max(3);
  const result = schema.safeParse(new Array(3));
  expect(result.success).toEqual(false);
  expect(result).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          0
        ],
        "message": "Invalid input: expected string, received undefined"
      },
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          1
        ],
        "message": "Invalid input: expected string, received undefined"
      },
      {
        "expected": "string",
        "code": "invalid_type",
        "path": [
          2
        ],
        "message": "Invalid input: expected string, received undefined"
      }
    ]],
      "success": false,
    }
  `);
});

// const unique = z.string().array().unique();
// const uniqueArrayOfObjects = z.array(z.object({ name: z.string() })).unique({ identifier: (item) => item.name });

// test("passing unique validation", () => {
//   unique.parse(["a", "b", "c"]);
//   uniqueArrayOfObjects.parse([{ name: "Leo" }, { name: "Joe" }]);
// });

// test("failing unique validation", () => {
//   expect(() => unique.parse(["a", "a", "b"])).toThrow();
//   expect(() => uniqueArrayOfObjects.parse([{ name: "Leo" }, { name: "Leo" }])).toThrow();
// });

// test("continue parsing despite array of primitives uniqueness error", () => {
//   const schema = z.number().array().unique();

//   const result = schema.safeParse([1, 1, 2, 2, 3]);

//   expect(result.success).toEqual(false);
//   if (!result.success) {
//     const issue = result.error.issues.find(({ code }) => code === "not_unique");
//     expect(issue?.message).toEqual("Values must be unique");
//   }
// });

// test("continue parsing despite array of objects not_unique error", () => {
//   const schema = z.array(z.object({ name: z.string() })).unique({
//     identifier: (item) => item.name,
//     showDuplicates: true,
//   });

//   const result = schema.safeParse([
//     { name: "Leo" },
//     { name: "Joe" },
//     { name: "Leo" },
//   ]);

//   expect(result.success).toEqual(false);
//   if (!result.success) {
//     const issue = result.error.issues.find(({ code }) => code === "not_unique");
//     expect(issue?.message).toEqual("Element(s): 'Leo' not unique");
//   }
// });

// test("returns custom error message without duplicate elements", () => {
//   const schema = z.number().array().unique({ message: "Custom message" });

//   const result = schema.safeParse([1, 1, 2, 2, 3]);

//   expect(result.success).toEqual(false);
//   if (!result.success) {
//     const issue = result.error.issues.find(({ code }) => code === "not_unique");
//     expect(issue?.message).toEqual("Custom message");
//   }
// });

// test("returns error message with duplicate elements", () => {
//   const schema = z.number().array().unique({ showDuplicates: true });

//   const result = schema.safeParse([1, 1, 2, 2, 3]);

//   expect(result.success).toEqual(false);
//   if (!result.success) {
//     const issue = result.error.issues.find(({ code }) => code === "not_unique");
//     expect(issue?.message).toEqual("Element(s): '1,2' not unique");
//   }
// });

// test("returns custom error message with duplicate elements", () => {
//   const schema = z
//     .number()
//     .array()
//     .unique({
//       message: (item) => `Custom message: '${item}' are not unique`,
//       showDuplicates: true,
//     });

//   const result = schema.safeParse([1, 1, 2, 2, 3]);

//   expect(result.success).toEqual(false);
//   if (!result.success) {
//     const issue = result.error.issues.find(({ code }) => code === "not_unique");
//     expect(issue?.message).toEqual("Custom message: '1,2' are not unique");
//   }
// });
