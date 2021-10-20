---
id: bad87fee1348bd9aedf08834
title: 创建一组单选按钮
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

<dfn>radio buttons</dfn>（单选按钮）就好比单项选择题，正确答案只有一个。

单选按钮是 `input` 选择框的一种类型。

每一个单选按钮都应该嵌套在它自己的 `label`（标签）元素中。 这样，我们相当于给 `input` 元素和包裹它的 `label` 元素建立起了对应关系。

所有关联的单选按钮应该拥有相同的 `name` 属性。 创建一组单选按钮，选中其中一个按钮，其他按钮即显示为未选中，以确保用户只提供一个答案。

下面是一个单选按钮的例子：

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

最佳实践是在 `label` 元素上设置 `for` 属性，让其值与相关联的 `input` 单选按钮的 `id` 属性值相同。 这使得辅助技术能够在标签和相关的 `input` 元素之间建立关联关系。 例如：

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

我们也可以在 `label` 标签中嵌入 `input` 元素：

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

在表格中添加一对单选按钮，每个按钮嵌套在自己的 `label` 元素中。 一个选项应该是 `indoor` ，另一个选项应该是 `outdoor`。 两个按钮的 `name` 属性都是 `indoor-outdoor`，以创建一组单选按钮。

# --hints--

页面上应存在两个 `radio` 按钮元素。

```js
assert($('input[type="radio"]').length > 1);
```

应设置单选按钮的 `name` 属性值为 `indoor-outdoor`。

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

每个单选按钮都应嵌套进它自己的 `label` 元素中。

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

每一个 `label` 元素都有结束标签。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

其中一个单选按钮的文本为 `indoor`。

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

其中一个单选按钮的文本为 `outdoor`。

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

所有的单选按钮都应该包含在 `form` 标签中。

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
