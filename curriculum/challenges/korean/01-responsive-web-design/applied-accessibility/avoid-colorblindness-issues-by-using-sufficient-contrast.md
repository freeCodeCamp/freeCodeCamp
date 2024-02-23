---
id: 587d778f367417b2b2512aac
title: 색약 이용자를 위해 충분한 대비 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

시각 디자인에서 색상은 큰 부분을 차지하지만, 여기서는 두 가지 접근성 이슈를 소개합니다. 첫째로, 중요한 정보를 전달하는 유일한 방법이 색상이어서는 안 됩니다. 스크린 리더를 이용하는 유저들은 볼 수 없기 때문이죠. 둘째로, 전경과 배경 색상이 충분한 대비를 가져야 색약 유저들이 이를 구분할 수 있습니다.

이전의 챌린지는 대체 텍스트를 넣는 것으로 첫 번째 이슈를 해결합니다. 마지막 챌린지는 대비 체크 도구를 사용해서 두 번째 이슈를 해결하는 것을 소개합니다. WCAG가 권장하는 대비 비율인 4.5:1은 색상 사용 뿐만 아니라 회색조 조합에도 사용됩니다.

색약 유저들은 일부 색을 구별하는 데 어려움을 겪습니다 - 보통은 색상이지만 종종 명도를 포함합니다. 기억하시겠지만, 대비 비율은 전경색과 배경색의 상대적인 휘도(또는 명도) 를 사용하여 계산됩니다.

4.5:1의 대비 비율은 더 어두운 색상에 검은색을 더하는 shading과 더 밝은 색상에 흰색을 더하는 tinting을 통해 얻을 수 있습니다. 색상환에서 더 어두운 shade는 주로 파란색, 보라색, 마젠타, 빨간색에 검은색이 섞인 색조를 나타냅니다. 반면 더 밝은 tinted color는 주로 주황색, 노란색, 초록색, 청록색과 같은 색에 흰색이 섞인 색조를 나타냅니다.

# --instructions--

캠퍼 캣은 자신의 블로그 텍스트와 배경에 어떤 색상을 적용할지 실험해보고 있습니다. 하지만 현재 적용된 녹색 `background-color`와 밤색 텍스트 `color` 색상 조합은 2.5:1의 대비 비율을 가지고 있습니다. 색상들이 CSS의 `hsl()` 속성을 사용하여 선언되었기 때문에, 여러분은 세 번째 인자 값을 변경함으로써 색상의 명도를 쉽게 조절할 수 있습니다. (hsl에서 hue는 색상, saturation은 채도, lightness는 명도를 나타냅니다.) `background-color`의 명도를 35%에서 55%로 높이고, `color`의 명도를 20%에서 15%로 낮추십시오. 이렇게 하면 대비가 5.9:1로 향상됩니다.

# --hints--

여러분의 코드는 텍스트 `color` 속성의 명도를 15%로 변경해야 합니다.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

여러분의 코드는 `background-color`속성의 명도를 55%로 변경해야 합니다.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
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
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
