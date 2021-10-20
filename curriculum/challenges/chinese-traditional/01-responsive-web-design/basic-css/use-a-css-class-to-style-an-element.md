---
id: bad87fee1348bd9aecf08806
title: 使用 class 選擇器設置單個元素的樣式
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

CSS 的 class 具有可重用性，可應用於各種 HTML 元素。

一個 CSS class 聲明示例如下所示：

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

可以看到，我們在 `<style>` 樣式聲明區域裏，創建了一個名爲 `blue-text` 的 `class` 選擇器。 你可以這樣將 class 應用於 HTML 元素：`<h2 class="blue-text">CatPhotoApp</h2>`。 注意在 CSS `style` 元素裏，class 名以一個句點開頭。 在 HTML 元素的 class 屬性中，class 名的開頭沒有句點。

# --instructions--

在 `style` 樣式聲明裏，把 `h2` 元素選擇器改爲 `.red-text` class 選擇器，同時將顏色 `blue` 改爲 `red`。

給 `h2` 元素設置一個值爲 `red-text` 的 `class` 屬性。

# --hints--

`h2` 元素應爲紅色。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2` 元素應有一個 `red-text` class。

```js
assert($('h2').hasClass('red-text'));
```

樣式表應該聲明一個 `red-text` class，顏色爲 `red`。

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

不應在 `h2` 元素裏使用行內樣式 `style="color: red"`。

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
