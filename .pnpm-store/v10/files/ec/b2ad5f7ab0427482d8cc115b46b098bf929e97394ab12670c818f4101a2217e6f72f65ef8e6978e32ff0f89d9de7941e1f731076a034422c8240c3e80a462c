<p align="center">
  <img src="logo.svg" width="200px" align="center" alt="Zod logo" />
  <h1 align="center">Zod</h1>
  <p align="center">
    TypeScript-first schema validation with static type inference
    <br/>
    by <a href="https://x.com/colinhacks">@colinhacks</a>
  </p>
</p>
<br/>

<p align="center">
<a href="https://github.com/colinhacks/zod/actions?query=branch%3Amaster"><img src="https://github.com/colinhacks/zod/actions/workflows/test.yml/badge.svg?event=push&branch=master" alt="Zod CI status" /></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/colinhacks/zod" alt="License"></a>
<a href="https://www.npmjs.com/package/zod" rel="nofollow"><img src="https://img.shields.io/npm/dw/zod.svg" alt="npm"></a>
<a href="https://discord.gg/KaSRdyX2vc" rel="nofollow"><img src="https://img.shields.io/discord/893487829802418277?label=Discord&logo=discord&logoColor=white" alt="discord server"></a>
<a href="https://github.com/colinhacks/zod" rel="nofollow"><img src="https://img.shields.io/github/stars/colinhacks/zod" alt="stars"></a>
</p>

<div align="center">
  <a href="https://zod.dev/api">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://discord.gg/RcG33DQJdf">Discord</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/colinhacks">𝕏</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://bsky.app/profile/zod.dev">Bluesky</a>
  <br />
</div>

<br/>
<br/>

<h2 align="center">Featured sponsor: Jazz</h2>

<div align="center">
  <a href="https://jazz.tools/?utm_source=zod">
    <picture width="85%" >
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/garden-co/jazz/938f6767e46cdfded60e50d99bf3b533f4809c68/homepage/homepage/public/Zod%20sponsor%20message.png">
      <img alt="jazz logo" src="https://raw.githubusercontent.com/garden-co/jazz/938f6767e46cdfded60e50d99bf3b533f4809c68/homepage/homepage/public/Zod%20sponsor%20message.png" width="85%">
    </picture>
  </a>
  <br/>
  <p><sub>Learn more about <a target="_blank" rel="noopener noreferrer" href="mailto:sponsorship@colinhacks.com">featured sponsorships</a></sub></p>
</div>

<br/>
<br/>
<br/>

### [Read the docs →](https://zod.dev/api)

<br/>
<br/>

## What is Zod?

Zod is a TypeScript-first validation library. Define a schema and parse some data with it. You'll get back a strongly typed, validated result.

```ts
import * as z from "zod/v4";

const User = z.object({
  name: z.string(),
});

// some untrusted data...
const input = {
  /* stuff */
};

// the parsed result is validated and type safe!
const data = User.parse(input);

// so you can use it with confidence :)
console.log(data.name);
```

<br/>

## Features

- Zero external dependencies
- Works in Node.js and all modern browsers
- Tiny: `2kb` core bundle (gzipped)
- Immutable API: methods return a new instance
- Concise interface
- Works with TypeScript and plain JS
- Built-in JSON Schema conversion
- Extensive ecosystem

<br/>

## Installation

```sh
npm install zod
```

<br/>

## Basic usage

Before you can do anything else, you need to define a schema. For the purposes of this guide, we'll use a simple object schema.

```ts
import * as z from "zod/v4";

const Player = z.object({
  username: z.string(),
  xp: z.number(),
});
```

### Parsing data

Given any Zod schema, use `.parse` to validate an input. If it's valid, Zod returns a strongly-typed _deep clone_ of the input.

```ts
Player.parse({ username: "billie", xp: 100 });
// => returns { username: "billie", xp: 100 }
```

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.parseAsync()` method instead.

```ts
const schema = z.string().refine(async (val) => val.length <= 8);

await schema.parseAsync("hello");
// => "hello"
```

### Handling errors

When validation fails, the `.parse()` method will throw a `ZodError` instance with granular information about the validation issues.

```ts
try {
  Player.parse({ username: 42, xp: "100" });
} catch (err) {
  if (err instanceof z.ZodError) {
    err.issues;
    /* [
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string'
      },
      {
        expected: 'number',
        code: 'invalid_type',
        path: [ 'xp' ],
        message: 'Invalid input: expected number'
      }
    ] */
  }
}
```

To avoid a `try/catch` block, you can use the `.safeParse()` method to get back a plain result object containing either the successfully parsed data or a `ZodError`. The result type is a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions), so you can handle both cases conveniently.

```ts
const result = Player.safeParse({ username: 42, xp: "100" });
if (!result.success) {
  result.error; // ZodError instance
} else {
  result.data; // { username: string; xp: number }
}
```

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.safeParseAsync()` method instead.

```ts
const schema = z.string().refine(async (val) => val.length <= 8);

await schema.safeParseAsync("hello");
// => { success: true; data: "hello" }
```

### Inferring types

Zod infers a static type from your schema definitions. You can extract this type with the `z.infer<>` utility and use it however you like.

```ts
const Player = z.object({
  username: z.string(),
  xp: z.number(),
});

// extract the inferred type
type Player = z.infer<typeof Player>;

// use it in your code
const player: Player = { username: "billie", xp: 100 };
```

In some cases, the input & output types of a schema can diverge. For instance, the `.transform()` API can convert the input from one type to another. In these cases, you can extract the input and output types independently:

```ts
const mySchema = z.string().transform((val) => val.length);

type MySchemaIn = z.input<typeof mySchema>;
// => string

type MySchemaOut = z.output<typeof mySchema>; // equivalent to z.infer<typeof mySchema>
// number
```
