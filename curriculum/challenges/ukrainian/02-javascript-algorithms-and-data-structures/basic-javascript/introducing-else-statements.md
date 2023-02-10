---
id: 56533eb9ac21ba0edf2244da
title: Вступ до інструкцій else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Якщо умова інструкції `if` правильна, то виконується наступний блок коду. А якщо умова хибна? Зазвичай нічого не станеться. У випадку інструкції `else` може спрацювати альтернативний блок коду.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Об’єднайте інструкції `if` в єдину інструкцію `if/else`.

# --hints--

Ви повинні мати лише одну інструкцію `if` у редакторі

```js
assert(code.match(/if/g).length === 1);
```

Ви повинні використати інструкцію `else`

```js
assert(/else/g.test(code));
```

`testElse(4)` має повертати рядок `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` має повертати рядок `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` має повертати рядок `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` має повертати рядок `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

Не змінюйте код над/під зазначеним коментарем.

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
