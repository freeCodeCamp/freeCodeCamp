---
id: 56533eb9ac21ba0edf2244dd
title: 使用 Switch 语句从许多选项中进行选择
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
---

# --description--

如果你有非常多的选项需要选择，可以使用 switch 语句。根据不同的参数值会匹配上不同的 case 分支，语句会从第一个匹配的 case 分支开始执行，直到碰到 break 就结束。

这是一个伪代码案例：

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

测试`case`值使用严格相等运算符进行比较，break 关键字告诉 JavaScript 停止执行语句。如果没有 break 关键字，下一个语句会继续执行。

# --instructions--

写一个测试`val`的 switch 语句，并且根据下面的条件来设置不同的`answer`：  
`1`- "alpha"  
`2` - "beta"  
`3`- "gamma"  
`4` - "delta"

# --hints--

`caseInSwitch(1)` 应该有一个值为 "alpha"。

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` 应该有一个值为 "beta"。

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` 应该有一个值为 "gamma"。

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` 应该有一个值为 "delta"。

```js
assert(caseInSwitch(4) === 'delta');
```

不能使用任何`if`或`else`表达式。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你应该有至少 3 个`break`表达式。

```js
assert(code.match(/break/g).length > 2);
```

# --solutions--

