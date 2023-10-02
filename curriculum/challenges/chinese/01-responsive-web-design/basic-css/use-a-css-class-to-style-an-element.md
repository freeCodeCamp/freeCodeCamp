---
id: bad87fee1348bd9aecf08806
title: 使用 class 选择器设置单个元素的样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

CSS 的 class 具有可重用性，可应用于各种 HTML 元素。

一个 CSS class 声明示例如下所示：

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

可以看到，我们在 `<style>` 样式声明区域里，创建了一个名为 `blue-text` 的 `class` 选择器。 你可以这样将 class 应用于 HTML 元素：`<h2 class="blue-text">CatPhotoApp</h2>`。 注意在 CSS `style` 元素里，class 名以一个句点开头。 在 HTML 元素的 class 属性中，class 名的开头没有句点。

# --instructions--

在 `style` 样式声明里，把 `h2` 元素选择器改为 `.red-text` class 选择器，同时将颜色 `blue` 改为 `red`。

给 `h2` 元素设置一个值为 `red-text` 的 `class` 属性。

# --hints--

`h2` 元素应为红色。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2` 元素应有一个 `red-text` class。

```js
assert($('h2').hasClass('red-text'));
```

样式表应该声明一个 `red-text` class，颜色为 `red`。

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

不应在 `h2` 元素里使用行内样式 `style="color: red"`。

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
