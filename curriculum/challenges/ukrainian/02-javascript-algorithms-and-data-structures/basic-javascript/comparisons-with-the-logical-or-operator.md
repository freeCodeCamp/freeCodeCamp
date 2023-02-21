---
id: 56533eb9ac21ba0edf2244d9
title: Порівняння з логічним оператором or
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

<dfn>Логічний оператор or</dfn> (`||`) повертає `true`, якщо один з <dfn>операндів</dfn> є `true`. В іншому випадку він повертає `false`.

<dfn>Логічний оператор or</dfn> складається з двох вертикальних рисок: (`||`). Як правило, цей символ можна знайти на клавіатурі між клавішами backspace та enter.

Наведений нижче шаблон має виглядати знайомим за пунктами з попередніх уривків:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

поверне `Yes` лише за умови, що `num` знаходиться між `5` та `10` (включно з 5 і 10). Цю саму логіку можна записати як:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Об’єднайте дві інструкції `if` в одну інструкцію, яка поверне рядок `Outside`, якщо `val` не знаходиться між `10` та `20` (включно). В іншому випадку поверніть рядок `Inside`.

# --hints--

Ви повинні використати оператор `||` лише раз

```js
assert(code.match(/\|\|/g).length === 1);
```

Ви повинні мати лише одну інструкцію `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` має повертати рядок `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` має повертати рядок `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` має повертати рядок `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` має повертати рядок `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` має повертати рядок `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` має повертати рядок `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` має повертати рядок `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` має повертати рядок `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
