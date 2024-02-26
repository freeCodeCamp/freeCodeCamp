---
id: bad82fee1322bd9aedf08721
title: 절대 단위와 상대 단위 이해하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

마지막 여러 도전에서는 요소의 마진(margin) 또는 패딩(padding)을 픽셀(`px`)로 설정했습니다. 픽셀은 브라우저에 항목의 크기 또는 간격을 알려주는 길이 단위의 한 유형입니다. `px` 외에도 CSS에는 사용할 수 있는 여러 다양한 길이 단위 옵션이 있습니다.

길이 단위의 주요 두 유형은 절대 단위와 상대 단위입니다. 절대 단위는 길이의 물리적 단위에 결합됩니다. 예를 들어, `in`은 인치를, `mm`은 밀리미터를 나타냅니다. 절대 길이 단위는 화면상의 실제 측정을 근사화하지만, 화면의 해상도에 따라 몇 가지 차이가 있을 수 있습니다.

`em`이나 `rem`과 같은 상대 단위는 다른 길이 값과 관련이 있습니다. 예를 들어, `em`은 요소의 글꼴 크기를 기준으로 합니다. 이것을 사용하여 `font-size` 속성 자체를 설정하면 부모의 `font-size`에 상대적인 크기가 됩니다.

**참고:** 뷰포트 크기에 관련된 여러 상대 단위 옵션이 있습니다. 그에 관해서는 반응형 웹 디자인 원칙 섹션에서 다루고 있습니다.

# --instructions--

클래스가 `red-box`인 요소에 `padding` 속성을 추가하고 값을 `1.5em`으로 설정하세요.

# --hints--

`red-box` 클래스는 `padding` 속성을 가져야 합니다.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

`red-box` 클래스는 요소에 1.5em의 `padding`을 지정해야 합니다.

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
