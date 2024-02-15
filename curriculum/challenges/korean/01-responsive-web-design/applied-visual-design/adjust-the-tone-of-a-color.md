---
id: 587d78a4367417b2b2512ad5
title: 색상의 톤(tone) 조절하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

CSS에서 `hsl()` 옵션을 이용하면 색상의 톤을 조절하기 쉬워집니다. 순색(hue)에 흰색을 섞으면 그 색상의 틴트(tint)가, 검은색을 섞으면 쉐이드(shade)가 만들어집니다. 한편, 색상의 톤(tone)은 그 색상에 회색을 섞거나 틴트, 쉐이드를 사용하여 만들어집니다. `hsl()`에서 's'와 'l'은 각각 채도(saturation)와 밝기(lightness)를 뜻합니다. 채도의 퍼센티지는 회색의 양을 변화시키며 밝기 퍼센티지는 색상에 포함된 흰색이나 검은색의 양을 결정합니다. 이는 기본 순색(hue)은 마음에 들지만 다양한 변형이 필요할 때 유용합니다.

# --instructions--

모든 엘리먼트의 `background-color` 기본값은 `transparent`입니다. `nav` 요소의 배경 색은 현재 `cyan`으로 나옵니다. 요소의 `background-color`가 `cyan`으로 설정되어 있기 때문입니다. `nav` 요소에 `background-color`를 추가하여 동일한 `cyan` 순색을 쓰되, 채도는 `80%`, 밝기는 `25%`로 조절하여 톤과 쉐이드를 바꿔 보세요.

# --hints--

`nav` 요소의 `background-color`는 `hsl()` 속성을 사용하여 보정한 청록색(cyan) 톤이 되어야 합니다.

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
