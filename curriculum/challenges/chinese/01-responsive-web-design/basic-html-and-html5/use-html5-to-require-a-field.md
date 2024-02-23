---
id: bad87fee1348bd9aedc08830
title: 给表单添加一个必填字段
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

当你设计表单时，你可以指定某些字段为必填项（required），只有当用户填写了该字段后，才可以提交表单。

如果你想把文本输入框设置为必填项，在 `input` 元素中加上 `required` 属性就可以了，例如：`<input type="text" required>`

# --instructions--

请给 `input` 元素加上 `required` 属性，这样用户就必须先在输入框里填入内容，然后才可以提交表单。

然后尝试在不输入任何文本的情况下提交表单， 看看 HTML5 表单是如何通知你这个字段是必填的。

# --hints--

`input` 元素应有 `required` 属性。

```js
assert($('input').prop('required'));
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
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
