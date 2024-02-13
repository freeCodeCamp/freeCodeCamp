---
id: 587d78a9367417b2b2512ae8
title: 베지에 곡선(Bezier curve)에 대해 배우기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

지난 도전 과제에서는 `animation-timing-function` 속성과 애니메이션 기간 동안 애니메이션 속도를 변경하는 몇 가지 키워드를 소개했습니다. CSS는 키워드 사용 이외에도 베지에 곡선을 사용하여 애니메이션이 어떻게 진행되는지에 대한 더 정교한 제어를 가능하게 해줍니다.

CSS 애니메이션에서 베지에 곡선은 `cubic-bezier` 함수와 함께 사용됩니다. 곡선의 모양은 애니메이션이 어떻게 진행되는지를 나타냅니다. 그 곡선은 1x1 좌표 시스템에서 존재합니다. 이 좌표 시스템의 X 축은 애니메이션의 지속 시간입니다(시간 척도로 생각할 수 있습니다), Y 축은 애니메이션의 변화입니다.

`cubic-bezier` 함수는 이 1x1 그리드에 위치한 네 개의 주요 지점으로 구성됩니다. 이 네 개의 지점은`p0`, `p1`, `p2`, `p3`입니다. `p0` 및 `p3`은 이미 설정되어 있습니다. 이는 각각 항상 원점 (0, 0)과 (1, 1)에 위치하는 시작점과 종료점입니다. 다른 두 지점에 대한 x 및 y 값을 설정하고 그리드 내에서 어디에 배치하느냐에 따라 애니메이션의 곡선 모양이 결정됩니다. CSS에서는 `p1` 및 `p2` "앵커" 지점의 x 및 y 값을 다음 형식으로 선언하여 만들 수 있습니다. `(x1, y1, x2, y2)` 모든 것을 종합하면 다음은 베지에 곡선의 CSS 코드의 예시입니다.

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

위의 예에서는 각 포인트에 대한 x 및 y 값이 동일합니다 (x1 = 0.25 = y1 및 x2 = 0.75 = y2). 이는 기하학 수업에서 기억할 수 있듯이 원점에서 (1, 1)로 이어지는 선을 생성합니다. 이 애니메이션은 애니메이션 길이의 선형 변경이며 `linear` 키워드를 사용하는 것과 동일합니다. 다시 말하자면, 일정한 속도로 변경됩니다.

# --instructions--

id가 `ball1`인 요소의 `animation-timing-function` 속성 값을 `linear`에서 이와 동등한 `cubic-bezier` 함수 값으로 변경하세요. 예제에서 제공된 지점 값을 사용하세요.

# --hints--

id가 `ball1`인 요소의 `animation-timing-function` 속성 값은 선형과 동등한 `cubic-bezier` 함수여야 합니다.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

`ball2` id를 가진 요소의 `animation-timing-function` 속성 값은 변경하지 않아야 합니다.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
