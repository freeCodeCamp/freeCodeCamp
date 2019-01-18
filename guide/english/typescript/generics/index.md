---
title: Generics
---

## Generics

Developers can use `Generics` to specify type constraints for classes, instance members, static members, and functions.

### What do Generics do?

Essentially, they serve as placeholders for types so that a component can be used in multiple places across your application by accommodating different types.

### What problem do Generics solve?

Let's say you wanted to ensure that the input and return values for a function are of the same type, this is where generics come in.

##### Functions

```typescript
function printMessage(arg: any): any {
  return arg;
}

const myMessage: string = printMessage(1);
// TypeScript won't complain that the argument type and return type are different, because they aren't being typed properly
```

As you can see above, passing in `any` for the argument type in the function, as well as the return type, is not ideal as type information is lost in the process.

```typescript
// updated example
function printMessage<T>(arg: T): T {
  return arg;
}

const myMessage: string = printMessage(1);
// TypeScript complains because the variable type and the return type of the function don't match

// resolve the issue by making sure both types match each other:
const myMessage: number = printMessage(1);

```

Including `<T>` with the function tells TypeScript that it is a generic, and passing that around as a reference will make TypeScript aware that the the values associated with it are of the same type.

##### Classes

```typescript
class Person {
  fullName: string;
  
  constructor(fullName: string) {
    this.fullName = fullName;
  }
  
  getFullName() {
    return 'My name is ' + this.fullName;
  }
}

class Guest extends Person {};

let guest = new Guest('abc');

function getUser<T>(user: T): T {
  return user;
}

// foo will be of type 'guest' because it's being passed in as the argument
const foo = getUser(guest);

```
