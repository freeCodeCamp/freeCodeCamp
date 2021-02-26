---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

In JavaScript, when the `+` operator is used with a `String` value, it is called the <dfn>concatenation</dfn> operator. You can build a new string out of other strings by <dfn>concatenating</dfn> them together.

**Example**

```js
'My name is Alan,' + ' I concatenate.'
```

**Note:** Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

```js
var ourStr = "I come first. " + "I come second.";
```

The string `I come first. I come second.` would be displayed in the console.
# --instructions--

Build `myStr` from the strings `This is the start. ` and `This is the end.` using the `+` operator.

# --hints--

`myStr` should have a value of the string `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

You should use the `+` operator to build `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` should be created using the `var` keyword.

```js
assert(/var\s+myStr/.test(code));
```

You should assign the result to the `myStr` variable.

```js
assert(/myStr\s*=/.test(code));
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
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "This is the start. " + "This is the end.";
```
