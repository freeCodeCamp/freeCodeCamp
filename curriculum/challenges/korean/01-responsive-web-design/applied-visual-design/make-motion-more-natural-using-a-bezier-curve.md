---
id: 587d78a9367417b2b2512aea
title: Bezier Curve를 사용하여 보다 자연스러운 움직임 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

이번 과제는 저글링 중인 공의 움직임을 따라하기 위해 HTML 요소를 애니메이션화합니다. 지난 과제에서는 `linear`와`ease-out` cubic Bezier curves를 다루었지만, 둘 모두 저글링 움직임을 정확하게 묘사하지 못합니다. 이를 위해 Bezier curve을 커스터마이징해야 합니다.

`animation-timing-function`은 `animation-iteration-count`이 무한으로 설정되어 있을 때 모든 키프레임에서 자동적으로 반복됩니다. Animation duration중간에 설정된 키프레임 규칙이 있기 때문에(`50%`에서), 공의 위쪽 이동 및 아래쪽 이동에서 두 개의 동일한 애니메이션이 진행됩니다.

다음의 cubic Bezier curve는 저글링 움직임을 시뮬레이션합니다:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

y2의 값이 1보다 크다는 것을 주의하세요. Cubic Bezier curve는 좌표계에 1대1로 매핑되며 오직 0에서 1까지의 x값만 허용함에도 불구하고, y값은 1보다 큰 숫자로 설정할 수 있습니다 그 결과로 저글링공을 시뮬레이션하기 이상적으로 튀는 움직임이 나타납니다.

# --instructions--

Id가 `green`인 요소의 `animation-timing-function` 값을 x1, y1, x2, y2 값이 각각 0.311, 0.441, 0.444, 1.649인 `cubic-bezier` 함수로 변경합니다.

# --hints--

Id가 `green`인 요소의 `animation-timing-function` 속성 값은 지정한 x1, y1, x2, y2 값을 가진 `cubic-bezier` 함수여야 합니다.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
