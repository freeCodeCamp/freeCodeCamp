---
id: 5dfa30b9eacea3f48c6300ad
title: 步骤 15
challengeType: 0
dashedName: step-15
---

# --description--

在之前的步骤中，你使用了锚元素将文本转换为链接。 也可以把其他类型的内容放在锚标签中，将其转换成一个链接。

这是一个将图像转换为链接的示例：

```html
<a href="example-link">
  <img src="image-link.jpg" alt="A photo of a cat.">
</a>
```

用必要的元素标签包裹图片，把它变成一个链接。 使用 `https://freecatphotoapp.com` 作为锚元素中 `href` 属性的值。

# --hints--

You should have an `img` element with a `src` value of `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. 你可能不小心删除了它。

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

你的锚元素（`a`）应该有一个开始标签。 开始标签的语法是：`<elementName>`。

```js
assert(document.querySelectorAll('a').length >= 2);
```

你的图片后缺少一个结束（`a`）标签。

```js
assert(document.querySelectorAll('a').length === 2);
```

你的锚元素（`a`）应该有一个结束标签。 结束标签在 `<` 字符后面要有一个 `/`。

```js
assert(code.match(/<\/a>/g).length >= 2);
```

你应该只添加一个结束锚（`a`）标签。 请删除多余的。

```js
assert(code.match(/<\/a>/g).length === 2);
```

你的锚元素（`a`）缺少 `href` 属性。 请检查确认在开始标签的名称后面要有一个空格，且所有的属性名称前面也要有一个空格。

```js
assert(document.querySelector('a').hasAttribute('href'));
```

你的锚元素（`a`）应该链接到 `https://freecatphotoapp.com`。 你可能省略了这个 URL 或者有拼写错误。

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

你的 `img` 元素应该被嵌套在锚元素（`a`）之中。 整个 `img` 元素应该置于锚元素（`a`）的开始标签和结束标签之间。

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

