---
id: 56533eb9ac21ba0edf2244d1
title: 严格相等运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
---

# --description--

严格相等运算符（`===`）是相对相等操作符（`==`）的另一种比较操作符。与相等操作符不同的是，它会同时比较元素的值和`数据类型`。

如果比较的值类型不同，那么在严格相等运算符比较下它们是不相等的，会返回 false 。

**示例**

```js
3 ===  3   // true
3 === '3'  // false
```

`3`是一个`数字`类型的，而`'3'`是一个`字符串`类型的，所以 3 不全等于 '3'。

# --instructions--

在`if`语句值使用严格相等运算符，这样当`val`严格等于7的时候，函数会返回"Equal"。

# --hints--

`testStrict(10)`应该返回 "Not Equal"。

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)`应该返回 "Equal"。

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")`应该返回 "Not Equal"。

```js
assert(testStrict('7') === 'Not Equal');
```

你应该使用`===`运算符。

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --solutions--

