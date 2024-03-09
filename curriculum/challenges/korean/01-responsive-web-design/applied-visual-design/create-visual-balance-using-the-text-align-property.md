---
id: 587d7791367417b2b2512ab3
title: 문단 정렬 속성을 사용해 시각적 균형 이루기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

이번 단원에서는 응용 시각 디자인에 중점을 둡니다. 첫 번째 과제는 주어진 카드 레이아웃을 기반으로 여러 핵심 원칙을 보여줍니다.

글자는 웹 컨텐츠에서 큰 부분을 차지합니다. CSS에는 `text-align` 속성을 사용하여 텍스트를 정렬하는 여러 옵션이 있습니다.

`text-align: justify;`는 각 행이 동일한 너비를 가지도록 텍스트 사이를 공백으로 채웁니다.

`text-align: center;`는 텍스트를 가운데 정렬로 만듭니다.

`text-align: right;`는 텍스트는 오른쪽 정렬합니다.

그리고 `text-align: left;`는 (기본값과 마찬가지로) 텍스트를 왼쪽 정렬합니다.

# --instructions--

`h4` 태그의 텍스트인 "Google"을 가운데 정렬하십시오. 그런 다음 Google이 어떻게 설립되었는지에 대한 정보가 포함된 단락 태그를 맞춰 정렬하십시오.

# --hints--

코드에서 text-align 속성을 사용하여 `h4` 태그의 텍스트를 `center`에 맞추도록 설정해야 합니다.

```js
assert($('h4').css('text-align') == 'center');
```

코드에서 text-align 속성을 사용하여 `p` 태그의 텍스트를 `justify`로 설정해야 합니다.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
