---
id: 587d78a5367417b2b2512ad7
title: CSS 선형 그라데이션을 사용하여 줄무늬 요소 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

`repeating-linear-gradient()` 함수는 `linear-gradient()`과 매우 유사하지만 주요 차이점은 지정된 특정한 그라데이션 패턴을 반복한다는 것입니다. `repeating-linear-gradient()`는 다양한 값들을 허용하지만 이번 과제에서는 간단히 각도 값과 색상 정지 값들을 사용할 것입니다.

각도 값은 그라디언트의 방향을 나타냅니다. 색상 정지점는 전환이 발생하는 위치를 나타내며, 백분율이나 픽셀 수로 지정됩니다.

코드 편집기에서 보여지는 예제에서 그라데이션은 0 픽셀에서 시작하는 색상 `yellow`로 시작되어 시작점에서 40 픽셀 떨어진 곳에서 두 번째 색상 `blue`로 혼합됩니다. 다음 색상 정지점도 40 픽셀에 있기 때문에 그라데이션은 즉시 세 번째 색상 `green`으로 전환되며, 그 자체가 그라데이션 시작점에서 80 픽셀 떨어진 곳에서 네 번째 색상 값 `red`로 혼합됩니다.

이번 예시에서는 색상 정지점을 각각 다른 두 개의 색상이 서로 혼합되는 지점으로 생각하는 것이 도움이 됩니다.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

모든 두 색상 정지 값이 동일한 색상인 경우 혼합이 눈에 띄지 않습니다. 왜냐하면 동일한 색상 간의 혼합이며 다음 색상으로의 강한 전환이 이어지기 때문에 줄무늬가 생성됩니다.

# --instructions--

줄무늬를 만들려면 `repeating-linear-gradient()`를 `45deg`의 각도를 사용하도록 변경한 다음 첫 번째 두 색상 정지점을 `yellow`로 설정하고 마지막으로 두 번째 두 색상 정지를 `black`으로 설정하세요.

# --hints--

`repeating-linear-gradient()`의 각도는 45도여야 합니다.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

`repeating-linear-gradient()`의 각도는 더이상 90도여선 안됩니다.

```js
assert(!code.match(/90deg/gi));
```

0픽셀 부분의 색상 정지점은 `yellow`여야 합니다.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

40픽셀 부분의 첫번째 색상 정지점은 `yellow`여야 합니다.

```js
assert(code.match(/yellow\s+?40px/gi));
```

40픽셀 부분의 두번째 색상 정지점은 `black`여야 합니다.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

80픽셀 부분의 마지막 색상 정지점은 `black`여야 합니다.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
