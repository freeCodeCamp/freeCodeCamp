---
id: 587d7db9367417b2b2512ba5
title: Визначення найменшої та найбільшої кількості збігів
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Пригадайте, що плюс `+` можна використовувати, щоб шукати один чи більше символів, а зірочку `*` — щоб шукати нуль чи більше символів. Це зручно, але іноді потрібно знайти збіги для певного діапазону шаблонів.

Ви можете вказати найменшу та найбільшу кількість шаблонів за допомогою <dfn>специфікатора кількості</dfn>. Специфікатори кількості використовуються з фігурними дужками (`{` та `}`). Всередині фігурних дужок ви пишете два числа: для найменшої та найбільшої кількості шаблонів.

Наприклад, щоб знайти збіг лише для літери `a`, яка трапляється від `3` до `5` разів у рядку `ah`, ваш регулярний вираз має виглядати так: `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

Перший виклик `test` поверне `true`, а другий поверне `false`.

# --instructions--

Змініть регулярний вираз `ohRegex`, щоб він збігався з усією цитатою `Oh no`, тільки якщо вона містить `3` до `6` літер `h`.

# --hints--

Ваш регулярний вираз має використати фігурні дужки.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

Ваш регулярний вираз не повинен збігатися з рядком `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

Ваш регулярний вираз повинен збігатися з рядком `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

Ваш регулярний вираз повинен збігатися з рядком `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

Ваш регулярний вираз повинен збігатися з рядком `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

Ваш регулярний вираз повинен збігатися з рядком `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

Ваш регулярний вираз не повинен збігатися з рядком `Ohhhhhhh no`

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
