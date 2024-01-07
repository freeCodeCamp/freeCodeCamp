---
id: 5dfb5ecbeacea3f48c6300b1
title: 步驟 21
challengeType: 0
dashedName: step-21
---

# --description--

使用列表項（`li`）元素在列表中創建項目。 以下是無序列表中列表項的示例：

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

在 `ul` 元素中嵌套三個列表項以顯示貓喜歡的三件事：

`cat nip` `laser pointers` `lasagna`

# --hints--

你應該有三個 `li` 元素。 每個 `li` 元素都應該有自己的開始和結束標籤。

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

你應該有三個 `li` 元素，其中包含任意順序的文本 `cat nip`、`laser pointers` 和 `lasagna`。 你可能忽略了文本或有拼寫錯誤。

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

三個 `li` 元素應位於 `ul` 元素的開始和結束標籤之間。

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

