---
id: bd7158d8c442eddfaeb5bd18
title: 制作一个致敬页
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**目标:** 构建一个功能类似于 <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a> 的应用程序

**用户需求:**

1. 你的致敬页应该包含一个 `id` 为 `main` 的 `main` 元素，它应该包含所有其他元素
1. 你的页面应该包含一个元素，它的属性 `id` 值为`title`,，元素中包含一个字符串（例如 text）描述致敬页的主题（例如 "Dr. Norman Borlaug"）
1. 你应该有一个 `id` 为 `img-div` 的 `figure` 或 `div` 元素
1. 在 `#img-div` 元素中，你应该看到一个 `id="image"` 的 `img` 元素
1. 在`#img-div`元素内，你应该看到一个 `id="img-caption"` 的元素，其中包含对 `#img-div` 中图像的文本描述
1. 你应该看到一个 `id="tribute-info"` 的元素，其中包含描述致敬页主题的文本内容
1. 你应该看到一个 `id="tribute-link"` 的 `a` 元素，它链接到一个包含有关致敬页主题额外信息的外部网页。 提示：你必须为元素提供 `target` 属性，并设置其为 `_blank`，以便可以在新选项卡中打开链接。
1. 你的 `#image` 应该使用 `max-width` 和 `height` 属性来响应式调整大小，相对于其父元素的宽度，但不超过其原始大小
1. 你的 `img` 元素应该在其父元素内居中

完成需求并通过下面的所有测试来完成这个项目。 赋予它你自己的个人风格。 编程愉快！

**注意：** 请在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以链接你的样式表并应用你的 CSS

# --hints--

你的页面应该包含一个 `main` 元素，且它有一个值为 `main` 的`id`属性。

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

你的 `#img-div`、`#image`、`#img-caption`、`#tribute-info` 和 `#tribute-link` 应该是 `#main` 的子元素。

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

你应该有一个 `id` 为 `title` 的元素。

```js
const el = document.getElementById('title')
assert(!!el)
```

你的 `#title` 元素不应为空。

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

你应该有一个 `id` 为 `img-div` 的 `figure` 或 `div` 元素。

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

你应该有一个 `id` 为 `image` 的 `img` 元素。

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

你的 `#image` 元素应该是 `#img-div` 元素的子元素。

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

你应该有一个 `id` 为 `img-caption` 的 `figcaption` 元素或 `div` 元素。

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

你的 `#img-caption` 元素应该是 `#img-div` 元素的子元素。

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

你的 `#img-caption` 不应为空。

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

你应该有一个 `id` 为 `tribute-info` 的元素。

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

你的 `#tribute-info` 不应为空。

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

你应该有一个 `id` 为 `tribute-link` 的 `a` 元素。

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

你的 `#tribute-link` 应该有一个 `href` 属性和值。

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

你的 `#tribute-link` 元素应该有一个值为 `_blank` 的 `target` 属性。

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

你的 `img` 元素应该具有 `display` 值为 `block`。

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

你的 `#image` 应该具有 `max-width` 值为 `100%`。

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

你的 `#image` 应该具有 `height` 值为 `auto`。

```js
// taken from the testable-projects repo
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const oldDisplayValue = imgStyle.getPropertyValue('display');
const oldDisplayPriority = imgStyle.getPropertyPriority('display');
img?.style.setProperty('display', 'none', 'important');
const heightValue = imgStyle?.getPropertyValue('height')
img?.style.setProperty('display', oldDisplayValue, oldDisplayPriority);
assert(heightValue === 'auto')
```

你的 `#image` 应该在其父元素内居中.

```js
// taken from the testable-projects repo
const img = document.getElementById('image'),
  imgParent = img?.parentElement,
  imgLeft = img?.getBoundingClientRect().left,
  imgRight = img?.getBoundingClientRect().right,
  parentLeft = imgParent?.getBoundingClientRect().left,
  parentRight = imgParent?.getBoundingClientRect().right,
  leftMargin = imgLeft - parentLeft,
  rightMargin = parentRight - imgRight;
assert(leftMargin - rightMargin < 6 && rightMargin - leftMargin < 6)
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico"
      rel="stylesheet"

    />
    <link
      href="https://fonts.googleapis.com/css?family=Lobster"
      rel="stylesheet"

    />
    <link href="styles.css" rel="stylesheet" />
    <title>Tribute Page</title>
  </head>
  <body>
    <h1>Tribute Page</h1>
    <p>The below card was designed as a tribute page for freeCodeCamp.</p>
    <main id="main">
      <div id="img-div">
        <img
          id="image"
          class="border"
          src="https://upload.wikimedia.org/wikipedia/en/5/53/Pok%C3%A9mon_Togepi_art.png"
          alt="An image of Togepi"
        />
        <figcaption id="img-caption">Togepi, happy as always.</figcaption>
      </div>
      <h2 id="title">Togepi</h2>
      <hr />
      <div id="tribute-info">
        <p>
          Togepi was first discovered in the Johto region, when Ash Ketchum
          discovered a mysterious egg. However, when the egg hatched, Togepi saw
          Ash's friend Misty first and imprinted on her. Like many other
          creatures, this imprinting process created a bond and Togepi views
          Misty as his mother.
        </p>
        <p>
          Togepi is a very childlike Pokemon, and is very emotionally
          expressive. He demonstrates extreme levels of joy and sadness.
        </p>
        <hr />
        <p><u>Battle Information</u></p>
        <ul style="list-style-type: none">
          <li>Type: Fairy</li>
          <li>Evolutions: Togepi -> Togetic -> Togekiss</li>
          <li>Moves: Growl, Pound, Sweet Kiss, Charm</li>
          <li>Weaknesses: Poison, Steel</li>
          <li>Resistances: Dragon</li>
        </ul>
        <p>
          Check out this
          <a
            id="tribute-link"
            href="https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)"
            target="_blank"
            rel="noopener noreferrer"
            >Bulbapedia article on Togepi</a
          >
          for more information on this great Pokemon.
        </p>
      </div>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
body {
  background-color: #3a3240;
  color: white;
}
main {
  background-color: #92869c;
  font-family: Lobster;
  max-width: 500px;
  margin: 20px auto;
  color: black;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  text-align: center;
  font-size: 20pt;
  font-family: Pacifico;
}
body {
  text-align: center;
  font-size: 12pt;
}
footer {
  text-align: center;
  font-size: 10pt;
}
.border {
  border-color: black;
  border-width: 5px;
  border-style: solid;
}
#image {
  height: auto;
  display: block;
  margin: auto;
  max-width: 100%;
  border-radius: 50%;
}
#img-caption {
  font-size: 10pt;
}
a:not(#tribute-link) {
  color: white;
}
hr {
  border-color: black;
}
```
