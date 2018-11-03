---
title: Any Type
---

# Any Type

The Any type instructs Typescript to suspend type checking for the specified variables. Useful when working with dynamic content for which you don't know the type, and for transitioning your codebase for Javascript to Typescript in pieces. You can use Javascript's implicit typing with variables declared with a type of Any.

```typescript
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false;
```
