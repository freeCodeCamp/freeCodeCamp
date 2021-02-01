---
id: 56533eb9ac21ba0edf2244ad
title: 数字递减
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

使用自减符号`--`，你可以很方便地对一个变量执行<dfn>自减</dfn>或者`-1`运算。

`i--;`

等效于

`i = i - 1;`

**提示**  
`i--;`这种写法，省去了书写`=`符号的必要。

# --instructions--

重写代码，使用`--`符号对`myVar`执行自减操作。

# --hints--

`myVar`应该等于`10`。

```js
assert(myVar === 10);
```

`myVar = myVar - 1;`语句应该被修改。

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

对`myVar`使用`--`运算符。

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

不要修改注释上面的代码。

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```
