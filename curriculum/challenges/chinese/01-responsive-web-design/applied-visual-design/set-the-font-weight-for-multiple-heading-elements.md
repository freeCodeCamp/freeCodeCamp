---
id: 587d781c367417b2b2512ac3
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
title: 设置多个标题元素的 font-weight
---

## Description
<section id='description'>
在上一个挑战里你已经设置了每个标题的 <code>font-size</code>，接下来你将设置 <code>font-weight</code>。
<code>font-weight</code> 属性用于设置文本中所用的字体的粗细。
</section>

## Instructions
<section id='instructions'>
<ul><li>设置 <code>h1</code> 标签的 <code>font-weight</code> 为 800。</li><li>设置 <code>h2</code> 标签的 <code>font-weight</code> 为 600。</li><li>设置 <code>h3</code> 标签的 <code>font-weight</code> 为 500。</li><li>设置 <code>h4</code> 标签的 <code>font-weight</code> 为 400。</li><li>设置 <code>h5</code> 标签的 <code>font-weight</code> 为 300。</li><li>设置 <code>h6</code> 标签的 <code>font-weight</code> 为 200。</li></ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该设置 <code>h1</code> 标签的 <code>font-weight</code> 为 800。'
    testString: assert($('h1').css('font-weight') == '800');
  - text: '你应该设置 <code>h2</code> 标签的 <code>font-weight</code> 为 600。'
    testString: assert($('h2').css('font-weight') == '600');
  - text: '你应该设置 <code>h3</code> 标签的 <code>font-weight</code> 为 500。'
    testString: assert($('h3').css('font-weight') == '500');
  - text: '你应该设置 <code>h4</code> 标签的 <code>font-weight</code> 为 400。'
    testString: assert($('h4').css('font-weight') == '400');
  - text: '你应该设置 <code>h5</code> 标签的 <code>font-weight</code> 为 300。'
    testString: assert($('h5').css('font-weight') == '300');
  - text: '你应该设置 <code>h6</code> 标签的 <code>font-weight</code> 为 200。'
    testString: assert($('h6').css('font-weight') == '200');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h1 {
    font-size: 68px;
    
  }
  h2 {
    font-size: 52px;
    
  }
  h3 {
    font-size: 40px;
    
  }
  h4 {
    font-size: 32px;
    
  }
  h5 {
    font-size: 21px;
    
  }
  h6 {
    font-size: 14px;
    
  }
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
              