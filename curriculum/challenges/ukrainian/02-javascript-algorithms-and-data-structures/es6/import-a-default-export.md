---
id: 587d7b8d367417b2b2512b59
title: Імпорт модуля Default Export за змовчуванням
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

У вашому останньому завданні ви дізнались про `xportdefault` та його використання. Для імпорту default export необхідно використовувати інший синтаксис `import`. У наступному прикладі `add` є експорт за змовчуванням файлу `math_functions.js`. Ось як потрібно імпортувати:

```js
import add from "./math_functions.js";
```

Є одна ключова відмінність синтаксису. Імпортоване значення `add` не обрамлене фігурними дужками (`{}`). `add` це назва змінної для будь-якого експорту за змовчуванням в файл `math_functions.js`. Файл за змовчуванням можна називати в довільному порядку.

# --instructions--

У наступному коді імпортуйте експорт за замовчуванням з файлу `math_functions.js`, знайдений в тій же папці, що і цей файл. Назвіть імпорт `subtract`.

# --hints--

Належним чином імпортуйте `subtract` з `math_functions.js`.

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
