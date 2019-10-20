---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS线性渐变来创建条带元素
---

## Description
<section id="description"> <code>repeating-linear-gradient()</code>函数与<code>linear-gradient()</code>非常相似，主要区别在于它重复指定的渐变图案。 <code>repeating-linear-gradient()</code>接受各种值，但为简单起见，您将在此挑战中使用角度值和颜色停止值。角度值是梯度的方向。颜色停止类似于标记转换发生位置的宽度值，并且以百分比或像素数给出。在代码编辑器中演示的示例中，渐变以0像素处的<code>yellow</code>开始，在距离开始40像素处混合成第二种颜色<code>blue</code> 。由于下一个颜色停止也是40像素，因此渐变立即变为第三颜色<code>green</code> ，其本身混合为第四颜色值<code>red</code> ，因为距离渐变的开始是80像素。对于这个例子，它有助于将颜色停止视为每两种颜色混合在一起的对。 <code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code>如果每两个颜色停止值是相同的颜色，则混合不明显，因为它在相同的颜色之间，然后是硬转换到下一个颜色，所以你最终得到条纹。 </section>

## Instructions
<section id="instructions">通过更改<code>repeating-linear-gradient()</code>以使用<code>45deg</code>度的渐变角度来<code>45deg</code> ，然后将前两个颜色停止设置为<code>yellow</code> ，最后将第二个两个颜色停止为<code>black</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>repeating-linear-gradient()</code>应为45度。
    testString: 'assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should be 45deg.");'
  - text: <code>repeating-linear-gradient()</code>不应再为90度
    testString: 'assert(!code.match(/90deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg");'
  - text: 0像素处的颜色停止应为<code>yellow</code> 。
    testString: 'assert(code.match(/yellow\s+?0(px)?/gi), "The color stop at 0 pixels should be <code>yellow</code>.");'
  - text: 40像素的一个颜色停止应为<code>yellow</code> 。
    testString: 'assert(code.match(/yellow\s+?40px/gi), "One color stop at 40 pixels should be <code>yellow</code>.");'
  - text: 40像素的第二个色标应为<code>black</code> 。
    testString: 'assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi), "The second color stop at 40 pixels should be <code>black</code>.");'
  - text: 80像素的最后一个色标应为<code>black</code> 。
    testString: 'assert(code.match(/black\s+?80px/gi), "The last color stop at 80 pixels should be <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
