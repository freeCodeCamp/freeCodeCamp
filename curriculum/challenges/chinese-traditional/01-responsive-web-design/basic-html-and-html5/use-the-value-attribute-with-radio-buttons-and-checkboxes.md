---
id: 5c6c06847491271903d37cfd
title: 使用單選框和複選框的 value 屬性
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

提交表單時，所選項的值會發送給服務端。 `radio` 和 `checkbox` 的 `value` 屬性值決定了發送到服務端的實際內容。

例如：

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

這裏有兩個 `radio` 單選框。 當用戶提交表單時，如果 `indoor` 選項被選中，表單數據會包含：`indoor-outdoor=indoor`。 也就是所選項的 `name` 和 `value` 屬性值。

如果沒有指明 `value` 屬性值，則會使用默認值做爲表單數據提交，也就是 `on`。 在這種情況下，如果用戶選中 "indoor" 選項然後提交表單，表單數據則會包含 `indoor-outdoor=on`。 這樣的表單數據看起來不夠直觀，因此最好將 `value` 屬性值設置爲一些有意義的內容。

# --instructions--

給每一個 `radio` 和 `checkbox` 輸入框添加 `value` 屬性。 不要創建任何新的 radio 或 checkbox 元素。 輸入框標籤文本使用小寫字母作爲屬性值。

# --hints--

應有一個單選按鈕的 `value` 屬性值爲 `indoor`。

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

應有一個單選按鈕的 `value` 屬性值爲 `outdoor`。

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

應有一個複選框的 `value` 屬性值爲 `loving`。

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

應有一個複選框的 `value` 屬性值爲 `lazy`。

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

應有一個複選框的 `value` 屬性值爲 `energetic`。

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
