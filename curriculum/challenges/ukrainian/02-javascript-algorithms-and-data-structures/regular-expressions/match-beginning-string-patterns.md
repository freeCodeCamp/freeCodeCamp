---
id: 587d7db7367417b2b2512b9d
title: Збіги початку рядка
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Попередні завдання показали, що регулярні вирази можна використовувати для багатьох збігів. Їх також використовують для пошуку шаблонів у певному місці рядка.

У попередньому завданні ви використали символ карет (`^`) всередині набору символів для того, щоб створити набір заперечних символів у вигляді `[^thingsThatWillNotBeMatched]`. За межами набору символів, карет використовують для пошуку шаблонів на початку рядка.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

Перший виклик `test` поверне `true`, а другий поверне `false`.

# --instructions--

Використайте символ карет у регулярному виразі, щоб знайти `Cal` лише на початку рядка `rickyAndCal`.

# --hints--

Ваш регулярний вираз повинен шукати рядок `Cal` з великої літери.

```js
assert(calRegex.source == '^Cal');
```

Ваш регулярний вираз не повинен використовувати жодних прапорців.

```js
assert(calRegex.flags == '');
```

Ваш регулярний вираз повинен збігатися із рядком `Cal` на початку рядка.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

Ваш регулярний вираз не повинен збігатися із рядком `Cal` всередині рядка.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
