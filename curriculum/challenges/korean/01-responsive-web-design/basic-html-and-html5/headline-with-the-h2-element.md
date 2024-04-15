---
id: bad87fee1348bd9aedf0887a
title: h2 요소를 이용한 헤드라인
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

다음 몇 가지 강의를 통해 HTML5 고양이 사진 웹 앱을 조금씩 만들어 보려고 합니다.

이 단계에서 추가 할 `h2` 요소는 웹 페이지에 두 번째 수준의 표제를 추가합니다.

이 요소는 브라우저에게 당신의 웹사이트의 구조를 알려 줍니다. `h1` 요소는 주로 제목에 사용되는 반면, `h2` 요소는 일반적으로 부제에 사용됩니다. 또한 다른 수준의 하위 부제를 나타내는 `h3`, `h4`, `h5` 및 `h6` 요소가 있습니다.

# --instructions--

`h1` "Hello World" 아래에 "CatPhotoApp"이라는 `h2` 태그를 추가하여 두 번째 HTML 구성 요소를 만드세요.

# --hints--

`h2` 요소를 만들어야 합니다.

```js
assert($('h2').length > 0);
```

`h2` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2` 요소에는 `CatPhotoApp` 이라는 텍스트가 있어야 합니다.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1` 요소에는 `Hello World` 라는 텍스트가 있어야 합니다.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

`h1`은 `h2`보다 앞에 있어야 합니다.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
