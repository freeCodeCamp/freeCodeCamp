---
id: bad87fee1348bd9aedf08808
title: 字體如何優雅降級
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

所有瀏覽器都有幾種默認字體， 包括 `monospace`、`serif` 和 `sans-serif`。

在字體不可用的時候，你可以告訴瀏覽器通過“降級”去使用其他字體。

如果你想將一個元素的字體設置成 `Helvetica`，但當 `Helvetica` 不可用時，降級使用 `sans-serif` 字體，那麼可以這樣寫：

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字體名不區分大小寫。 同時，也不需要使用引號，因爲它們是 CSS 中的關鍵字。

# --instructions--

首先，添加 `monospace` 字體到 `h2` 元素裏，它現在擁有 `Lobster` 和 `monospace` 兩種字體。

在上一個挑戰裏，你已經通過 `link` 標籤從谷歌字體庫引入了 `Lobster` 字體。 現在讓我們使用之前學習的 HTML 註釋，將 `Lobster` 字體的引入註釋掉，這樣一來，這個引入的字體就會失效。 此時，你會發現 `h2` 元素降級到了 `monospace` 字體。

**Note:** 如果你的電腦裏已經安裝了 `Lobster` 字體，你就看不到這個降級過程，因爲瀏覽器會在你的電腦中找到該字體。

# --hints--

h2 元素的字體應設置爲 `Lobster`。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

當 `Lobster` 字體失效時，h2 元素應該降級使用 `monospace` 字體。

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

通過添加`<!--`，註釋掉 `Lobster` 字體的引入。

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

確保註釋要以 `-->` 結束。

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
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
