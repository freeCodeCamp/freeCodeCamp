---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0

videoUrl: ''
localeTitle: Create a Custom Heading
---

## Description
<section id='description'>
之前，在 freeCodeCamp 的 HTML5 和 CSS 章节中我们构建了一个 Cat Photo App。这次我们将会使用最受欢迎的响应式 CSS 框架 Bootstrap 来美化它。
Bootstrap 会根据你的屏幕大小来调节 HTML 元素的大小————因此称为 <code>响应式设计( Responsive Design )</code>。
通过响应式设计，我们将无需额外设计一个手机版的网页，因为它在任何尺寸的屏幕上看起来都还不错。
无论开发什么应用，你都可以通过将以下代码添加到你的 HTML 顶部来引入 Bootstrap 。
<code>&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/&#62;</code>
在该案例中，我们已经帮你把相应代码添加到页面中。记住使用 <code>></code> 和 <code>/></code> 闭合 <code>link</code> 标签来保证引入成功。
首先，我们应该把所有 HTML 标签放在 class 为 <code>container-fluid</code> 的 <code>div</code> 元素下（除了 <code>link</code> 标签和 <code>style</code> 标签）。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 元素和最上方的 <code>img</code> 元素应该一起内嵌于具有 <code>row</code> class 的 <code>div</code> 元素内。
    testString: 'assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0, "<code>h2</code> 元素和第一张 <code>img</code> 元素应该一起内嵌于具有 <code>row</code> class 的 <code>div</code> 元素内。");'
  - text: 最上方的 <code>img</code> 元素应该内嵌于含有 <code>col-xs-4</code> class 的 <code>div</code> 元素中。
    testString: 'assert($("div.col-xs-4:has(img)").length > 0 && $("div.col-xs-4:has(div)").length === 0, "最上方的 <code>img</code> 元素应该内嵌于含有 <code>col-xs-4</code> class 的 <code>div</code> 元素中。");'
  - text: <code>h2</code> 元素应该内嵌于含有 <code>col-xs-8</code> class的 <code>div</code> 元素中。
    testString: 'assert($("div.col-xs-8:has(h2)").length > 0 && $("div.col-xs-8:has(div)").length === 0, "<code>h2</code> 元素应该内嵌于含有 <code>col-xs-8</code> class的 <code>div</code> 元素中。");'
  - text: 确保每一个 <code>div</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, '确保每一个 <code>div</code> 元素都有一个闭合标签。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">,,<style>,  h2 {,    font-family: Lobster, Monospace;,  },,  .thick-green-border {,    border-color: green;,    border-width: 10px;,    border-style: solid;,    border-radius: 50%;,  },</style>,,<div class="container-fluid">,  <h2 class="text-primary text-center">CatPhotoApp</h2>,,  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>,,  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">,  <div class="row">,    <div class="col-xs-4">,      <button class="btn btn-block btn-primary">Like</button>,    </div>,    <div class="col-xs-4">,      <button class="btn btn-block btn-info">Info</button>,    </div>,    <div class="col-xs-4">,      <button class="btn btn-block btn-danger">Delete</button>,    </div>,  </div>,  <p>Things cats <span class="text-danger">love:</span></p>,  <ul>,    <li>cat nip</li>,    <li>laser pointers</li>,    <li>lasagna</li>,  </ul>,  <p>Top 3 things cats hate:</p>,  <ol>,    <li>flea treatment</li>,    <li>thunder</li>,    <li>other cats</li>,  </ol>,  <form action="/submit-cat-photo">,    <label><input type="radio" name="indoor-outdoor"> Indoor</label>,    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>,    <label><input type="checkbox" name="personality"> Loving</label>,    <label><input type="checkbox" name="personality"> Lazy</label>,    <label><input type="checkbox" name="personality"> Crazy</label>,    <input type="text" placeholder="cat photo URL" required>,    <button type="submit">Submit</button>,  </form>,</div>
```





</div>





</section>

              