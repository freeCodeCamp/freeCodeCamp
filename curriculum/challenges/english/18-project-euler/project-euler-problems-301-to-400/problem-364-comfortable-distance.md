---
id: 5900f4d91000cf542c50ffea
title: 'Problem 364: Comfortable distance'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

There are $N$ seats in a row. $N$ people come after each other to fill the seats according to the following rules:

1. If there is any seat whose adjacent seat(s) are not occupied take such a seat.
2. If there is no such seat and there is any seat for which only one adjacent seat is occupied take such a seat.
3. Otherwise take one of the remaining available seats.

Let $T(N)$ be the number of possibilities that $N$ seats are occupied by $N$ people with the given rules. The following figure shows $T(4) = 8$.

<img alt="eight ways for N seats to be occupied by N people" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

We can verify that $T(10) = 61\\,632$ and $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$.

Find $T(1\\,000\\,000)\bmod 100\\,000\\,007$.

# --hints--

`comfortableDistance()` should return `44855254`.

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
