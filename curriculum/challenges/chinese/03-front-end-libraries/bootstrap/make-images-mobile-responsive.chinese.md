---
id: bad87fee1348bd9acde08812
title: Make Images Mobile Responsive
challengeType: 0
videoUrl: ''
localeTitle: 使图像移动响应
---

## Description
<section id="description">首先，在现有图像下方添加新图像。将其<code>src</code>属性设置为<code>https://bit.ly/fcc-running-cats</code> 。如果这个图像可以正好是我们手机屏幕的宽度，那就太好了。幸运的是，使用Bootstrap，我们需要做的就是将<code>img-responsive</code>类添加到您的图像中。这样做，图像应完全适合您的页面宽度。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该总共有两个图像。
    testString: assert($("img").length === 2);
  - text: 您的新图像应该低于旧图像并且具有<code>img-responsive</code>类。
    testString: assert($("img:eq(1)").hasClass("img-responsive"));
  - text: 您的新图片不应该具有<code>smaller-image</code>类。
    testString: assert(!$("img:eq(1)").hasClass("smaller-image"));
  - text: '您的新图片应该具有<code>https://bit.ly/fcc-running-cats</code>的<code>src</code> 。'
    testString: assert($("img:eq(1)").attr("src") === "https://bit.ly/fcc-running-cats");
  - text: 确保新的<code>img</code>元素具有关闭角括号。
    testString: assert(code.match(/<img/g) && code.match(/<img[^<]*>/g).length === 2 && code.match(/<img/g).length === 2);

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
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
