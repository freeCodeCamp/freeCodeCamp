---
id: cf1111c1c11feddfaeb4bdef
title: Subtract One Number from Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

We can also subtract one number from another.

JavaScript uses the `-` symbol for subtraction.

**Example**

```js
const MY_VAR = 12 - 6;
```

`MY_VAR` would have the value `6`.
# --instructions--

Change the `0` so the difference is `12`.

# --hints--

The variable `DIFFERENCE` should be equal to 12.

```js
assert(DIFFERENCE === 12);
```

You should only subtract one number from 45.

```js
assert(/DIFFERENCE=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'DIFFERENCE = '+z;})(DIFFERENCE);
```

## --seed-contents--

```js
const DIFFERENCE = 45 - 0;
```

# --solutions--

```js
const DIFFERENCE = 45 - 33;
```
