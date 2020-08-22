---
id: bad87fee1348bd9aedc08845
title: Add Font Awesome Icons to all of our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 将Font Awesome Icons添加到我们所有的按钮中
---

## Description
<section id="description"> Font Awesome是一个方便的图标库。这些图标是矢量图形，以<code>.svg</code>文件格式存储。这些图标就像字体一样对待。您可以使用像素指定其大小，并且它们将采用其父HTML元素的字体大小。使用Font Awesome将<code>info-circle</code>图标添加到信息按钮，将<code>trash</code>图标添加到删除按钮。注意： <code>span</code>元素是下面方向的<code>i</code>元素的可接受替代方法。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该在info按钮元素中添加<code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> 。
    testString: assert($(".btn-info > i").is(".fas.fa-info-circle") || $(".btn-info > span").is(".fas.fa-info-circle"));
  - text: 您应该在删除按钮元素中添加<code>&lt;i class=&quot;fa fa-trash&quot;&gt;&lt;/i&gt;</code> 。
    testString: assert($(".btn-danger > i").is(".fas.fa-trash") || $(".btn-danger > span").is(".fas.fa-trash"));
  - text: 确保每个<code>i</code>元素都有一个结束标记， <code>&lt;i class=&quot;fa fa-thumbs-up&quot;&gt;&lt;/i&gt;</code>就在你的按钮元素中。
    testString: assert(code.match(/<\/i>|<\/span/g) && code.match(/<\/i|<\/span>/g).length > 2 && ($(".btn-primary > i").is(".fas.fa-thumbs-up") || $(".btn-primary > span").is(".fas.fa-thumbs-up")));

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
