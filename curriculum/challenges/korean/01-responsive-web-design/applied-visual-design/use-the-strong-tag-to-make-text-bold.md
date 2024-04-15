---
id: 587d781a367417b2b2512ab7
title: Strong 태그로 굵은 텍스트 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 301080
dashedName: use-the-strong-tag-to-make-text-bold
---

# --description--

텍스트를 굵게 만들기 위해, `strong`태그를 사용할 수 있습니다 이것은 텍스트에 이목을 끌고 텍스트가 중요하다는 것을 강조하기 위해 종종 쓰입니다. `strong` 태그를 사용하면, 브라우저는 요소에 `font-weight: bold;` CSS를 적용합니다.

# --instructions--

`p` 태그 내부에 있는 `Stanford University` 텍스트를 `strong`태그로 감싸보세요(마침표는 포함하지 마세요).

# --hints--

코드에서 마크업에 `strong` 태그를 하나 추가해야 합니다.

```js
assert($('strong').length == 1);
```

`strong` 태그는 `p` 태그 내부에 위치해야 합니다.

```js
assert($('p').children('strong').length == 1);
```

`strong` 태그는 `Stanford University`라는 단어를 감싸야 합니다.

```js
assert(
  $('strong')
    .text()
    .match(/^Stanford University\.?$/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
