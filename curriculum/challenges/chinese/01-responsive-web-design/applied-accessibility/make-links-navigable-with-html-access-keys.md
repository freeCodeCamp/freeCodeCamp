---
id: 587d7790367417b2b2512aaf
title: 通过给元素添加 accesskey 属性来让用户可以在链接之间快速导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 1
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML 提供 `accesskey` 属性，用于指定激活元素或者使元素获得焦点的快捷键。这可以让键盘用户的导航更加便捷。

HTML5 允许在任何标签上使用这个属性。该属性尤其适用于链接、按钮、表单组件等元素。

举个例子：

`<button accesskey="b">Important Button</button>`

# --instructions--

Camper Cat 希望为他两篇博客的标题链接设置快捷键，以使用户可以快速导航到文章的全文。请为这两个链接添加 `accesskey` 属性，并将第一个的属性值设置为 "g"（表示 Garfield），将第二个的属性值设置为 "c"（表示 Chuck Norris）。

# --hints--

`id` 为 "first" 的 `a` 标签应具有 `accesskey` 属性。

```js
assert($('#first').attr('accesskey'));
```

`id` 为 "second" 的 `a` 标签应具有 `accesskey` 属性。

```js
assert($('#second').attr('accesskey'));
```

`id` 为 "first" 的 `a` 标签的 `accesskey` 属性值应为小写的 "g"。

```js
assert($('#first').attr('accesskey') == 'g');
```

`id` 为 "second" 的 `a` 标签的 `accesskey` 属性值应为小写的 "c"。

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


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
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


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
