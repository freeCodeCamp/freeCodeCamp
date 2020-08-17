---
id: bad87fee1348ce8acef08814
title: Warn Your Users of a Dangerous Action with btn-danger
challengeType: 0
videoUrl: ''
localeTitle: 用btn-danger警告你的危险行为用户
---

## Description
<section id="description"> Bootstrap带有几种预定义的按钮颜色。 <code>btn-danger</code>类是用于通知用户按钮执行破坏性操作的按钮颜色，例如删除猫照片。创建一个带有“删除”文本的按钮，并为其提供类<code>btn-danger</code> 。请注意，这些按钮仍然需要<code>btn</code>和<code>btn-block</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个带有“删除”文本的新<code>button</code>元素。
    testString: assert(new RegExp("Delete","gi").test($("button").text()));
  - text: 你的所有Bootstrap按钮都应该有<code>btn</code>和<code>btn-block</code>类。
    testString: assert($("button.btn-block.btn").length > 2);
  - text: 你的新按钮应该有类<code>btn-danger</code> 。
    testString: assert($("button").hasClass("btn-danger"));
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
  <button class="btn btn-block btn-info">Info</button>
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
