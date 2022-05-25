---
id: 587d78a4367417b2b2512ad5
title: 色のトーンを調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

CSS の `hsl()` オプションでは、色のトーンも簡単に調整することができます。 純粋な色に白を混ぜると淡い色が作れ、黒を加えると暗い色を作れます。 あるいは、グレーを追加したり濃淡の両方によって色調が作られます。 `hsl()` の 's' と 'l' はそれぞれ saturation (彩度) と lightness (明度) を表していることを思い出してください。 彩度のパーセントはグレーの量を変え、明度のパーセントは色の中に白か黒がどれくらいあるかを決定します。 これは、あなたが好きな色のベースの色相があり、そのバリエーションが必要な時に役立ちます。

# --instructions--

すべての要素は `background-color` のデフォルト値として `transparent` を持っています。 私達の `nav` 要素の背景色は今 `cyan` になっているように見えます。その後ろにある要素の `background-color` が `cyan` に設定されているからです。 `nav` 要素に `background-color` を追加して、同じ `cyan` の色相で、彩度は `80%`、明度は `25%` の値を設定して色調と暗さを変えましょう。

# --hints--

`nav` 要素の `background-color` は、`hsl()` プロパティを使ってトーンを調整されたシアンである必要があります。

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
