---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
videoUrl: ''
localeTitle: 使用Bootstrap网格并排放置元素
---

## Description
<section id="description"> Bootstrap使用响应式12列网格系统，可以轻松地将元素放入行中并指定每个元素的相对宽度。 Bootstrap的大多数类都可以应用于<code>div</code>元素。 Bootstrap具有不同的列宽属性，具体取决于用户屏幕的宽度。例如，手机屏幕较窄，笔记本电脑屏幕较宽。以Bootstrap的<code>col-md-*</code>类为例。这里， <code>md</code>表示中等， <code>*</code>是指定元素应该有多少列的数字。在这种情况下，正在指定中型屏幕（例如笔记本电脑）上的元素的列宽。在我们正在构建的Cat照片应用程序中，我们将使用<code>col-xs-*</code> ，其中<code>xs</code>表示超小（如超小型手机屏幕）， <code>*</code>是指示列宽多少列的列数元素应该是。通过将所有三个嵌套在一个<code>&lt;div class=&quot;row&quot;&gt;</code>元素中，然后将它们中的每一个<code>&lt;div class=&quot;col-xs-4&quot;&gt;</code>元素中，将<code>Like</code> ， <code>Info</code>和<code>Delete</code>按钮并排放置。 <code>row</code>类应用于<code>div</code> ，按钮本身可以嵌套在其中。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的按钮应全部嵌套在具有类<code>row</code>的同一<code>div</code>元素中。
    testString: assert($("div.row:has(button)").length > 0);
  - text: 每个Bootstrap按钮都应嵌套在自己的<code>div</code>元素中，类别为<code>col-xs-4</code> 。
    testString: assert($("div.col-xs-4:has(button)").length > 2);
  - text: 确保每个<code>button</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);
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
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
