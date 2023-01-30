---
id: 587d7b8c367417b2b2512b55
title: Повторне використання коду JavaScript за допомогою import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` дозволяє вам вибрати, які частини файлу чи модуля завантажувати. У попередньому завданні приклади експортували функцію `add` з файлу `math_functions.js`. А ось так ви можете імпортувати її та використовувати в іншому файлі:

```js
import { add } from './math_functions.js';
```

У прикладі `import` знайде `add` у `math_functions.js` та імпортує саме цю функцію, а решту проігнорує. `./` повідомляє імпорту, щоб він знайшов файл `math_functions.js` у тій же папці, де знаходиться поточний файл. При використанні імпорту таким чином необхідний відносний шлях до файлу (`./`) та розширення файлу (`.js`).

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
