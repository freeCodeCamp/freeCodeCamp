---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0

videoUrl: ''
localeTitle: Use the Bootstrap Grid to Put Elements Side By Side
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
  - text: 所有按钮都需要嵌入到同一个 <code>div</code> 元素中， 并且该元素包含 class 属性 <code>row</code>。
    testString: 'assert($("div.row:has(button)").length > 0, "所有按钮都需要嵌入到同一个 <code>div</code> 元素中， 并且该元素包含 class 属性 <code>row</code>。");'
  - text: 每个 Bootstrap 按钮都需要嵌入各自的 <code>div</code> 元素，并且该元素包含 class 属性 <code>col-xs-4</code>。
    testString: 'assert($("div.col-xs-4:has(button)").length > 2, "每个 Bootstrap 按钮都需要嵌入各自的 <code>div</code> 元素，并且该元素包含 class 属性 <code>col-xs-4</code>。");'
  - text: 确保每一个 <code>button</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, '确保每一个 <code>button</code> 元素都有一个闭合标签。');
  - text: 确保每一个 <code>div</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, '确保每一个 <code>div</code> 元素都有一个闭合标签。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">,<style>,  .red-text {,    color: red;,  },,  h2 {,    font-family: Lobster, Monospace;,  },,  p {,    font-size: 16px;,    font-family: Monospace;,  },,  .thick-green-border {,    border-color: green;,    border-width: 10px;,    border-style: solid;,    border-radius: 50%;,  },,  .smaller-image {,    width: 100px;,  },</style>,,<div class="container-fluid">,  <h2 class="red-text text-center">CatPhotoApp</h2>,,  <p>Click here for <a href="#">cat photos</a>.</p>,,  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>,,  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">,  <button class="btn btn-block btn-primary">Like</button>,  <button class="btn btn-block btn-info">Info</button>,  <button class="btn btn-block btn-danger">Delete</button>,  <p>Things cats love:</p>,  <ul>,    <li>cat nip</li>,    <li>laser pointers</li>,    <li>lasagna</li>,  </ul>,  <p>Top 3 things cats hate:</p>,  <ol>,    <li>flea treatment</li>,    <li>thunder</li>,    <li>other cats</li>,  </ol>,  <form action="/submit-cat-photo">,    <label><input type="radio" name="indoor-outdoor"> Indoor</label>,    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>,    <label><input type="checkbox" name="personality"> Loving</label>,    <label><input type="checkbox" name="personality"> Lazy</label>,    <label><input type="checkbox" name="personality"> Crazy</label>,    <input type="text" placeholder="cat photo URL" required>,    <button type="submit">Submit</button>,  </form>,</div>
```





</div>





</section>

              