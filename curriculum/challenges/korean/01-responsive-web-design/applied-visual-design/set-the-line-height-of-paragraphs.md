---
id: 587d781d367417b2b2512ac5
title: 단락의 line-height 설정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS의 `line-height` 속성은 텍스트 블록에서 각 줄 높이를 변경할 때 사용합니다. 이름에서 알 수 있듯이 이 속성은 각 텍스트 줄이 차지하는 수직 공간의 크기를 변경합니다.

# --instructions--

`p` 태그에 `line-height` 속성을 추가하고 값을 25px로 설정하십시오.

# --hints--

코드에서 `p` 태그의 `line-height` 값을 25 픽셀로 설정해야 합니다.

```js
assert($('p').css('line-height') == '25px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
