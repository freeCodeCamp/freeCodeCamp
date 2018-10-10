---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: ''
localeTitle: 创建您的第一个CSS网格
---

## Description
<section id="description">通过它的设置可以将任何HTML元素成格子容器<code>display</code>属性设置为<code>grid</code> 。这使您能够使用与CSS Grid关联的所有其他属性。 <strong>注意</strong> <br>在CSS Grid中，父元素称为<dfn>容器</dfn> ，其子元素称为<dfn>item</dfn> 。 </section>

## Instructions
<section id="instructions">将<code>container</code>类的div显示更改为<code>grid</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该具有值为<code>grid</code>的<code>display</code>属性。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
