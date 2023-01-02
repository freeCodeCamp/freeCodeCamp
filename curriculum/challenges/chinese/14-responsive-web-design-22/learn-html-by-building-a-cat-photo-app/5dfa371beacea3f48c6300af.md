---
id: 5dfa371beacea3f48c6300af
title: 步骤 19
challengeType: 0
dashedName: step-19
---

# --description--

当你向页面添加较低级别的标题元素时，这意味着你正在开始一个新的小节。

在第二个 `section` 元素的最后一个 `h2` 元素之后，添加一个带有以下文本的 `h3` 元素：

`Things cats love:`

# --hints--

第二个 `section` 元素没有开始或结束标签。

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

在第二个 `section` 元素的结束标签上方应该有一个 `h3` 元素。

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

第二个 `section` 元素的结束标签上方的 `h3` 元素应该包含文本 `Things cats love:`。 确保在文本末尾包含冒号。

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

在最后一个 `section` 嵌套的 `h3` 元素之上，应该有一个 `h2` 元素，其文本为 `Cat Lists`。 你可能不小心删除了 `h2` 元素。

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

