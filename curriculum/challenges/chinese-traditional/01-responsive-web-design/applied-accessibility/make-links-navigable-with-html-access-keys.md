---
id: 587d7790367417b2b2512aaf
title: 通過給元素添加 accesskey 屬性來讓用戶可以在鏈接之間快速導航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML 提供 `accesskey` 屬性，用於指定激活元素或者使元素獲得焦點的快捷鍵。 添加 `accesskey` 屬性可以讓使用鍵盤的用戶更高效率地導航。

HTML5 允許在任何標籤上使用這個屬性。 該屬性尤其適用於鏈接、按鈕、表單組件等元素。

舉個例子：

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat 希望爲他兩篇博客的標題鏈接設置快捷鍵，以使用戶可以快速導航到文章的全文。 爲兩個鏈接添加一個 `accesskey` 屬性，設置第一個的值爲 `g`（代表 Garfield），設置第二的值爲 `c`（代表 Chuck Norris）。

# --hints--

`id` 爲 `first` 的 `a` 標籤應具有 `accesskey` 屬性。

```js
assert($('#first').attr('accesskey'));
```

`id` 爲 `second` 的 `a` 標籤應具有 `accesskey` 屬性。

```js
assert($('#second').attr('accesskey'));
```

`id` 爲 `first` 的 `a` 標籤的 `accesskey` 屬性值應爲 `g`。 注意要使用小寫。

```js
assert($('#first').attr('accesskey') == 'g');
```

`id` 爲 `second` 的 `a` 標籤的 `accesskey` 屬性值應爲 `c`。 注意使用小寫。

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
