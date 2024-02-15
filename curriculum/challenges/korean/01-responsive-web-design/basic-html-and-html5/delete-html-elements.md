---
id: bad87fed1348bd9aedf08833
title: HTML 요소 지우기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

휴대전화에는 세로 공간이 많지 않습니다.

고양이 사진 앱 (CatPhotoApp)을 만들 수 있도록 불필요한 요소를 제거하겠습니다.

# --instructions--

더 간단하게 볼 수 있도록 `h1` 요소를 제거하세요.

# --hints--

`h1` 요소는 제거되어야 합니다.

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

`h2` 요소는 그대로 있어야 합니다.

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

`p` 요소는 그대로 있어야 합니다.

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
