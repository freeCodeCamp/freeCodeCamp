---
id: 587d78b2367417b2b2512b10
title: 使用 splice() 删除项目
challengeType: 1
forumTopicId: 301166
---

# --description--

在上面的挑战中，我们已经学到了如何利用`shift()`和`pop()`从数组的开头或者末尾移除元素，但如果我们想移除数组中间的一个元素呢？或者想一次移除多个元素呢？这时候我们就需要`splice()`了。`splice()`让我们可以从数组中的任意位置**移除任意数量的连续的元素**。

`splice()`最多可以接受 3 个参数，但现在我们先关注前两个。`splice()`接收的前两个参数基于调用`splice()`数组中元素的索引。记住，数组的索引是*从 0 开始的*（*zero-indexed*），所以我们要用`0`来指示数组中的第一个元素。`splice()`的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数指示要从数组中删除多少个元素。例如：

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// 从第三个索引位置开始移除 2 个元素
// array 现在是 ['today', 'was', 'great']
```

`splice()`不仅从被调用的数组中移除元素，还会返回一个包含被移除元素的数组：

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray 是 ['really', 'happy']
```

# --instructions--

给定初始化的数组 `arr`。使用 `splice()` 从 `arr` 里移除元素，使剩余的元素的和为 `10`。

# --hints--

不应该修改这一行 `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`。

```js
assert(code.replace(/\s/g, '').match(/constarr=\[2,4,5,1,7,5,2,1\];?/));
```

`arr` 的剩余元素和应该为 `10`。

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

应该利用 `arr` 的 `splice()`。

```js
assert(code.replace(/\s/g, '').match(/arr\.splice\(/));
```

splice 应该只删除 `arr` 里面的元素，不能给 `arr` 添加元素。

```js
assert(!code.replace(/\s/g, '').match(/arr\.splice\(\d+,\d+,\d+.*\)/g));
```

# --solutions--

