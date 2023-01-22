---
id: bd7123c9c441eddfaeb5bdef
title: Розуміння булевих значень
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Інший тип даних це <dfn>Boolean</dfn>. Булеві значення можуть мати лише два значення: `true` чи `false`. Фактично, це маленькі перемикачі, де `true` це "увімкнено" і `false` - "вимкнено". Ці два стани несумісні.

**Note:** Булеві вирази ніколи не записуються в дужках. Рядки `"true"` й `"false"` не булеві і не мають особливого значення в JavaScript.

# --instructions--

Змініть функцію `welcomeToBooleans` так, щоб вона повертала `true` замість `false`, коли натискається кнопка запуску.

# --hints--

Функція `welcomeToBooleans()` має повернути значення (`true` or `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` має повернути `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
