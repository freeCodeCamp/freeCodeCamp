---
id: 56533eb9ac21ba0edf2244ac
title: 数字递增
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
---

# --description--

使用`++`，我们可以很容易地对变量进行自增或者`+1`运算。

`i++;`

等效于

`i = i + 1;`

**注意**  
`i++;`这种写法，省去了书写`=`符号的必要。

# --instructions--

重写代码，使用`++`来对变量`myVar`进行自增操作。

**提示**  
了解更多关于`++`运算符[Arithmetic operators - Increment (++)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#%E9%80%92%E5%A2%9E_()).

# --hints--

`myVar`应该等于`88`。

```js
assert(myVar === 88);
```

`myVar = myVar + 1;`语句应该被修改。

```js
assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*myVar\+\+;/.test(code));
```

使用`++`运算符。

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

不要修改注释上方的代码。

```js
assert(/var myVar = 87;/.test(code));
```

# --solutions--

