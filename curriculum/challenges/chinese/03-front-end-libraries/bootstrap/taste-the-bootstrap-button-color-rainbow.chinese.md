---
id: bad87fee1348cd8acef08811
title: Taste the Bootstrap Button Color Rainbow
challengeType: 0
videoUrl: ''
localeTitle: 品尝Bootstrap按钮彩虹
---

## Description
<section id="description"> <code>btn-primary</code>类是您将在应用中使用的主要颜色。它可用于突出显示您希望用户执行的操作。在按钮中用<code>btn-primary</code>替换Bootstrap的<code>btn-default</code>类。请注意，此按钮仍需要<code>btn</code>和<code>btn-block</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的按钮应该有<code>btn-primary</code>类。
    testString: assert($("button").hasClass("btn-primary"));
  - text: 你的按钮应该仍然有<code>btn</code>和<code>btn-block</code>类。
    testString: assert($("button").hasClass("btn-block") && $("button").hasClass("btn"));
  - text: 确保所有<code>button</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

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
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
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
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-default btn-block">Like</button>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
