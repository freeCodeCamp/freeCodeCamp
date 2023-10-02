---
id: bad87fee1348bd9aede08830
title: フォーム要素を作成する
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

純粋な HTML だけで、実際にデータをサーバーに送信するウェブフォームを作成できます。 そのためには、`form` 要素に `action` 属性を指定します。

例:

```html
<form action="url-where-you-want-to-submit-form-data">
  <input>
</form>
```

# --instructions--

既存の `input` 要素を `form` 要素の内側にネストし、`form` 要素の `action` 属性に `"https://www.freecatphotoapp.com/submit-cat-photo"` を設定してください。

# --hints--

既存の `input` 要素が `form` 要素内にネストされる必要があります。

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

`form` の `action` 属性は `https://www.freecatphotoapp.com/submit-cat-photo` に設定される必要があります。

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

`form` 要素には適切な開始タグと終了タグが必要です。

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
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
  <input type="text" placeholder="cat photo URL">
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
  </form>
</main>
```
