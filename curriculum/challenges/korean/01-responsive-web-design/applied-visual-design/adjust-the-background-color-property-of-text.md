---
id: 587d781b367417b2b2512abc
title: 텍스트의 background-color 속성 조정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

전체 배경을 조정하거나 전경의 가독성을 위해 텍스트 색상을 바꾸는 대신, 강조하고자 하는 텍스트를 가진 요소 자체에 `background-color`를 입힐 수 있습니다. 이번 도전 과제는 `hex` 코드나 보통의 `rgb()`를 사용하는 대신 `rgba()`를 사용합니다.

<blockquote>rgba는 아래의 약어입니다:<br>  r = red<br>  g = green<br>  b = blue<br>  a = alpha 값/불투명도 수준</blockquote>

RGB는 0에서 255 사이의 값을 가집니다. alpha는 완전히 불투명한 값, 혹은 단색인 1부터 완전히 투명한 값인 0까지의 범위에서 값을 가질 수 있습니다. 불투명도를 조절할 수 있으므로 `rgba()`는 이런 경우 매우 유용합니다. 즉, 배경을 완전히 가리지 않아도 된다는 의미입니다.

이번 도전 과제에서는 `background-color: rgba(45, 45, 45, 0.1)`를 사용해 볼 것입니다. 불투명도를 0.1로 낮게 설정하므로 거의 투명에 가까운 어두운 회색이 적용됩니다.

# --instructions--

글자를 더욱 눈에 띄게 하려면, `h4` 요소의 `background-color`를 주어진 `rgba()` 값으로 변경할 수 있습니다.

또한, `h4`에는 `height` 속성을 삭제하고 `padding` 10px를 추가해봅니다.

# --hints--

여러분의 코드에는 `h4` 요소의 `background-color` 속성이 `rgba(45, 45, 45, 0.1)`로 설정되어 있어야 합니다.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

여러분의 코드에서 `h4` 요소의 `padding` 속성은 10 픽셀로 적용되어야 합니다.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

`h4` 요소의 `height` 속성은 지우셔야 합니다.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
