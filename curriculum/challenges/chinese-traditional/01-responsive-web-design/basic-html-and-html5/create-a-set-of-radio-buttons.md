---
id: bad87fee1348bd9aedf08834
title: 創建一組單選按鈕
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

<dfn>radio buttons</dfn>（單選按鈕）就好比單項選擇題，正確答案只有一個。

單選按鈕是 `input` 選擇框的一種類型。

每一個單選按鈕都應該嵌套在它自己的 `label`（標籤）元素中。 這樣，我們相當於給 `input` 元素和包裹它的 `label` 元素建立起了對應關係。

所有關聯的單選按鈕應該擁有相同的 `name` 屬性。 創建一組單選按鈕，選中其中一個按鈕，其他按鈕即顯示爲未選中，以確保用戶只提供一個答案。

下面是一個單選按鈕的例子：

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

最佳實踐是在 `label` 元素上設置 `for` 屬性，讓其值與相關聯的 `input` 單選按鈕的 `id` 屬性值相同。 這使得輔助技術能夠在標籤和相關的 `input` 元素之間建立關聯關係。 例如：

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

我們也可以在 `label` 標籤中嵌入 `input` 元素：

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

在表格中添加一對單選按鈕，每個按鈕嵌套在自己的 `label` 元素中。 一個選項應該是 `indoor` ，另一個選項應該是 `outdoor`。 兩個按鈕的 `name` 屬性都是 `indoor-outdoor`，以創建一組單選按鈕。

# --hints--

頁面上應存在兩個 `radio` 按鈕元素。

```js
assert($('input[type="radio"]').length > 1);
```

應設置單選按鈕的 `name` 屬性值爲 `indoor-outdoor`。

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

每個單選按鈕都應嵌套進它自己的 `label` 元素中。

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

每一個 `label` 元素都有結束標籤。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

其中一個單選按鈕的文本爲 `indoor`。

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

其中一個單選按鈕的文本爲 `outdoor`。

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

所有的單選按鈕都應該包含在 `form` 標籤中。

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
