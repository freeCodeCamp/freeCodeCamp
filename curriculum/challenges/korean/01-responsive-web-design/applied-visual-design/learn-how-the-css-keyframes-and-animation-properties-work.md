---
id: 587d78a7367417b2b2512adf
title: CSS @keyframes 규칙과 animation 속성이 어떻게 작동하는지 알기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

요소에 애니메이션을 적용하려면 animation 속성 및 `@keyframes`규칙에 대해 이해해야 합니다 Animation 속성은 애니메이션 동작을 제어하며, `@keyframes` 규칙은 애니메이션이 진행되는 동안 중간 동작을 정의합니다. Animation 속성은 총 8가지가 있습니다. 이 챌린지에서는 간단하게 두 가지 주요 측면을 다룰 것입니다.

`animation-name` 속성은 애니메이션의 이름을 설정합니다. 이 이름은 `@keyframes`를 사용할 때 CSS에게 어떤 규칙이 어떤 애니메이션에 적용되어야 하는지 알려줍니다.

`animation-duration` 속성은 애니메이션이 한 사이클을 완료하는 데 걸리는 시간을 지정합니다.

`@keyframes`은 애니메이션의 지속 시간 동안 정확히 어떤 동작들이 발생하는지를 지정할 때 사용됩니다. 애니메이션이 실행되는 동안, 0%에서 100%까지의 백분율로 이루어진 특정 "프레임"에 대해 CSS 속성을 지정하면 됩니다. 영화와 비교해보면, 0%에 적용되는 CSS 속성은 요소가 영화 첫 장면에서 어떻게 보여질 것인지를 나타냅니다. 한편 100%에 적용되는 CSS 속성들은 영화 마지막, 즉 엔딩 크레딧 직전에 요소가 어떻게 보여질지를 나타냅니다. 그런 다음, CSS는 해당 장면을 연출하기 위해 주어진 기간 동안 요소를 부드럽게 전환하는 특별한 기술을 적용합니다. `@keyframes`와 애니메이션 속성의 사용법을 설명하기 위한 예제가 있습니다.

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

`anim`이라는 id를 가진 요소에 대해, 위의 코드는 `colorful`이라는 `animation-name`을 부여하고 `animation-duration`은 3초로 지정합니다. 그리고 `@keyframes` 규칙은 `colorful`라는 이름의 애니메이션 속성들과 연결됩니다. 애니메이션의 시작 지점(0%) 에서는 색깔이 파란색이었다가, 애니메이션의 종료 지점(100%) 에서는 노란색이 되도록 전환이 이루어집니다. 애니메이션의 시작 지점과 종료 지점 간에만 국한되지 않고, 0% 부터 100% 사이의 모든 백분율에 대해 요소의 속성을 지정할 수 있습니다.

# --instructions--

`rect`라는 id를 가진 요소에 대해 애니메이션을 생성합니다. `animation-name`은 `rainbow`로 설정하고, `animation-duration`은 4초로 설정합니다. 그 다음, `@keyframes` 규칙을 선언합니다. 애니메이션의 시작점(`0%`) 에서는 `background-color`를 파란색으로, 중간 지점(`50%`) 에서는 초록색으로, 종료 지점(`100%`) 에서는 노란색으로 전환됩니다.

# --hints--

`rect`라는 id를 가진 요소는 `animation-name`이라는 속성을 가져야 하며 이 속성값은 `rainbow`어야 합니다.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

`rect`라는 id를 가진 요소는 `animation-duration`이라는 속성을 가져야 하며 이 속성값은 4초로 지정돼야 합니다.

```js
assert($('#rect').css('animation-duration') == '4s');
```

`@keyframes`규칙은 `rainbow`라는 `animation-name`에 적용됩니다.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`rainbow`에 적용되는 `@keyframes` 규칙은 0%에서 `background-color`를 `blue`로 설정해야 합니다.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`rainbow`에 적용되는 `@keyframes` 규칙은 50%에서 `background-color`를 `green`로 설정해야 합니다.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

`rainbow`에 적용되는 `@keyframes` 규칙은 100%에서 `background-color`를 `yellow`로 설정해야 합니다.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
