---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0
videoUrl: ''
localeTitle: 创建自定义标题
---

## Description
<section id="description">我们将通过将标题和放松的猫图像放在同一行中，为我们的Cat Photo App制作一个简单的标题。请记住，Bootstrap使用响应式网格系统，可以轻松地将元素放入行中并指定每个元素的相对宽度。 Bootstrap的大多数类都可以应用于<code>div</code>元素。将第一个图像和<code>h2</code>元素嵌套在一个<code>&lt;div class=&quot;row&quot;&gt;</code>元素中。将您的<code>h2</code>元素嵌套在<code>&lt;div class=&quot;col-xs-8&quot;&gt;</code>并将您的图像<code>&lt;div class=&quot;col-xs-4&quot;&gt;</code>以便它们位于同一行。请注意图像现在的大小是否适合文本？ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>h2</code>元素和最顶层的<code>img</code>元素都应该在带有类<code>row</code>的<code>div</code>元素中嵌套在一起。
    testString: assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0);
  - text: 使用类<code>col-xs-4</code>将最顶层的<code>img</code>元素嵌套在<code>div</code> 。
    testString: assert($("div.col-xs-4:has(img)").length > 0 && $("div.col-xs-4:has(div)").length === 0);
  - text: 使用类<code>col-xs-8</code>将<code>h2</code>元素嵌套在<code>div</code> 。
    testString: assert($("div.col-xs-8:has(h2)").length > 0 && $("div.col-xs-8:has(div)").length === 0);
  - text: 确保每个<code>div</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

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
  <p>Things cats <span class="text-danger">love:</span></p>
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
