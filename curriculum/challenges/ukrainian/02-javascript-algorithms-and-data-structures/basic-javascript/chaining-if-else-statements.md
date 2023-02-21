---
id: 56533eb9ac21ba0edf2244dc
title: Ланцюжок інструкцій if else
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

Інструкції `if/else` можна об’єднати для складної логіки. Ось <dfn>псевдокод</dfn> декількох об’єднаних інструкцій `if` / `else if`:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

Напишіть об’єднані інструкції `if`/`else if`, щоб виконати наступні умови:

`num < 5` повертає `Tiny`  
`num < 10` повертає `Small`  
`num < 15` повертає `Medium`  
`num < 20` повертає `Large`  
`num >= 20` повертає `Huge`

# --hints--

Ви повинні мати принаймні 4 інструкції `else`

```js
assert(code.match(/else/g).length > 3);
```

Ви повинні мати принаймні 4 інструкції `if`

```js
assert(code.match(/if/g).length > 3);
```

Ви повинні мати принаймні 1 інструкцію `return`

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` має повертати рядок `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` має повертати рядок `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` має повертати рядок `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` має повертати рядок `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` має повертати рядок `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` має повертати рядок `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` має повертати рядок `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` має повертати рядок `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` має повертати рядок `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` має повертати рядок `Huge`

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
