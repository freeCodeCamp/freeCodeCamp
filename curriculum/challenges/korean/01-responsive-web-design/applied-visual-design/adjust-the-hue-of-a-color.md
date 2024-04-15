---
id: 587d78a4367417b2b2512ad4
title: 색상의 색조(hue) 조절하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

색상은 색조, 채도 및 명도와 같은 여러 특성을 가지고 있습니다. CSS3에서는 이러한 특성들을 직접 명시하여 색상을 선택하는 대체 방법으로 `hsl()` 함수를 소개했습니다.

**색조(Hue)**란 일반적으로 우리가 생각하는 '색상' 입니다. 만약 왼쪽에서 시작하는 빨강을 포함하고 중간을 통과하는 녹색 그리고 오른쪽에 있는 파랑까지의 색깔 스펙트럼을 상상해보면, 색조(hue)는 이 선 상에서 어떤 위치에 색이 위치하는지를 나타냅니다. `hsl()`에서 색조는 스펙트럼이 아니라 색상환의 개념을 사용하며, 원의 색상값이 0에서 360까지의 값으로 표현됩니다.

**채도**는 색상에 포함된 회색의 양을 나타냅니다. 완전히 채도가 높은 색상은 회색이 섞이지 않았으며, 채도가 매우 낮은 색상은 거의 완전히 회색입니다. 이 값은 100%일때 채도가 가장 높은 상태를 나타냅니다.

**명도**는 색상에 포함된 흰색 또는 검은색의 양을 나타냅니다. 0% (검은색)에서 100% (흰색)까지의 범위로 주어지며, 50%가 일반적인 색상입니다.

`hsl()`을 사용하여 완전히 채도가 높고 정상 밝기 색상을 사용하는 몇 가지 예제가 있습니다.

<table><thead><tr><th>색상</th><th>HSL(색조, 채도, 명도)</th></tr></thead><tbody><tr><td>빨강</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>노랑</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>초록</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>청록색(cyan)</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>파랑</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>자홍색(magenta)</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

각 `div` 요소의 `background-color`를 클래스 이름(`green`, `cyan`, 또는 `blue`)에 따라 `hsl()`을 사용하여 변경하세요. 세 가지 색상 모두 완전한 채도이며 정상적인 밝기여야 합니다.

# --hints--

초록색을 사용하기 위해 `hsl()` 함수를 사용해야 합니다.

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

옥색(cyan)을 사용하기 위해 `hsl()` 함수를 사용해야 합니다.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

파란색을 사용하기 위해 `hsl()` 함수를 사용해야 합니다.

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

`green` 클래스의 `div` 요소는 `background-color`가 초록색이어야 합니다.

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

클래스 이름이 `cyan`인 `div` 요소는 청록색의 `background-color`를 가져야 합니다.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

`blue` 클래스의 `div` 요소는 `background-color`가 파란색이어야 합니다.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
