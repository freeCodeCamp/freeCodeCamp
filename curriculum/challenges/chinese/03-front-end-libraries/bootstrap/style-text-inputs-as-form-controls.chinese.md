---
id: bad87fee1348bd9aed908845
title: Style Text Inputs as Form Controls
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 样式文本输入作为表单控件
---

## Description
<section id="description">您可以通过在提交<code>button</code>元素中添加<code>&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;</code>来添加<code>fa-paper-plane</code> Font Awesome图标。为表单的文本输入字段提供一组<code>form-control</code> 。给你的表单提交按钮<code>btn btn-primary</code> 。同时为此按钮提供<code>fa-paper-plane</code>的Font Awesome图标。具有类<code>.form-control</code>所有文本<code>&lt;input&gt;</code> ， <code>&lt;textarea&gt;</code>和<code>&lt;select&gt;</code>元素的宽度均为100％。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在表单中提交<code>btn btn-primary</code>类的提交按钮。
    testString: assert($("button[type=\"submit\"]").hasClass("btn btn-primary"));
  - text: 在提交<code>button</code>元素中添加<code>&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;</code> 。
    testString: assert($("button[type=\"submit\"]:has(i.fa.fa-paper-plane)").length > 0);
  - text: 在表单中<code>input</code>文本<code>input</code>类<code>form-control</code> 。
    testString: assert($("input[type=\"text\"]").hasClass("form-control"));
  - text: 确保每个<code>i</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/i>/g) && code.match(/<\/i/g).length > 3);

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
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Crazy</label>
      </div>
    </div>
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
