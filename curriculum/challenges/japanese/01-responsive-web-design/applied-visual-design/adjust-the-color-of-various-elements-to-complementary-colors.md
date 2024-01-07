---
id: 587d78a4367417b2b2512ad3
title: 様々な要素の色を補色に調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

補色のチャレンジでは、色相環の反対側にある色を並べて配置するとお互いがより鮮やかに見えることを示しました。 しかし、強い視覚的コントラストはウェブサイト上で過度に使われると目障りになることもあり、補色の背景色の上にテキストを配置すると読み辛くなることもあります。 実際には、いずれかの色が通常は支配的であり、ページ上の特定のコンテンツに視覚的な注意を引くために補色が使われます。

# --instructions--

このページではティール (青緑)(`#09A7A1`) を支配的に使い、補色であるオレンジ (`#FF790E`) を、サインアップボタンを視覚的にハイライトするために使います。 `header` と `footer` の `background-color` をどちらも黒からティールに変更してください。 次に、`h2` のテキストの `color` もティールに変更してください。 最後に、`button` の `background-color` をオレンジに変更してください。

# --hints--

`header` 要素は `background-color` を #09A7A1 に設定されている必要があります。

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` 要素は `background-color` を #09A7A1 に設定されている必要があります。

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` 要素は `color` を #09A7A1 に設定されている必要があります。

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` 要素は `background-color` を #FF790E に設定されている必要があります。

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

# --solutions--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }
  button {
    background-color: #FF790E;
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```
