---
id: 587d7db6367417b2b2512b99
title: Збіги символів, які трапляються один чи більше разів
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Іноді потрібно знайти символ (або групу символів), які з’являються один чи більше разів поспіль. Це означає, що він зустрічається принаймні раз та може повторюватися.

Можна використати символ `+`, щоб перевірити чи це так. Пам’ятайте, символ або шаблон мають бути послідовними. Тобто символ має повторюватися.

Наприклад, `/a+/g` знайде один збіг в `abc` та поверне `["a"]`. `+` також знайде один збіг в `aabc` та поверне `["aa"]`.

Але якби він перевірив рядок `abab`, було б знайдено два збіги та повернено `["a", "a"]`, оскільки символи `a` не стоять поруч: між ними є символ `b`. Зрештою, оскільки в рядку `bcd` немає `a`, збігу не буде.

# --instructions--

Вам потрібно знайти збіги, коли літера `s` з’являється один чи більше разів у `Mississippi`. Напишіть регулярний вираз, що містить знак `+`.

# --hints--

Ваш регулярний вираз `myRegex` має використати символ `+`, щоб збігтися з одним чи більше символами `s`.

```js
assert(/\+/.test(myRegex.source));
```

Ваш регулярний вираз `myRegex` має знайти збіги для двох елементів.

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
