---
id: 587d7db3367417b2b2512b8f
title: Пошук точного збігу для рядка
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

У минулому завданні ви шукали слово `Hello`, використовуючи регулярний вираз `/Hello/`. Цей регулярний вираз шукав точний збіг для рядка `Hello`. Ось ще один приклад пошуку точного збігу для рядка `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

Цей виклик `test` повернеться як `true`.

Жодна інша форма слова `Kevin` не буде збігом. Наприклад, регулярний вираз `/Kevin/` не знайде відповідності `kevin` або `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

Цей виклик `test` повернеться як `false`.

Майбутнє завдання покаже, як знайти збіги для інших форм також.

# --instructions--

Виконайте регулярний вираз `waldoRegex`, щоб знайти `"Waldo"` в рядку `waldoIsHiding` з точним збігом.

# --hints--

Ваш регулярний вираз `waldoRegex` повинен знайти рядок `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

Ваш регулярний вираз `waldoRegex` не повинен знайти нічого іншого.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

За допомогою регулярного виразу ви повинні знайти точний збіг для рядка.

```js
assert(!/\/.*\/i/.test(code));
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
