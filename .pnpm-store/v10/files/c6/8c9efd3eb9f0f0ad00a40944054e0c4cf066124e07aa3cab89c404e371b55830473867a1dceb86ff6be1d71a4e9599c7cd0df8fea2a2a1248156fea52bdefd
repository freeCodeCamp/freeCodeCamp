import { expect, test } from "vitest";

import * as z from "zod/v4";

test("string length", async () => {
  try {
    await z.string().length(4).parseAsync("asd");
  } catch (err) {
    // ("String must contain exactly 4 character(s)");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "exact": true,
          "inclusive": true,
          "message": "Too small: expected string to have >=4 characters",
          "minimum": 4,
          "origin": "string",
          "path": [],
        },
      ]
    `);
  }

  try {
    await z.string().length(4).parseAsync("asdaa");
  } catch (err) {
    // ("String must contain exactly 4 character(s)");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "exact": true,
          "inclusive": true,
          "maximum": 4,
          "message": "Too big: expected string to have <=4 characters",
          "origin": "string",
          "path": [],
        },
      ]
    `);
  }
});

test("string min/max", async () => {
  try {
    await z.string().min(4).parseAsync("asd");
  } catch (err) {
    // ("String must contain at least 4 character(s)");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": true,
          "message": "Too small: expected string to have >=4 characters",
          "minimum": 4,
          "origin": "string",
          "path": [],
        },
      ]
    `);
  }
});

test("string max", async () => {
  try {
    await z.string().max(4).parseAsync("aasdfsdfsd");
  } catch (err) {
    // ("String must contain at most 4 character(s)");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": true,
          "maximum": 4,
          "message": "Too big: expected string to have <=4 characters",
          "origin": "string",
          "path": [],
        },
      ]
    `);
  }
});

test("number min", async () => {
  try {
    await z.number().min(3).parseAsync(2);
  } catch (err) {
    // ("Number must be greater than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": true,
          "message": "Too small: expected number to be >=3",
          "minimum": 3,
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number gte", async () => {
  try {
    await z.number().gte(3).parseAsync(2);
  } catch (err) {
    // ("Number must be greater than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": true,
          "message": "Too small: expected number to be >=3",
          "minimum": 3,
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number gt", async () => {
  try {
    await z.number().gt(3).parseAsync(3);
  } catch (err) {
    // ("Number must be greater than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": false,
          "message": "Too small: expected number to be >3",
          "minimum": 3,
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number max", async () => {
  try {
    await z.number().max(3).parseAsync(4);
  } catch (err) {
    // ("Number must be less than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": true,
          "maximum": 3,
          "message": "Too big: expected number to be <=3",
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number lte", async () => {
  try {
    await z.number().lte(3).parseAsync(4);
  } catch (err) {
    // ("Number must be less than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": true,
          "maximum": 3,
          "message": "Too big: expected number to be <=3",
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number lt", async () => {
  try {
    await z.number().lt(3).parseAsync(3);
  } catch (err) {
    // ("Number must be less than or equal to 3");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": false,
          "maximum": 3,
          "message": "Too big: expected number to be <3",
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number nonnegative", async () => {
  try {
    await z.number().nonnegative().parseAsync(-1);
  } catch (err) {
    // ("Number must be greater than or equal to 0");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": true,
          "message": "Too small: expected number to be >=0",
          "minimum": 0,
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number nonpositive", async () => {
  try {
    await z.number().nonpositive().parseAsync(1);
  } catch (err) {
    // ("Number must be less than or equal to 0");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": true,
          "maximum": 0,
          "message": "Too big: expected number to be <=0",
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number negative", async () => {
  try {
    await z.number().negative().parseAsync(1);
  } catch (err) {
    // ("Number must be less than 0");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_big",
          "inclusive": false,
          "maximum": 0,
          "message": "Too big: expected number to be <0",
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});

test("number positive", async () => {
  try {
    await z.number().positive().parseAsync(-1);
  } catch (err) {
    // ("Number must be greater than 0");
    expect((err as z.ZodError).issues).toMatchInlineSnapshot(`
      [
        {
          "code": "too_small",
          "inclusive": false,
          "message": "Too small: expected number to be >0",
          "minimum": 0,
          "origin": "number",
          "path": [],
        },
      ]
    `);
  }
});
