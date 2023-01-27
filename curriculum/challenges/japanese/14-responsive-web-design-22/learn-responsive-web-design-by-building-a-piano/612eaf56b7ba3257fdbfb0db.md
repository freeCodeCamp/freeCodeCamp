---
id: 612eaf56b7ba3257fdbfb0db
title: ステップ 21
challengeType: 0
dashedName: step-21
---

# --description--

ピアノを公式なものにするため、freeCodeCamp のロゴを追加しましょう。

`img` 要素を `.keys` 要素の前に 1 つ追加してください。 その `img` の `class` 属性の値を `logo` に、`src` 属性の値を `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg` に設定してください。 また、`freeCodeCamp Logo` という `alt` テキストを加えてください。

# --hints--

新しい `img` 要素を 1 つ追加してください。

```js
assert(document.querySelectorAll('img')?.length === 1);
```

`img` 要素は最初の `.key` 要素の前に来る必要があります。

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

`img` 要素には値が `logo` に設定されている `class` が必要です。

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

`img` 要素には値が `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg` に設定されている `src` 属性が必要です。

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

`img` 要素には値が `freeCodeCamp Logo` に設定されている `alt` 属性が必要です。

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

大文字小文字の区別とスペルに気をつけましょう。

```js
assert(document.querySelector('img')?.getAttribute('alt') === 'freeCodeCamp Logo');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys">
    --fcc-editable-region--
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}
```
