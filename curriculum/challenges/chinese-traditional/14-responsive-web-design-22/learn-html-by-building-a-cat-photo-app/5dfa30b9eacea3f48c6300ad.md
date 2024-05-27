---
id: 5dfa30b9eacea3f48c6300ad
title: 步驟 15
challengeType: 0
dashedName: step-15
---

# --description--

在之前的步驟中，你使用了錨元素將文本轉換爲鏈接。 也可以把其他類型的內容放在錨標籤中，將其轉換成一個鏈接。

這是一個將圖像轉換爲鏈接的示例：

```html
<a href="example-link">
  <img src="image-link.jpg" alt="A photo of a cat.">
</a>
```

用必要的元素標籤包裹圖片，把它變成一個鏈接。 使用 `https://freecatphotoapp.com` 作爲錨元素中 `href` 屬性的值。

# --hints--

You should have an `img` element with a `src` value of `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. 你可能不小心刪除了它。

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

你的錨元素（`a`）應該有一個開始標籤。 開始標籤的語法是：`<elementName>`。

```js
assert(document.querySelectorAll('a').length >= 2);
```

你的圖片後缺少一個結束（`a`）標籤。

```js
assert(document.querySelectorAll('a').length === 2);
```

你的錨元素（`a`）應該有一個結束標籤。 結束標籤在 `<` 字符後面要有一個 `/`。

```js
assert(code.match(/<\/a>/g).length >= 2);
```

你應該只添加一個結束錨（`a`）標籤。 請刪除多餘的。

```js
assert(code.match(/<\/a>/g).length === 2);
```

你的錨元素（`a`）缺少 `href` 屬性。 請檢查確認在開始標籤的名稱後面要有一個空格，且所有的屬性名稱前面也要有一個空格。

```js
assert(document.querySelector('a').hasAttribute('href'));
```

你的錨元素（`a`）應該鏈接到 `https://freecatphotoapp.com`。 你可能省略了這個 URL 或者有拼寫錯誤。

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

你的 `img` 元素應該被嵌套在錨元素（`a`）之中。 整個 `img` 元素應該置於錨元素（`a`）的開始標籤和結束標籤之間。

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

