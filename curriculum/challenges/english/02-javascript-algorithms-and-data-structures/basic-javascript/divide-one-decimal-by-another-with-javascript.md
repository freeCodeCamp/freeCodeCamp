---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

Now let's divide one decimal by another.

# --instructions--

Change the `0.0` so that `quotient` will equal to `2.2`.

# --hints--

The variable `quotient` should equal `2.2`

```js
assert(quotient === 2.2);
```

You should use the `/` operator to divide 4.4 by 2

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
```

The quotient variable should only be assigned once

```js
assert(code.match(/quotient/g).length === 1);
```

# --seed--

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```
