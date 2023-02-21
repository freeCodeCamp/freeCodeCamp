---
id: 5dfa371beacea3f48c6300af
title: ステップ 19
challengeType: 0
dashedName: step-19
---

# --description--

ページ内に下位の見出し要素を追加することは、そこから新しいサブセクションが始まることを意味します。

2 つ目の `section` 要素内の `h2` 要素の後に、`h3` 要素を追加して次のテキストを設定してください:

`Things cats love:`

# --hints--

2 つ目の `section` 要素がないか、開始タグか終了タグが欠けているようです。

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

2 つ目の `section` 要素の終了タグのすぐ上に `h3` 要素が必要です。

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

2 つ目の `section` 要素の終了タグのすぐ上にある `h3` 要素は、`Things cats love:` というテキストを持つ必要があります。 テキストの終わりのコロンを必ず含めてください。

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

最後の `section` 要素内にネストされている最後の `h3` 要素の上には、テキスト `Cat Lists` を持つ `h2` 要素があるはずです。 `h2` 要素が誤って削除された可能性があります。

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

