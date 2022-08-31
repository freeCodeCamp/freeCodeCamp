---
id: 5dfa30b9eacea3f48c6300ad
title: 步骤 14
challengeType: 0
dashedName: step-14
---

# --description--

用必要的元素标签包裹图片，把它变成一个链接。 使用 `https://freecatphotoapp.com` 作为锚点元素中 `href` 属性的值。

# --hints--

`img` 元素的 `src` 属性应该指向「`https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`」。 你可能不小心删除了它。

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

你的锚点元素（`a`）应该有一个起始标签。 起始标签的书写语法为：`<elementName>`。

```js
assert(document.querySelectorAll('a').length >= 2);
```

你应该只添加一个锚点（`a`）的起始标签。 请删除多余的。

```js
assert(document.querySelectorAll('a').length === 2);
```

你的锚点元素（`a`）应该有一个闭合标签。 结束标签在 `<` 字符后面要有一个 `/`。

```js
assert(code.match(/<\/a>/g).length >= 2);
```

你应该只添加一个锚点（`a`）的结束标签。 请删除多余的。

```js
assert(code.match(/<\/a>/g).length === 2);
```

你的锚点元素（`a`）缺少 `href` 属性。 请检查在开始标签的名称后面要有一个空格，且所有的属性名称前面也要有一个空格。

```js
assert(document.querySelector('a').hasAttribute('href'));
```

你的锚点元素（`a`）应该链接到 `https://freecatphotoapp.com`。 你可能省略了这个 URL 或者有拼写错误。

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

你的 `img` 元素应该被嵌套在锚点元素（`a`）之中。 整个 `img` 元素应该置于锚点元素（`a`）的开始标签和结束标签之间。

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

