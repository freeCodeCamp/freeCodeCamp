---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N78Ap'
forumTopicId: 301128
localeTitle: 在网格中创建网格
---

## Description
<section id='description'>
将元素转换为网格只会影响其子代元素。因此，在把某个子代元素设置为网格后，就会得到一个嵌套的网格。
例如，设置类为<code>item3</code>的元素的<code>display</code>和<code>grid-template-columns</code>属性，就会得到一个嵌套的网格。
</section>

## Instructions
<section id='instructions'>
用<code>display</code>和<code>grid-template-columns</code>，使类为<code>item3</code>元素转换为有两列且宽度为<code>auto</code>和<code>1fr</code>的网格。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item3</code>类应该有<code>grid-template-columns</code>属性且值为<code>auto</code>和<code>1fr</code>。'
    testString: assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi));
  - text: '<code>item3</code>类有<code>display</code>属性且值为<code>grid</code>。'
    testString: assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }
  
  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }
  
  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
  }
  
  .item4 {
    background: lightpink;
    grid-area: footer;
  }
  
  .itemOne {
    background: PaleGreen;
  }
  
  .itemTwo {
    background: BlanchedAlmond;
  }
  
</style>
  
<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
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
              