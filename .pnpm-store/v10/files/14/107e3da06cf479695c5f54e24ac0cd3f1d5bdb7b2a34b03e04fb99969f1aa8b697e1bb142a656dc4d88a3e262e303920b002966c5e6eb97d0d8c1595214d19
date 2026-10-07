import { test } from "vitest";
// import * as z from "zod/v4";

test(() => {});
// test("overload types", () => {
//   const schema = z.string().json();
//   util.assertEqual<typeof schema, z.ZodString>(true);
//   const schema2 = z.string().json(z.number());
//   util.assertEqual<typeof schema2, z.ZodPipe<z.ZodTransform<any, string>, z.ZodNumber>>(true);
//   const r2 = schema2.parse("12");
//   util.assertEqual<number, typeof r2>(true);
// });
// test("parse string to json", async () => {
//   const Env = z.object({
//     myJsonConfig: z.string().jsonString(z.object({ foo: z.number() })),
//     someOtherValue: z.string(),
//   });

//   expect(
//     Env.parse({
//       myJsonConfig: '{ "foo": 123 }',
//       someOtherValue: "abc",
//     })
//   ).toEqual({
//     myJsonConfig: { foo: 123 },
//     someOtherValue: "abc",
//   });

//   const invalidValues = Env.safeParse({
//     myJsonConfig: '{"foo": "not a number!"}',
//     someOtherValue: null,
//   });
//   expect(JSON.parse(JSON.stringify(invalidValues))).toEqual({
//     success: false,
//     error: {
//       name: "ZodError",
//       issues: [
//         {
//           code: "invalid_type",
//           expected: "number",
//           input: "not a number!",
//           received: "string",
//           path: ["myJsonConfig", "foo"],
//           message: "Expected number, received string",
//         },
//         {
//           code: "invalid_type",
//           expected: "string",
//           input: null,
//           received: "null",
//           path: ["someOtherValue"],
//           message: "Expected string, received null",
//         },
//       ],
//     },
//   });

//   const invalidJsonSyntax = Env.safeParse({
//     myJsonConfig: "This is not valid json",
//     someOtherValue: null,
//   });
//   expect(JSON.parse(JSON.stringify(invalidJsonSyntax))).toMatchObject({
//     success: false,
//     error: {
//       name: "ZodError",
//       issues: [
//         {
//           code: "invalid_string",
//           input: {
//             _def: {
//               catchall: {
//                 _def: {
//                   typeName: "ZodNever",
//                 },
//               },
//               typeName: "ZodObject",
//               unknownKeys: "strip",
//             },
//           },
//           validation: "json",
//           message: "Invalid json",
//           path: ["myJsonConfig"],
//         },
//         {
//           code: "invalid_type",
//           expected: "string",
//           input: null,
//           received: "null",
//           path: ["someOtherValue"],
//           message: "Expected string, received null",
//         },
//       ],
//     },
//   });
// });

// test("no argument", () => {
//   const schema = z.string().json();
//   util.assertEqual<typeof schema, z.ZodString>(true);
//   z.string().json().parse(`{}`);
//   z.string().json().parse(`null`);
//   z.string().json().parse(`12`);
//   z.string().json().parse(`{ "test": "test"}`);
//   expect(() => z.string().json().parse(`asdf`)).toThrow();
//   expect(() => z.string().json().parse(`{ "test": undefined }`)).toThrow();
//   expect(() => z.string().json().parse(`{ "test": 12n }`)).toThrow();
//   expect(() => z.string().json().parse(`{ test: "test" }`)).toThrow();
// });
