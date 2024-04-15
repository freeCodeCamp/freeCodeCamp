---
id: 587d778e367417b2b2512aab
title: 높은 대비를 갖고 있는 텍스트를 사용하여 가독성 높이기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

배경색과 전경색 간의 낮은 색채 대비는 글씨를 읽기 어렵게 만들 수 있습니다. 충분한 대비는 콘텐츠의 가독성을 향상시킵니다. 그러나 여기서 "충분한"이란 정확히 무엇을 의미할까요?

웹 콘텐츠 접근성 지침(WCAG)은 일반 텍스트의 최소 대비 비율로 4.5 대 1을 권장합니다. 이 비율은 두 색상의 상대 밝기 값을 비교하여 계산됩니다. 이 비율은 동일한 색상인 경우나 대비가 없을 경우에 1:1 부터 가장 큰 대비인 흰색 대 검정의 경우 21:1까지 범위가 있습니다. 인터넷에서 색채 대비 비율을 계산해주는 검사 도구들을 쉽게 찾아볼 수 있습니다.

# --instructions--

캠퍼 캣이 최근 블로그 게시물에서 선택한 연한 회색 텍스트와 흰색 배경은 1.5:1의 대비 비율을 가지고 있어 읽기 어렵습니다. 대비 비율을 향상시키기 위해 현재 회색(`#D3D3D3`)에서 더 진한 회색(`#636363`)으로 텍스트의 `color`를 변경하세요. 이렇게 하면 대비 비율이 6:1로 향상됩니다.

# --hints--

코드를 이용해서 `body`의 텍스트 `color`를 더 진한 회색으로 변경해야 합니다.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

코드에서 `body`의 `background-color`를 변경해서는 안 됩니다.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
