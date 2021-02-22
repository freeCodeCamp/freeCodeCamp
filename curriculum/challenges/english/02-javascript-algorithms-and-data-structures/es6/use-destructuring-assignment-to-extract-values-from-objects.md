---
id: 5cfa550e84205a357704ccb6
title: Use Destructuring Assignment to Extract Values from Objects
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Destructuring assignment</dfn> is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` would have a value of the string `John Doe`, and `age` would have the number `34`.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```js
const { name, age } = user;
```

Again, `name` would have a value of the string `John Doe`, and `age` would have the number `34`.

Here, the `name` and `age` variables will be created and assigned the values of their respective values from the `user` object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

# --instructions--

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `today` and `tomorrow` the values of `today` and `tomorrow` from the `HIGH_TEMPERATURES` object.

# --hints--

You should remove the ES5 assignment syntax.

```js
assert(
  !__helpers
    .removeJSComments(code)
    .match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

You should use destructuring to create the `today` variable.

```js
assert(
  __helpers
    .removeJSComments(code)
    .match(
      /(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
    )
);
```

You should use destructuring to create the `tomorrow` variable.

```js
assert(
  __helpers
    .removeJSComments(code)
    .match(
      /(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
    )
);
```

`today` should be equal to `77` and `tomorrow` should be equal to `80`.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
