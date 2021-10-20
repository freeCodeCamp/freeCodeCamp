---
id: 587d78a7367417b2b2512adf
title: 瞭解 CSS 的關鍵幀和動畫是如何工作的
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

如果要給元素添加動畫，你需要了解 animation 屬性以及 `@keyframes` 規則。 animation 屬性控制動畫的外觀，`@keyframes` 規則控制動畫中各階段的變化。 總共有 8 個 animation 屬性。 爲了便於理解，本挑戰中我們只會暫時涉及到兩個最常用的屬性。

`animation-name` 用來設置動畫的名稱，也就是我們稍後要在 `@keyframes` 裏用到的名稱。

`animation-duration` 設置動畫所花費的時間。

`@keyframes` 可以通過設置特定時間點的行爲來創建動畫。 爲此，我們只需要給持續時間內的特定幀（從 0% 到 100%）加上 CSS 規則。 如果用一部電影來做類比，那麼 CSS 裏面的 0% 關鍵幀就像是電影裏面的開場鏡頭；100% 關鍵幀就像是電影裏的片尾，就是那個之後會出現演職人員列表的片尾。 在動畫設定的時間內，CSS 會根據關鍵幀的規則來給元素添加動畫效果。 100% 位置的 CSS 屬性就是元素最後的樣子，相當於電影裏的演職員表或者鳴謝鏡頭。 然後CSS 應用魔法來在給定的時間內轉換元素以使其脫離場景。 下面舉例說明 `@keyframes` 和動畫屬性的用法：

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

id 爲 `anim` 的元素，我們在代碼中將它的 `animation-name` 設置爲 `colorful`，同時設置 `animation-duration` 爲 3 秒。 然後我們把 `@keyframes` 規則添加到名爲 `colorful` 的動畫屬性上。 在動畫開始時（0%）的背景顏色爲藍色，在動畫結束時（100%）的背景顏色爲黃色。 注意我們不只可以設置開始和結束，而是從 0% 到 100% 間的任意位置都可以設置。

# --instructions--

給 id 爲 `rect` 的元素添加動畫，設置其 `animation-name` 爲 `rainbow`，設置其 `animation-duration` 爲 4 秒。 然後聲明 `@keyframes` 規則，設置動畫開始時（`0%`）的 `background-color` 爲藍色，動畫中間時（`50%`）爲綠色，動畫結束時（`100%`）爲爲黃色。

# --hints--

id 爲 `rect` 的元素應該有一個值爲 `rainbow` 的 `animation-name` 屬性。

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

id 爲 `rect` 的元素應該有一個值爲 4s 的 `animation-duration` 屬性。

```js
assert($('#rect').css('animation-duration') == '4s');
```

`@keyframes` 規則的 `animation-name` 應爲 `rainbow`。

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`@keyframes` 規則的 `rainbow` 在 0% 時的 `background-color` 應爲 `blue`。

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`@keyframes` 規則的 `rainbow` 在 50% 時的 `background-color` 應爲 `green`。

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

`@keyframes` 規則的 rainbow 在 100% 時的 `background-color` 應爲 `yellow`。

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
