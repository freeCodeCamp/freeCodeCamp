---
id: 587d7b8c367417b2b2512b58
title: Створіть резервне значення з експортом за замовчуванням
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

В уроці про `export` ви дізналися про синтаксис під назвою <dfn>named export</dfn>. Це дозволило вам створювати чисельні функції та змінні, які можуть використовуватися і в інших файлах.

Існує інший важливий синтаксис `export`, який називається <dfn>export default</dfn>. Як правило, такий синтаксис використовується, якщо з файлу експортується лише одне значення. Він також слугує для створення резервного значення для файлу або модуля.

Нижче наведено приклади, де використовується `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

Перший приклад - названа функція, а другий - анонімна функція.

Оскільки `export default` використовується для оголошення резервного значення для модуля або файлу, лише одне значення може бути експортоване за замовчуванням у кожному модулі або файлі. Крім того, використання `export default` з `var`, `let` або `const` є неможливим

# --instructions--

Наступна функція має бути резервним значенням для модуля. Для цього необхідно додати відповідний код.

# --hints--

Ваш код має використовувати резервне значення `export`.

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
