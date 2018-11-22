---
title: Array Type
---

# Array Type

You have full access to arrays in TypeScript.
Arrays can be written two different ways in TypeScript:

__DataType[]__  
DataType followed by square brackets `[]`
```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma'];
```

__Array&lt;DataType&gt;__  
`Array` followed by &lt;DataType&gt;
```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma'];
```

## Built-in methods
In Typescript's Array type you can use some built-in functions. Each type has common and unique methods.
Below you can read about the most used methods of the Array type. In the example, we will use the array declaration from above.

### pop()
Removes the last element from an array and returns with it.
```typescript
var element = names.pop();
//element = Emma
var element2 = names.pop();
//element2 = Sophia
```

### push()
Adds one or more element to the end of the array and returns with the new length of the array.
```typescript
var length = names.push('Tobias');
// names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias']
// length = 6
var length2 = names.push('Jack','Lily');
// names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily']
// length2 = 8
```

### reverse()
Reverses the order of the array and returns with it
```typescript
var reversedNames = names.reverse();
//reversedNames = ['Emma','Sophia','John','Emma','Javier']
```

### forEach()
Perform a designated task for every item in the array
```typescript
var exclamationPointNames = names.forEach(doSomething);
//doSomething = function (name: string, index: number) {
//  name[i] = name[i] + "!";
//}
//exclamationPointNames = ['Emma!','Sophia!','John!','Emma!','Javier!']
```


[More methods and description at TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)
