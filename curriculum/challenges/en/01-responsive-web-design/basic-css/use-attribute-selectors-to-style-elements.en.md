---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
---

## Description
<section id='description'>
You have been giving <code>id</code> or <code>class</code> attributes to elements that you wish to specifically style. These are known as ID and class selectors. There are other CSS Selectors you can use to select custom groups of elements to style.
Let's bring out CatPhotoApp again to practice using CSS Selectors.
For this challenge, you will use the <code>[attr=value]</code> attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute <code>type</code> and a corresponding value of <code>radio</code>:
<blockquote>[type='radio'] {<br>&nbsp;&nbsp;margin: 20px 0px 20px 0px;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Using the <code>type</code> attribute selector, try to give the checkboxes in CatPhotoApp a top margin of 10px and a bottom margin of 15px.
</section>

## Tests
<section id='tests'>

```yml
- text: The <code>type</code> attribute selector should be used to select the checkboxes.
  testString: 'assert(code.match(/<style>[\s\S]*?\[type=("|'')checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi),''The <code>type</code> attribute selector should be used to select the checkboxes.'');'
- text: The top margins of the checkboxes should be 10px.
  testString: 'assert((function() {var count=0; $("[type=''checkbox'']").each(function() { if($(this).css(''marginTop'') === ''10px'') {count++;}});return (count===3)}()),''The top margins of the checkboxes should be 10px.'');'
- text: The bottom margins of the checkboxes should be 15px.
  testString: 'assert((function() {var count=0; $("[type=''checkbox'']").each(function() { if($(this).css(''marginBottom'') === ''15px'') {count++;}});return (count===3)}()),''The bottom margins of the checkboxes should be 15px.'');'

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
