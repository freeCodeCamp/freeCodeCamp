---
id: bad87fee1348cd8acef08812
title: Create a Block Element Bootstrap Button
challengeType: 0
videoUrl: ''
localeTitle: 创建一个块元素引导按钮
---

## Description
<section id="description">通常，具有<code>btn</code>和<code>btn-default</code>类的<code>button</code>元素仅与它们包含的文本一样宽。例如： <code>&lt;button class=&quot;btn btn-default&quot;&gt;Submit&lt;/button&gt;</code>此按钮只能与“提交”一词一样宽。 <button class="btn btn-default">提交</button>通过使用附加的<code>btn-block</code>类来阻止元素，您的按钮将拉伸以填充页面的整个水平空间，其后面的任何元素将流到块下方的“新行”。 <code>&lt;button class=&quot;btn btn-default btn-block&quot;&gt;Submit&lt;/button&gt;</code>此按钮占用可用宽度的100％。 <button class="btn btn-default btn-block">提交</button>请注意，这些按钮仍需要<code>btn</code>类。将Bootstrap的<code>btn-block</code>类添加到Bootstrap按钮。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的按钮应该仍然有<code>btn</code>和<code>btn-default</code>类。
    testString: assert($("button").hasClass("btn") && $("button").hasClass("btn-default"));
  - text: 你的按钮应该有类<code>btn-block</code> 。
    testString: assert($("button").hasClass("btn-block"));
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
  <button class="btn btn-default">Like</button>
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
