---
id: 56533eb9ac21ba0edf2244c2
title: 函数可以返回某个值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
---

# --description--

我们可以通过函数的<dfn>参数</dfn>把值传入函数，也可以使用`return`语句把数据从一个函数中传出来。

**示例**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree`带有一个`num`的<dfn>参数</dfn>并且返回（returns）一个等于`num + 3`的值。

# --instructions--

创建一个函数`timesFive`接收一个参数, 把它乘以`5`之后返回，关于如何测试timesFive 函数，可以参考编辑器中最后一行的示例。

# --hints--

`timesFive`应是一个函数。

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)`应该返回`25`。

```js
assert(timesFive(5) === 25);
```

`timesFive(2)`应该返回`10`。

```js
assert(timesFive(2) === 10);
```

`timesFive(0)`应该返回`0`。

```js
assert(timesFive(0) === 0);
```

# --solutions--

