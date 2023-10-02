---
id: 587d78a4367417b2b2512ad3
title: 将各种元素的颜色调整为互补色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

通过前面关卡的学习，我们知道了补色搭配能形成强列的对比效果，让内容更富生机。 但是如果使用不当效果会适得其反：比如将文字背景色和文字颜色设置为互补色，这样文字会很难看清。 通常的做法是，一种颜色做为主要颜色，然后使用其补色用来装点那些需要用户特别注意的部分。

# --instructions--

使用深青色（`#09A7A1`）做为页面主色，用其补色橙色（`#FF790E`）来装饰登录按钮。 把 `header` 和 `footer` 的 `background-color` 从黑色改成深青色。 然后把 `h2` 的文字 `color` 也改成深青色。 最后，把 `button` 的 `background-color` 改成橙色。

# --hints--

`header` 元素的 `background-color` 属性值应为 #09A7A1。

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` 元素的 `background-color` 属性值应为 #09A7A1。

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` 元素的 `color` 属性值应为 #09A7A1。

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` 元素的 `background-color` 属性值应为 #FF790E。

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
