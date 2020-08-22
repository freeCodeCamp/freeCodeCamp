---
id: bad87fee1348cd8acef08813
title: Call out Optional Actions with btn-info
challengeType: 0
videoUrl: ''
localeTitle: 使用btn-info调出可选操作
---

## Description
<section id="description"> Bootstrap带有几种预定义的按钮颜色。 <code>btn-info</code>类用于引起对用户可以采取的可选操作的注意。使用文本“Info”在“Like”按钮下创建一个新的块级Bootstrap按钮，并向其添加Bootstrap的<code>btn-info</code>和<code>btn-block</code>类。请注意，这些按钮仍然需要<code>btn</code>和<code>btn-block</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用文本“Info”创建一个新的<code>button</code>元素。
    testString: assert(new RegExp("info","gi").test($("button").text()));
  - text: 两个Bootstrap按钮都应该有<code>btn</code>和<code>btn-block</code>类。
    testString: assert($("button.btn-block.btn").length > 1);
  - text: 你的新按钮应该有类<code>btn-info</code> 。
    testString: assert($("button").hasClass("btn-info"));
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
  <button class="btn btn-block btn-primary">Like</button>
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
