---
id: bad87fee1348bd9aedf08845
title: Use a span to Target Inline Elements
challengeType: 0
videoUrl: ''
localeTitle: 使用跨度来定位内联元素
---

## Description
<section id="description">您可以使用跨度来创建内联元素。还记得我们使用<code>btn-block</code>类使按钮填满整行吗？ <button class="btn" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">普通按钮</button> <button class="btn btn-block" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">btn-block按钮</button>说明“内联”元素和“块”元素之间的区别。通过使用内联<code>span</code>元素，您可以将多个元素放在同一行上，甚至可以不同地为同一行的不同部分设置样式。在<code>span</code>元素中的“Things cats love”元素中嵌入“love”这个词。然后给出<code>span</code>类<code>text-danger</code>以使文本变为红色。以下是你如何使用“猫讨厌的三件事”元素： <code>&lt;p&gt;Top 3 things cats &lt;span class=&quot;text-danger&quot;&gt;hate:&lt;/span&gt;&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>span</code>元素应该在你的<code>p</code>元素中。
    testString: assert($("p span") && $("p span").length > 0);
  - text: 你的<code>span</code>元素应该只有文字<code>love</code> 。
    testString: assert($("p span") && $("p span").text().match(/love/i) && !$("p span").text().match(/Things cats/i));
  - text: 你的<code>span</code>元素应该有class <code>text-danger</code> 。
    testString: assert($("span").hasClass("text-danger"));
  - text: 确保您的<code>span</code>元素具有结束标记。
    testString: assert(code.match(/<\/span>/g) && code.match(/<span/g) && code.match(/<\/span>/g).length === code.match(/<span/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
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
