---
id: bad87fee1348bd9aedf08807
title: 引入谷歌字体
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

在我们的网站上，除了使用系统提供的默认字体以外，我们也可以使用自定义字体。 网络上有很多字体库。 在这个例子中，我们将使用 Google 字体库。

Google 字体库是一个免费的 Web 字体库，我们只需要在 CSS 里引用字体的 URL 即可使用。

接下来，我们就要引入和使用 Google Fonts（注意：如果 Google 在你的地区被限制访问，你可以选择跳过这个挑战）。

要引入 Google Font，你需要从 Google Fonts 上复制字体的 URL，并粘贴到你的 HTML 里面。 在这个挑战中，我们需要引入 `Lobster` 字体。 因此，请复制以下代码段，并粘贴到代码编辑器顶部，即放到 `style` 标签之前。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

现在可以在 CSS 中使用 `Lobster` 字体，并像下面一样使用 `Lobster` 作为 FAMILY_NAME：

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

GENERIC_NAME 是可选的，它用来指明在其他字体不可用时的后备字体。 我们会在下一个挑战中详细说明。

字体名区分大小写，并且如果字体名含有空格，则在声明时需要用引号包起来。 例如，使用 `"Open Sans"` 字体需要添加引号，而 `Lobster` 则不需要。

# --instructions--

给你的网页导入 `Lobster` 字体。 然后使用元素选择器将 `h2` 元素的 `font-family` 设置为 `Lobster`。

# --hints--

应引入 `Lobster` 字体。

```js
assert($('link[href*="googleapis" i]').length);
```

`h2` 元素应使用 `Lobster` 字体。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

应使用元素选择器（`h2`）来改变字体样式。

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

`p` 元素应保持使用 `monospace` 字体。

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
