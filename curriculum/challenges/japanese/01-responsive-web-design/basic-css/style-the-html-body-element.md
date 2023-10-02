---
id: bad87fee1348bd9aedf08736
title: HTML の Body 要素のスタイルを変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

ここからは新しく CSS の継承についての話を始めましょう。

すべての HTML ページには `body` 要素があります。

# --instructions--

`background-color` を黒に設定すれば、ここに `body` 要素があることが確認できます。

`style` 要素に以下を追加することでそれができます:

```css
body {
  background-color: black;
}
```

# --hints--

`body` 要素は `background-color` を黒に設定されている必要があります。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

CSS ルールは、開始と終了両方の波括弧で適切にフォーマットされている必要があります。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

CSS ルールはセミコロンで終わる必要があります。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
