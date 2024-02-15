---
id: 587d78a3367417b2b2512ace
title: Float 속성을 사용하여 요소를 왼쪽 혹은 오른쪽에 배치하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

다음 위치 조정 툴은 실제로 `position`을 사용하지는 않지만 요소의 `float` 속성을 설정합니다. 플로팅하는 요소는 document의 일반적인 흐름에서 벗어나 그 요소를 포함하고 있는 부모 엘리먼트의 `left` 혹은 `right`에 배치됩니다. 보통 `width` 속성을 함께 사용하여 플로팅하는 요소에 필요한 수평 공간을 지정합니다.

# --instructions--

주어진 마크업은 `section`과 `aside`가 서로 나란히 옆에 있는 2열 레이아웃으로 잘 작동합니다. `#left` 항목에 `left`의 `float`를 지정하고, `#right` 항목에 `right`의 `float`를 지정하십시오.

# --hints--

아이디(id)가 `left`인 요소의 `float`값은 `left`여야 합니다.

```js
assert($('#left').css('float') == 'left');
```

아이디(id)가 `right`인 요소의 `float`값은 `right`여야 합니다.

```js
assert($('#right').css('float') == 'right');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
