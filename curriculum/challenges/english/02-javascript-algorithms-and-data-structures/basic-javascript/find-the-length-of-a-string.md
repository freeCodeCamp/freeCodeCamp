---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

You can find the length of a `String` value by writing `.length` after the string variable or string literal.

```js
console.log("Alan Peter".length);
```

The value `10` would be displayed in the console.

For example, if we created a variable `var firstName = "Charles"`, we could find out how long the string `Charles` is by using the `firstName.length` property.

# --instructions--

Use the `.length` property to count the number of characters in the `lastName` variable and assign it to `lastNameLength`.

# --hints--

You should not change the variable declarations in the `// Setup` section.

```js
assert(
  code.match(/var lastNameLength = 0;/) &&
    code.match(/var lastName = "Lovelace";/)
);
```

`lastNameLength` should be equal to eight.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

You should be getting the length of `lastName` by using `.length` like this: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName;
```

# --solutions--

```js
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```
