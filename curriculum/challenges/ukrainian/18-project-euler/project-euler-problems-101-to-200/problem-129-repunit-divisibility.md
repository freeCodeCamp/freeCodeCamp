---
id: 5900f3ef1000cf542c50ff01
title: 'Завдання 129: подільність реп’юніта'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

Число, що повністю складається з одиниць, називається реп’юнітом. Визначимо, що $R(k)$ є реп’юнітом довжиною $k$. Наприклад, $R(6) = 111111$.

Дано, що $n$ є натуральним числом і $НСД(n, 10) = 1$. Можна побачити, що завжди існує значення $k$, за якого $R(k)$ ділиться на $n$ без остачі. Нехай $A(n)$ буде найменшим таким значенням $k$; наприклад, $A(7) = 6$ та $A(41) = 5$.

Найменше значення $n$, за якого $A(n)$ перевищує десять, дорівнює 17.

Знайдіть найменше значення $n$, за якого $A(n)$ перевищує мільйон.

# --hints--

`repunitDivisibility()` має повернути `1000023`.

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```
