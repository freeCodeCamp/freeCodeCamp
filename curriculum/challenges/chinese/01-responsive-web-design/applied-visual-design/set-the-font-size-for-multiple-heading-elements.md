---
id: 587d781c367417b2b2512ac2
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
title: 设置多个标题元素的 font-size
---

## Description
<section id='description'>
<code>font-size</code> 属性用来指定元素内文字的大小。这个规则可以应用到多个元素上，合理的使用，能让页面的文字显示的错落有致。在本挑战里，你将要设置 <code>h1</code> 到 <code>h6</code> 的每个标题文字的大小。
</section>

## Instructions
<section id='instructions'>
<ul><li>设置 <code>h1</code> 标签的 <code>font-size</code> 为 68px。</li><li>设置 <code>h2</code> 标签的 <code>font-size</code> 为 52px。</li><li>设置 <code>h3</code> 标签的 <code>font-size</code> 为 40px。</li><li>设置 <code>h4</code> 标签的 <code>font-size</code> 为 32px。</li><li>设置 <code>h5</code> 标签的 <code>font-size</code> 为 21px。</li><li>设置 <code>h6</code> 标签的 <code>font-size</code> 为 14px。</li></ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该设置 <code>h1</code> 标签的 <code>font-size</code> 为 <code>68px</code>。'
    testString: assert($('h1').css('font-size') == '68px');
  - text: '你应该设置 <code>h2</code> 标签的 <code>font-size</code> 为 <code>52px</code>。'
    testString: assert($('h2').css('font-size') == '52px');
  - text: '你应该设置 <code>h3</code> 标签的 <code>font-size</code> 为 <code>40px</code>。'
    testString: assert($('h3').css('font-size') == '40px');
  - text: '你应该设置 <code>h4</code> 标签的 <code>font-size</code> 为 <code>32px</code>。'
    testString: assert($('h4').css('font-size') == '32px');
  - text: '你应该设置 <code>h5</code> 标签的 <code>font-size</code> 为 <code>21px</code>。'
    testString: assert($('h5').css('font-size') == '21px');
  - text: '你应该设置 <code>h6</code> 标签的 <code>font-size</code> 为 <code>14px</code>。'
    testString: assert($('h6').css('font-size') == '14px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  
  
  
  
  
  
</style>
<h1>我是 h1 文字</h1>
<h2>我是 h2 文字</h2>
<h3>我是 h3 文字</h3>
<h4>我是 h4 文字</h4>
<h5>我是 h5 文字</h5>
<h6>我是 h6 文字</h6>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              