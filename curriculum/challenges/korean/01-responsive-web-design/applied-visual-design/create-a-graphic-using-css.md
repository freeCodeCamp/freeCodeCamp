---
id: 587d78a6367417b2b2512add
title: CSS를 이용해 그래픽 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

다양한 선택자와 속성들을 조절함으로써 흥미로운 도형들을 만들 수 있습니다. 쉽게 시도해볼 수 있는 도형으로는 초승달 모양이 있습니다. 이 챌린지에서는 요소의 그림자를 설정하는 `box-shadow` 속성과 요소 모서리의 둥글기를 조정하는 `border-radius` 속성을 사용해야 합니다.

옆쪽으로 살짝 치우진 선명한 그림자를 가진 둥글고 투명한 도형을 만들어보세요. 사실은 이 그림자가 달 모양이 될 것입니다.

둥근 도형을 만들기 위해서는, `border-radius` 속성값을 50%로 설정해야 합니다.

이전 챌린지에서 언급했듯이 `box-shadow` 속성은 `offset-x`, `offset-y`, `blur-radius`, `spread-radius` 및 `color` 값을 순서대로 사용합니다. `blur-radius`와 `spread-radius` 값은 선택 항목입니다.

# --instructions--

에디터에서 정사각형 도형을 조작해 달 모양으로 변형해주세요. 먼저 `background-color` 속성값을 `transparent`로 바꾸고, `border-radius` 속성값을 50%로 조정해 원형을 만들어주세요. 마지막으로 `box-shadow`속성은 `offset-x`를 25px로, `offset-y`를 10px로, `blut-radius`를 0으로, `spread-radius`를 0으로 지정하고, `color`는 `blue`로 지정해주세요.

# --hints--

`background-color</b> 속성값은 <code>transparent`이어야 합니다.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

`border-radius` 속성값은 `50%`이어야 합니다.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

`box-shadow`속성값으로 `offset-x`는 25px, `offset-y`는10px, `blut-radius`는 0, `spread-radius`는 0, `color`는 `blue`로 설정해야 합니다.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
