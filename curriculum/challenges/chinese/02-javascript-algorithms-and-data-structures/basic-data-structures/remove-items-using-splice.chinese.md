---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1

videoUrl: ''
localeTitle: Remove Items Using splice()
---

## Description
<section id='description'>
在上面的挑战中，我们已经学到了如何利用<code>shift()</code>和<code>pop()</code>从数组的开头或者末尾移除元素，但如果我们想移除数组中间的一个元素呢？或者想一次移除多个元素呢？这时候我们就需要<code>splice()</code>了。<code>splice()</code>让我们可以从数组中的任意位置<strong>移除任意数量的连续的元素</strong>。
<code>splice()</code>最多可以接受 3 个参数，但现在我们先关注前两个。<code>splice()</code>接收的前两个参数基于调用<code>splice()</code>数组中元素的索引。记住，数组的索引是<em>从 0 开始的</em>（<em>zero-indexed</em>），所以我们要用<code>0</code>来指示数组中的第一个元素。<code>splice()</code>的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数指示要从数组中删除多少个元素。例如：
<blockquote>let array = ['today', 'was', 'not', 'so', 'great'];<br><br>array.splice(2, 2);<br>// 从第 3 个元素开始，删除 2 个元素<br>// 现在该数组等于 ['today', 'was', 'great']</blockquote>
<code>splice()</code>不仅从被调用的数组中移除元素，还会返回一个包含被移除元素的数组：
<blockquote>let array = ['I', 'am', 'feeling', 'really', 'happy'];<br><br>let newArray = array.splice(3, 2);<br>// newArray 等于 ['really', 'happy']</blockquote>
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>sumOfTen</code>函数，它接受一个数组作为输入参数，并返回数组中所有元素的和。请你修改这个函数，利用<code>splice()</code>，使得它返回<code>10</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code>应该返回 10。
    testString: assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, '<code>sumOfTen</code>应该返回 10。');
  - text: <code>sumOfTen</code>函数应该用到<code>splice()</code>方法。
    testString: assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, '<code>sumOfTen</code>函数应该用到<code>splice()</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              