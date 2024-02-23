---
id: bad87fee1348bd9aedf08829
title: 创建一个输入框
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
dashedName: create-a-text-field
---

# --description--

现在让我们来创建一个 Web 表单。

`input` 输入框可以让你轻松获得用户的输入。

你可以像这样创建一个文本输入框：

```html
<input type="text">
```

注意 `input` 输入框是没有结束标签的。

# --instructions--

在列表下面创建一个类型为 `text` 的 `input` 输入框。

# --hints--

网页中应存在一个类型为 `text` 的 `input` 输入框。

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
  <form>
    <input type="text">
  </form>
</main>
```
