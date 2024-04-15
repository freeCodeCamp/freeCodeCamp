---
id: 5900f5481000cf542c51005a
title: '問題475：音樂節'
challengeType: 1
forumTopicId: 302152
dashedName: problem-475-music-festival
---

# --description--

$12n$ musicians participate at a music festival. On the first day, they form $3n$ quartets and practice all day.

這是一場災難。 在一天結束時，所有音樂家都決定再也不會同意與他們四重奏的任何成員一起玩。

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
