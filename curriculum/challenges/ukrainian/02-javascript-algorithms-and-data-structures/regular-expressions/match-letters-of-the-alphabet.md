---
id: 587d7db5367417b2b2512b96
title: Збіги літер алфавіту
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

Ви побачили, як можна використати <dfn>набори символів</dfn>, щоб визначити групу символів для збігів. Але довелось би багато писати, якщо потрібно знайти збіги для великого діапазону символів (наприклад, кожної літери в алфавіті). На щастя, для цього існує вбудована функціональність, яка робить це швидко та просто.

Всередині набору символів можна визначити діапазон символів для пошуку збігів, використавши дефіс `-`.

Наприклад, щоб знайти збіги літер нижнього регістру від `a` до `e`, використайте `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

Три виклики `match` повернуть значення `["cat"]`, `["bat"]` та `null` по черзі.

# --instructions--

Знайдіть збіги усіх літер у рядку `quoteSample`.

**Примітка:** знайдіть збіги літер як верхнього, так і нижнього регістру.

# --hints--

Ваш регулярний вираз `alphabetRegex` має знайти збіги для 35 елементів.

```js
assert(result.length == 35);
```

Ваш регулярний вираз `alphabetRegex` має використати глобальний прапорець.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `alphabetRegex` має використати прапорець без урахування регістру.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
