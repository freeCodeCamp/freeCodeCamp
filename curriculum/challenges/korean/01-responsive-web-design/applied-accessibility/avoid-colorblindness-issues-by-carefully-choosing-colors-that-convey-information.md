---
id: 587d778f367417b2b2512aad
title: >-
  색약 이용자에게도 정보를 전달하는 세심한 색상 선택
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

색약에는 많은 종류가 있습니다. 특정 파장의 빛에 감도가 떨어지는 것부터 색상을 구별할 수 없는 것까지 포함됩니다. 초록색에 대한 감도가 떨어지는 것이 가장 일반적인 형태입니다.

예를 들어, 내용의 전경과 배경이 각각 서로 비슷한 초록색이라면, 색약 유저는 이를 구별하기 어려울 것입니다. 중요한 정보를 전달할 때는 색상환에서 서로 근접한 색상의 조합을 피해야 합니다.

**Note:** 일부 온라인 색상 선택 툴은 여러 타입의 색약에게 색상이 어떻게 보이는지 시뮬레이션을 제공합니다. 이것은 온라인 색상 대비 계산기로도 활용될 수 있는 훌륭한 리소스입니다.

# --instructions--

캠퍼 고양이는 중요한 버튼을 위한 여러 스타일을 테스팅하고 있지만, 노랑과 (`#FFFF33`) `background-color` 초록 (`#33FF33`) 텍스트는 `color`는 색상환에서 서로 인접해 있으며 일부 색약 유저들은 구분할 수 없습니다. 또한, 이것은 대비 비율 검사를 통과하지도 못했습니다. 텍스트 `color` 를 어두운 파랑 (`#003366`) 으로 바꾸어 두가지 문제를 모두 해결해보세요.

# --hints--

여러분의 코드는 `button` 의 텍스트 `color` 를 어두운 파랑으로 바꾸어야 합니다.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
