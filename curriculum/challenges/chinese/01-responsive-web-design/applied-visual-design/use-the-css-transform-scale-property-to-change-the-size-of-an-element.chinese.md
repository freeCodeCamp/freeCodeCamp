---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS Transform scale属性更改元素的大小
---

## Description
<section id="description">要更改元素的比例，CSS具有<code>transform</code>属性及其<code>scale()</code>函数。以下代码示例将页面上所有段落元素的大小加倍： <blockquote> p { <br>变换：比例（2）; <br> } </blockquote></section>

## Instructions
<section id="instructions">使用<code>ball2</code>的id将元素的大小<code>ball2</code>原始大小的1.5倍。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '设置<code>#ball2</code>的<code>transform</code>属性，将其缩放为其大小的1.5倍。'
    testString: 'assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi), "Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
