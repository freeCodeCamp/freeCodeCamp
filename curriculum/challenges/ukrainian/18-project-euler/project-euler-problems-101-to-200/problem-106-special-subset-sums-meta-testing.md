---
id: 5900f3d71000cf542c50fee9
title: 'Завдання 106: суми особливих підмножин (метатестування)'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Нехай $S(A)$ є сумою елементів множини A розміру n. Назвемо це особливою множиною сум, якщо для будь-яких двох непорожніх й неперетинних множин В і С виконуються умови:

1. $S(B) ≠ S(C)$; тобто суми підмножин не можуть бути рівними.
2. Якщо B містить більше елементів ніж C, тоді $S(B) > S(C)$.

For this problem we shall assume that a given set contains n strictly increasing elements and it already satisfies the second rule.

Surprisingly, out of the 25 possible subset pairs that can be obtained from a set for which n = 4, only 1 of these pairs need to be tested for equality (first rule). Similarly, when n = 7, only 70 out of the 966 subset pairs need to be tested.

For n = 12, how many of the 261625 subset pairs that can be obtained need to be tested for equality?

**Примітка:** це завдання пов’язане із завданнями №103 та №105.

# --hints--

`subsetSumsMetaTesting()` має повернути `21384`.

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
