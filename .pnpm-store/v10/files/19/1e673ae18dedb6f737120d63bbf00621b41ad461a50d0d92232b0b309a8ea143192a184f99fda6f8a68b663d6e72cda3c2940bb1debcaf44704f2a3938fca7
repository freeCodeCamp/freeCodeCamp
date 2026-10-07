<h1 align="center">Fastify</h1>

## How to write your own type provider

Things to keep in mind when implementing a custom [type provider](../Reference/Type-Providers.md):

### Type Contravariance

Whereas exhaustive type narrowing checks normally rely on `never` to represent
an unreachable state, reduction in type provider interfaces should only be done
up to `unknown`.

The reasoning is that certain methods of `FastifyInstance` are
contravariant on `TypeProvider`, which can lead to TypeScript surfacing
assignability issues unless the custom type provider interface is
substitutable with `FastifyTypeProviderDefault`.

For example, `FastifyTypeProviderDefault` will not be assignable to the following:
```ts
export interface NotSubstitutableTypeProvider extends FastifyTypeProvider {
   // bad, nothing is assignable to `never` (except for itself)
  validator: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : never;
  serializer: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : never;
}
```

Unless changed to:
```ts
export interface SubstitutableTypeProvider extends FastifyTypeProvider {
  // good, anything can be assigned to `unknown`
  validator: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : unknown;
  serializer: this['schema'] extends /** custom check here**/ ? /** narrowed type here **/ : unknown;
}
```
