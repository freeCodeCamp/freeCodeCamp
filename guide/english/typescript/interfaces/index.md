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

We can also use interfaces as the Promises to our classes.  For example, when declaring names of methods in our interface they need to be in our implementation otherwise we will get an exception.
Example:
```typescript
interface Login {
  login(): boolean;
}
class LoginImplementation implements Login {
    login(): boolean {
        //Here would be our implementation of login class.In this case it returns an Error.
        throw new Error("Method not implemented.");
    }

}
```
