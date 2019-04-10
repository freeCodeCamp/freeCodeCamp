---
title: Tuple Type
---

# Tuple Type

Expresses an array with a fixed number of elements of known (but possibly different) types. For example:

```typescript
let arr: [string, number];

// This is correct
arr = ['Hello', 7];

// This is incorrect
arr = [7, 'Hello'];
```

When accessing an element outside the known indices, it will use a union type:

```typescript
arr[3] = 'World!';
// OK, 'string' can be assigned to 'string | number'

arr[5] = false;
// Error, 'boolean' is not a 'string | number'
```

## Properties
Tuples have some built-in properties, such as length.

### length
The number of elements:

```typescript
let tuple = [10, 'Mike']; 
let number = tuple.length;
// number = 2
```

## Built-in methods
Tuples have some built-in functions, such as adding a new element and removing an element:

### pop()
Removes the last element from a tuple and returns that element.
```typescript
let tuple = [10,'Emma',11,'Lily',12,'Mike Ross'];
let popped = tuple.pop();
// tuple = [10,'Emma',11,'Lily', 12]
// popped = 'Mike Ross'
```

### push()
Adds an element to the end of the tuple.
```typescript
let tuple = [10,'Emma',11,'Lily',12,'Mike Ross'];
tuple.push('Rachel Zane');
// tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane']
```

## Destructuring
The following is an easy way to break apart a tuple in TypeScript:
```typescript
let tuple = ['sheep', 4]; 
[a, b] = tuple;
// a = 'sheep'
// b = 4
```

## Updating
You can initialize the tuple after the declaration:
```typescript
let tuple = []; 
tuple[0] = 'cow';
tuple[1] = 'Mike';
// tuple = ['cow', 'Mike']
```

You can update an existing tuple in the same way you update an array:
```typescript
let tuple = ['sheep', 4]; 
tuple[0] = 'cow';
// tuple = ['cow', 4]
```

[More info about tuples on TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)

