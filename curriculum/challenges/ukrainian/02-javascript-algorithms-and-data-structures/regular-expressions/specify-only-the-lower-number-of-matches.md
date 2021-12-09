---
id: 587d7db9367417b2b2512ba6
title: Визначення лише найменшої кількості збігів
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

Ви можете визначити найменшу та найбільшу кількість шаблонів за допомогою специфікатора кількості, використовуючи фігурні дужки. Іноді вам потрібно визначити лише найменшу кількість шаблонів без верхньої межі.

Щоб вказати лише найменшу кількість шаблонів, поставте після першого числа кому.

Наприклад, щоб мати збіг лише з рядком `hah` з літерою `a`, що повторюється щонайменше `3` рази, регулярний вираз має бути таким: `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

По черзі три виклики `test` повернуться як `true`, `false`, і `true`.

# --instructions--

Змініть регулярний вираз `haRegex`, щоб він збігався зі словом `Hazzah`, тільки якщо в ньому є чотири або більше літер `z`.

# --hints--

У регулярного виразу мають бути фігурні дужки.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

Регулярний вираз не повинен збігатися з рядком `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

Регулярний вираз не повинен збігатися з рядком `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

Регулярний вираз повинен збігатися з рядком `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

Регулярний вираз повинен збігатися з рядком `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

Регулярний вираз повинен збігатися з рядком `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

Регулярний вираз повинен збігатися з рядком `Hazzah` з 30 літерами `z`.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
