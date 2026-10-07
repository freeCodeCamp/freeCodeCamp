# @fastify/type-provider-typebox

[![CI](https://github.com/fastify/fastify-type-provider-typebox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify-type-provider-typebox/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/type-provider-typebox)](https://www.npmjs.com/package/@fastify/type-provider-typebox)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

A Type Provider for [Typebox](https://github.com/sinclairzx81/typebox).

## Installation

```sh
npm i typebox # Required as peer dependency
npm i @fastify/type-provider-typebox
```

### Compatibility

| Plugin version | Fastify version |
| ---------------|-----------------|
| `>=5.x`        | `^5.x`          |
| `>=1.x <5.x`   | `^4.x`          |


Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Overview

This package provides enhanced support for TypeBox by integrating it with the Fastify [Type Provider](https://fastify.dev/docs/latest/Reference/Type-Providers/) infrastructure. It provides a re-export of the TypeBox `Type.*` builder for convenience as well as providing additional utility types and optional validation infrastructure that can be useful when leveraging TypeBox with Fastify.

## Usage

```ts
import Fastify from 'fastify'
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>()
```

Note that the following will not work:

```ts
import Fastify from 'fastify'
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const fastify = Fastify()

fastify.withTypeProvider<TypeBoxTypeProvider>()
```

## Example

```ts
import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// This package re-export Typebox package
// but you can also use any builders imported
// directly from typebox
import { Type } from 'typebox'


const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>()

fastify.post('/', {
  schema: {
    body: Type.Object({
      x: Type.String(),
      y: Type.Number(),
      z: Type.Boolean()
    })
  }
}, (req) => {
  // The `x`, `y`, `z` types are automatically inferred
  const { x, y, z } = req.body
})
```

## Type definition of FastifyRequest & FastifyReply + TypeProvider
```ts
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Type } from '@fastify/type-provider-typebox';
import type {
  ContextConfigDefault,
  FastifyBaseLogger,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { FastifySchema } from 'fastify/types/schema';

export type FastifyTypeBox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export type FastifyRequestTypeBox<TSchema extends FastifySchema> = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression,
  TSchema,
  TypeBoxTypeProvider
>;

export type FastifyReplyTypeBox<TSchema extends FastifySchema> = FastifyReply<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  ContextConfigDefault,
  TSchema,
  TypeBoxTypeProvider
>;

export const CreateProductSchema = {
  body: Type.Object({
    name: Type.String(),
    price: Type.Number(),
  }),
  response: {
    201: Type.Object({
      id: Type.Number(),
    }),
  },
};

export const CreateProductHandler = (
  req: FastifyRequestTypeBox<typeof CreateProductSchema>,
  reply: FastifyReplyTypeBox<typeof CreateProductSchema>,
) => {
  // The `name` and `price` types are automatically inferred
  const { name, price } = req.body;

  // The response body type is automatically inferred
  reply.status(201).send({ id: 'string-value' });
  //                       ^? error TS2322: Type 'string' is not assignable to type 'number'.
};
```


## Plugin definition

> **Note**
> When using plugin types, withTypeProvider is not required in order to register the plugin

```ts
import { Type, FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    /// The `x`, `y`, and `z` types are automatically inferred
    const { x, y, z } = req.body
  });
}
```

## Type Compiler

TypeBox provides an optional type compiler that perform very fast runtime type checking for data received on routes. Note this compiler is limited to types expressable through the TypeBox `Type.*` namespace only. To enable this compiler, you can call `.setValidatorCompiler(...)` with the `TypeBoxValidatorCompiler` export provided by this package.

```ts
import { Type, TypeBoxTypeProvider, TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'

const fastify = Fastify().setValidatorCompiler(TypeBoxValidatorCompiler)

fastify.withTypeProvider<TypeBoxTypeProvider>().get('/', {
  schema: {
    querystring: Type.Object({
      x: Type.String(),
      y: Type.String(),
      z: Type.String()
    })
  }
}, (req) => {
  const { x, y, z } = req.query
})
```

For additional information on this compiler, please refer to the TypeBox documentation located [here](https://github.com/sinclairzx81/typebox#Compile).

## Register formats

The Format module of TypeBox can be used to register string formats.

```ts
import { Format } from '@fastify/type-provider-typebox'

Format.Set('custom-format', (value) => value === 'custom');
Format.Set('regex-format', (value) => /^my-format$/.test(value));
```

See the [official TypeBox documentation](https://sinclairzx81.github.io/typebox/#/docs/format/overview) for additional information on formats.

## License

Licensed under [MIT](./LICENSE).
