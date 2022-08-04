---
id: 5900f4291000cf542c50ff3b
title: 'Задача 188: Гіперекспонентація числа'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

Гіперекспонентація, або тетрація числа $a$ додатним цілим числом $b$, яка позначається $a↑↑b$ або ${}^ba$, рекурсивно визначається так:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Таким чином, маємо, наприклад, $3↑↑2 = 3^3 = 27$, отже $3↑↑3 = 3^{27} = 7625597484987$ і $3↑↑4$ приблизно дорівнюють ${10}^{3.6383346400240996 \times {10}^{12}}$. Знайдіть останні 8 цифр із $1777↑↑1855$.

# --hints--

`hyperexponentation()` має повертати до `95962097`.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
