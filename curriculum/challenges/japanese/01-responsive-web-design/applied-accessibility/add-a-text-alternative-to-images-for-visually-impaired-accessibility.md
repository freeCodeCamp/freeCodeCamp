---
id: 587d774c367417b2b2512a9c
title: 視覚障害者のアクセシビリティのために画像の代替テキストを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

他のチャレンジで、`img` タグに `alt` 属性があるのを見たことがあるでしょう。 `alt` テキストは画像の内容を説明するもので、画像に対する代替テキストを提供します。 `alt` 属性は、画像の読み込みに失敗したり、ユーザーがそれを見ることができない場合に役立ちます。 また、検索エンジンが検索結果の画像に含まれているものを理解するためにも使用されます。 例:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

視覚障害を持つ人々は、ウェブコンテンツをオーディオインターフェースへ変換するためにスクリーンリーダーを利用しています。 視覚的にしか表示されていない場合、彼らは情報を取得できません。 画像の場合、核心となる情報を伝えるために、スクリーンリーダーは `alt` 属性にアクセスしてその内容を読み上げることができます。

良い `alt` テキストは、画像の簡単な説明を読者に提供します。 画像には `alt` 属性を常に含めるようにしましょう。 HTML5 仕様では、これは必須と考えられています。

# --instructions--

Camper Cat はコーディング忍者かつ実際の忍者でもあり、その知識を共有するためにウェブサイトを作成しています。 彼が使用したいプロフィール画像は彼のスキルを表すものなので、すべてのサイト訪問者に認識されるべきです。 `img` タグに `alt` 属性を追加し、Camper Cat が空手をしている様子だと説明してください。 (画像の `src` は実際のファイルにリンクされていないため、`alt` テキストが表示されることが確認できるでしょう。)

# --hints--

`img` タグは空ではない `alt` 属性を持つ必要があります。

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
