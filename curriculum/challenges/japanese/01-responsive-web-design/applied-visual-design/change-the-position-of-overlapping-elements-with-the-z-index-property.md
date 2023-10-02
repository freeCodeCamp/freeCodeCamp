---
id: 587d78a3367417b2b2512acf
title: 重なっている要素の位置を z-index プロパティで変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

要素が重なり合うように配置されたとき (例: `position: absolute | relative | fixed | sticky` を使う場合)、HTML マークアップのより後にある要素は、デフォルトでは他の要素の上に表示されます。 ところが、`z-index` プロパティで要素が重なり合う順番を指定することができます。 値は整数でなければならず (小数は不可)、`z-index` プロパティの値が高いほど、低い値を持つ要素よりも上に重ねられます。

# --instructions--

`z-index` プロパティをクラス名 `first` の要素 (赤色の長方形) に追加し、値を 2 に設定して、他の要素 (青色の長方形) の上に重なるようにしてください。

# --hints--

クラスが `first` の要素の `z-index` の値は 2 である必要があります。

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
