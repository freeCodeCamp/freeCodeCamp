---
id: bad87eee1348bd9aede07836
title: Set the id of an Element
challengeType: 0
videoUrl: ''
localeTitle: عيّن معرف عنصر
---

## Description
<section id="description"> بالإضافة إلى الفصول الدراسية ، يمكن أن يحتوي كل عنصر HTML أيضًا على سمة <code>id</code> . هناك العديد من المزايا لاستخدام سمات <code>id</code> : يمكنك استخدام <code>id</code> لوضع نمط لعنصر واحد ، وبعد ذلك ستعرف أنه يمكنك استخدامها لتحديد عناصر محددة وتعديلها باستخدام جافا سكريبت. يجب أن تكون سمات <code>id</code> فريدة. لن تقوم المتصفحات بفرض هذا ، ولكنها أفضل الممارسات المتفق عليها على نطاق واسع. لذا يرجى عدم إعطاء أكثر من عنصر واحد نفس سمة <code>id</code> . في ما يلي مثال على كيفية إعطاء عنصر <code>h2</code> معرف تطبيق <code>cat-photo-app</code> : <code>&lt;h2 id=&quot;cat-photo-app&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> امنح <code>form</code> الخاص بك <code>form</code>  <code>cat-photo-form</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
