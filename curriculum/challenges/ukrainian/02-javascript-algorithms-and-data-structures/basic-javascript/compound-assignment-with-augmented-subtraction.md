---
id: 56533eb9ac21ba0edf2244b0
title: Складене присвоєння з відніманням
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Оператор `-=` схожий до `+=`, але він віднімає число від змінної.

```js
myVar = myVar - 5;
```

відніме `5` від `myVar`. Можна записати ще так:

```js
myVar -= 5;
```

# --instructions--

Конвертуйте присвоєння для `a`, `b` та `c`, використовуючи оператор `-=`.

# --hints--

`a` має дорівнювати `5`.

```js
assert(a === 5);
```

`b` має дорівнювати `-6`.

```js
assert(b === -6);
```

`c` має дорівнювати `2`.

```js
assert(c === 2);
```

Ви повинні використати оператор `-=` для кожної змінної.

```js
assert(code.match(/-=/g).length === 3);
```

Не змінюйте код над зазначеним коментарем.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
