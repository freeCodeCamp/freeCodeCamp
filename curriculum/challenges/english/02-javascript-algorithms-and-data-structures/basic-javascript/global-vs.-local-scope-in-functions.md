---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

It is possible to have both <dfn>local</dfn> and <dfn>global</dfn> variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example:

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function `myFun` will return the string `Head` because the `local` version of the variable is present.

# --instructions--

Add a local variable to `myOutfit` function to override the value of `outerWear` with the string `sweater`.

# --hints--

You should not change the value of the global `outerWear`.

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` should return the string `sweater`.

```js
assert(myOutfit() === 'sweater');
```

You should not change the return statement.

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
```
