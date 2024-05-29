---
id: 587d781b367417b2b2512aba
title: s 태그로 취소선이 적용된 텍스트 만들기
challengeType: 0
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

가로선이 문자열의 중앙을 자르는 취소선 텍스트를 만드려면, `s` 태그를 사용하면 됩니다. 취소선은 텍스트 섹션이 더 이상 유효하지 않음을 나타냅니다. `s` 태그를 사용하면, 브라우저는 엘리먼트에 `text-decoration: line-through;` CSS를 적용합니다.

# --instructions--

`h4` 태그 내부에 있는 `Google` 텍스트를 `s`태그로 감싼 뒤, 취소선 형태가 아닌 `Alphabet` 단어를 옆에 추가해 보세요.

# --hints--

당신의 코드는 마크업에 `s` 태그를 하나 추가해야 합니다.

```js
assert($('s').length == 1);
```

`s` 태그는 `h4`태그 안에서 `Google` 텍스트를 감싸야 합니다. 이것은 `Alphabet`단어를 포함하지 않아야 합니다.

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

`Alphabet` 단어를 `h4`태그 내부에 취소선없이 포함하여야 합니다.

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
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
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
