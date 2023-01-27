---
id: 587d7790367417b2b2512aaf
title: HTML アクセスキーでリンクをナビゲーション可能にする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML は要素をアクティブ化したりフォーカスを与えるショートカットキーを指定する `accesskey` 属性を提供します。 `accesskey` 属性を追加することで、キーボードだけを使用するユーザーのナビゲーションがより効率的になります。

HTML5 ではこの属性を任意の要素に使用することができますが、これを対話型の要素に使用すると特に有益です。 これにはリンク、ボタン、フォームコントロールが含まれます。

例:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat は、2 つのブログ記事タイトル周りのリンクがキーボードショートカットを持つことで、サイトのユーザーがすぐに記事全体のページへ移動できるようにしたいと思っています。 両方のリンクに `accesskey` 属性を追加し、1 番目のものに `g` (Garfield の g) に、2 番目のものに `c` (Chuck Norris の c) を設定します。

# --hints--

コードは `id` が `first` 値を持つ `a` タグに `accesskey` 属性を追加する必要があります。

```js
assert($('#first').attr('accesskey'));
```

コードは `id` が `second` 値を持つ `a` タグに `accesskey` 属性を追加する必要があります。

```js
assert($('#second').attr('accesskey'));
```

コードには `id` が `first` 値を持つ `a` タグに `accesskey` 属性として `g` を設定する必要があります。 大文字・小文字が区別されることに注意してください。

```js
assert($('#first').attr('accesskey') == 'g');
```

コードには `id` が `second` 値を持つ `a` タグに `accesskey` 属性として `c` を設定する必要があります。 大文字・小文字が区別されることに注意してください。

```js
assert($('#second').attr('accesskey') == 'c');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
