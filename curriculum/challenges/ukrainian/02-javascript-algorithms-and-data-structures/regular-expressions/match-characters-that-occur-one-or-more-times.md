---
id: 587d7db6367417b2b2512b99
title: Пошук збігів, що трапляються один чи більше разів
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Іноді вам треба знайти символ (або групу символів), що з'являються один чи більше разів поспіль. Це означає, що він зустрічається принаймні раз та може повторюватися.

Можна використати `+` символ для того, щоб перевірити чи це так. Пам'ятайте, символ або шаблон мають бути постійно присутніми. Тобто символ має повторюватися один за іншим.

Наприклад, `/a+/g` знайде один збіг в `abc` та поверне `["a"]`. Завдяки `+`, програма також знайде один збіг в `aabc` та поверне `["aa"]`.

Але якщо замість цього була виконана перевірка рядка `abab`, було б знайдено два збіги та повернено `["a", "a"]`, так як символи `a` не стоять підряд: між ними є символ `b`. І нарешті, оскільки в рядку `bcd` немає `a`, програма не знайде збігів.

# --instructions--

Ви хочете знайти збіги, коли літера `s` з'являється один чи більше разів у `Mississippi`. Напишіть регулярний вираз, що містить знак `+`.

# --hints--

Ваш регулярний вираз `myRegex` має використовувати символ `+` для збігу з одним чи більше `s`-символами.

```js
assert(/\+/.test(myRegex.source));
```

Ваш регулярний вираз `myRegex` повинен збігатися з двома елементами.

```js
assert(result.length == 2);
```

Змінна `result` має бути масивом з двома збігами `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
