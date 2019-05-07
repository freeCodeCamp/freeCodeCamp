---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: ''
localeTitle: 使用media queries创建响应式布局
---

## Description
<section id="description">您可以使用CSS Grid的media queries来使您的网站布局具有响应式的特征。media queries可以用于重新排列网格区域，更改网格尺寸的大小以及重新排列项目。在预览中，当视口宽度为300px或更大时，网格列数将会从1变为2.然后广告区域会完全占据左列。 </section>

## Instructions
<section id="instructions">当视口宽度为<code>400px</code>或更大时，使标题区域完全占据顶行，页脚区域完全占据底行。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 当视口为<code>400px</code>或更多时， <code>container</code>类应具有<code>grid-template-areas</code>属性，其中页脚和标题区域分别占据顶行和底行，而advert和content占据中间行的左右列。
    testString: 'assert(code.match(/@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "When the viewport is <code>400px</code> or more, <code>container</code> class should have a <code>grid-template-areas</code> property in which the footer and header areas occupy the top and bottom rows respectively and advert and content occupy the left and right columns of the middle row.");'

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
      /* change the code below this line */

      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";

    /* change the code above this line */
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

```js
// solution required
```
</section>
