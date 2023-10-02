---
id: 587d781e367417b2b2512ac9
title: 要素の相対位置を変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS は各 HTML 要素を独自のボックスとして扱います。これは一般に <dfn>CSS ボックスモデル</dfn> と呼ばれます。 ブロックレベル要素 (見出し、段落、div 要素など) は自動的に新しい行から始まりますが、インライン要素 (画像、span 要素など) は周囲のコンテンツの間にとどまります。 このような要素のデフォルトのレイアウトはドキュメントの <dfn>通常フロー</dfn> と呼ばれますが、CSS にはそれをオーバーライドする position プロパティがあります。

ある要素の position が `relative` に設定されていると、その要素を今の通常フローでの位置を基準に *相対的に* どのように CSS で動かすかを指定することができます。 これは CSS のオフセットプロパティの `left` または `right`, および `top` または `bottom` とセットで使います。 これらは要素を通常の位置から何ピクセル、何 %、または何 em *離す* かを表しています。 下記の例は、段落を下から 10 ピクセル離すように移動します。

```css
p {
  position: relative;
  bottom: 10px;
}
```

要素の position を relative に変更しても、その要素は通常フローからは削除されません。周りにある要素は、その要素がデフォルトの位置にあるかのように動作します。

**注:** position の変更により、ページの視覚的なレイアウトを柔軟にそして強力に変更できます。 要素の位置がどうであれ、基礎となる HTML のマークアップは整理され、上から下に向かって読んだときに意味が通るようになっているべきであることを覚えておくと良いでしょう。 視覚障害を持つユーザー (スクリーンリーダーのような支援機器を頼りにしているユーザー) があなたのコンテンツにアクセスする際、そのように読みます。

# --instructions--

`h2` の `position` を `relative` に変更し、CSS オフセットを使用して、通常フローでの位置の `top` から 15 ピクセル離すように移動させましょう。 周りにある h1 と p 要素の位置には影響がないことを確認してください。

# --hints--

`h2` 要素の `position` プロパティを `relative` に設定してください。

```js
assert($('h2').css('position') == 'relative');
```

CSS オフセットを使用して、`h2` を通常の位置の `top` から相対的に 15px 離して配置する必要があります。

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
