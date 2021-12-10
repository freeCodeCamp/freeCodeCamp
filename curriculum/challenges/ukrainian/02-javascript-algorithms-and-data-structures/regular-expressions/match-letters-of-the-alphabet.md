---
id: 587d7db5367417b2b2512b96
title: Встановлення відповідності до літер алфавіту
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

Ви бачили, як можна використовувати <dfn>набори символів</dfn>, щоб визначити групу символів для відповідності, але довелося б набирати дуже багато, якщо потрібно знайти відповідність великому діапазону символів (наприклад, кожній літері в алфавіті). На щастя, для цього існує вбудована функція, що робить це швидко та просто.

Всередині набору символів можна визначити діапазон символів для пошуку відповідності з використанням символу дефіс: `-`.

Наприклад, для пошуку літер нижнього регістру від `a` до `e` можна використати `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

По черзі три виклики `match` повернуться як `["cat"]`, `["bat"]` і `null`.

# --instructions--

Знайдіть відповідності до усіх літер у рядку `quoteSample`.

**Примітка**: не забудьте вказати літери як верхнього, так і нижнього регістру.

# --hints--

Регулярний вираз `alphabetRegex` повинен знайти збіги для 35 елементів.

```js
assert(result.length == 35);
```

Ваш регулярний вираз `alphabetRegex` повинен використовувати глобальний прапорець.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `alphabetRegex` повинен використовувати прапорець без урахування регістру.

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
