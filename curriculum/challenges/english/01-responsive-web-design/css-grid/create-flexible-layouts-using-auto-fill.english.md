---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
---

## Description
<section id='description'>
The repeat function comes with an option called <dfn>auto-fill</dfn>. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining <code>auto-fill</code> with <code>minmax</code>, like this:

```css
repeat(auto-fill, minmax(60px, 1fr));
```

When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one.
<strong>Note:</strong> If your container can't fit all your items on one row, it will move them down to a new one.
</section>

## Instructions
<section id='instructions'>
In the first grid, use <code>auto-fill</code> with <code>repeat</code> to fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>. Then resize the preview to see auto-fill in action.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */
    
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    
    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</section>
