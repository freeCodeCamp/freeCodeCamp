---
id: bad87fee1348bd9aedd08830
title: 给表单添加提交按钮
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

让我们来给表单添加一个 `submit`（提交）按钮。 点击提交按钮时，表单中的数据将会被发送到 `action` 属性指定的 URL 上。

例如：

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

在 `form` 的底部创建一个按钮，按钮的类型为 `submit`，文本为 `Submit`。

# --hints--

你的 `form` 里面应该有一个 `button`。

```js
assert($('form').children('button').length > 0);
```

按钮的 `type` 属性值应为 `submit`。

```js
assert($('button').attr('type') === 'submit');
```

提交按钮的文本应为 `Submit` 。

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`button` 元素应有结束标签。

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
