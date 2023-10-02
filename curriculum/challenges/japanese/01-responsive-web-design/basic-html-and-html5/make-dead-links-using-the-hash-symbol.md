---
id: bad87fee1348bd9aedf08817
title: ハッシュ記号を使用してデッドリンクを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

時々、リンク先をどこにするか決める前に `a` 要素を追加したいことがあります。

この方法は、`JavaScript` を使用してリンクの動作を変更する場合にも便利です。こちらは後ほど学習します。

# --instructions--

`href` 属性の現在の値は "`https://www.freecatphotoapp.com`" を指すリンクです。 `href` 属性の値をハッシュ記号 `#` に置き換え、デッドリンクを作成してください。

例: `href="#"`

# --hints--

`a` 要素は、`href` 属性の値が "#" に設定されたデッドリンクである必要があります。

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
