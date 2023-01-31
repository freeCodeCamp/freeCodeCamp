---
id: 587d7b8c367417b2b2512b58
title: Створення резервного експорту за допомогою export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

У завданні з `export` ви дізналися про синтаксис під назвою <dfn>іменований експорт</dfn>. Це дозволило вам створити декілька функцій та змінних, які можна використати в інших файлах.

Існує ще один важливий синтаксис `export`, який називається <dfn>експортом за замовчуванням</dfn>. Як правило, такий синтаксис використовується, якщо з файлу експортується лише одне значення. Він також слугує для створення резервного значення для файлу або модуля.

Нижче наведено приклади, де використовується `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

Першою є іменована функція, а другою – анонімна.

Оскільки `export default` використовується для оголошення резервного значення для модуля або файлу, лише одне значення може бути експортоване за замовчуванням у кожному модулі або файлі. Крім того, ви не можете використати `export default` з `var`, `let` чи `const`

# --instructions--

Наступна функція має бути резервним значенням для модуля. Для цього необхідно додати відповідний код.

# --hints--

Ваш код повинен використовувати резервний синтаксис `export`.

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
