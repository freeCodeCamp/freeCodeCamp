---
id: 587d7db3367417b2b2512b8f
title: Точні збіги рядків
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

У минулому завданні ви шукали слово `Hello`, використовуючи регулярний вираз `/Hello/`. Цей регулярний вираз шукав точний збіг рядка `Hello`. Ось ще один приклад пошуку точного збігу рядка `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

Цей виклик `test` поверне `true`.

Жодна інша форма слова `Kevin` не буде збігом. Наприклад, регулярний вираз `/Kevin/` не збігатиметься з `kevin` або `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

Цей виклик `test` поверне `false`.

У наступному завданні ви дізнаєтесь, як знайти збіги різних форм.

# --instructions--

Допишіть регулярний вираз `waldoRegex`, щоб знайти точний збіг `"Waldo"` у рядку `waldoIsHiding`.

# --hints--

Регулярний вираз `waldoRegex` має знайти рядок `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

Регулярний вираз `waldoRegex` не повинен шукати нічого іншого.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

Знайдіть точний збіг рядка за допомогою регулярного виразу.

```js
assert(!/\/.*\/i/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
