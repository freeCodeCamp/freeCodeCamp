---
id: bad87fee1348bd9aedf08828
title: 順序付きリストを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML にはもう一つ、<dfn>順序付きリスト (ordered lists)</dfn> または番号付きリストを作成するための特別な要素があります。

順序付きリストは `<ol>` 要素で始まり、その後に任意の数の `<li>` 要素が続きます。 最後に、順序付きリストを `</ol>` タグで閉じます。

例:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

上の例は `Garfield` と `Sylvester` の番号付きリストを作成します。

# --instructions--

猫が嫌いな物トップ 3 の順序付きリストを作成しましょう。

# --hints--

`Top 3 things cats hate:` の下に順序付きリストを作成してください。

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

`Things cats love:` の下には順序なしリストが必要です。

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

`ul` 要素が 1 つだけ必要です。

```js
assert.equal($('ul').length, 1);
```

`ol` 要素が 1 つだけ必要です。

```js
assert.equal($('ol').length, 1);
```

`ul` 要素の中に `li` 要素が 3 つ必要です。

```js
assert.equal($('ul li').length, 3);
```

`ol` 要素の中に `li` 要素が 3 つ必要です。

```js
assert.equal($('ol li').length, 3);
```

`ul` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

`ol` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

`li` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

順序なしリストの `li` 要素は空にしないでください。

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

順序付きリストの `li` 要素は空にしないでください。

```js
$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
