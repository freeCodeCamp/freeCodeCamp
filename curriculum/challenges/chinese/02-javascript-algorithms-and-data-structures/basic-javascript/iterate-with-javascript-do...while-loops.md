---
id: 5a2efd662fb457916e1fe604
title: do...while 循环
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
---

# --description--

这一节我们将要学习的是`do...while`循环，它会先执行`do`里面的代码，如果`while`表达式为真则重复执行，反之则停止执行。我们来看一个例子。

```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

这看起来和其他循环语句差不多，返回的结果是`[0, 1, 2, 3, 4]`，`do...while`与其他循环不同点在于，初始条件为假时的表现，让我们通过实际的例子来看看。 这是一个普通的 while 循环，只要`i < 5`，它就会在循环中运行代码。

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

注意，我们首先将`i`的值初始化为 5。执行下一行时，注意到`i`不小于 5，循环内的代码将不会执行。所以`ourArray`最终没有添加任何内容，因此示例中的所有代码执行完时，`ourArray`仍然是`[]`。 现在，看一下`do...while`循环。

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

在这里，和使用 while 循环时一样，我们将`i`的值初始化为 5。执行下一行时，没有检查`i`的值，直接执行花括号内的代码。数组会添加一个元素，并在进行条件检查之前递增`i`。然后，在条件检查时因为`i`等于 6 不符合条件`i < 5`，所以退出循环。最终`ourArray`的值是`[5]`。 本质上，`do...while`循环确保循环内的代码至少运行一次。 让我们通过`do...while`循环将值添加到数组中。

# --instructions--

将代码中的`while`循环更改为`do...while`循环，实现数字 10 添加到`myArray`中，代码执行完时，`i`等于`11`。

# --hints--

你应该使用`do...while`循环。

```js
assert(code.match(/do/g));
```

`myArray`应该等于`[10]`。

```js
assert.deepEqual(myArray, [10]);
```

`i`应该等于`11`。

```js
assert.deepEqual(i, 11);
```

# --solutions--

