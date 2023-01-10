---
id: 618a16d21bd3dad1bb3aa8ef
title: ステップ 41
challengeType: 0
dashedName: step-41
---

# --description--

では最初のマーカーから、ディテールを追加し始めましょう。

最初のマーカーの `div` 要素について、クラスを `one` から `red` に変更してください。

# --hints--

最初のマーカーの `div` にクラス `one` は必要ありません。

```js
const containerFirstChild = [...document.querySelector('.container')?.children][0];
assert(!containerFirstChild?.classList?.contains('one'));
```

最初のマーカーの `div` には `marker` と `red` というクラスが必要です。

```js
const containerFirstChild = [...document.querySelector('.container')?.children][0];
assert(containerFirstChild?.classList?.contains('marker') && containerFirstChild?.classList?.contains('red'));
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
      --fcc-editable-region--
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
      --fcc-editable-region--
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}

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
  background-color: rgb(0, 0, 0);
}

.two {
  background-color: rgb(0, 0, 0);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
