---
id: bad87fee1348bd9aecf08806
title: 使用 class 选择器设置单个元素的样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

CSS 的 `class` 具有可重用性，可应用于各种 HTML 元素。

一个 CSS `class` 声明示例如下所示：

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

可以看到，我们在 `<style>` 样式声明区域里，创建了一个名为 `blue-text` 的 `class` 选择器。你可以将 CSS `class` 添加到一个 HTML 元素里，如下所示：`<h2 class="blue-text">CatPhotoApp</h2>`

**注意：**在 `style` 样式区域声明里，`class` 需以 `.` 开头。而在 HTML 元素里，`class` 属性的前面不能添加 `.`。

# --instructions--

在 `style` 样式声明里，把 `h2` 元素选择器改为 `.red-text` class 选择器，同时将颜色 `blue` 改为 `red`。

在 `h2` 元素里，添加一个 `class`，值为 `'red-text'`。

# --hints--

`h2` 元素应为红色。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2` 元素应含有 `red-text` class。

```js
assert($('h2').hasClass('red-text'));
```

`style` 样式声明区域里应该包含一个 `red-text` class 选择器，且它的颜色应为红色。

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g));
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

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
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
