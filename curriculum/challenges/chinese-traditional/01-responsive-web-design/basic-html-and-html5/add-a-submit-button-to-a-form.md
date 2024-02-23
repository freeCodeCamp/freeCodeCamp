---
id: bad87fee1348bd9aedd08830
title: 給表單添加提交按鈕
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

讓我們來給表單添加一個 `submit`（提交）按鈕。 點擊提交按鈕時，表單中的數據將會被髮送到 `action` 屬性指定的 URL 上。

例如：

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

在 `form` 的底部創建一個按鈕，按鈕的類型爲 `submit`，文本爲 `Submit`。

# --hints--

你的 `form` 裏面應該有一個 `button`。

```js
assert($('form').children('button').length > 0);
```

按鈕的 `type` 屬性值應爲 `submit`。

```js
assert($('button').attr('type') === 'submit');
```

提交按鈕的文本應爲 `Submit` 。

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`button` 元素應有結束標籤。

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
