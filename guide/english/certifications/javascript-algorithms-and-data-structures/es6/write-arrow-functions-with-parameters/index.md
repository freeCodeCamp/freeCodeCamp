---
title: Write Arrow Functions with Parameters
---
## Write Arrow Functions with Parameters


Now, you are tasked at putting parameters inside arrow functions. 

## Hint 1:

Get rid of the `function` keyword. Put the arrow operator.

## Hint 2:

Make sure you changed the `var` to a `const`.

## Spoiler warning - Solution ahead!

## Solution:

```javascript
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

## Alternative code solution:
```javascript
const myConcat = (arr1, arr2) => arr1.concat(arr2);
```
- [Run code at repl.it](https://repl.it/@AdrianSkar/ES6-Write-arrow-functions-with-params)

Remember that _"When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword `return` as well as the brackets surrounding the code."_


### Resources
- [Emerson, Helen. "Javascript anonymous functions". *Helephant.com*, 23 Aug 08.](http://helephant.com/2008/08/23/javascript-anonymous-functions) Accessed 16 Dec 2018.
