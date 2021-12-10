---
id: 56533eb9ac21ba0edf2244d9
title: Порівняння з оператором "більше ніж"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

Якщо оператор <dfn>logical або</dfn> (`||`) повертає `true`, якщо будь-який з <dfn>operands</dfn> є `true`. В іншому випадку перетворюється на `false`.

Оператор <dfn>логічний або</dfn> складається з двох символів труби (`||`). Зазвичай його можна знайти на клавіатурі між клавіш Backspace та Enter.

Шаблон нижче повинен бути схожим з етапами вище:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

стає `Yes` тільки, якщо `num` між `5` та `10` (5 та 10 включно). Приклад оператора наведено нижче:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Об'єднайте два оператори `if` в один оператор який перетворить рядок `Outside`, якщо `val` не знаходиться в діапазоні від `10` до `20` включно. В іншому випадку значення рядка стане `Inside`.

# --hints--

Використовуйте оператор `||` лише раз

```js
assert(code.match(/\|\|/g).length === 1);
```

У вас має бути лише один елемент `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` перетворюється на `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` перетворюється на `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` перетворюється на `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` перетворюється на `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` перетворюється на `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` перетворюється на `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` перетворюється на `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` перетворюється на `Outside`

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
