---
id: 587d78a7367417b2b2512ae1
title: CSS アニメーションを使って動きを作る
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

要素に `fixed` や `relative` のような `position` が指定されているとき、CSS オフセットプロパティ `right`、`left`、`top`、`bottom` を使ってアニメーションのルールで動きを付けることができます。

下記の例のように、`50%` のキーフレームで `top` プロパティを 50px に設定し、最初 (`0%`) と最後 (`100%`) のキーフレームでは 0px を設定することで、要素を上下に動かすことができます。

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

`div` のアニメーションに水平方向の動きを追加しましょう。 `@keyframes` ルールに `left` オフセットプロパティを追加し、rainbow のアニメーションが `0%` で 0 ピクセルから始まり、`50%` で 25 ピクセルになり、`100%` で -25 ピクセルで終わるようにしてください。 エディタにある `top` プロパティは書き換えないようにしてください。アニメーションは垂直方向と水平方向両方の動きを持つ必要があります。

# --hints--

`0%` の `@keyframes` ルールは、`left` オフセットが 0px である必要があります。

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`50%` の `@keyframes` ルールは、`left` オフセットが 25px である必要があります。

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`100%` の `@keyframes` ルールは、`left` オフセットが -25px である必要があります。

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
