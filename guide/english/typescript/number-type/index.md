---
title: Number Type
---

# Number Type

All numbers in TypeScript are floating point values.
TypeScript supports binary and octal literal values from ES6.

```typescript
let decimal: number = 7;
let hex: number = 0xf00d;
let binary: number = 0b0110;
let octal: number = 0o531;
```

Example of usage Number type in typescript:

```typescript
class Employee extends Person{
age:Number;
constructor(age : Number){
  //calling constructor of Person
  super();
  this.age = age;
  }
 getAge(): Number{
  return this.age;
  }
}

```
