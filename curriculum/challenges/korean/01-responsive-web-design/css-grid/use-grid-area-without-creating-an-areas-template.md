---
id: 5a94fe2669fb03452672e45e
title: 영역 템플릿 생성하지 않고 grid-area 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

이전 과제에서 배운 `grid-area` 속성은 다른 방식으로 사용될 수 있습니다. 그리드가 참조할 영역 템플릿이 없다면 다음과 같이 배치될 아이템에 동적으로 영역을 생성할 수 있습니다.

```css
item1 { grid-area: 1/1/2/4; }
```

아이템 영역의 위치를 정의하기 위해 이전에 배운 라인 번호를 사용합니다. 위 예시의 번호들은 다음 값들을 나타냅니다:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

예시에 있는 아이템은 라인 1과 2 사이의 행과 라인 1과 4 사이의 열을 차지할 것입니다.

# --instructions--

`grid-area` 속성을 사용하여 `item5` 클래스를 가진 요소를 수평으로 세 번째와 네 번째, 그리고 수직으로 첫 번째와 네 번째 사이에 배치하세요.

# --hints--

`item5` 클래스는 수평으로 세 번째와 네 번째 라인 사이, 그리고 수직으로 첫 번째와 네 번째 라인 사이의 전체 영역을 채우기 위해 `grid-area` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
