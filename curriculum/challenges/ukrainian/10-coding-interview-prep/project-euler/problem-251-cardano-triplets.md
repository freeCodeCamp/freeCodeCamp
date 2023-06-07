---
id: 5900f4671000cf542c50ff7a
title: 'Завдання 251: Трійки Кардано'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

Трійка натуральних чисел ($a$,$b$,$c$) називається трійкою Кардано, якщо вона задовольняє наступну умову:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

Наприклад, (2,1,5) - це трійка Кардано.

Існує 149 трійок Кардано, що задовольняють умову $a + b + c ≤ 1000$.

Знайдіть існує трійок Кардано, що задовольняють умову $a + b + c ≤ 110\\,000\\,000$.

# --hints--

`cardanoTriplets()` має повернути `18946051`.

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
