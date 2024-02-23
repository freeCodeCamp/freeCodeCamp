---
id: bad87fee1348bd9aecf08801
title: HTML5 要素入門
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 では、より説明的な HTML タグが導入されています。 例えば `main`, `header`, `footer`, `nav`, `video`, `article`, `section` など。これ以外にもあります。

これらのタグは HTML の文章に記述的な構造を与え、HTML を読みやすくし、SEO (検索エンジン最適化) やアクセシビリティを向上させます。 HTML5 の `main` タグは、検索エンジンや他の開発者があなたのページのメインコンテンツを見つけるのに役立ちます。

例えば、2 つの子要素が入れ子にされた `main` 要素は次のようになります:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**注:** 新しい HTML5 タグとその利点については、応用アクセシビリティのセクションで詳細に解説します。

# --instructions--

次の kitty ipsum テキストを持つ 2 つ目の `p` 要素を作成してください: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

次に、`main` 要素を作成し、2 つの `p` 要素を `main` 要素の中に入れ子で配置してください。

# --hints--

Kitty Ipsum テキストを持つ 2 つの `p` 要素が必要です。

```js
assert($('p').length > 1);
```

それぞれの `p` 要素に終了タグが必要です。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

`p` 要素には、追加で与えられた `kitty ipsum` テキストの、はじめの数単語を含む必要があります。

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

コードには `main` 要素が1つ必要です。

```js
assert($('main').length === 1);
```

`main` 要素は、子要素として 2 つの段落要素を持つ必要があります。

```js
assert($('main').children('p').length === 2);
```

`main` の開始タグは、最初の段落タグの前になければなりません。

```js
assert(code.match(/<main>\s*?<p>/g));
```

`main` の終了タグは、2 番目の段落の終了タグの後になければなりません。

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
