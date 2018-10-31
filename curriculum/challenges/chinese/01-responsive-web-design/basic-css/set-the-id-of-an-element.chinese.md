---
id: bad87eee1348bd9aede07836
title: Set the id of an Element
challengeType: 0
videoUrl: ''
localeTitle: 设置元素的id
---

## Description
<section id="description">除了类之外，每个HTML元素还可以具有<code>id</code>属性。使用<code>id</code>属性有几个好处：您可以使用<code>id</code>来设置单个元素的样式，稍后您将学习如何使用它来使用JavaScript选择和修改特定元素。 <code>id</code>属性应该是唯一的。浏览器不会强制执行此操作，但这是广泛认可的最佳实践。所以请不要给多个元素赋予相同的<code>id</code>属性。这里有一个例子，说明如何为你的<code>h2</code>元素提供<code>cat-photo-app</code> <code>&lt;h2 id=&quot;cat-photo-app&quot;&gt;</code> ： <code>&lt;h2 id=&quot;cat-photo-app&quot;&gt;</code> </section>

## Instructions
<section id="instructions">为<code>form</code>元素添加id <code>cat-photo-form</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 为<code>form</code>元素添加<code>cat-photo-form</code>的id。
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'

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

  <form action="/submit-cat-photo">
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
