---
id: 56533eb9ac21ba0edf2244b1
title: Складене присвоєння з множенням
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

Оператор `*=` множить змінну на число.

```js
myVar = myVar * 5;
```

помножить `myVar` на `5`. Можна записати ще так:

```js
myVar *= 5;
```

# --instructions--

Конвертуйте присвоєння для `a`, `b` та `c`, використовуючи оператор `*=`.

# --hints--

`a` має дорівнювати `25`.

```js
assert(a === 25);
```

`b` має дорівнювати `36`.

```js
assert(b === 36);
```

`c` має дорівнювати `46`.

```js
assert(c === 46);
```

Ви повинні використати оператор `*=` для кожної змінної.

```js
assert(code.match(/\*=/g).length === 3);
```

Не змінюйте код над зазначеним коментарем.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
