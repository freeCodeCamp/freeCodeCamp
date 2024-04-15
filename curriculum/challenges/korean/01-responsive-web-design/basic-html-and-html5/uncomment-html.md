---
id: bad87fee1348bd9aedf08802
title: HTML 주석 해제하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

주석 달기는 웹 사용자에게는 보이지 않게 하면서 코드 내에서 다른 개발자를 위해 주석을 남길 수 있는 방법입니다.

주석 달기는 코드를 완전히 삭제하지 않고도 코드를 비활성화할 수 있는 편리한 방법이기도 합니다.

HTML 주석은 `<!--` 로 시작하고 `-->`로 끝납니다.

# --instructions--

`h1`, `h2` 와 `p`의 주석을 해제하세요.

# --hints--

`h1` 요소가 주석이 제거되어 페이지에 표시되어야 합니다.

```js
assert($('h1').length > 0);
```

`h2` 요소가 주석이 제거되어 페이지에 표시되어야 합니다.

```js
assert($('h2').length > 0);
```

`p` 요소가 주석이 제거되어 페이지에 표시되어야 합니다.

```js
assert($('p').length > 0);
```

페이지에 주석이 표시되지 않아야 합니다 (예: `-->`).

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
