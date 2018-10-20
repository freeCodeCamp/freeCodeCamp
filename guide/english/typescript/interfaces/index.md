---
title: Interfaces
---

# Interfaces

One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, `interfaces` fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

```typescript
interface User = {
    firstName: string;
    lastName: string;
}

function printUserInfo(user: User) {
    console.log(user.firstName);
}

let myObj = {firstName: 'John', lastName: 'Doe'}
printUserInfo(myObj);
```

Interfaces can contain optional parameters

```typescript
interface User = {
    email?: string;
}
```