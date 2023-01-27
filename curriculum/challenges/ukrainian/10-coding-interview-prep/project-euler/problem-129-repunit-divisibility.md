---
id: 5900f3ef1000cf542c50ff01
title: 'Завдання 129: Подільність реп''юніта'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

Число, що повністю складається з одиниць, називається реп'юнітом. Визначимо, що $R(k)$ є реп'юнітом довжини $k$; наприклад, $R(6) = 111111$.

Враховуючи, що $n$ є цілим додатним числом і $GCD(n, 10) = 1$, можна бачити, що завжди існує значення $k$, для якого $R(k)$ ділиться на $n$, і нехай $A(n)$ буде найменшим таким значенням $k$; наприклад, $A(7) = 6$ і $A(41) = 5$.

Найменше значення $n$, для якого $A(n)$ спочатку перевищує десять, дорівнює 17.

Знайдіть найменше значення $n$, для якого $A(n)$ спочатку перевищує мільйон.

# --hints--

`repunitDivisibility()` повинен повернути `1000023`.

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
