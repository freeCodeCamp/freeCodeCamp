---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

In JavaScript, `String` values are <dfn>immutable</dfn>, which means that they cannot be altered once created.

For example, the following code:

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to `Job`, because the contents of `myStr` cannot be altered. Note that this does *not* mean that `myStr` cannot be changed, just that the individual characters of a <dfn>string literal</dfn> cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above.

# --hints--

`myStr` should have a value of the string `Hello World`.

```js
assert(myStr === 'Hello World');
```

You should not change the code above the specified comment.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
