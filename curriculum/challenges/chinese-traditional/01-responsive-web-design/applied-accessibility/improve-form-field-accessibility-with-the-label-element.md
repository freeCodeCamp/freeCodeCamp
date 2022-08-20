---
id: 587d778a367417b2b2512aa6
title: 使用 label 元素提高表單的可訪問性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

合理地使用語義化的 HTML 標籤和屬性可以提升頁面可訪問性。 在接下來的挑戰中，你將會看到在表單中使用屬性的場景。

`label` 標籤的文本內容通常會是表單組件的名稱或標籤。 這些文本表明了組件的意義，也提升了表單的可訪問性。 `label` 標籤的 `for` 屬性將標籤與表單組件綁定；同時，屏幕閱讀器也會讀取 `for` 屬性的屬性值。

在 HTML 基礎章節中，我們已經學習使用了單選按鈕標籤。 在那個挑戰中，爲了讓標籤可以在點擊的時候也選中輸入框，我們將單選按鈕 input 標籤嵌套在了 `label` 標籤裏面。 在本節課程中，我們介紹了另外一種實現這個功能的方法，那就是使用 `for` 屬性。

`for` 的屬性值必須與表單組件的 `id` 屬性值相同。 舉個例子：

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat 覺得他的博客文章會有很多人訂閱，因此他想添加一個電子郵件註冊表單。 請爲表示電子郵件的 `label` 標籤添加 `for` 屬性，並將其屬性值設置爲與 `input` 標籤的 `id` 屬性值相同。

# --hints--

`label`標籤應該有一個非空的 `for` 屬性。

```js
assert($('label').attr('for'));
```

`for` 的屬性值應與用於輸入郵箱的 `input` 標籤 `id` 屬性值相同。

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
