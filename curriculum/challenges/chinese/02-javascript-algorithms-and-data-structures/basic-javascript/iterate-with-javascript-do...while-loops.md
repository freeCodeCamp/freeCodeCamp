---
id: 5a2efd662fb457916e1fe604
title: do...while 循环
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

下一种循环叫作 `do...while` 循环。 它被称为 `do...while` 循环，是因为不论什么情况，它都会首先 `do`（运行）循环里的第一部分代码，然后 `while`（当）规定的条件被评估为 `true`（真）的时候，它会继续运行循环。

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

上面的示例行为类似于其他类型的循环，由此产生的数组将看起来像 `[0, 1, 2, 3, 4]`。 然而，`do...while` 不同于其他循环的地方，是第一次循环检查失败时的行为。 让我们看看代码示例。 这里是一个常规的 `while` 循环，只要 `i < 5`，就会在循环中运行代码：

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

这个例子中，定义了一个空数组 `ourArray` 以及一个值为 5 的 `i` 。 当执行 `while` 循环时，因为 `i` 不小于 5，所以循环条件为 `false`，循环内的代码将不会执行。 `ourArray` 最终没有添加任何内容，因此示例中的所有代码执行完时，ourArray 仍然是`[]`。 现在，看一下 `do...while` 循环。

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

在这里，和使用 `while` 循环一样，将 `i` 的值初始化为 5。 执行下一行时，没有执行循环检查，直接执行花括号内的代码。 数组会添加一个元素，并在进行条件检查之前递增 `i`。 然后，在条件检查时因为 `i` 等于 6 不符合条件 `i < 5`，所以退出循环。 最终 `ourArray` 的值是 `[5]`。 本质上，`do...while` 循环确保循环内的代码至少运行一次。 让我们通过 `do...while` 循环将值添加到数组中。

# --instructions--

将代码中的 `while` 循环更改为 `do...while` 循环，将数字 `10` 添加到 `myArray` 中，代码执行完时，`i` 等于 `11`。

# --hints--

你应该使用 `do...while` 循环。

```js
assert(code.match(/do/g));
```

`myArray` 应该等于 `[10]`。

```js
assert.deepEqual(myArray, [10]);
```

`i` 应该等于 `11`。

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
