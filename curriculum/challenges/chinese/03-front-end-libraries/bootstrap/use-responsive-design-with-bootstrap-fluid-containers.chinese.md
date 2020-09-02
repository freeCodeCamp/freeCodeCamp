---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
videoUrl: ''
localeTitle: 使用具有Bootstrap Fluid Containers的响应式设计
---

## Description
<section id="description">在freeCodeCamp的HTML5和CSS部分，我们构建了一个Cat Photo App。现在让我们回到它。这一次，我们将使用流行的Bootstrap响应式CSS框架来设计它。 Bootstrap将通过调整HTML元素的大小来确定屏幕的宽度和响应 - 因此称为<code>Responsive Design</code> 。通过响应式设计，您无需设计网站的移动版本。在具有任何宽度的屏幕的设备上看起来都很好。您可以通过将以下代码添加到HTML顶部来将Bootstrap添加到任何应用程序： <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot; integrity=&quot;sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u&quot; crossorigin=&quot;anonymous&quot;/&gt;</code>在这种情况下，我们已经在幕后为您添加了这个页面。请注意，使用<code>&gt;</code>或<code>/&gt;</code>关闭<code>link</code>标记是可以接受的。首先，我们应该将所有HTML（ <code>link</code>标签和<code>style</code>元素除外）嵌套在带有<code>container-fluid</code>类的<code>div</code>元素<code>container-fluid</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>div</code>元素应该有class <code>container-fluid</code> 。
    testString: assert($("div").hasClass("container-fluid"));
  - text: 确保你的<code>div</code>元素有一个结束标记。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);
  - text: 确保在<code>.container-fluid</code>的结束<code>style</code>标记之后嵌套了所有HTML元素。
    testString: assert($(".container-fluid").children().length >= 8);

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
