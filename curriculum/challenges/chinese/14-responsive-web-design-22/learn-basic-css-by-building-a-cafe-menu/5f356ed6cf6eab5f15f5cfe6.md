---
id: 5f356ed6cf6eab5f15f5cfe6
title: 步骤 20
challengeType: 0
dashedName: step-20
---

# --description--

`div` 元素主要用于设计布局，这与你迄今为止使用的其他内容元素不同。 在 `body` 元素内添加一个 `div` 元素，然后将所有其他元素移到新的 `div` 内。

# --hints--

你应该有一个 `<div>` 开始标签。

```js
assert(code.match(/<div>/i));
```

你应该有一个 `</div>` 结束标签。

```js
assert(code.match(/<\/div>/i));
```

你不应该改变你现有的 `body` 元素。 确认你没有删除结束标签。

```js
assert($('body').length === 1);
```

你的 `div` 元素应该嵌套在你的 `body` 元素中。

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

