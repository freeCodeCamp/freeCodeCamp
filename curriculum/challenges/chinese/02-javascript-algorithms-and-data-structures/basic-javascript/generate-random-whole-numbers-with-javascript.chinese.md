---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript生成随机整数
---

## Description
<section id="description">我们可以生成随机十进制数很好，但如果我们用它来生成随机整数，它会更有用。 <ol><li>使用<code>Math.random()</code>生成随机小数。 </li><li>将随机小数乘以<code>20</code> 。 </li><li>使用另一个函数<code>Math.floor()</code>将数字向下舍入到最接近的整数。 </li></ol>请记住， <code>Math.random()</code>永远不会返回<code>1</code> ，因为我们正在向下舍入，实际上不可能得到<code>20</code> 。这项技术将给我们一个<code>0</code>到<code>19</code>之间的整数。将所有内容放在一起，这就是我们的代码： <code>Math.floor(Math.random() * 20);</code>我们调用<code>Math.random()</code> ，将结果乘以20，然后将值传递给<code>Math.floor()</code>函数，将值向下舍入到最接近的整数。 </section>

## Instructions
<section id="instructions">使用此技术生成并返回<code>0</code>到<code>9</code>之间的随机整数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
