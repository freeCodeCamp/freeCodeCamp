---
id: 618a0b2befb143baefab632b
title: ステップ 37
challengeType: 0
dashedName: step-37
---

# --description--

赤とシアンの色が隣り合わせにあると、とても明るく見えることに注目してください。 このコントラストはウェブサイト上で過度に使用すると目障りになることがあり、また、補色の背景色の上ではテキストが読みづらくなることがあります。

1 つの色を主要な色として使い、その補色をページの特定のコンテンツに注意を向けさせるためのアクセントとして使うのが良い方法とされています。

First, in the `h1` rule, use the `rgb` function to set its `background-color` to cyan.

# --hints--

`text-align` プロパティとその値は、削除または変更しないでください。

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

`h1` CSS ルールの `background-color` プロパティを `rgb(0, 255, 255)` に設定する必要があります。

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
