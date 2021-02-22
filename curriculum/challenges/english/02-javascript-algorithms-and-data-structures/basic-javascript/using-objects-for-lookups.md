---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
```

`alpha[2]` is the string `Y`, `alpha[24]` is the string `C`, and `alpha[value]` is the string `Y`.

# --instructions--

Convert the switch statement into an object called `lookup`. Use it to look up `val` and assign the associated string to the `result` variable.

# --hints--

`phoneticLookup("alpha")` should equal the string `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` should equal the string `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` should equal the string `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` should equal the string `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` should equal the string `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` should equal the string `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` should equal `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

You should not modify the `return` statement

```js
assert(code.match(/return\sresult;/));
```

You should not use `case`, `switch`, or `if` statements

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
