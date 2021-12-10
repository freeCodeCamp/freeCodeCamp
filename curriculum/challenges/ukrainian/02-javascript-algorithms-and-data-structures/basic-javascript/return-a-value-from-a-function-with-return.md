---
id: 56533eb9ac21ba0edf2244c2
title: Повернути значення за допомогою функції повернення
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

Ми можемо передати значення у функцію за допомогою <dfn>аргументів</dfn>. Ви можете використати команду `return`, щоб надіслати значення назад за межі фунції.

**Наприклад**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` набуває значення `8`.

`plusThree` приймає <dfn>аргумент</dfn> для `num` і повертає значення, яке дорівнює `num + 3`.

# --instructions--

Створіть функцію `timesFive`, що приймає один аргумент, множить його на `5` і повертає нове значення.

# --hints--

`timesFive` має бути функцією

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` має повернутися до `25`

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` має повернутися до `10`

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` має повернутися до `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
