---
id: bad87fee1348bd9aedf08812
title: ウェブサイトに画像を追加する
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

`img` 要素を使用し、特定の画像に対するURLを `src` 属性で指定することで、ウェブサイトに画像を追加することができます。

この例は次のとおりです:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

`img` 要素は終了タグを持たないことに注意してください。

すべての `img` 要素は **必ず** `alt` 属性を持たなければなりません。 `alt` 属性内のテキストは、アクセシビリティを向上させるためにスクリーンリーダーが使用します。また、画像の読み込みに失敗した場合にも表示されます。

**注:** 単なる装飾目的の画像である場合には、空の `alt` 属性を使用することがベストプラクティスです。

理想的には、必要がない限り `alt` 属性には特殊文字を含まないようにしてください。

上の例の `img` に `alt` 属性を追加してみましょう:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

私達のウェブサイトに画像を追加しましょう。

既存の `main` 要素内の `p` 要素の前に `img` 要素を挿入します。

次に `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg` という url を指すように `src` 属性を設定します。

最後に、`img` 要素に適切なテキストを持つ `alt` 属性を与えることを忘れないでください。

# --hints--

ページに画像要素が必要です。

```js
assert($('img').length);
```

画像には、子猫の画像を指す `src` 属性が必要です。

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

画像要素の `alt` 属性は空であってはいけません。

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
