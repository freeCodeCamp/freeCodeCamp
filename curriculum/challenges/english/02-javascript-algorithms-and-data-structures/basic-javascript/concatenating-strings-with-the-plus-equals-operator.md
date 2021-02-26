---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

We can also use the `+=` operator to <dfn>concatenate</dfn> a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

**Note:** Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` now has a value of the string `I come first. I come second.`.

# --instructions--

Build `myStr` over several lines by concatenating these two strings: `This is the first sentence. ` and `This is the second sentence.` using the `+=` operator. Use the `+=` operator similar to how it is shown in the editor. Start by assigning the first string to `myStr`, then add on the second string.

# --hints--

`myStr` should have a value of the string `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

You should use the `+=` operator to build `myStr`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
// Only change code below this line

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
