---
id: bad87fee1348bd9aedd08845
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
challengeType: 0
forumTopicId: 16638
title: 将字体图标添加到我们的按钮中
---

## Description
<section id='description'>
Font Awesome 是一个非常便利的图标库。这些图标都是被保存在 <code>.svg</code> 的文件格式中的矢量图。这些图标就和字体一样，不仅能通过像素单位指定他们的大小，它们也同样会继承父级 HTML 元素的字体大小。
你可以将 Font Awesome 图标库添加至任何一个 app 中，方法很简单，只需要在你的 HTML 头部增加下列代码即可：
<code>&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous"&#62;</code>
不过在这里，我们已经预先为此页面添加了上述代码。
<code>i</code> 元素起初用于让其它元素具有斜体（italic）的效果，不过现在一般用于指代图标。你可以把 Font Awesome 中的 class 属性添加到 i 元素中，让它变成一个图标，比如：
<code>&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;</code>
记住 <code>span</code> 元素也一样可以用于指代图标。
</section>

## Instructions
<section id='instructions'>
通过 Font Awesome 库增加一个 <code>thumbs-up</code> 图标到你的 like 按钮上，具体方法是给 i 元素添加 class 属性 <code>fas</code> 和 <code>fa-thumbs-up</code>；确保你的 "Like" 文本在图标旁边。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 增加一个 class 为 <code>fas</code> 和 <code>fa-thumbs-up</code> 的 <code>i</code> 元素。
    testString: assert($("i").is(".fas.fa-thumbs-up") || $("span").is(".fas.fa-thumbs-up"));
  - text: <code>fa-thumbs-up</code> 图标应该放在 Like 按钮中。
    testString: assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fas.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fas.fa-thumbs-up")));
  - text: 将 <code>i</code> 元素放置在你的 <code>button</code> 元素中。
    testString: assert($("button").children("i").length > 0 || $("button").children("span").length > 0);
  - text: 确保你的图标元素有一个闭合标签。
    testString: assert(code.match(/<\/i>|<\/span>/g));

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
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
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
  <form action="/submit-cat-photo">
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

</section>
