---
id: bad87fee1348bd9aede08817
title: アンカー要素を段落内にネストする
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

リンクは他のテキスト要素内にネストする (入れ子にする) ことができます。

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

上の例を詳しく見てみましょう。 通常のテキストが `p` 要素に囲まれています。

```html
<p> Here's a ... for you to follow. </p>
```

次は*アンカー*要素 `<a>` です。 (終了タグ `</a>` が必要です):

```html
<a> ... </a>
```

`target` は、リンクをどこで開くかを指定するアンカータグの属性です。 `_blank` という値は、新しいタブでリンクを開くように指定します。 `href` は、リンクの URL を入れるアンカータグの属性です。

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

`a` 要素の中にあるテキスト `link to www.freecodecamp.org` は <dfn>アンカーテキスト</dfn> と呼ばれ、クリック可能なリンクとして表示されます。

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

上の例の最終的な出力は次のようになります。

Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.

# --instructions--

既存の `a` 要素を、新しい `p` 要素の中にネストしてください。 新しいアンカータグは作成しないようにしてください。 新しい段落要素は `View more cat photos` というテキストを持ち、`cat photos` はリンク、残りは通常のテキストになるようにしてください。

# --hints--

`a` 要素が 1 つだけあるようにしてください。

```js
assert(
  $('a').length  === 1 
);
```

`a` 要素は "`https://www.freecatphotoapp.com`" にリンクする必要があります。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

`a` 要素は、`cat photos` というアンカーテキストを持つ必要があります。

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

新しい `p` 要素を作成してください。 HTML コードには、`p` タグが少なくとも合計 3 つあるはずです。

```js
assert($('p') && $('p').length > 2);
```

`a` 要素は新しく作成した `p` 要素の中にネストされている必要があります。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

`p` 要素には `View more` (その後に半角スペース) というテキストが必要です。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

`a` 要素には `View more` というテキストが含まれ<em>ない</em>ようにしてください。

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

それぞれの `p` 要素に終了タグが必要です。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

それぞれの `a` 要素に終了タグが必要です。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
