---
id: 587d7db8367417b2b2512ba3
title: Збіги пробілів
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Наразі завдання стосувались збігу літер алфавіту та чисел. Ви також можете шукати збіги пробілів або проміжків між літерами.

Ви можете шукати пробіли, використовуючи `\s` з `s` у нижньому регістрі. Цей шаблон знайде збіги не лише пробілу, але й повернення каретки, табуляції, розриву сторінки та нового рядка. Можна вважати, що це схоже на символьний клас `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Цей виклик `match` поверне `[" ", " "]`.
# --instructions--

Змініть регулярний вираз `countWhiteSpace`, щоб шукати декілька символів пробілу в рядку.

# --hints--

Ваш регулярний вираз має використати глобальний прапорець.

```js
assert(countWhiteSpace.global);
```

Ваш регулярний вираз має використати скорочений символ `\s`, щоб збігатись з усіма символами, які є пробілами.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Ваш регулярний вираз повинен знайти вісім пробілів у рядку `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

Ваш регулярний вираз повинен знайти три пробіли в рядку `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

Ваш регулярний вираз не повинен знайти жодного пробілу в рядку `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
