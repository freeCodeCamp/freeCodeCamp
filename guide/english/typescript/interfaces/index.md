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

const testUser: User = {firstName: 'John', lastName: 'Doe'};
printUserInfo(testUser);
```

Interfaces can contain optional parameters:

```typescript
interface ExtendedUser = {
    firstName: string;
    lastName: string;
    email?: string;
}

const analogUser: ExtendedUser = {firstName: 'John', lastName: 'Doe'};
const digitalUser: ExtendedUser = {firstName: 'John', lastName: 'Doe', email: 'jane.doe@gmail.com'};
```
