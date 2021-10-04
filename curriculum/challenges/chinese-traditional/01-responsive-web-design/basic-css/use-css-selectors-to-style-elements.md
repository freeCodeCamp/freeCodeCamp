---
id: bad87fee1348bd9aedf08805
title: 使用元素選擇器來設置元素的樣式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

在 CSS 中，頁面樣式的屬性有幾百個，你可以用來改變元素在頁面上的外觀。

當你輸入 `<h2 style="color: red;">CatPhotoApp</h2>`，就可以用行內 CSS 設置 `h2` 元素的樣式。

這是指定元素樣式的一種方法，但有一個更好的方法來應用 CSS。

在代碼的頂部，創建一個 `style` 聲明區域，如下方所示：

```html
<style>
</style>
```

在樣式聲明區域內，可以爲所有 `h2` 元素創建一個 <dfn>CSS selector</dfn>。 如果想讓所有 `h2` 元素在變成紅色，可以添加下方的樣式規則：

```html
<style>
  h2 {
    color: red;
  }
</style>
```

請注意，每個元素的樣式規則都應該有開始和結束大括號（`{` 和 `}`）。 還需要確保元素的樣式定義在開始和結束樣式標籤之間。 你需要確保所有樣式規則位於花括號之間，並且每條樣式規則都以分號結束。

# --instructions--

請刪除 `h2` 元素的行內樣式，然後創建 `style` 樣式聲明區域， 最後添加 CSS 樣式規則使所有 `h2` 元素變爲藍色。

# --hints--

應刪除 `h2` 元素的 `style` 樣式。

```js
assert(!$('h2').attr('style'));
```

應創建一個 `style` 樣式聲明區域。

```js
assert($('style') && $('style').length >= 1);
```

`h2` 元素顏色應爲藍色。

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

確保 `h2` 選擇器的內容被花括號所包圍，樣式規則應以分號結束。

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

`style` 標籤應符合語法，且應有一個結束標籤。

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
