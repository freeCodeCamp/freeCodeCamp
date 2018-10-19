---
title: For..Of Loop
---

# For..Of Loop

`for..of` loop is a special loop in TypeScript which you can use to iterate through values of an array.

```typescript
let fruits = ['Apple', 'Banana', 'Orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

The output you will get from the code above will be "Apple", "Banana", and "Orange". Since this loop type does not iterate through indices, you will not get "0", "1", and "2".
