---
id: 5efada803cbd2bbdab94e332
title: 步驟 29
challengeType: 0
dashedName: step-29
---

# --description--

在你剛剛添加的 `figure` 元素中，嵌套一個 `img` 元素，其中 `src` 屬性設置爲 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`。

# --hints--

你的第二個 `figure` 元素應該有一個開始標籤。 開始標籤的語法爲：`<elementName>`。

```js
assert(document.querySelectorAll('figure').length >= 2);
```

你的第二個 `figure` 元素應該有一個結束標籤。 結束標籤在 `<` 字符之後有一個 `/`。

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

在第二個 `section` 元素的結束標籤上方應該有一個 `figure` 元素。 你把順序寫錯了。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

你應該在 `figure` 元素中嵌套第三個 `img` 元素。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

第三張圖像應該有一個 `src` 屬性設置爲 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

儘管你已將新圖像的 `src` 設置爲正確的 URL，但建議始終將屬性值放在引號中。

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
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

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

