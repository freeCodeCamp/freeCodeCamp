---
id: 5b7d72c338cd7e35b63f3e14
title: 브라우저 Fallbacks로 호환성 향상하기
challengeType: 0
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

CSS로 작업을 할 때 브라우저 호환성 문제가 생길 가능성이 있습니다 잠재적인 문제발생 가능성을 배제하기 위해 브라우저 fallbacks를 제공하는 것이 중요한 이유입니다.

브라우저가 웹 페이지의 CSS를 파싱할 때, 이것은 브라우저가 인식하지 못하거나 지원하지 않는 모든 속성들을 무시합니다. 예를 들어, 만약 사이트의 배경색에 CSS 변수를 사용한다면 인터넷 익스플로어는 CSS 변수를 지원하지 않기 때문에 그 배경색을 무시할 것입니다. 이 경우 브라우저는 해당 속성에 관련된 어떤 값이든 사용합니다. 만약 속성에 대한 어떤 값도 찾지 못한다면, 일반적으로 적절하지 않을 수도 있을 기본 값을 사용합니다.

즉, 브라우저에 fallback을 제공하는 것은 선언 전에 포괄적으로 지원되는 다른 값을 사용하는 것 만큼 간단합니다. 그렇게 하면 구형 브러우저들은 다시 적용될 어떤 값을 가질 것이고, 신형 브라우저의 경우 캐스캐이딩 이후 무엇이 선언될지 해석할 것 입니다.

# --instructions--

`.red-box`클래스의 배경색을 설정하기 위해 변수를 사용하는 것처럼 보입니다. 브라우저 호환성을 향상시키기 위해, 기존 선언 직전에 다른 `background`를 추가로 선언하여 그 값을 `red`로 설정해보세요.

# --hints--

`.red-box` 규칙은 기존 `background` 선언 직전에 `background`가 `red`로 설정된 fallback을 포함해야 합니다.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
