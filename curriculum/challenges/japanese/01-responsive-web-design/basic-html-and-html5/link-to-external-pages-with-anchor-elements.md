---
id: bad87fee1348bd9aedf08816
title: アンカー要素で外部ページにリンクする
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

`a` (*アンカー*) 要素を使用して、あなたのウェブページ外のコンテンツへリンクすることができます。

`a` 要素には、`href` 属性と呼ばれるリンク先のウェブアドレスが必要です。 また、アンカーテキストも必要です。 例:

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

これで、あなたのブラウザは `this links to freecodecamp.org` というテキストをクリック可能なリンクとして表示することができます。 そして、そのリンクをクリックするとウェブアドレス `https://www.freecodecamp.org` に移動することができます。

# --instructions--

リンク先が `https://www.freecatphotoapp.com`、アンカーテキストが "cat photos" の `a` 要素を作成してください。

# --hints--

`a` 要素は、`cat photos` というアンカーテキストを持つ必要があります。

```js
assert(/cat photos/gi.test($('a').text()));
```

`https://www.freecatphotoapp.com` にリンクする `a` 要素が必要です。

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

`a` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
