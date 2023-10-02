---
id: bad87fee1348bd9aedf08807
title: 引入谷歌字體
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

在我們的網站上，除了使用系統提供的默認字體以外，我們也可以使用自定義字體。 網絡上有很多字體庫。 在這個例子中，我們將使用 Google 字體庫。

Google 字體庫是一個免費的 Web 字體庫，我們只需要在 CSS 裏引用字體的 URL 即可使用。

接下來，我們就要引入和使用 Google Fonts（注意：如果 Google 在你的地區被限制訪問，你可以選擇跳過這個挑戰）。

要引入 Google Font，你需要從 Google Fonts 上覆制字體的 URL，並粘貼到你的 HTML 裏面。 在這個挑戰中，我們需要引入 `Lobster` 字體。 因此，請複製以下代碼段，並粘貼到代碼編輯器頂部，即放到 `style` 標籤之前。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

現在可以在 CSS 中使用 `Lobster` 字體，並像下面一樣使用 `Lobster` 作爲 FAMILY_NAME：

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

GENERIC_NAME 是可選的，它用來指明在其他字體不可用時的後備字體。 我們會在下一個挑戰中詳細說明。

字體名區分大小寫，並且如果字體名含有空格，則在聲明時需要用引號包起來。 例如，使用 `"Open Sans"` 字體需要添加引號，而 `Lobster` 則不需要。

# --instructions--

給你的網頁導入 `Lobster` 字體。 然後使用元素選擇器將 `h2` 元素的 `font-family` 設置爲 `Lobster`。

# --hints--

應引入 `Lobster` 字體。

```js
assert($('link[href*="googleapis" i]').length);
```

`h2` 元素應使用 `Lobster` 字體。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

應使用元素選擇器（`h2`）來改變字體樣式。

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

`p` 元素應保持使用 `monospace` 字體。

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
