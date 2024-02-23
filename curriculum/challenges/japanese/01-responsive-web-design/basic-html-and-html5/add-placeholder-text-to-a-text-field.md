---
id: bad87fee1348bd9aedf08830
title: テキストフィールドにプレイスホルダーテキストを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

プレイスホルダーテキストは、ユーザーが何かを入力する前に `input` 要素に表示されているテキストです。

次のようにしてプレイスホルダーテキストを作成できます。

```html
<input type="text" placeholder="this is placeholder text">
```

**注:** `input` 要素は終了タグを持たないことを忘れないでください。

# --instructions--

テキストタイプの `input` の `placeholder` の値に "cat photo URL" を指定してください。

# --hints--

既存のテキストタイプの `input` 要素に、`placeholder` 属性を追加してください。

```js
assert($('input[placeholder]').length > 0);
```

`placeholder` 属性の値を `cat photo URL` に設定してください。

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

完成した `input` 要素は終了タグを持たないはずです。

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

完成した `input` 要素は正しい構文でなければなりません。

```js
assert($('input[type=text]').length > 0);
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
  <input type="text">
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
  <input type="text" placeholder="cat photo URL">
</main>
```
