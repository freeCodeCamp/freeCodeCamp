---
id: 587d7db9367417b2b2512ba4
title: Пошук збігів символів, які не є пробілами
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

Ви дізнались, як шукати пробіли за допомогою `\s` з `s` у нижньому регістрі. Ви можете також шукати все, крім пробілів.

Ви можете шукати символи, які не є пробілами, використовуючи `\S` з `s` у верхньому регістрі. Цей шаблон не знайде збіги символів пробілу, повернення каретки, табуляції, розриву сторінки та нового рядка. Можна вважати, що це схоже на символьний клас `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

Метод `.length` поверне значення `32`.

# --instructions--

Змініть регулярний вираз `countNonWhiteSpace`, щоб шукати декілька символів, що не є пробілами, у рядку.

# --hints--

Ваш регулярний вираз має використати глобальний прапорець.

```js
assert(countNonWhiteSpace.global);
```

Ваш регулярний вираз має використати скорочений символ `\S`, щоб збігатись з усіма символами, які не є пробілами.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

Ваш регулярний вираз повинен знайти 35 символів, що не є пробілами, у рядку `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

Ваш регулярний вираз повинен знайти 23 символи, що не є пробілами, у рядку `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

Ваш регулярний вираз повинен знайти 21 символ, що не є пробілами, у рядку `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
