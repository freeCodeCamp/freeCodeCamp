---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

As seen in the previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

The `obj.review` and `obj.newProp` assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value `{ name: "FreeCodeCamp", review: "Awesome" }`.

# --instructions--

In this challenge you are going to use `Object.freeze` to prevent mathematical constants from changing. You need to freeze the `MATH_CONSTANTS` object so that no one is able to alter the value of `PI`, add, or delete properties.

# --hints--

You should not replace the `const` keyword.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` should be a constant variable (by using `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

You should not change the original declaration of `MATH_CONSTANTS`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` should equal `3.14`.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
