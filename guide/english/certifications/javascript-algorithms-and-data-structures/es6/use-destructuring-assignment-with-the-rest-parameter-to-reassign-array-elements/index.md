---
title: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
---
<<<<<<< HEAD:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements/index.md
## Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

Remember that the rest operator allows for variable numbers of arguments. In this challenge, you have to get rid of the first two elements of an array.
=======
## Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Remember that the rest parameter allows for variable numbers of arguments. In this challenge, you have to get rid of the first two elements of an array.
>>>>>>> change rest operator to rest parameter in guide:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements/index.md

## Hint 1:

Assign the first two elements to two random variables.

## Hint 2:

Set the remaining part of the array to `...arr`.

## Hint 3:

Use destructuring to create the `arr` variable:

```javascript
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [arr] = list; // change this
  // change code above this line
  return arr;
}
```

<<<<<<< HEAD:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements/index.md
## Hint 4:
=======
## Hint 2
>>>>>>> change rest operator to rest parameter in guide:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements/index.md

Spread the `list` parameter values into `arr`.

```javascript
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [...arr] = list; // change this
  // change code above this line
  return arr;
}
```

<<<<<<< HEAD:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements/index.md
=======
## Hint 3
>>>>>>> change rest operator to rest parameter in guide:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements/index.md

## Spoiler Alert - Solution Ahead!
You can use random variables to omit the first two values:

```javascript
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
"use strict";
  // change code below this line
  const [a, b, ...arr] = list; 
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```
## Solution 2:

You can also exclude the first two elements of the `arr` array using `,,`.

```javascript
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
<<<<<<< HEAD:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements/index.md
  const [,,...arr] = list; // change this
=======
  const [a, b, ...arr] = list;
>>>>>>> change rest operator to rest parameter in guide:guide/english/certifications/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements/index.md
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

### Resources

- ["Destructuring assignment" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
