---
id: 587d78a4367417b2b2512ad2
title: 3차 색 배워 보기
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

컴퓨터 모니터와 디바이스의 화면은 빨간색, 초록색, 파란색 빛의 양을 조합하여 다양한 색을 만들어 냅니다. 이는 현대 색채 이론에서 RGB 가산 색상 모델로 알려져 있습니다. 빨간색(R), 초록색(G), 파란색(B)을 원색이라고 부릅니다. 두 가지 원색을 혼합하면 2차색인 청록색(초록색 + 파란색), 자홍색(빨간색 + 파란색), 노란색(빨간색 + 초록색)이 만들어집니다. 보색 챌린지에서 이 색상들을 보셨을 겁니다. 이 2차 색들은 그 색상을 만들 때 사용되지 않은 원색의 보색이 되며, 색상환에서 바로 그 원색의 반대편에 위치합니다. 예를 들어 빨간색과 파란색의 혼합으로 만들어지는 자홍색은 초록색과 보색 관계입니다.

3차 색은 원색 한 가지와, 그 원색과 인접한 2차 색의 혼합으로 만들어집니다. 예를 들어 RGB 색상 모델에서 빨간색(원색)과 노란색(2차 색)을 혼합하면 주황색(3차 색)이 됩니다. 이로써 단순한 색상환에 여섯 가지 색상이 더해지면서 총 열두 개의 색상이 됩니다.

각기 다른 색상의 선택으로 디자인에서 조화로운 조합을 만들어 내는 방법은 다양합니다. 3차 색을 사용하는 한 가지 예시로 근접 보색 배색이 있습니다. 이 배색은 먼저 기준 색을 고르고 그 색상의 보색에 근접한 두 색상을 조합하는 방법입니다. 이 세 가지 색상은 디자인에서 강렬한 시각적 대비를 제공하는 한편, 두 가지 보색을 사용하는 것보다는 미묘한 느낌을 줍니다.

다음 세 가지 색상은 근접 보색 배색을 사용하여 만들어진 것입니다.

<table><thead><tr><th>색상</th><th>헥스 코드</th></tr></thead><thead></thead><tbody><tr><td>주황색</td><td>#FF7F00</td></tr><tr><td>청록색</td><td>#00FFFF</td></tr><tr><td>라즈베리 색</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

`background-color` 속성을 `orange`, `cyan`, `raspberry` 클래스에서 해당 색상으로 바꿔 보세요. 색상의 이름이 아닌 헥스 코드를 사용해야 합니다.

# --hints--

`orange` 클래스의 `div` 엘리먼트는 `background-color`가 주황색이어야 합니다.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

`cyan` 클래스의 `div` 엘리먼트는 `background-color`가 청록색이어야 합니다.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

`raspberry` 클래스의 `div` 엘리먼트는 `background-color`가 라즈베리 색이어야 합니다.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

색상 클래스의 모든 `background-color` 값은 색상의 이름이 아닌 헥스 코드여야 합니다.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
