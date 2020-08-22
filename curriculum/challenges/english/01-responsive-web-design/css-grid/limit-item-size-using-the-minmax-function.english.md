---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
---

## Description
<section id='description'>
There's another built-in function to use with <code>grid-template-columns</code> and <code>grid-template-rows</code> called <code>minmax</code>. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

In the code above, <code>grid-template-columns</code> is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.
</section>

## Instructions
<section id='instructions'>
Using the <code>minmax</code> function, replace the <code>1fr</code> in the <code>repeat</code> function with a column size that has the minimum width of <code>90px</code> and the maximum width of <code>1fr</code>, and resize the preview panel to see the effect.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
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
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = ".container {grid-template-columns: repeat(3, minmax(90px, 1fr));}"
```

</section>
