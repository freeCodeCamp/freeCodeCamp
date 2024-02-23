---
id: 5900f4351000cf542c50ff47
title: >-
  Завдання 200: знайдіть 200-й простостійкий ск’юб, який містить підрядок «200»
challengeType: 1
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

Визначимо ск’юб як число вигляду ${p^2}{q^3}$, де $p$ та $q$ є різними простими числами.

Наприклад, $200 = {5^2}{2^3}$ або $120072949 = {{23}^2}{{61}^3}$.

Першими п’ятьма ск’юбами є 72, 108, 200, 392 та 500.

Цікаво, що 200 також є першим числом, у якому ви не можете змінити жодну цифру, що утворити просте число. Такі числа називають простостійкими. Наступним простостійким ск’юбом, який містить підрядок `200`, є 1992008.

Знайдіть 200-й простостійкий ск’юб, який містить підрядок `200`.

# --hints--

`primeProofSqubeWithSubString()` має повернути `229161792008`.

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
