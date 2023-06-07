---
id: 5dfb5ecbeacea3f48c6300b1
title: 步骤 21
challengeType: 0
dashedName: step-21
---

# --description--

使用列表项（`li`）元素在列表中创建项目。 以下是无序列表中列表项的示例：

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

在 `ul` 元素中嵌套三个列表项以显示猫喜欢的三件事：

`cat nip` `laser pointers` `lasagna`

# --hints--

你应该有三个 `li` 元素。 每个 `li` 元素都应该有自己的开始和结束标签。

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

你应该有三个 `li` 元素，其中包含任意顺序的文本 `cat nip`、`laser pointers` 和 `lasagna`。 你可能忽略了文本或有拼写错误。

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

三个 `li` 元素应位于 `ul` 元素的开始和结束标签之间。

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

