---
id: 587d7db9367417b2b2512ba5
title: Визначення найменшої та найбільшої кількості збігів
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Згадайте, що ми можете використати знак плюс `+`, щоб шукати один та більше знаків і зірочку `*`, щоб шукати нуль та більше знаків. Це зручно, але іноді потрібно знайти збіги для певного діапазону шаблонів.

Ви можете визначити найменшу та найбільшу кількість шаблонів за допомогою <dfn>специфікатора кількості</dfn>. Специфікатори кількості використовуються з фігурними дужками (`{` and `}`). У фігурні дужки ви ставите два числа: для найменшої та найбільшої кількості шаблонів.

Наприклад, щоб знайти збіг лише для літери `a`, яка трапляється від `3` до `5` разів у рядку `ah`, ваш регулярний вираз має виглядати так: `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

Перший виклик `test` повернеться як `true`, тоді ж як другий повернеться як `false`.

# --instructions--

Змініть регулярний вираз `ohRegex`, щоб він збігався з усією фразою `Oh no`, тільки якщо в ньому від `3` до `6` літер `h`.

# --hints--

У регулярного виразу мають бути фігурні дужки.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

Регулярний вираз не повинен збігатися з рядком `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

Регулярний вираз повинен збігатися з рядком `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

Регулярний вираз повинен збігатися з рядком `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

Регулярний вираз повинен збігатися з рядком `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

Регулярний вираз повинен збігатися з рядком `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

Регулярний вираз не повинен збігатися з рядком `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
