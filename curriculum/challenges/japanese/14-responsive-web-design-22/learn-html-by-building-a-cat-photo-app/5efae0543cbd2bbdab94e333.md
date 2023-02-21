---
id: 5efae0543cbd2bbdab94e333
title: ステップ 30
challengeType: 0
dashedName: step-30
---

# --description--

先ほど追加した画像のアクセシビリティを向上させるために、`alt` 属性に下記テキストを追加してください:

`Five cats looking around a field.`

# --hints--

`figure` 要素には開始タグが必要です。 開始タグは `<elementName>` のような形式の構文です。

```js
assert(document.querySelectorAll('figure').length === 2);
```

`figure` 要素には終了タグが必要です。 終了タグは `<` の直後に `/` があります。

```js
assert(code.match(/<\/figure>/g).length === 2);
```

最後の `section` 要素の終了タグのすぐ上に `figure` 要素が必要です。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

5 匹の猫の `img` 要素は `figure` 要素内にネストされている必要があります。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

5 匹の猫の `img` 要素には `alt` 属性があり、値が `Five cats looking around a field.` に設定されている必要があります。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
    .getAttribute('alt')
    .replace(/\s+/g, ' ')
    .match(/^Five cats looking around a field\.?$/i)
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
        <figure>
--fcc-editable-region--
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```

