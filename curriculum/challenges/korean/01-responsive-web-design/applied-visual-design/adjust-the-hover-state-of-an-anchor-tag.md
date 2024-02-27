---
id: 587d781d367417b2b2512ac8
title: 앵커 태그의 hover 상태 조정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

이 도전 과제에서는 가상 클래스의 사용에 대해 다룹니다. 가상 클래스는 요소의 특정 상태를 선택하기 위해 선택기에 추가할 수 있는 키워드입니다.

예를 들어, 앵커 태그의 스타일은 `:hover` 가상 클래스 선택기를 사용하여 hover 상태에 대해 변경될 수 있습니다. 다음은 hover 상태일때 앵커 태그의 `color`를 빨간색으로 변경하는 CSS입니다.

```css
a:hover {
  color: red;
}
```

# --instructions--

코드 에디터에는 모든 `a` 태그를 검은색으로 스타일링하는 CSS 규칙이 있습니다. 사용자가 `a` 태그 위로 마우스를 올릴 때 `color`가 파란색으로 변경되도록 규칙을 추가하세요.

# --hints--

앵커 태그의 `color`는 검은색으로 유지되어야 하며, `:hover` 상태에 대한 CSS 규칙만 추가하세요.

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

앵커 태그는 hover 상태일 때 `color`가 파란색이어야 합니다.

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
