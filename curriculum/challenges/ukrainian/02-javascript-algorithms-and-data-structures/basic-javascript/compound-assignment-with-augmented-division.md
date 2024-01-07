---
id: 56533eb9ac21ba0edf2244b2
title: Складене присвоєння з діленням
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

Оператор `/=` ділить змінну на інше число.

```js
myVar = myVar / 5;
```

поділить `myVar` на `5`. Можна записати ще так:

```js
myVar /= 5;
```

# --instructions--

Конвертуйте присвоєння для `a`, `b` та `c`, використовуючи оператор `/=`.

# --hints--

`a` має дорівнювати `4`.

```js
assert(a === 4);
```

`b` має дорівнювати `27`.

```js
assert(b === 27);
```

`c` має дорівнювати `3`.

```js
assert(c === 3);
```

Ви повинні використати оператор `/=` для кожної змінної.

```js
assert(code.match(/\/=/g).length === 3);
```

Не змінюйте код над зазначеним коментарем.

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
