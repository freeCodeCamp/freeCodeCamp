---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cMbqeHk'
forumTopicId: 301138
localeTitle: 使用媒体查询创建响应式布局
---

## Description
<section id='description'>
通过使用媒体查询重新排列网格区域，更改网格尺寸以及重新排列网格项位置，CSS 网格能轻松地使网站更具响应性。
在最右侧的预览区中，当网页可视区域的宽不小于 300px 时，列数从 1 变为 2。并且，广告（advertisement）区域完全占据左列。
</section>

## Instructions
<section id='instructions'>
当网页可视区域的宽不小于<code>400px</code>时，使 header 区域完全占据最顶行，footer 区域完全占据最底行。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '当网页可视区域的宽在<code>400px</code>及以上时，<code>container</code>类应该带有<code>grid-template-areas</code>属性且能够使得 footer 和 header 区域分别占据顶行和底行，advert 和 content 区域分别占据中间行的左和右列。'
    testString: assert(code.match(/@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
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
  }
  
  .item4 {
    background: lightpink;
    grid-area: footer;
  }
  
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }
  
  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }
  
  @media (min-width: 400px){
    .container{
      /* 请修改本行以下的代码 */
    
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    
    /* 请修改本行以上的代码*/
    }
  }
</style>
  
<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              