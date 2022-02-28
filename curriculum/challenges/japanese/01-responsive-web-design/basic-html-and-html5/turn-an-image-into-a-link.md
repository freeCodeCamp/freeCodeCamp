---
id: bad87fee1348bd9aedf08820
title: 画像をリンクにする
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

ある要素を `a` 要素内にネストすることで、その要素をリンクにすることができます。

画像を `a` 要素内にネストしてみましょう。 例:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

デッドリンクにするには `a` 要素の `href` プロパティとして `#` を使うことを忘れないでください。

# --instructions--

既存の画像要素を `a` (*アンカー*) 要素で囲んでください。

それができたら、マウスカーソルを画像の上に持っていってみましょう。 マウスカーソルがリンクをクリックするときの形に変わるはずです。 これで画像がリンクになりました。

# --hints--

既存の `img` 要素が `a` 要素内にネストされている必要があります。

```js
assert($('a').children('img').length > 0);
```

`a` 要素は、`href` 属性が `#` に設定されたデッドリンクである必要があります。

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
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
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
