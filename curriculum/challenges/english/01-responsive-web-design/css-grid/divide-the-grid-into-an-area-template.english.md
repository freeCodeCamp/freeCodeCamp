---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
---

## Description
<section id='description'>
You can group cells of your grid together into an <dfn>area</dfn> and give the area a custom name. Do this by using <code>grid-template-areas</code> on the container like this:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named <code>header</code>, the bottom three cells into a <code>footer</code> area, and it makes two areas in the middle row; <code>advert</code> and <code>content</code>.
<strong>Note:</strong> Every word in the code represents a cell and every pair of quotation marks represent a row.
In addition to custom labels, you can use a period (<code>.</code>) to designate an empty cell in the grid.
</section>

## Instructions
<section id='instructions'>
Place the area template so that the cell labeled <code>advert</code> becomes an empty cell.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-areas</code> property similar to the preview but has <code>.</code> instead of the <code>advert</code> area.
    testString: const removeCssComments = str => str.replace(/\/\*[\s\S]+?\*\//g, ''); assert(removeCssComments(code).match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "footer footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</section>
