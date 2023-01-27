---
id: 5dfb5ecbeacea3f48c6300b1
title: ステップ 21
challengeType: 0
dashedName: step-21
---

# --description--

リスト項目 (list item、`li`) 要素を使用して、リストの項目を作成しましょう。 こちらが順序なしリスト内のリスト項目の例です。

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

`ul` 要素内に 3 つのリスト項目をネストして、下記 3 つの猫が好きなものを表示してください:

`cat nip` `laser pointers` `lasagna`

# --hints--

`li` 要素が 3 つ必要です。 各 `li` 要素に開始タグと終了タグが必要です。

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

3 つの `li` 要素に、テキスト `cat nip`、`laser pointers`、`lasagna` が任意の順番で設定されている必要があります。 テキストが設定されていないか、誤字脱字があります。

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

3 つの `li` 要素は、`ul` 要素の開始タグと終了タグの間に配置する必要があります。

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
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
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

