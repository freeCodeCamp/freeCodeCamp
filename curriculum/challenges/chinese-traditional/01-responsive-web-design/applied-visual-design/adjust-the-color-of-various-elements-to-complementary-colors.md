---
id: 587d78a4367417b2b2512ad3
title: 將各種元素的顏色調整爲互補色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

通過前面關卡的學習，我們知道了補色搭配能形成強列的對比效果，讓內容更富生機。 但是如果使用不當效果會適得其反：比如將文字背景色和文字顏色設置爲互補色，這樣文字會很難看清。 通常的做法是，一種顏色做爲主要顏色，然後使用其補色用來裝點那些需要用戶特別注意的部分。

# --instructions--

使用深青色（`#09A7A1`）做爲頁面主色，用其補色橙色（`#FF790E`）來裝飾登錄按鈕。 把 `header` 和 `footer` 的 `background-color` 從黑色改成深青色。 然後把 `h2` 的文字 `color` 也改成深青色。 最後，把 `button` 的 `background-color` 改成橙色。

# --hints--

`header` 元素的 `background-color` 屬性值應爲 #09A7A1。

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` 元素的 `background-color` 屬性值應爲 #09A7A1。

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` 元素的 `color` 屬性值應爲 #09A7A1。

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` 元素的 `background-color` 屬性值應爲 #FF790E。

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
