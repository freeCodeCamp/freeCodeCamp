---
id: 587d7db5367417b2b2512b95
title: Пошук збігів одного символа з різними варіантами
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Ви дізнались про точні збіги шаблонів (`/literal/`) та байдужий символ (`/./`). Це два кінці регулярних виразів, де один знаходить точний збіг, а другий збігається з усім. Між ними існує й баланс.

Ви можете знайти точний збіг з певним відхиленням за допомогою <dfn>символьних класів</dfn>. Символьні класи дозволяють визначити групу символів, для яких ви хочете знайти збіги. Для цього їх потрібно розмістити всередині квадратних дужок (`[` та `]`).

Наприклад, ви хочете знайти збіги рядків `bag`, `big` та `bug`, але не `bog`. Для цього потрібно створити регулярний вираз `/b[aiu]g/`. `[aiu]` є символьним класом, який збігатиметься лише з символами `a`, `i` або `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

Чотири виклики `match` повернуть значення `["big"]`, `["bag"]`, `["bug"]` та `null` по черзі.

# --instructions--

Використайте символьний клас до голосних (`a`, `e`, `i`, `o`, `u`) у регулярному виразі `vowelRegex`, щоб знайти всі голосні в рядку `quoteSample`.

**Примітка:** знайдіть збіги голосних як верхнього, так і нижнього регістру.

# --hints--

Ви повинні знайти всі 25 голосних.

```js
assert(result.length == 25);
```

Ваш регулярний вираз `vowelRegex` має використати символьний клас.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Ваш регулярний вираз `vowelRegex` має використати глобальний прапорець.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `vowelRegex` має використати прапорець без урахування регістру.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

Ваш регулярний вираз не повинен збігатися з будь-якими приголосними.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
