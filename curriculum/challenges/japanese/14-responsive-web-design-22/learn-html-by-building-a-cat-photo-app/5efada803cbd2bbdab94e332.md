---
id: 5efada803cbd2bbdab94e332
title: ステップ 29
challengeType: 0
dashedName: step-29
---

# --description--

先ほど追加した `figure` 要素の中に、`img` 要素をネストして、その `src` 属性を `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg` に設定してください。

# --hints--

2 つ目の `figure` 要素に開始タグが必要です。 開始タグは `<elementName>` のような形式の構文です。

```js
assert(document.querySelectorAll('figure').length >= 2);
```

2 つ目の `figure` 要素に終了タグが必要です。 終了タグは `<` の直後に `/` があります。

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

2 つ目の `section` 要素の終了タグのすぐ上に 2 つ目の `figure` 要素が必要です。 順番が誤っているようです。

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

3 つ目の `img` 要素を `figure` 要素内にネストする必要があります。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

3 つ目の画像の `src` 属性を `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg` に設定する必要があります。

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

新しい画像の `src` は正しい URL に設定されていますが、属性の値は常に引用符で囲むことが推奨されています。

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

