---
id: 56533eb9ac21ba0edf2244dc
title: تَسلسل تعبيرات If Else الشرطية
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

يمكن تسلسل -ربط- عدة تعبيرات `if/else` معًا في السياقات المنطقية المعقدة. إليك <dfn>pseudocode</dfn> أو ما يسمى بالتعليمات البرمجية الزائفة -وهن التعليمات الغير مرتبطة بلغة برمجة واحدة ولكنها قريبة من لغة الإنسان- لعدة عبارات `if` و `else if` مسلسلة:

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

اكتب تعبيرات متسلسلة `if`/`else if` لتقَّضي الشروط التالية:

`num < 5` - تنتج (return) `Tiny`  
`num < 10` - تنتج (return) `Small`  
`num < 15` - تنتج (return) `Medium`  
`num < 20` - تنتج (return) `Large`  
`num >= 20` - تنتج (return) `Huge`

# --hints--

يجب أن يكون لديك في الأقل أربع تعبيرات `else`

```js
assert(code.match(/else/g).length > 3);
```

يجب أن يكون لديك في الأقل أربع تعبيرات `if`

```js
assert(code.match(/if/g).length > 3);
```

يجب أن يكون لديك في الأقل تعبير واحد `return`

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` يجب أن تنتج المقطع النصي `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` يجب أن تنتج المقطع النصي `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` يجب أن تنتج المقطع النصي `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` يجب أن تنتج المقطع النصي `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` يجب أن تنتج المقطع النصي `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` يجب أن تنتج المقطع النصي `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` يجب أن تنتج المقطع النصي `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` يجب أن تنتج المقطع النصي `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` يجب أن تنتج المقطع النصي `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` يجب أن تنتج المقطع النصي `Huge`

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
