---
id: bad87fee1348bd9aedf08726
title: 使用十六進制編碼獲得指定顏色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

你知道在 CSS 裏面還有其他方式來代表顏色嗎？ 其中一個方法叫十六進制編碼，簡稱 hex。

日常生活中，我們使用的計數方法一般是 <dfn>decimals</dfn>，或十進制，即使用數字 0 到 9 來表示。 而 <dfn>Hexadecimals</dfn>（或 <dfn>hex</dfn>）基於 16 位數字， 它包括 16 種不同字符。 像十進制一樣，0-9 的符號代表 0 到 9 的值。 然後，A、B、C、D、E、F 代表 10 至 15 的值。 總的來說，0 到 F 在十六進制裏代表數字，總共有 16 個值。 你可以在<a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">此處</a>找到更多關於十六進制的信息。

在 CSS 裏面，我們可以使用 6 個十六進制的數字來代表顏色，每兩個數字控制一種顏色，分別是紅（R）、綠（G）、藍（B）。 例如，`#000000` 代表黑色，同時也是最小的值。 你可以在<a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">此處</a>找到更多關於 RGB 顏色系統的信息。

```css
body {
  color: #000000;
}
```

# --instructions--

將 `body` 元素的背景顏色由 `black` 改爲它對應的十六進制編碼 `#000000`。

# --hints--

`body` 元素的 `background-color` 應爲黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

應該使用黑色的十六進制代碼，而不是 `black` 這個詞。

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
