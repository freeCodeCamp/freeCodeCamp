---
title: Never Type
---

# Never Type
The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type `never` when narrowed by `any` type guards that can never be true.

The `never` type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, `never` (except never itself). Even any isn’t assignable to never.

```typescript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```
