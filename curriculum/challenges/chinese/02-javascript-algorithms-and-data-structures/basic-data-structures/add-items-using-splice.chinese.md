---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
localeTitle: 使用 splice() 增加项目
---

## Description
<section id='description'>
你还记得在上个挑战中我们提到<code>splice()</code>方法可以接受最多 3 个参数吗？我们现在可以进一步了解<code>splice()</code>。除了移除元素，我们还可以利用它的第三个参数来向数组中<em>添加</em>元素。第三个参数可以是一个或多个元素，这些元素会被添加到数组中。这使我们能够便捷地将数组中的一个或一系列元素换成其他的元素。例如：

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// 第二个 12 被移除，在第二个 12 的索引处添加 13、14。
console.log(numbers);
// 返回 [ 10, 11, 12, 13, 14, 15 ]
```

以一个数字数组开始。接着调用 <code>splice()</code> 方法，在 (3) 的索引位置开始删除元素，删除的元素数量是 (1)，(13, 14) 是在删除位置插入的元素，可以在 <code>amountToDelete</code> 后面插入任意数量的元素（以逗号分隔），每个都会被插入。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>htmlColorNames</code>函数，它以一个 HTML 颜色的数组作为输入参数。请修改这个函数，利用<code>splice()</code>来移除数组中的前两个元素，并在对应的位置上添加<code>'DarkSalmon'</code>和<code>'BlanchedAlmond'</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>htmlColorNames</code>应该返回<code>[&quot;DarkSalmon&quot;, &quot;BlanchedAlmond&quot;, &quot;LavenderBlush&quot;, &quot;PaleTurqoise&quot;, &quot;FireBrick&quot;]</code>'
    testString: assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']);
  - text: <code>htmlColorNames</code>函数应该使用<code>splice()</code>方法
    testString: assert(/.splice/.test(code));
  - text: 你不应该使用<code>shift()</code>或<code>unshift()</code> 。
    testString: assert(!/shift|unshift/.test(code));
  - text: 您不应该使用数组括号表示法。
    testString: assert(!/\[\d\]\s*=/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```

</section>
