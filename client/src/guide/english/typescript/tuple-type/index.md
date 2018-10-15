---
title: Tuple Type
---

# Tuple Type

Express an array in which a fixed number of elements of types is known, but not the same.

```typescript
let arr: [string, number];

// This is correct
arr = ['Hello', 7];

//This is incorrect
arr = [7, 'Hello'];
```

When accessing an element outside the known indices, it will use a union type:

```typescript
arr[3] = 'World!'
// OK, 'string' can be assigned to 'string | number'

// Error, 'boolean' is not a 'string | number'
arr[5] = false;
// Error, 'boolean' is not a 'string | number'
```

## Properties
In Typescript's type you can have some buit-in properties. Forexample length or some other unique each types.

### length
This property said, how many element has it's element.

```typescript
let tuple = []; //you can initialize it after the declaration too, not just the method above
tuple[0] = 10;
tuple[1] = 'Mike';
let number = tuple.length;
//number = 2;
```

## Built-in methods
In Typescript's type you can use some built-in functions. Each type has common and unique methods.
Below you can read about the most used ones of the tuple type's methods.

### pop()
Removes the last element from a tuple.
```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross'];
tuple.pop();
//tuple = [10,'Emma',11,'Lily',12,]
//We popped 'Mike Ross' from the tuple
```

### push()
Adds element to the end of the tuple.
```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross'];
tuple.push('Rachel Zane');
//tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane']
```

[More info about tuples on TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)

