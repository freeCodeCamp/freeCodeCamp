---
id: 5900f3fd1000cf542c50ff10
title: 'Завдання 145: скільки існує оборотних чисел в межах одного мільярду?'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

Деякі натуральні числа $n$ мають властивість, що сума [ $n + reverse(n)$ ] повністю складається з непарних (десяткових) цифр. Наприклад, $36 + 63 = 99$ та $409 + 904 = 1313$. Називатимемо такі числа оборотними; таким чином 36, 63, 409 і 904 є оборотними. $n$ та $reverse(n)$ не можуть починатись з нуля.

Існує 120 оборотних чисел менших за тисячу.

Скільки існує оборотних чисел, що менші за один мільярд (${10}^9$)?

# --hints--

`reversibleNumbers()` має повернути `608720`.

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
