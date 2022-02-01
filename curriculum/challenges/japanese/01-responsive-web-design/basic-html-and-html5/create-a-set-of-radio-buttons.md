---
id: bad87fee1348bd9aedf08834
title: ラジオボタンのセットを作成する
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

ユーザーに複数の選択肢から 1 つだけ回答を選んでほしい質問には<dfn>ラジオボタン</dfn>を使うことができます。

ラジオボタンは `input` の一種です。

1 つ 1 つのラジオボタンは、対応する `label` 要素内にネストすることができます。 `input` 要素を `label` 要素の中に入れることにより、ラジオボタンがそれを囲んでいるラベル要素と自動的に関連付けられます。

ラジオボタングループを作成するために、すべての関係するラジオボタンには同じ `name` 属性を設定します。 ラジオボタングループを作成することにより、どれか 1 つのラジオボタンを選択すると同じグループ内の他のラジオボタンの選択が自動的に解除されるようになり、ユーザーから回答が 1 つだけ提供されることが保証されます。

こちらがラジオボタンの例です:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

`label` 要素の `for` 属性に、`input` 要素の `id` 属性と一致する値を設定することがベストプラクティスと考えられています。 そうすることにより、アシスティブ・テクノロジーがラベルと対応する `input` 要素を関連付けることができるようになります。 例:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

`input` 要素を `label` タグの中にネストすることもできます:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

フォームに、それぞれが `label` 要素の中にネストされた 2 つのラジオボタンを追加してください。 1 つは `indoor` の選択肢、もう一つは `outdoor` の選択肢を持つようにしてください。 ラジオボタングループを作成するために、両方とも `name` 属性は `indoor-outdoor` としてください。

# --hints--

ページには `radio` ボタン要素が 2 つ必要です。

```js
assert($('input[type="radio"]').length > 1);
```

ラジオボタンの `name` 属性は `indoor-outdoor` に設定してください。

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

2 つのラジオボタン要素は、それぞれ対応する `label` 要素にネストされている必要があります。

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

それぞれの `label` 要素に終了タグが必要です。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

ラジオボタンの 1 つに `indoor` というラベルを付けてください。

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

ラジオボタンの 1 つに `outdoor` というラベルを付けてください。

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

各ラジオボタン要素は `form` タグ内に追加する必要があります。

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
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
