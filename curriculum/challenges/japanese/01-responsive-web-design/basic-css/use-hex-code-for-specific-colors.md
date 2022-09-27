---
id: bad87fee1348bd9aedf08726
title: 特定の色に 16 進数コードを使用する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

CSS で色を表現する方法は他にもあることをご存知でしたか？ これらの方法の一つは 16 進数 (hexadecimal) カラーコード、または hexadecimal を略して hex コードと呼ばれます。

私達は日常的に <dfn>10 進数</dfn>、つまり基数が 10 の数字を使用しています。10 進数では各桁に 0 から 9 の記号を使用します。 <dfn>16 進数</dfn> (または <dfn>16 進、ヘクサ、hex</dfn> など) は基数が 16 の数字です。 これは 16 個の異なる記号を使用することを意味します。 10 進数と同様に、0-9 の記号は 0 から 9 までの値を表します。 その後、A、B、C、D、E、F は 10 から 15 の値を表します。 これを合わせて 0 ～ F で 16 進数の 1 桁を表し、合計 16 個の値をとることができます。 <a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">16 進数について詳しくはこちら</a> を参照してください。

CSS では、6 桁の 16 進数の数字を使用して色を表すことができます。2 桁ごとに赤 (R)、緑 (G)、青 (B) の成分を表します。 例えば、`#000000` は黒を表し、また表すことができる最も低い値です。 <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">RGB カラーモデルについて詳しくはこちら</a> を参照してください。

```css
body {
  color: #000000;
}
```

# --instructions--

`body` 要素の background-color の `black` を、16 進数コード表記 `#000000` に置き換えてください。

# --hints--

`body` 要素は `background-color` を黒に設定されている必要があります。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

`black` という単語の代わりに、黒を表す 16 進数コードを使用します。

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
