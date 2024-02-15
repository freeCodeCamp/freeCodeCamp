---
id: 587d78a4367417b2b2512ad3
title: 다양한 요소의 색상을 보충 색으로 조정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

보충 색 도전 과제를 통해 색상환에서 서로 반대에 위치한 색상이 서로 옆에 있을 때 더 눈에 띌 수 있다는 것을 알 수 있었습니다. 그러나 강한 시각적 대조가 웹사이트에서 과도하게 사용되면 눈에 거슬릴 수 있으며, 보충색 배경 위에 텍스트를 두면 읽기 어려워질 수도 있습니다. 실제로는 일반적으로 한 색상이 우세하고 보충색은 페이지의 특정 콘텐츠에 시각적 관심을 끌기 위해 사용됩니다.

# --instructions--

이 페이지에서는 주로 틸 색상 (`#09A7A1`)을 사용하고 시각적으로 강조할 로그인 버튼에 오렌지 색상 (`#FF790E`) 보충색상으로 사용할 것입니다. `header`와 `footer`의 `background-color`를 검은색에서 틸 색상으로 변경하세요. 그런 다음 `h2` 텍스트의 `color`를 틸 색상으로 변경하세요. 마지막으로, `button`의 `background-color`를 주황색으로 변경하세요.

# --hints--

`header` 요소의 `background-color`를 #09A7A1로 설정해야 합니다.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` 요소의 `background-color`를 #09A7A1로 설정해야 합니다.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` 요소의 `color`를 #09A7A1로 설정해야 합니다.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` 요소의 `background-color`를 #FF790E로 설정해야 합니다.

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
