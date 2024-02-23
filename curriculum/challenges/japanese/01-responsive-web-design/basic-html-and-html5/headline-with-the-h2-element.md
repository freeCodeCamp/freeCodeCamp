---
id: bad87fee1348bd9aedf0887a
title: h2 要素を使った見出し
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

ここからいくつかのレッスンを通して、HTML5 で猫の写真を表示するウェブアプリを作ります。

このステップで追加する `h2` 要素は、ウェブページにレベル 2 の見出し要素を追加します。

この要素は、あなたのウェブサイトの構造をブラウザに伝えます。 `h1` 要素はメインの見出しに、`h2` 要素は小見出しに使われることが多いです。 他に `h3`, `h4`, `h5`, `h6` 要素があり、異なるレベルの小見出しを表します。

# --instructions--

"CatPhotoApp" のテキストを持つ `h2`タグを追加して、"Hello World" の `h1` 要素の下に2つ目のHTML要素を作成してください。

# --hints--

`h2` 要素を作成してください。

```js
assert($('h2').length > 0);
```

`h2` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2` 要素のテキストは `CatPhotoApp` でなければなりません。

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1` 要素のテキストは `Hello World` でなければなりません。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

`h1` 要素は `h2` 要素の前に置く必要があります。

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
