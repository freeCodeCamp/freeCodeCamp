---
id: bad87fee1348bd9aedd08830
title: フォームに送信ボタンを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

`submit` (送信) ボタンをフォームに追加しましょう。 このボタンをクリックすると、フォームの `action` 属性で指定した URL にフォームのデータが送信されます。

こちらが送信ボタンの例です:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

`form` 要素内の最後の要素として `submit` タイプのボタンを追加してください。ボタンのテキストは `Submit` としてください。

# --hints--

`form` の中に `button` が必要です。

```js
assert($('form').children('button').length > 0);
```

送信ボタンは `type` 属性を `submit` に設定する必要があります。

```js
assert($('button').attr('type') === 'submit');
```

送信ボタンのテキストは `Submit` にしてください。

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`button` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
