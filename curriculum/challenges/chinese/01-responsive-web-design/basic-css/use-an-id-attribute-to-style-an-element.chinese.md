---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用id属性为元素设置样式
---

## Description
<section id="description">关于<code>id</code>属性的一个很酷的事情是，像类一样，你可以使用CSS来设置它们的样式。但是， <code>id</code>不可重用，只应应用于一个元素。 <code>id</code>也具有比类更高的特异性（重要性），因此如果两者都应用于同一元素并且具有冲突的样式，则将应用<code>id</code>的样式。下面是一个示例，说明如何使用<code>cat-photo-element</code>的<code>id</code>属性获取<code>cat-photo-element</code>并为其指定绿色的背景颜色。在你的<code>style</code>元素中： <blockquote> #cat-photo-element { <br>背景颜色：绿色; <br> } </blockquote>请注意，在<code>style</code>元素中，您始终通过放置a来引用类<code>.</code>在他们的名字前面。你总是通过在他们的名字前放一个<code>#</code>来引用id。 </section>

## Instructions
<section id="instructions">尝试提供您的表单，该表单现在具有<code>cat-photo-form</code>的<code>id</code>属性，绿色背景。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 为<code>form</code>元素添加<code>cat-photo-form</code>的id。
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'
  - text: 您的<code>form</code>元素应具有绿色的<code>background-color</code> 。
    testString: 'assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)", "Your <code>form</code> element should have the <code>background-color</code> of green.");'
  - text: 确保您的<code>form</code>元素具有<code>id</code>属性。
    testString: 'assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0, "Make sure your <code>form</code> element has an <code>id</code> attribute.");'
  - text: 不要为<code>form</code>任何<code>class</code>或<code>style</code>属性。
    testString: 'assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi), "Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.");'

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
