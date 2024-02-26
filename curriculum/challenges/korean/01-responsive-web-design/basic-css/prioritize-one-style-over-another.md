---
id: bad87fee1348bd9aedf08756
title: 다른 스타일보다 한 스타일을 우선하는 방법
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

때때로 HTML 요소에는 서로 충돌하는 여러 스타일이 있을 수 있습니다.

예를 들어, 여러분의 `h1` 요소는 동시에 초록색과 분홍색이 될 수 없습니다.

핑크색 텍스트를 만드는 클래스를 생성한 다음, 그것을 요소에 적용할 때 어떻게 되는지 살펴봅시다. 우리의 클래스는 `body` 요소의 `color: green;` CSS 속성을 *override*할까요?

# --instructions--

요소에 핑크 색상을 지정하는 `pink-text`라는 CSS 클래스를 만드세요.

`h1` 요소에 `pink-text` 클래스를 더하세요.

# --hints--

`h1` 요소는 `pink-text` 클래스를 갖고 있어야 합니다.

```js
assert($('h1').hasClass('pink-text'));
```

`<style>`에는 요소의 `color`를 바꾸는 `pink-text` 클래스가 있어야 합니다.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

`h1` 요소는 핑크색으로 나타나야 합니다.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
