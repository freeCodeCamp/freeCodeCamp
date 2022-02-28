---
id: bad87fee1348bd9aedf08801
title: 段落要素で情報を伝える
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

`p` 要素はウェブサイト上で文章の段落を示すのに適した要素です。 `p` は "paragraph" (段落) の略です。

段落の要素は以下のように作成できます。

```html
<p>I'm a p tag!</p>
```

# --instructions--

`p` 要素を `h2` 要素の下に作成し、段落のテキストは `Hello Paragraph` にしてください。

**注:** 慣習的に、HTMLタグは小文字で書かれます。例えば `<P></P>` ではなく `<p></p>` となります。

# --hints--

正しい `p` 要素が必要です。

```js
assert($('p').length > 0);
```

`p` 要素には `Hello Paragraph` というテキストが必要です。

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

`p` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
