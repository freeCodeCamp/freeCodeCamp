---
id: bd7158d8c442eddfaeb5bd18
title: トリビュートページを作成する
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**目標:** <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a> と似た機能を持つアプリを作成します

**ユーザーストーリー:**

1. トリビュートページには `id` が `main` に設定された `main` 要素が 1 つあり、その中に他のすべての要素が含まれます
1. `id` の値が `title` に設定されている要素が 1 つあり、それにはトリビュートページで取り上げる対象者 (例: "Dr. Norman Borlaug") を説明する文字列 (すなわちテキスト) が記載されています
1. `id` の値が `img-div` に設定されている `figure` 要素または `div` 要素のどちらかがあります
1. `#img-div` の要素内には、`id="image"` を持つ `img` 要素があります
1. `#img-div` の要素内には、`id="img-caption"` を持つ要素があり、そこには `#img-div` 内に表示されている画像を説明するテキストが含まれます
1. `id="tribute-info"` を持つ要素が 1 つあり、これにはトリビュートページの対象者を説明するテキストが含まれます
1. `id="tribute-link"` を持つ `a` 要素が 1 つあり、トリビュートページの対象者に関する追加情報を含む外部サイトへのリンクとなっています。 ヒント: リンクが新しいタブで開くように、要素に `target` 属性を与え、その値に `_blank` を設定しなければなりません
1. `#image` に `max-width` と `height` プロパティを使用して、元のサイズを超えることなく、親要素の幅に応じてサイズが変更されるようにします
1. `img` 要素は親要素に対し (水平方向の) 中央に配置されています

上記のユーザーストーリーを満たし、以下のすべてのテストが通るようにして、このプロジェクトを完成させてください。 あなた独自のスタイルを加えましょう。 ハッピーコーディング！

**注:** スタイルシートをリンクして CSS を適用するため、HTML のコード内に必ず `<link rel="stylesheet" href="styles.css">` を追加してください。

# --hints--

`id` の値が `main` に設定されている `main` 要素が 1 つ必要です。

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

`#img-div`、`#image`、`#img-caption`、`#tribute-info`、および `#tribute-link` は、すべて `#main` の子孫要素である必要があります。

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

`id` が `title` の要素が 1 つ必要です。

```js
const el = document.getElementById('title')
assert(!!el)
```

`#title` が空でないようにしてください。

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

`id` の値が `img-div` に設定されている、`figure` または `div` 要素が 1 つ必要です。

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

`id` の値が `image` に設定されている `img` 要素が 1 つ必要です。

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

`#image` は `#img-div` の子孫要素である必要があります。

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

`id` の値が `img-caption` に設定されている、`figcaption` または `div` 要素が 1 つ必要です。

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

`#img-caption` は `#img-div` の子孫要素である必要があります。

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

`#img-caption` が空でないようにしてください。

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

`id` が `tribute-info` の要素が 1 つ必要です。

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

`#tribute-info` が空でないようにしてください。

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

`id` の値が `tribute-link` に設定されている `a` 要素が 1 つ必要です。

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

`#tribute-link` は `href` 属性とその値をもつ必要があります。

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

`#tribute-link` は、値が `_blank` に設定されている `target` 属性をもつ必要があります。

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

`img` 要素の `display` の値は `block` に設定されている必要があります。

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

`#image` の `max-width` の値は `100%` に設定されている必要があります。

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

`#image` の `height` の値は `auto` に設定されている必要があります。

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

`#image` は親要素内の中央に配置する必要があります。

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
