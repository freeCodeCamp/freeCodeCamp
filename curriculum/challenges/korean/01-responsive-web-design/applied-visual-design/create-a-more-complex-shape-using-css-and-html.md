---
id: 587d78a6367417b2b2512ade
title: HTML과 CSS를 이용하여 더 복잡한 모양 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

세계에서 가장 인기 있는 모양 중 하나는 하트 모양입니다. 이번 과제에서는 CSS만을 사용하여 하트 모양을 만들어 보겠습니다. 먼저 `::before`와 `::after` 가상 요소를 이해해야 합니다. `::before`는 선택한 요소의 첫 번째 자식인 가상 요소를 생성하며, `::after`는 선택한 요소의 마지막 자식인 가상 요소를 생성합니다. 다음 예제에서는 `::before` 가상 요소를 사용하여 클래스가 `heart`인 요소에 직사각형을 추가합니다:

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

`::before` 및 `::after` 가상 요소가 올바르게 작동하려면 `content` 속성이 있어야 합니다. 이 속성은 일반적으로 선택한 요소에 사진이나 텍스트와 같은 내용을 추가하는 데 사용됩니다. `::before` 및 `::after` 가상 요소를 사용하여 모양을 만들 때에도 `content` 속성이 필요하지만 빈 문자열로 설정됩니다. 위의 예에서 `heart` 클래스를 가진 요소에는 높이 및 너비가 각각 `50px` 및 `70px`인 노란색 사각형을 생성하는 `::before` 가상 요소가 있습니다. 이 사각형은 25%의 `border-radius`로 인해 둥근 모서리를 가지며, 왼쪽에서 `5px` 떨어지고 요소의 위쪽에서 `50px`에 절대적으로 위치합니다.

# --instructions--

화면에 있는 요소를 하트 모양으로 바꾸세요. `.heart::after` 선택자에서 `background-color`를 `pink`로 변경하고 `border-radius`를 50%로 변경하세요.

다음으로, 클래스 `heart`를 가진 요소를 대상으로 (`heart`만) `transform` 속성을 채우세요. `rotate()` 함수를 사용하여 -45도로 회전하세요.

마지막으로 `.heart::before` 선택자에서 `content` 속성을 빈 문자열로 설정하세요.

# --hints--

`.heart::after` 선택자의 `background-color` 속성은 `pink`로 되어 있어야 합니다.

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

`.heart::after` 선택자의 `border-radius`는 50%여야 합니다.

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

`heart` 클래스의 `transform` 속성은 -45도로 설정된 `rotate()` 함수를 사용해야 합니다.

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`.heart::before` 선택자의 `content`는 비어 있는 문자열이어야 합니다.

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
