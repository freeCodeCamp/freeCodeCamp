---
id: 587d7db8367417b2b2512ba3
title: Пошук збігів з пробілом
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Завдання, які ми вже виконали, містять пошук збігів з літерами алфавіту та числами. Ви також можете шукати збіги з пробілами або проміжків між літерами.

Ви можете шукати пробіли, використовуючи `\s` з літерою `s` нижнього регістру. Цей шаблон знайде збіги не лише із символами пробілу, але також символами повернення каретки, табуляції, розриву сторінки та нового рядка. Можете вважати, що це схоже на клас символів `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Цей виклик `match` повернеться як `[" ", " "]`.
# --instructions--

Змініть регулярний вираз `countWhiteSpace`, щоб шукати декілька символів пробілу в рядку.

# --hints--

Ваш регулярний вираз повинен використовувати глобальний прапорець.

```js
assert(countWhiteSpace.global);
```

Ваш регулярний вираз повинен використовувати скорочений символ `\s`, щоб знайти збіг з усіма символами пробілу.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Регулярний вираз повинен знайти вісім пробілів у рядку `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

Регулярний вираз повинен знайти три пробіли в рядку `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

Регулярний вираз не повинен знайти жодного пробілу в рядку `MindYourPersonalSpace`

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
