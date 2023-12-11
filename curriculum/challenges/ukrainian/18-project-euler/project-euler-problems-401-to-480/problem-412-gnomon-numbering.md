---
id: 5900f5081000cf542c51001a
title: 'Завдання 412: нумерація гномонів'
challengeType: 1
forumTopicId: 302081
dashedName: problem-412-gnomon-numbering
---

# --description--

Нехай $L(m, n)$ з цілими числами $m$, $n$ ($0 ≤ n &lt; m$) буде сіткою $m×m$ без правої верхньої частини $n×n$.

Наприклад, $L(5, 3)$ виглядає так:

<img class="img-responsive center-block" alt="сітка 5x5 без верхньої правої частини розміром 3x3" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-1.png" style="background-color: white; padding: 10px;" />

У кожну клітинку $L(m, n)$ потрібно ввести послідовні цілі числа (1, 2, 3, ...) так, щоб число в кожній клітинці було меншим ніж те, яке знаходиться внизу та зліва.

Наприклад, ось два варіанти нумерації для $L(5, 3)$:

<img class="img-responsive center-block" alt="дві можливі нумерації L(5, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-2.png" style="background-color: white; padding: 10px;" />

Нехай $LC(m, n)$ буде кількістю можливих варіантів нумерації $L(m, n)$. Можна довести, що $LC(3, 0) = 42$, $LC(5, 3) = 250\\,250$, $LC(6, 3) = 406\\,029\\,023\\,400$ та $LC(10, 5)\bmod 76\\,543\\,217 = 61\\,251\\,715$.

Знайдіть $LC(10\\,000, 5\\,000)\bmod 76\\,543\\,217$.

# --hints--

`gnomonNumbering()` має повернути `38788800`.

```js
assert.strictEqual(gnomonNumbering(), 38788800);
```

# --seed--

## --seed-contents--

```js
function gnomonNumbering() {

  return true;
}

gnomonNumbering();
```

# --solutions--

```js
// solution required
```
