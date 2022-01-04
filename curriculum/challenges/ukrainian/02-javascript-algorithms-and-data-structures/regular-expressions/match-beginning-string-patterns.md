---
id: 587d7db7367417b2b2512b9d
title: Пошук відповідностей початковим зразкам рядків
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Попередні завдання показали, що регулярні вирази можуть використовуватися для пошуку збігів. Також вони використовуються для пошуку шаблонів у певних позиціях рядків.

У попередньому завданні ви використовували символ карет (`^`) всередині набору символів задля того, щоб створити набір негативних символів у вигляді `[^thingsThatWillNotBeMatched]`. За межами набору символів, карет використовується для пошуку шаблонів на початку рядків.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

Перший виклик `test` повернеться як `true`, тоді ж як другий повернеться як `false`.

# --instructions--

Використовуйте символ карет у регулярному виразі для того, щоб знайти `Cal` лише на початку рядка `rickyAndCal`.

# --hints--

Ваш регулярний вираз повинен шукати рядок `Cal` з великої літери.

```js
assert(calRegex.source == '^Cal');
```

Ваш регулярний вираз не повинен містити жодних маркерів.

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
