---
id: 56533eb9ac21ba0edf2244dc
title: Створення ланцюгу If Else (Що-Якщо)
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

`if/else` може бути об'єднаним у разі складних алгоритмів. Ось <dfn>pseudocode</dfn> декількох ланцюжків `if` / `else if` тверджень:

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

Запишіть ланцюжок `if`/`else if` для того, щоб виконати наступні умови:

`num < 5` дає `Tiny`  
`num < 10` дає `Small`  
`num < 15` дає `Medium`  
`num < 20` дає `Large`  
`num >= 20` дає `Huge`

# --hints--

Потрібно мати щонайменше 4 команди `else`

```js
assert(code.match(/else/g).length > 3);
```

Потрібно мати щонайменше 4 команди `if`

```js
assert(code.match(/if/g).length > 3);
```

Потрібно мати щонайменше 1 команду `return`

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
