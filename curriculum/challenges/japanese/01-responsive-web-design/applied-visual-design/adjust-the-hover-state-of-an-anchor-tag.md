---
id: 587d781d367417b2b2512ac8
title: アンカータグのホバー状態を調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

このチャレンジでは疑似クラスの使い方について触れます。 疑似クラスは、セレクターに追加して要素の特定の状態を選択することができるキーワードです。

例えば、`:hover` という疑似クラスセレクターを使用して、ホバー状態のアンカータグのスタイルを変更することができます。 アンカータグがホバー状態の間だけ `color` を変更する CSS は次の通りです。

```css
a:hover {
  color: red;
}
```

# --instructions--

コードエディタに全ての `a` タグを黒に設定する CSS ルールが書かれています。 ユーザーが `a` タグにマウスカーソルを合わせた時には `color` が青になるようルールを追加してください。

# --hints--

アンカータグの `color` は黒のままで、`:hover` 状態に対する CSS ルールを追加してください。

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

アンカータグがホバー状態の時、`color` は青である必要があります。

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
