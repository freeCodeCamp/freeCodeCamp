---
id: 56533eb9ac21ba0edf2244ad
title: 数字递减
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

使用自减符号 `--`，你可以很方便地对一个变量执行<dfn>自减</dfn>或者 -1 运算。

```js
i--;
```

等效于：

```js
i = i - 1;
```

**注意：**`i--;` 这种写法省去了书写等号的必要。

# --instructions--

修改代码，使用 `--` 符号对 `myVar` 执行自减操作。

# --hints--

`myVar` 应该等于`10`。

```js
assert(myVar === 10);
```

应该修改 `myVar = myVar - 1;`。

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

你不应将 `10` 分配给 `myVar`。

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

应该对 `myVar` 使用 `--` 运算符。

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

你不应该修改注释上面的代码。

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
