---
id: 587d78b2367417b2b2512b10
challengeType: 1
forumTopicId: 301166
title: 使用 splice() 删除项目
---

## Description
<section id='description'>
在上面的挑战中，我们已经学到了如何利用<code>shift()</code>和<code>pop()</code>从数组的开头或者末尾移除元素，但如果我们想移除数组中间的一个元素呢？或者想一次移除多个元素呢？这时候我们就需要<code>splice()</code>了。<code>splice()</code>让我们可以从数组中的任意位置<strong>移除任意数量的连续的元素</strong>。
<code>splice()</code>最多可以接受 3 个参数，但现在我们先关注前两个。<code>splice()</code>接收的前两个参数基于调用<code>splice()</code>数组中元素的索引。记住，数组的索引是<em>从 0 开始的</em>（<em>zero-indexed</em>），所以我们要用<code>0</code>来指示数组中的第一个元素。<code>splice()</code>的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数指示要从数组中删除多少个元素。例如：

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// 从第三个索引位置开始移除 2 个元素
// array 现在是 ['today', 'was', 'great']
```

<code>splice()</code>不仅从被调用的数组中移除元素，还会返回一个包含被移除元素的数组：

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray 是 ['really', 'happy']
```

</section>

## Instructions
<section id='instructions'>

给定初始化的数组 `arr`。使用 `splice()` 从 `arr` 里移除元素，使剩余的元素的和为 <code>10</code>。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应该修改这一行 <code>const arr = [2, 4, 5, 1, 7, 5, 2, 1];</code>。
    testString: assert(code.replace(/\s/g, '').match(/constarr=\[2,4,5,1,7,5,2,1\];?/));
  - text: <code>arr</code> 的剩余元素和应该为 <code>10</code>。
    testString: assert.strictEqual(arr.reduce((a, b) => a + b), 10);
  - text: 应该利用 <code>arr</code> 的 <code>splice()</code>。
    testString: assert(code.replace(/\s/g, '').match(/arr\.splice\(/));
  - text: splice 应该只删除 <code>arr</code> 里面的元素，不能给 <code>arr</code> 添加元素。
    testString: assert(!code.replace(/\s/g, '').match(/arr\.splice\(\d+,\d+,\d+.*\)/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line

// only change code above this line
console.log(arr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```

</section>
