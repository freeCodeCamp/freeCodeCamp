---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: 使用属性选择器来设置样式元素
---

## Description
<section id="description">您已经为要特定样式的元素提供了<code>id</code>或<code>class</code>属性。这些被称为ID和类选择器。您可以使用其他CSS选择器来选择要设置样式的自定义元素组。让我们再次带出CatPhotoApp来练习使用CSS选择器。对于此挑战，您将使用<code>[attr=value]</code>属性选择器设置CatPhotoApp中复选框的样式。此选择器使用特定属性值匹配和设置元素样式。例如，下面的代码使用属性<code>type</code>和相应的<code>radio</code>值更改所有元素的边距： <blockquote> [type =&#39;radio&#39;] { <br>保证金：20px 0px 20px 0px; <br> } </blockquote></section>

## Instructions
<section id="instructions">使用<code>type</code>属性选择器，尝试在CatPhotoApp中为复选框提供10px的上边距和15px的下边距。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应使用<code>type</code>属性选择器来选中复选框。
    testString: 'assert(code.match(/<style>[\s\S]*?\[type=("|")checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi),"The <code>type</code> attribute selector should be used to select the checkboxes.");'
  - text: 复选框的顶部边距应为10px。
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginTop") === "10px") {count++;}});return (count===3)}()),"The top margins of the checkboxes should be 10px.");'
  - text: 复选框的下边距应为15px。
    testString: 'assert((function() {var count=0; $("[type="checkbox"]").each(function() { if($(this).css("marginBottom") === "15px") {count++;}});return (count===3)}()),"The bottom margins of the checkboxes should be 15px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
