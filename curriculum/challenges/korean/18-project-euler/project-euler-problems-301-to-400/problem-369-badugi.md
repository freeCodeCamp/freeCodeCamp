---
id: 5900f4de1000cf542c50fff0
title: 'Problem 369: Badugi'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

In a standard 52 card deck of playing cards, a set of 4 cards is a Badugi if it contains 4 cards with no pairs and no two cards of the same suit.

Let $f(n)$ be the number of ways to choose $n$ cards with a 4 card subset that is a Badugi. For example, there are $2\\,598\\,960$ ways to choose five cards from a standard 52 card deck, of which $514\\,800$ contain a 4 card subset that is a Badugi, so $f(5) = 514800$.

Find $\sum f(n)$ for $4 ≤ n ≤ 13$.

# --hints--

`badugi()` should return `862400558448`.

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```
