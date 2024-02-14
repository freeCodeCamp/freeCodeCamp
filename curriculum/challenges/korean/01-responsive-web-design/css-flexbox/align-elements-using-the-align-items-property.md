---
id: 587d78ad367417b2b2512af8
title: align-items 속성으로 요소 정렬하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

`align-items` 속성은 `justify-content`와 유사합니다. `justify-content` 속성은 주축을 따라 플렉스 아이템을 정렬시킨다는 것을 배웠습니다. 행의 주축이 수평선이고 열의 주축은 수직선입니다.

플렉스 컨테이너는 주축과는 반대인 **교차 축**도 있습니다. 행의 교차 축은 수직이고 열의 교차 축은 수평입니다.

CSS는 교차 축을 따라 플렉스 아이템을 정렬시키도록 `align-items` 속성을 제공합니다. 이 속성은 행에 대해 컨테이너 내 전체 행에 있는 아이템들을 위 아래로 어떻게 넣는지 결정합니다. 그리고 열에 대해 컨테이너 내 모든 아이템을 어떻게 좌우로 넣는지 결정합니다.

`align-items`에 이용 가능한 값들은 다음과 같습니다.

<ul><li><code>flex-start</code>: 플렉스 컨테이너의 시작에 아이템 정렬 행에 대해 이 값은 컨테이너 상단에 아이템을 정렬시킵니다. 열에 대해 이 값은 컨테이너의 좌측에 아이템을 정렬시킵니다.</li><li><code>flex-end</code>: 플렉스 컨테이너의 끝에 아이템 정렬. 행에 대해 이 값은 컨테이너의 하단에 아이템을 정렬시킵니다. 열에 대해 이 값은 컨테이너 우측에 아이템을 정렬시킵니다.</li><li><code>center</code>: 중앙에 아이템을 정렬. 행에 대해 이 값은 수직으로 아이템을 정렬시킵니다(아이템 위아래로 동일한 간격). 열에 대해 이 값은 수평으로 아이템을 정렬시킵니다(아이템의 좌우에 동일한 간격).</li><li><code>stretch</code>: 플렉스 컨테이너를 채우도록 아이템을 늘림. 예를 들면 행의 아이템은 위아래로 플렉스 컨테이너를 채우도록 늘어납니다. <code>align-items</code> 값이 특정되지 않는다면 이 값은 기본값으로 설정됩니다.</li><li><code>baseline</code>: 아이템의 베이스라인에 아이템을 정렬. 베이스 라인은 텍스트 개념으로, 글자가 올라가 있는 선으로 생각할 수 있습니다.</li></ul>

# --instructions--

이 속성을 실제로 보여주는 예시가 도움이 됩니다. `#box-container` 요소에 `align-items` 속성을 추가하고 `center` 값을 주세요.

**보너스**  
차이 확인을 위해 코드 편집기에 있는 `align-items` 속성에 다른 값을 주세요. 하지만 `center`만이 이 과제를 통과시킬 수 있는 값이라는 것에 주의하시오.

# --hints--

`#box-container` 요소는 `center` 값으로 설정된 `align-items` 속성을 가져야 합니다.

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
