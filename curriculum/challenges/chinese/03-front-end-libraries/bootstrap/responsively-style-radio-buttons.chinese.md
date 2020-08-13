---
id: bad87fee1348bd9aedb08845
title: Responsively Style Radio Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 响应样式单选按钮
---

## Description
<section id="description">您也可以在<code>form</code>元素上使用Bootstrap的<code>col-xs-*</code>类！这样，无论屏幕分辨率有多宽，我们的单选按钮都会均匀分布在整个页面上。将您的单选按钮嵌套在<code>&lt;div class=&quot;row&quot;&gt;</code>元素中。然后将它们嵌套在<code>&lt;div class=&quot;col-xs-6&quot;&gt;</code>元素中。 <strong>注意：</strong>作为提醒，单选按钮是<code>radio</code>类型的<code>input</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将所有单选按钮<code>div</code>具有类<code>row</code>一个<code>div</code> 。
    testString: assert($("div.row:has(input[type=\"radio\"])").length > 0);
  - text: 使用类<code>col-xs-6</code>将每个单选按钮嵌套在自己的<code>div</code> 。
    testString: assert($("div.col-xs-6:has(input[type=\"radio\"])").length > 1);
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
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
