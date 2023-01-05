---
id: 56533eb9ac21ba0edf2244da
title: Поняття про команду Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Коли умова команди `if` правильна, то наступний блок з кодом виконується. Що ж коли ця умова хибна? Зазвичай нічого не станеться. У випадку `else`, альтернативний блок коду може спрацювати.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Об’єднайте команди `if` в єдину команду `if/else`.

# --hints--

Ви повинні мати лише одну інструкцію `if` у редакторі

```js
assert(code.match(/if/g).length === 1);
```

Вам слід використати команду `else`

```js
assert(/else/g.test(code));
```

`testElse(4)` повинен повертати рядок `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` повинен повертати рядок `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` повинен повертати рядок `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` повинен повертати рядок `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

Не варто змінювати код вище або нижче зазначених коментарів.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
