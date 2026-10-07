import { expect, test } from "vitest";
import * as z from "zod/v4";

test("nested refinements", () => {
  const zodSchema = z
    .object({
      password: z.string().min(1),
      nested: z
        .object({
          confirm: z
            .string()
            .min(1)
            .refine((value) => value.length > 2, {
              message: "Confirm length should be > 2",
            }),
        })
        .refine(
          (data) => {
            return data.confirm === "bar";
          },
          {
            path: ["confirm"],
            error: 'Value must be "bar"',
          }
        ),
    })
    .refine(
      (data) => {
        return data.nested.confirm === data.password;
      },
      {
        path: ["nested", "confirm"],
        error: "Password and confirm must match",
      }
    );

  const DATA = {
    password: "bar",
    nested: { confirm: "" },
  };
  expect(zodSchema.safeParse(DATA)).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "string",
        "code": "too_small",
        "minimum": 1,
        "inclusive": true,
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Too small: expected string to have >=1 characters"
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Confirm length should be > 2"
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Value must be \\"bar\\""
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Password and confirm must match"
      }
    ]],
      "success": false,
    }
  `);

  expect(zodSchema.safeParse(DATA, { jitless: true })).toMatchInlineSnapshot(`
    {
      "error": [ZodError: [
      {
        "origin": "string",
        "code": "too_small",
        "minimum": 1,
        "inclusive": true,
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Too small: expected string to have >=1 characters"
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Confirm length should be > 2"
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Value must be \\"bar\\""
      },
      {
        "code": "custom",
        "path": [
          "nested",
          "confirm"
        ],
        "message": "Password and confirm must match"
      }
    ]],
      "success": false,
    }
  `);

  expect(zodSchema["~standard"].validate(DATA)).toMatchInlineSnapshot(`
    {
      "issues": [
        {
          "code": "too_small",
          "inclusive": true,
          "message": "Too small: expected string to have >=1 characters",
          "minimum": 1,
          "origin": "string",
          "path": [
            "nested",
            "confirm",
          ],
        },
        {
          "code": "custom",
          "message": "Confirm length should be > 2",
          "path": [
            "nested",
            "confirm",
          ],
        },
        {
          "code": "custom",
          "message": "Value must be "bar"",
          "path": [
            "nested",
            "confirm",
          ],
        },
        {
          "code": "custom",
          "message": "Password and confirm must match",
          "path": [
            "nested",
            "confirm",
          ],
        },
      ],
    }
  `);
});
