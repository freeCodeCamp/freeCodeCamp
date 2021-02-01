---
id: 56533eb9ac21ba0edf2244b2
title: 复合赋值之 /=
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

`/=`操作符是让变量与另一个数相除并赋值。

`myVar = myVar / 5;`

变量`myVar`等于自身除以`5`的值。等价于:

`myVar /= 5;`

# --instructions--

使用`/=`操作符实现同样的效果。

# --hints--

`a`应该等于`4`。

```js
assert(a === 4);
```

`b`应该等于`27`。

```js
assert(b === 27);
```

`c`应该等于`3`。

```js
assert(c === 3);
```

应该对每个变量使用`/=`操作符。

```js
assert(code.match(/\/=/g).length === 3);
```

不要修改注释上面的代码。

```js
assert(
  /var a = 48;/.test(code) &&
    /var b = 108;/.test(code) &&
    /var c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
```
