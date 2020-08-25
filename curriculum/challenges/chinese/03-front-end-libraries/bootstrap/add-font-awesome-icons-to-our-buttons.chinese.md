---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 添加字体真棒图标到我们的按钮
---

## Description
<section id="description"> Font Awesome是一个方便的图标库。这些图标是矢量图形，以<code>.svg</code>文件格式存储。这些图标就像字体一样对待。您可以使用像素指定其大小，并且它们将采用其父HTML元素的字体大小。您可以在任何应用程序中包含Font Awesome，方法是在HTML的顶部添加以下代码： <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot; integrity=&quot;sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+&quot; crossorigin=&quot;anonymous&quot;&gt;</code>在这种情况下，我们已经在幕后为您添加了这个页面。 <code>i</code>元素最初用于使其他元素斜体，但现在通常用于图标。您可以将Font Awesome类添加到<code>i</code>元素以将其转换为图标，例如： <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code>请注意， <code>span</code>元素也可用于图标。使用Font Awesome将一个<code>thumbs-up</code>图标添加到你喜欢的按钮，给它一个带有<code>fa</code>和<code>fa-thumbs-up</code>类的<code>i</code>元素;确保在图标旁边保留“赞”字样。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用<code>fa</code>和<code>fa-thumbs-up</code>类添加<code>i</code>元素。
    testString: assert($("i").is(".fas.fa-thumbs-up") || $("span").is(".fas.fa-thumbs-up"));
  - text: 您的<code>fa-thumbs-up</code>图标应位于Like按钮内。
    testString: assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fas.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fas.fa-thumbs-up")));
  - text: 将您的<code>i</code>元素嵌套在<code>button</code>元素中。
    testString: assert($("button").children("i").length > 0 || $("button").children("span").length > 0);
  - text: 确保您的图标元素具有结束标记。
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

```js
// solution required
```

/section>
