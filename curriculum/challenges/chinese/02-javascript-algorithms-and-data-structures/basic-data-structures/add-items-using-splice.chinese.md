---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: 使用splice（）添加项目
---

## Description
<section id="description">还记得在上一次挑战中我们提到过<code>splice()</code>最多需要三个参数吗？好吧，我们可以更进一步使用<code>splice()</code> - 除了删除元素之外，我们还可以使用代表一个或多个元素的第三个参数来<em>添加</em>它们。这对于快速切换另一个元素或一组元素非常有用。例如，假设您正在为数组中的一组DOM元素存储颜色方案，并希望根据某些操作动态更改颜色： <blockquote> function colorChange（arr，index，newColor）{ <br> arr.splice（index，1，newColor）; <br>返回<br> } <br><br>让colorScheme = [&#39;＃878787&#39;，&#39;＃a08794&#39;，&#39;＃bb7e8c&#39;，&#39;＃c9b6be&#39;，&#39;＃d1becf&#39;]; <br><br> colorScheme = colorChange（colorScheme，2，&#39;＃332327&#39;）; <br> //我们删除了&#39;＃bb7e8c&#39;并在其位置添加了&#39;＃332327&#39; <br> // colorScheme现在等于[&#39;＃878787&#39;，&#39;＃a08794&#39;，&#39;＃332327&#39;，&#39;＃c9b6be&#39;，&#39;＃d1becf&#39;] </blockquote>此函数采用十六进制值数组，删除元素的索引以及用于替换已删除元素的新颜色。返回值是一个包含新修改的颜色方案的数组！虽然这个例子有点过于简单，但我们可以看到利用<code>splice()</code>到其最大潜力的值。 </section>

## Instructions
<section id="instructions">我们定义了一个函数<code>htmlColorNames</code> ，它将一组HTML颜色作为参数。使用<code>splice()</code>修改函数以删除数组的前两个元素，并在各自的位置添加<code>&#39;DarkSalmon&#39;</code>和<code>&#39;BlanchedAlmond&#39;</code> <code>&#39;DarkSalmon&#39;</code> 。 </section>

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
// solution required
```
</section>
