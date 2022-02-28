---
id: 587d774c367417b2b2512a9d
title: 代替テキストを空白のままにする必要がある場合を知る
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

前回のチャレンジでは、`img` タグを使用する際に `alt` 属性の指定が必須であることを学びました。 ただし、既に画像を説明するキャプションとグループ化されていたり、装飾のみに使用されていたりする画像の場合もあります。 これらの場合、`alt` テキストは冗長、もしくは不要かもしれません。

画像が既にテキストコンテンツによって説明されている、もしくは特に意味を持たない画像である場合、`img` には `alt` 属性は引き続き必要ですが、空の文字列が設定可能です。 例:

```html
<img src="visualDecoration.jpeg" alt="">
```

背景画像は通常、「装飾用」画像に分類されます。 ただし、通常これらは CSS ルールによって適用されるため、スクリーンリーダーが処理するマークアップの一部ではありません。

**注:** キャプション付きの画像の場合、サーチエンジンが画像コンテンツの内容を分類するのに役立つので、`alt` テキストを含めると良いでしょう。

# --instructions--

Camper Cat は彼のウェブサイトのブログ部分の骨組みとなるコードを書きました。 二つの記事の間に日本刀の装飾画像を追加し、視覚的な切れ目を入れようとしています。 `img` タグに `alt` 属性を追加し、空の文字列に設定してください。 (注: `src` は実際のファイルとリンクしていません。ディスプレイに刀が表示されていなくても心配ありません。)

# --hints--

`img` 要素には `alt` 属性が必要です。

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` 属性は空文字列に設定する必要があります。

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
