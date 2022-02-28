---
id: bad87fee1348bd9aedf08835
title: チェックボックスのセットを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

フォームでは一般的に、複数の回答がある可能性のある質問には<dfn>チェックボックス</dfn>を使用します。

チェックボックスは `input` の一種です。

1 つ 1 つのチェックボックスは、対応する `label` 要素内にネストすることができます。 `input` 要素を `label` 要素の中に入れることにより、チェックボックスがそれを囲んでいるラベル要素と自動的に関連付けられます。

すべての関係するチェックボックスは同じ `name` 属性を持つようにします。

`label` 要素の `for` 属性に `input` 要素の `id` 属性と一致する値を設定し、チェックボックスの `input` と対応する `label` 要素との関係を明示的に定義することがベストプラクティスと考えられています。

こちらがチェックボックスの例です:

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

フォームに 3 つのチェックボックスを追加しましょう。 各チェックボックスは、それぞれの `label` 要素内に入れ子にしてください。 3 つとも `name` 属性を `personality` としてください。

# --hints--

ページにはチェックボックス要素が 3 つ必要です。

```js
assert($('input[type="checkbox"]').length > 2);
```

3 つのチェックボックス要素は、それぞれ対応する `label` 要素にネストされている必要があります。

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

それぞれの `label` 要素に終了タグが必要です。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

チェックボックスの `name` 属性は `personality` に設定してください。

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

各チェックボックスは、`form` タグ内に追加する必要があります。

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
