---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
---

## Description
<section id='description'>
You can use absolute and relative units like <code>px</code> and <code>em</code> in CSS Grid to define the size of rows and columns. You can use these as well:
<code>fr</code>: sets the column or row to a fraction of the available space,
<code>auto</code>: sets the column or row to the width or height of its content automatically,
<code>%</code>: adjusts the column or row to the percent width of its container.
Here's the code that generates the output in the preview:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.
</section>

## Instructions
<section id='instructions'>
Make a grid with three columns whose widths are as follows: 1fr, 100px, and 2fr.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.'
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi));'

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
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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


```html
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```

</section>
