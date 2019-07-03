---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0

videoUrl: ''
localeTitle: Make Typography Responsive
---

## Description
<section id='description'>
除了用 <code>em</code> 或 <code>px</code> 去设置文本大小, 你还可以用视窗单位来做响应式排版。视窗单位还有百分比，它们都是相对单位，但却基于不同的参照物。视窗单位相对于设备的视窗尺寸 (宽度或高度) ，百分比是相对于父级元素的大小。
四个不同的视窗单位分别是：
<ul><li><code>vw</code>：如 <code>10vw</code> 的意思是视窗宽度的 10%。</li><li><code>vh：</code> 如 <code>3vh</code> 的意思是视窗高度的 3%。</li><li><code>vmin：</code> 如 <code>70vmin</code> 的意思是视窗中较小尺寸的 70% (高度 VS 宽度)。</li><li><code>vmax：</code> 如 <code>100vmax</code> 的意思是视窗中较大尺寸的 100% (高度 VS 宽度)。</li></ul>
</section>

## Instructions
<section id='instructions'>
设置 <code>h2</code> 标签的 <code>width</code> 为视窗宽度的 80%，<code>p</code> 标签的 <code>width</code> 为视窗高度和宽度中较小值的 75%。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 标签 <code>width</code> 应为 80vw。
    testString: 'assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g), "<code>h2</code> 标签的 <code>width</code> 应为 80vw。");'
  - text: <code>p</code> 标签 <code>width</code> 应为 75vmin。
    testString: 'assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g), "<code>p</code> 标签的 <code>width</code> 应为 75vmin。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  ,</style>,,<h2>Importantus Ipsum</h2>,<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```





</div>





</section>

              