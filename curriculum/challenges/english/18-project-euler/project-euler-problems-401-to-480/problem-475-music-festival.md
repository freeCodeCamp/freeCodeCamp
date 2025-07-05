---
id: 5900f5481000cf542c51005a
title: 'Problem 475: Music festival'
challengeType: 1
forumTopicId: 302152
dashedName: problem-475-music-festival
---

# --description--

$12n$ musicians participate at a music festival. On the first day, they form $3n$ quartets and practice all day.

It is a disaster. At the end of the day, all musicians decide they will never again agree to play with any member of their quartet.

On the second day, they form $4n$ trios, each musician avoiding his previous quartet partners.

Let $f(12n)$ be the number of ways to organize the trios amongst the $12n$ musicians.

You are given $f(12) = 576$ and $f(24)\bmod 1\\,000\\,000\\,007 = 509\\,089\\,824$.

Find $f(600)\bmod 1\\,000\\,000\\,007$.

# --hints--

`musicFestival()` should return `75780067`.

```js
assert.strictEqual(musicFestival(), 75780067);
```

# --seed--

## --seed-contents--

```js
function musicFestival() {

  return true;
}

musicFestival();
```

# --solutions--

```js
// solution required
```
