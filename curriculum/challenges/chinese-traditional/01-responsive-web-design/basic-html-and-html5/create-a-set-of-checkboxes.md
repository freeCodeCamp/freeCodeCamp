---
id: bad87fee1348bd9aedf08835
title: 創建一組複選框
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

<dfn>checkboxes</dfn>（複選框）就好比多項選擇題，正確答案有多個。

複選框是 `input` 選擇框的一種類型。

每一個複選框都應該嵌套在它自己的 `label`（標籤）元素中。 這樣，我們相當於給 `input` 元素和包裹它的 `label` 元素建立起了對應關係。

所有關聯的複選框應該擁有相同的 `name` 屬性。

使得 `input` 與 `label` 關聯的最佳實踐是在 `label` 元素上設置 `for` 屬性，讓其值與相關聯的 `input` 複選框的 `id` 屬性值相同。

下面是一個複選框的例子：

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

請給表單添加三個複選框， 每個複選框都被嵌套進 `label` 元素中。 並且它們的 `name` 屬性均爲 `personality`。

# --hints--

表單中應存在三個複選框。

```js
assert($('input[type="checkbox"]').length > 2);
```

每個複選框都應該被嵌套進 `label` 元素中。

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

確保 `label` 元素有結束標籤。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

複選框的 `name` 屬性值均應爲 `personality`。

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

每個複選框都應該在 `form` 標籤內。

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
