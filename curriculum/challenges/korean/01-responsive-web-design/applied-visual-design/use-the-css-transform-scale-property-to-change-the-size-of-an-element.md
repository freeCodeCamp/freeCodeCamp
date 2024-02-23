---
id: 587d78a5367417b2b2512ad9
title: CSS의 Transform scale 속성을 사용하여 요소의 크기 변경하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
dashedName: use-the-css-transform-scale-property-to-change-the-size-of-an-element
---

# --description--

CSS에서는 `transform` 속성과 `scale()` 함수를 함께 사용하여 요소의 크기를 변경합니다. 다음은 페이지의 모든 단락(paragraph) 요소 사이즈를 두 배로 늘리는 코드 예제입니다.

```css
p {
  transform: scale(2);
}
```

# --instructions--

아이디(id) `ball2`의 크기를 원래 크기의 1.5배로 늘리십시오.

# --hints--

`#ball2`의 `transform` 속성은 크기를 1.5배로 조정하도록 설정해야 합니다.

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

# --solutions--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```
