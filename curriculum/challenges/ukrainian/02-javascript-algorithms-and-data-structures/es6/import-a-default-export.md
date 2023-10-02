---
id: 587d7b8d367417b2b2512b59
title: Імпорт експорту за замовчуванням
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

У попередньому завданні ви дізнались про `export default` та його використання. Щоб імпортувати експорт за замовчуванням, потрібно використати інший синтаксис `import`. У наступному прикладі `add` є експортом за замовчуванням файлу `math_functions.js`. Як виконати імпорт:

```js
import add from "./math_functions.js";
```

Є одна ключова відмінність синтаксису. Імпортоване значення `add` не обрамлене фігурними дужками (`{}`). `add` є простою назвою для будь-якого експорту за замовчуванням файлу `math_functions.js`. Ви можете використати будь-яку назву.

# --instructions--

У наступному коді імпортуйте експорт за замовчуванням з файлу `math_functions.js`, знайденого в тій же директорії, що й файл. Надайте імпорту назву `subtract`.

# --hints--

Ви повинні правильно імпортувати `subtract` з `math_functions.js`.

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
