---
id: bad87fee1348bd9aede08718
title: 要素の色指定に RGB 値を使用する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

CSS で色を表現するもう一つの方法は、`RGB` の値を使用することです。

黒の `RGB` の値は以下のようになります:

```css
rgb(0, 0, 0)
```

白の `RGB` の値は以下のようになります:

```css
rgb(255, 255, 255)
```

6 桁の 16 進数を使う代わりに、`RGB` ではそれぞれの色の明るさを 0 から 255 の数字で指定します。

計算してみると、1 色を表す 16 進数 2 桁は 16×16 と等しく、合計 256 通りの値となることが分かります。 したがって、0 から数え始める `RGB` の取り得る値は、16 進数コードの場合と全く同じ数になります。

RGB コードを使用して `body` の背景をオレンジに変更する例を以下に示します。

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

`body` 要素の背景色の 16 進数コードを、黒を表す RGB 値 `rgb(0, 0, 0)` に置き換えましょう。

# --hints--

`body` 要素の背景は黒になるはずです。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

`body` 要素の背景色を黒にするために `rgb` を使用してください。

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
