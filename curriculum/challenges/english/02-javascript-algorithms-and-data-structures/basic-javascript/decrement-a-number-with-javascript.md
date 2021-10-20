---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

You can easily <dfn>decrement</dfn> or decrease a variable by one with the `--` operator.

```js
i--;
```

is the equivalent of

```js
i = i - 1;
```

**Note:** The entire line becomes `i--;`, eliminating the need for the equal sign.

# --instructions--

Change the code to use the `--` operator on `myVar`.

# --hints--

`myVar` should equal `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` should be changed.

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

You should use the `--` operator on `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

You should not change code above the specified comment.

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```
