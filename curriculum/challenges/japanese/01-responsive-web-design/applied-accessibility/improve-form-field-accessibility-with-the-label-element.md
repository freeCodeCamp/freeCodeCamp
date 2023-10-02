---
id: 587d778a367417b2b2512aa6
title: label 要素を使ってフォームフィールドのアクセシビリティを向上させる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

セマンティックな HTML マークアップでアクセシビリティを向上させるには、適切なタグ名と属性を使用する必要があります。 ここからいくつかのチャレンジでは、フォームで属性を使用する主要なシナリオを学びます。

`label` タグは、指定のフォームコントロール (入力フィールド) アイテムのテキストを囲みます。通常は、選択肢の名前またはラベルを囲みます。 これはアイテムと意味を紐付け、フォームをより読みやすくします。 `label` タグの `for` 属性は `label` とフォームコントロールを明示的に関連付けるもので、スクリーンリーダーが使用します。

「HTML と HTML5 の基礎」セクションのレッスンでラジオボタンとそのラベルについて学びました。 あのレッスンではテキストをクリック可能にするために、ラジオボタンの入力要素をラベルテキストと共に `label` 要素の内側に入れました。 同じことを実現するもう一つの方法が、このレッスンで説明する `for` 属性を使うことです。

`for` 属性の値は必ずフォームコントロールの `id` 属性と同じ値でなければなりません。 例:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat は彼の示唆に富んだブログ記事に多くの関心が寄せられるだろうと期待しているので、電子メールのサインアップフォームも設置したいと考えています。 電子メール (Email) の `label` の `for` 属性に、`input` フィールドの `id` と一致する値を追加してください。

# --hints--

`label` タグの `for` 属性は空にしてはいけません。

```js
assert($('label').attr('for'));
```

`for` 属性の値は電子メールの `input` の `id` 値と一致している必要があります。

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
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
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
