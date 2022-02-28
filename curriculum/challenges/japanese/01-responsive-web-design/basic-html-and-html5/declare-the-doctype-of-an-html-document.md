---
id: 587d78aa367417b2b2512aed
title: HTML ドキュメントの Doctype を宣言する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

これまでのチャレンジでは、特定の HTML 要素とその使い方を学んできました。 しかし、ページ全体の構造を示すため、すべての HTML ドキュメントに含めるべき要素がいくつかあります。

ドキュメントの最上部で、あなたのページが使用している HTML のバージョンをブラウザに伝える必要があります。 HTML は進化する言語であり、定期的に更新されています。 ほとんどの主要なブラウザは最新の仕様 (HTML5) をサポートしています。 ただし、古いウェブページでは以前のバージョンの言語を使用していることがあります。

この情報をブラウザに伝えるには `<!DOCTYPE ...>` タグを 1 行目に追加します。`...`の部分が HTML のバージョンになります。 HTML5 の場合は `<!DOCTYPE html>` を使用します。

古いブラウザでは特に `!` と大文字の `DOCTYPE` が重要です。 ここでの `html` は大文字と小文字を区別しません。

次に、残りの HTML コードを `html` タグで囲む必要があります。 開始タグ `<html>` は `<!DOCTYPE html>` の行のすぐ下に、終了タグ `</html>` はページの一番最後に置きます。

こちらがページの構造の例です。 あなたの HTML コードは 2 つの `html` タグの間に入ります。

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

HTML5 の `DOCTYPE` タグを、コードエディタに表示されている空白の HTML ドキュメントの先頭に追加してください。 その下に、`html` の開始タグと終了タグを追加して、`h1` 要素を囲むようにしてください。 見出しのテキストは何でも構いません。

# --hints--

あなたのコードには `<!DOCTYPE html>` タグが含まれている必要があります。

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

`html` 要素が 1 つ必要です。

```js
assert($('html').length == 1);
```

`html` タグは 1 つの `h1` 要素を囲む必要があります。

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
