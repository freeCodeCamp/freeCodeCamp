---
id: bad87fee1348bd9aedf08801
title: 문단 요소로 알리기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

`p` 요소는 웹사이트의 문단 텍스트를 위한 선호되는 요소입니다. `p`는 문단(paragraph)의 줄임말 입니다.

다음과 같이 문단 요소를 만들 수 있습니다:

```html
<p>I'm a p tag!</p>
```

# --instructions--

`h2` 요소 아래에 `p` 요소를 만들고 `Hello Paragraph` 텍스트를 넣으세요.

**노트:** 관례상 모든 HTML 태그들은 소문자로 작성됩니다. 예를 들어 `<p></p>` 대신 `<P></P>`.

# --hints--

코드에는 유효한 `p` 요소가 있어야 합니다.

```js
assert($('p').length > 0);
```

`p` 요소에는 `Hello Paragraph` 라는 텍스트가 있어야 합니다.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

`p` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
