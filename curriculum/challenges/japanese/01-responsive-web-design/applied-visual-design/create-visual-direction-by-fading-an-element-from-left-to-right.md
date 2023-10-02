---
id: 587d78a7367417b2b2512ae2
title: 要素を左から右にフェードアウトさせて視覚的な方向を表現する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

このチャレンジでは、アニメーションされている要素の `opacity` を変更し、画面の右側に行くにつれて徐々に薄くなるようにします。

このアニメーションでは、グラデーション背景の丸い要素は、`@keyframes` ルールに従ってアニメーションの 50% 時点まで右に移動します。

# --instructions--

`ball` という id を持つ要素を対象に、`50%` 時点の `opacity` プロパティを 0.1 に設定して、要素が右に動く際にフェードするようにします。

# --hints--

fade 用の `keyframes` ルールは、50％ の時点で `opacity` プロパティを 0.1 に設定します。

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
