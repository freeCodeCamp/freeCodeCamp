---
id: 587d78a8367417b2b2512ae3
title: アニメーション回数を無限にして要素のアニメーションを継続させる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

これまでのチャレンジでは、アニメーションプロパティのいくつかと `@keyframes` ルールの使用方法について説明しました。 もう一つのアニメーションプロパティとして `animation-iteration-count` があり、これはアニメーションをループさせたい回数を制御できます。 例:

```css
animation-iteration-count: 3;
```

この場合、アニメーションは 3 回実行されると停止します。 しかし、この値を `infinite` に設定することで、アニメーションを継続的に実行させることができます。

# --instructions--

右側の跳ね回るボールのループを繰り返させるには、`animation-iteration-count` プロパティを `infinite` に変更します。

# --hints--

`animation-iteration-count` プロパティの値は `infinite` でなければなりません。

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
