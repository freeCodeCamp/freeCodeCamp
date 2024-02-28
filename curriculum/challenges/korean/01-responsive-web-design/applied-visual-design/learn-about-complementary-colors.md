---
id: 587d78a3367417b2b2512ad1
title: 보색 배워 보기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

색채 이론과 그것이 디자인에 미치는 영향력에 대해서는 아주 깊이 들어갈 수도 있는 주제이기 때문에, 이번 챌린지에서는 기초만 다룰 예정입니다. 웹 사이트에서 색상은 콘텐츠에 대한 관심을 끌거나 감정을 일깨우기도 하고, 혹은 시각적 조화를 만들어 내기도 합니다. 색상을 다르게 조합하는 것으로 웹 사이트가 완전히 달라 보이게도 할 수 있으며, 콘텐츠와 잘 부합하는 색상을 찾기 위해 많은 것을 고려해야 하기도 합니다.

색상환은 색상 간의 관계를 시각화할 때 좋은 도구로, 서로 비슷한 색은 가까이, 다른 색은 멀리 떨어져 있는 원입니다. 두 색상이 서로 고리 반대편에 있을 경우 그 색상을 보색이라고 부릅니다. 이들은 섞였을 때 서로의 색상을 "상쇄하고" 회색을 만들어 내는 특성이 있습니다. 하지만 이들을 나란히 배치하면 색상이 더욱 선명해 보이며 강렬한 시각적 대비를 만들어 냅니다.

다음은 보색과 그 헥스 코드의 몇 가지 예시입니다.

<blockquote>빨간색 (#FF0000) 과 청록색 (#00FFFF)<br>초록색 (#00FF00) 과 자홍색 (#FF00FF)<br>파란색 (#0000FF) 과 노란색 (#FFFF00)</blockquote>

이는 흔히 학교에서 배웠던 낡은 RYB 색상 모델과는 다릅니다. 원색도 보색도 다르지요. 현대 색채 이론은 컴퓨터 화면과 같은 RGB 가산 혼합 모델과 프린터로 인쇄할 때와 같은 CMY(K) 감산 혼합 모델을 사용합니다.

어떤 색상의 보색을 찾아 주는 옵션이 있는 색상 선택 도구는 온라인에서 쉽게 찾을 수 있습니다.

**참고:** 색상의 사용은 어떤 페이지에 시각적 흥미를 더하는 강력한 방법이 될 수 있습니다. 그러나 중요한 정보를 전달하는 유일한 방법으로 오로지 색상만 사용해서는 안 됩니다. 시각 장애가 있는 사용자는 콘텐츠를 이해하기 어려울 수도 있기 때문입니다. 이 문제는 접근성 활용 챌린지에서 더 자세히 다룰 예정입니다.

# --instructions--

`background-color` 속성을 `blue`와 `yellow` 클래스에서 해당 색상으로 바꿔 보세요. 배경이 흰색인 경우와 비교했을 때 색상이 서로 어떻게 다르게 보이는지 확인해 보세요.

# --hints--

`blue` 클래스의 `div` 엘리먼트는 `background-color`가 파란색이어야 합니다.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

`yellow` 클래스의 `div` 엘리먼트는 `background-color`가 노란색이어야 합니다.

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```
