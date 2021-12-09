---
id: 587d7b8c367417b2b2512b55
title: Повторне використання коду JavaScript за допомогою імпорту
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` дозволяє вибрати, які частини файлу або модуля завантажувати. В попередньому уроці, приклади експортуються `add` з `math_functions.js` файлу. Ось як ви можете імпортувати його та використовувати в іншому файлі:

```js
import { add } from './math_functions.js';
```

`import` знайде `add` у `math_functions.js`, і імпортує саме цю функцію для використання, а решту ігнорує. `./` повідомляє про імпорт для пошуку файлу `math_functions.js` у тій же папці, що і поточний файл. При використанні імпорту таким чином необхідний відносний шлях до файлу (`./`) та розширення файлу (`.js`).

Ви можете імпортувати кілька елементів з файлу, додавши їх у інструкцію `import` так:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Додайте відповідну інструкцію `import`, яка дозволить поточному файлу використовувати функції `uppercaseString` та `lowercaseString`, які ви експортували в попередньому уроці. Ці функції знаходяться у файлі під назвою `string_functions.js`, які знаходиться і тій самій папці, що і поточний файл.

# --hints--

Варто здійснити імпорт належним чином `uppercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

Потрібно імпортувати `lowercaseString`належним чином.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
