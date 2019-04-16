---
title: Any Type
---

# Any Type

The Any type instructs TypeScript to suspend type checking for the specified variables. Useful when working with dynamic content for which you don't know the type, and for transitioning your codebase from JavaScript to TypeScript in pieces. You can use JavaScript's implicit typing with variables declared with a type of Any.

Although the Any type can be helpful in specific circumstances, it should be used with caution, since it means we opt out of TypeScript's typechecking.

```typescript
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false;
```
