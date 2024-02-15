---
id: 587d781e367417b2b2512aca
title: 상대적으로 위치한 요소를 CSS 오프셋으로 옮기기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

`top` 또는 `bottom`, 그리고 `left` 또는 `right`의 CSS 오프셋은 브라우저에서 문서의 정상적인 흐름일 때의 위치로부터 얼마나 떨어지게 할지 알려줍니다. 지정된 지점에서 요소를 오프셋 하면 요소가 그 지점으로부터 멀어지게 됩니다. (다시 말하자면 반대 방향으로 움직이는 것이죠) 지난 챌린지에서 보았듯이 `top` 오프셋을 사용하면 `h2`가 아래쪽으로 이동합니다. 마찬가지로 `left` 오프셋을 사용하면 항목이 오른쪽으로 이동합니다.

# --instructions--

CSS 오프셋을 사용하여 `h2`를 오른쪽으로 15픽셀, 위로 10픽셀 이동하세요.

# --hints--

코드에서 CSS 오프셋을 사용하여 `h2`를 상대적으로 10px 위로 위치시켜야 합니다. 다시 말해, 원래 위치한 곳의 `bottom`에서 10px 떨어진 곳으로 이동시키세요.

```js
assert($('h2').css('bottom') == '10px');
```

코드에서 CSS 오프셋을 사용하여 `h2`를 상대적으로 오른쪽으로 15px 떨어진 곳에 배치해야 합니다. 다시 말해, 원래 위치한 곳의 `left`에서 15px 만큼 이동시켜야 합니다.

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
