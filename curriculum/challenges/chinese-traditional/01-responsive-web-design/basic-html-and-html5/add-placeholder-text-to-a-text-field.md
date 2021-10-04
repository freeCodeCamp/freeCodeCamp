---
id: bad87fee1348bd9aedf08830
title: 給輸入框添加佔位符文本
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

佔位符文本用戶在 `input` 輸入框中輸入任何東西前的預定義文本。

你可以像這樣創建一個佔位符：

```html
<input type="text" placeholder="this is placeholder text">
```

**注意：** 別忘了 `input` 元素是 "自閉和標籤"，即不需要結束標籤。

# --instructions--

把 `input` 輸入框的 `placeholder` 佔位符文本設置爲 "cat photo URL"。

# --hints--

給現有的 `input` 輸入框添加一個 `placeholder` 屬性。

```js
assert($('input[placeholder]').length > 0);
```

設置 `placeholder` 屬性的值爲 `cat photo URL`。

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

`input` 元素不該有結束標籤。

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

`input` 輸入框的語法必須正確。

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
