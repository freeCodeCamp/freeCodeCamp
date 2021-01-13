---
id: 56533eb9ac21ba0edf2244dc
title: 多个 if else 语句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

`if/else`语句串联在一起可以实现复杂的逻辑，这是多个`if/else if`语句串联在一起的伪代码：

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

把`if`/`else if`语句串联起来实现下面的逻辑：

`num < 5`- return "Tiny"  
`num < 10`- return "Small"  
`num < 15`- return "Medium"  
`num < 20`- return "Large"  
`num >= 20` - return "Huge"

# --hints--

你应该有至少 4 个`else`表达式。

```js
assert(code.match(/else/g).length > 3);
```

你应该有至少 4 个`if`表达式。

```js
assert(code.match(/if/g).length > 3);
```

你应该有至少 1 个`return`表达式。

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)`应该返回 "Tiny"。

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)`应该返回 "Tiny"。

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)`应该返回 "Small"。

```js
assert(testSize(5) === 'Small');
```

`testSize(8)`应该返回 "Small"。

```js
assert(testSize(8) === 'Small');
```

`testSize(10)`应该返回 "Medium"。

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)`应该返回 "Medium"。

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)`应该返回 "Large"。

```js
assert(testSize(15) === 'Large');
```

`testSize(17)`应该返回 "Large"。

```js
assert(testSize(17) === 'Large');
```

`testSize(20)`应该返回 "Huge"。

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)`应该返回 "Huge"。

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
