---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1

videoUrl: ''
localeTitle: Add Items Using splice()
---

## Description
<section id='description'>
你还记得在上个挑战中我们提到<code>splice()</code>方法可以接受最多 3 个参数吗？我们现在可以进一步了解<code>splice()</code>&mdash;。除了移除元素，我们还可以利用它的第三个参数来向数组中<em>添加</em>元素。第三个参数可以是一个或多个元素，这些元素会被添加到数组中。这使我们能够便捷地将数组中的一个或一系列元素换成其他的元素。例如你在一个数组中存储了一系列 DOM 元素的配色，并希望基于某些行为动态地改变一个颜色：
<blockquote>function colorChange(arr, index, newColor) {<br>&nbsp;&nbsp;arr.splice(index, 1, newColor);<br>&nbsp;&nbsp;return arr;<br>}<br><br>let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];<br><br>colorScheme = colorChange(colorScheme, 2, '#332327');<br>// 我们移除了 '#bb7e8c' 并在其位置上添加了 '#332327'<br>// colorScheme 现在等于 ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']</blockquote>
这个函数接受一个十六进制值（hex value）的数组、要被移除的元素的索引以及要替换旧元素的新颜色作为输入参数。它的返回值是一个含有被修改的新的配色的数组。虽然这个例子可能过于简单，但我们还是能从中感受到充分利用<code>splice()</code>方法的价值。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>htmlColorNames</code>函数，它以一个 HTML 颜色的数组作为输入参数。请修改这个函数，利用<code>splice()</code>来移除数组中的前两个元素，并在对应的位置上添加<code>'DarkSalmon'</code>和<code>'BlanchedAlmond'</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>htmlColorNames</code>应该返回<code>['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']</code>。"
    testString: assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'], '<code>htmlColorNames</code>应该返回<code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>。');
  - text: <code>htmlColorNames</code>函数中应该用到<code>splice()</code>方法。
    testString: assert(/.splice/.test(code), '<code>htmlColorNames</code>函数中应该用到<code>splice()</code>方法。');
  - text: 你不应该使用<code>shift()</code>或<code>unshift()</code>。
    testString: assert(!/shift|unshift/.test(code), '你不应该使用<code>shift()</code>或<code>unshift()</code>。');
  - text: 你不应该使用数组的方括号符号。
    testString: assert(!/\[\d\]\s*=/.test(code), '你不应该使用数组的方括号符号。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              