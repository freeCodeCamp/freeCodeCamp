---
id: bad87fee1347bd9aedf08845
title: Ditch Custom CSS for Bootstrap
challengeType: 0
videoUrl: ''
localeTitle: Ditch Custom CSS for Bootstrap
---

## Description
<section id="description">我们可以使用Bootstrap的内置样式代替我们之前创建的自定义样式来清理代码并使我们的Cat Photo App看起来更加传统。别担心 - 以后会有足够的时间来定制CSS。从<code>style</code>元素中删除<code>.smaller-image</code> <code>.red-text</code> ， <code>p</code>和<code>.smaller-image</code> CSS声明，以便<code>style</code>元素中剩下的唯一声明是<code>h2</code>和<code>thick-green-border</code> 。然后删除包含死链接的<code>p</code>元素。然后从<code>h2</code>元素中删除<code>red-text</code>类，并将其替换为<code>text-primary</code> Bootstrap类。最后，从第一个<code>img</code>元素中删除“small-image”类，并将其替换为<code>img-responsive</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的h2元素不应该有<code>red-text</code>类。
    testString: assert(!$("h2").hasClass("red-text"));
  - text: 您的h2元素现在应该具有<code>text-primary</code>类。
    testString: assert($("h2").hasClass("text-primary"));
  - text: 您的段落元素不应再使用<code>Monospace</code> 。
    testString: assert(!$("p").css("font-family").match(/monospace/i));
  - text: 从顶部图像中删除<code>smaller-image</code>类。
    testString: assert(!$("img").hasClass("smaller-image"));
  - text: 将<code>img-responsive</code>类添加到您的顶部图像。
    testString: assert($(".img-responsive").length > 1);

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
