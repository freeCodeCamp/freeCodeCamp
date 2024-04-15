---
id: 587d78ac367417b2b2512af6
title: justify-content 속성으로 요소 정렬하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

플렉스 컨테이너 내 플렉스 아이템은 종종 컨테이너 안의 모든 공간을 채우지 않습니다. CSS로 플렉스 아이템을 특정한 방식으로 정렬하고 간격을 조절하는 것은 일반적입니다. 다행히도 `justify-content` 속성은 이를 위해 여러 선택지를 가지고 있습니다. 하지만 이러한 선택지들을 살펴보기 전에 우선 이해해야 할 중요한 용어가 있습니다.

<a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noopener noreferrer nofollow">플렉스 박스 속성에 대한 더 많은 정보는 여기를 읽어보십시오.</a>

플렉스 컨테이너를 행으로 설정하는 것은 플렉스 아이템을 좌우로 배치한다는 것을 기억하세요. 열로 설정된 플렉스 컨테이너는 플렉스 아이템을 위에서 아래로 수직 배치합니다. 각각의 경우에 플렉스 아이템이 배열된 방향을 **주축**이라고 부릅니다. 행에 대해 각 아이템을 통과하는 수평선이 주축입니다. 그리고 열에 대해 주축은 아이템에 수직인 선입니다.

주축인 선에 따라 플렉스 아이템을 놓는 방법에 대해 여러 선택지가 있습니다. 가장 많이 사용되는 것은 `justify-content: center;`인데 이는 모든 플렉스 아이템을 플렉스 컨테이너의 중앙에 정렬시킵니다. 다른 선택지는 다음과 같습니다.

<ul><li><code>flex-start</code>: 플렉스 컨테이너 시작에 아이템 정렬. 행에 대해 이 설정은 컨테이너의 좌측에 아이템을 넣습니다. 열에 대해 이 설정은 컨테이너의 상단에 아이템을 넣습니다. <code>justify-content</code>가 특정되지 않았다면 이 설정이 디폴트 값입니다.</li><li><code>flex-end</code>: 플렉스 컨테이너 끝에 아이템을 정렬. 행에 대해 이 설정은 컨테이너의 우측에 아이템을 넣습니다. 열에 대해 이 설정은 컨테이너의 하단에 아이템을 넣습니다.</li><li><code>space-between</code>: 아이템 사이에 배치된 여분의 공간을 포함하여 주축의 중앙에 아이템을 정렬. 첫번째와 마지막 아이템은 플렉스 컨테이너의 가장자리로 밀려나갑니다. 예를 들어, 행에서 첫 번째 아이템은 컨테이너의 왼쪽에 붙어 있고, 마지막 아이템은 컨테이너의 오른쪽에 붙어 있으며, 나머지 공간은 다른 아이템들 사이에 균등하게 분배됩니다.</li><li><code>space-around</code>: <code>space-between</code>와 유사하나 첫번째와 마지막 아이템은 컨테이너 가장자리에 묶이지 않고 공간은 플렉스 컨테이너 양 끝에 반 공간씩을 포함하여 모든 아이템 주위에 균등하게 분배됩니다.</li><li><code>space-evenly</code>: 플렉스 아이템 사이에 공간을 양 끝에 전체 공간을 포함하여 균등하게 분배.</li></ul>

# --instructions--

예제를 통해 이 속성이 어떻게 작동하는지 볼 수 있습니다. `#box-container` 요소에 `justify-content` 속성을 추가하고 `center` 값을 지정하세요.

**보너스**  
차이 확인을 위해 코드 편집기에서 `justify-content` 속성에 다른 값을 주세요. 하지만 `center` 값만이 이 과제를 통과할 수 있는 값이라는 것에 주의하세요.

# --hints--

`#box-container` 요소는 `center`로 설정된 `justify-content` 속성을 가져야 합니다.

```js
assert($('#box-container').css('justify-content') == 'center');
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
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
