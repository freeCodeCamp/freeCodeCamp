---
id: 5efae16e3cbd2bbdab94e334
title: 步驟 31
challengeType: 0
dashedName: step-31
---

# --description--

在最後一個 `img` 元素之後，添加一個 `figcaption` 元素，其文本爲 `Cats hate other cats.`。

# --hints--

你的 `figcaption` 元素應該有一個開始標籤。 開始標籤的書寫語法爲：`<elementName>`。

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

你的 `figcaption` 元素應該有一個結束標籤。 結束標籤在 `<` 字符之後有一個 `/`。

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

在第二個 `section` 元素的結束標籤上方應該有一個 `figure` 元素。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

最後一個 `img` 元素應該嵌套在 `figure` 元素中。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

你的 `figure` 元素應該有一個開始標籤。 開始標籤的書寫語法爲：`<elementName>`。

```js
assert(document.querySelectorAll('figure').length === 2);
```

你的 `figure` 元素應該有一個結束標籤。 結束標籤在 `<` 字符後面要有一個 `/`。

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

`figcaption` 元素應該嵌套在 `figure` 元素中。

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

嵌套在 `figure` 元素中的 `figcaption` 元素應位於 `img` 元素下方。 你的 `img` 元素和 `figcaption` 元素的順序錯誤。

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

`figcaption` 元素應該有文本 `Cats hate other cats.`。 你可能忽略了文本或有拼寫錯誤。

```js
assert(
  document
    .querySelectorAll('figcaption')[1]
    .innerText.toLowerCase()
    .match(/Cats hate other cats\.?$/i)
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
--fcc-editable-region--
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

