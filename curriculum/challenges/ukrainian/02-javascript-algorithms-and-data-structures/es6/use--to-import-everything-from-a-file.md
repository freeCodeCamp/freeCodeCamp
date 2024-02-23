---
id: 587d7b8c367417b2b2512b57
title: Використання * для імпорту всієї інформації з файлу
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Припустимо, у вас є файл і ви хочете імпортувати весь його вміст у поточний файл. Це можна зробити за допомогою синтаксису `import * as`. Ось приклад, де вміст файлу під назвою `math_functions.js` імпортується до файлу в тій же директорії:

```js
import * as myMathModule from "./math_functions.js";
```

Вищеподана інструкція `import` створить об’єкт під назвою `myMathModule`. Це довільна назва, ви можете обрати будь-яку іншу. Об’єкт міститиме всю експортовану інформацію з `math_functions.js`, тому ви можете отримати доступ до функцій, як і до всіх інших властивостей об’єкта. Ось так ви можете використовувати функції `add` та `subtract`, які були імпортовані:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

Код у цьому файлі вимагає вміст файлу `string_functions.js`, який знаходиться у тій самій директорії, що і поточний файл. Використайте синтаксис `import * as`, щоб імпортувати весь вмісту файлу до об’єкта під назвою `stringFunctions`.

# --hints--

Ваш код повинен правильно використовувати синтаксис `import * as`.

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
