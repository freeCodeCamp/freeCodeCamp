---
id: 5900f4671000cf542c50ff7a
title: 'Problem 251: Cardano Triplets'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

A triplet of positive integers ($a$,$b$,$c$) is called a Cardano Triplet if it satisfies the condition:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

For example, (2,1,5) is a Cardano Triplet.

There exist 149 Cardano Triplets for which $a + b + c ≤ 1000$.

Find how many Cardano Triplets exist such that $a + b + c ≤ 110\\,000\\,000$.

# --hints--

`cardanoTriplets()` should return `18946051`.

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

# --seed--

## --seed-contents--

```js
function cardanoTriplets() {

  return true;
}

cardanoTriplets();
```

# --solutions--

```js
// solution required
```
