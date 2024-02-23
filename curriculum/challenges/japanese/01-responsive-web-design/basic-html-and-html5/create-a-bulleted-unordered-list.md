---
id: bad87fee1348bd9aedf08827
title: 順序なしの箇条書きを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML には<dfn>順序なしリスト (unordered lists) </dfn> または箇条書きと呼ばれるリストを作成するための特別な要素があります。

順序なしリストは `<ul>` 要素で始まり、その後に任意の数の `<li>` 要素が続きます。 最後に、`</ul>` で閉じます。

例:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

上の例は `milk` と `cheese` の箇条書きリストを作成します。

# --instructions--

最後の 2 つの `p` 要素を削除し、ページの下部に猫が好きな 3 つの物の順序なしリストを作成しましょう。

# --hints--

`ul` 要素を作成してください。

```js
assert($('ul').length > 0);
```

`ul` 要素の中に、3 つの `li` 要素を入れてください。

```js
assert($('ul li').length > 2);
```

`ul` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

それぞれの `li` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

`li` 要素は、空の文字列または空白のみを含めた状態ではいけません。

```js
assert($('ul li').filter((_, item) => !$(item).text().trim()).length === 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```
