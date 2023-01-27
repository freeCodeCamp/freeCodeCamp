---
id: 5900f46b1000cf542c50ff7d
title: 'Завдання 254: Суми факторіалів цифр'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

Визначимо $f(n)$ як суму факторіалів цифр $n$. Наприклад, $f(342) = 3! + 4! + 2! = 32$.

Визначимо $sf(n)$ як суму цифр $f(n)$. Отже, $sf(342) = 3 + 2 = 5$.

Визначимо $g(i)$ як найменше натуральне число $n$ таке, що $sf(n) = i$. Хоча $sf(342)$ дорівнює 5, $sf(25)$ також дорівнює 5, і можна переконатися, що $g(5)$ дорівнює 25.

Визначаємо $sg(i)$ як суму цифр $g(i)$. Отже, $sg(5) = 2 + 5 = 7$.

Таким чином можна переконатися, що $g(20)$ дорівнює 267, а $\sum sg(i)$ для $1 ≤ i ≤ 20$ дорівнює 156.

Чому дорівнює $\sum sg(i)$ для $1 ≤ i ≤ 150$?

# --hints--

`sumsOfDigitFactorials()` має повернути `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
