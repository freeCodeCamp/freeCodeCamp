---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: ''
localeTitle: 使排版响应
---

## Description
<section id="description">您可以使用视口单元进行响应式排版，而不是使用<code>em</code>或<code>px</code>来调整文本大小。视口单位（如百分比）是相对单位，但它们基于不同的项目。视口单元相对于设备的视口尺寸（宽度或高度），百分比相对于父容器元素的大小。四个不同的视口单元是： <ul><li> <code>vw: 10vw</code>将是视口宽度的10％。 </li><li> <code>vh: 3vh</code>将是视口高度的3％。 </li><li> <code>vmin: 70vmin</code>将是视口较小尺寸（高度与宽度）的70％。 </li><li> <code>vmax: 100vmax</code>将是视口较大尺寸（高度与宽度）的100％。 </li></ul></section>

## Instructions
<section id="instructions">将<code>h2</code>标记的<code>width</code>设置为视口宽度的80％，将段落的<code>width</code>设置为视口较小尺寸的75％。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>h2</code>标签应该有80vw的<code>width</code> 。
    testString: 'assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g), "Your <code>h2</code> tag should have a <code>width</code> of 80vw.");'
  - text: 你的<code>p</code>标签应该有75vmin的<code>width</code> 。
    testString: 'assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g), "Your <code>p</code> tag should have a <code>width</code> of 75vmin.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
