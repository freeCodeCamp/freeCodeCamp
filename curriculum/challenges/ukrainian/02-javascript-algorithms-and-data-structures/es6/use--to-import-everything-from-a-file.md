---
id: 587d7b8c367417b2b2512b57
title: Використання * для імпорту всієї інформації з файлу
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Припустимо, у вас є файл і ви хочете імпортувати весь його вміст у поточний файл. Це можна зробити за допомогою `import * as` синтаксису. Ось приклад, де вміст файлу з назвою `math_functions.js` імпортується до файлу в тому ж каталозі:

```js
import * as myMathModule from "./math_functions.js";
```

Наведена вище команда `import` створить об’єкт під назвою `myMathModule`. Це змінна назва, ви можете обрати власну. Об'єкт буде містити всю експортовану інформацію з `math_functions.js`, тому ви зможете отримати доступ як до функцій, так і до інших властивостей об'єкта. Ось як ви можете використовувати функції `add` і `subtract`, які були імпортовані:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

Для коду у цьому файлі необхідний вміст файлу: `string_functions.js`, який є в тому ж каталозі, що і поточний файл. Використовуйте синтаксис `import * as`, щоб імпортувати всі файли до об'єкта під назвою `stringFunctions`.

# --hints--

У вашому коді повинен правильно використовуватись синтаксис `import * as`.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
