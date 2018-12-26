---
title: Unknown Type
---
## Undefined Type

In TypeScript, `unknown` type is a type-safe counterpart of `any`, where anything can be assigned to `unknown` but cannot assign to anything except itself and `any`.

```typescript
const unknownValue = 1

let x: unknown = unknownValue
x = 2 // type-safe

const y: number = x // type-safe fails
```

An `unknown` type should be casted to a specific type to be used.

```typescript
const matchUnknown = (x: unknown) => {
    if (typeof x === 'string') {
        return x.toUpperCase()
    }

    if (typeof x === 'number') {
        return x * 2
    }

    throw new Error(`type of ${x} is not supported`)
}
```