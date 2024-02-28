---
id: 587d78a5367417b2b2512ad8
title: 작은 패턴을 배경 이미지로 추가하여 질감을 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

아주 작은 패턴을 배경 이미지로 추가하는 것은 배경에 질감과 흥미를 더하고 두드러지게 만드는 한 가지 방법입니다. 핵심은 균형을 맞추는 것입니다. 배경이 너무 두드러지거나 전경에 맞춰져야 할 집중을 빼앗지 않아야 합니다. `background` 속성은 선택한 질감이나 패턴의 이미지에 링크하기 위해 `url()` 함수를 지원합니다. 링크 주소는 괄호 내에서 따옴표로 묶여 있습니다.

# --instructions--

지정된 URL `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`을 사용하여 페이지 전체의 `background`를 설정합니다. `body` 선택자를 사용하세요.

# --hints--

당신의 `body` 요소는 주어진 링크를 사용한 `url()`로 설정된 `background` 속성이 있어야 합니다.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
