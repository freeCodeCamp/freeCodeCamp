---
id: bad87fee1348bd9aedf08746
title: HTML Body 요소로부터 스타일 상속하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

이제 모든 HTML 페이지에는 `body` 요소가 있고, 해당 `body` 요소에 대해 CSS로 스타일을 지정할 수 있음을 확인했습니다.

`body` 요소에도 다른 HTML 요소들과 마찬가지로 CSS를 통해 스타일을 지정할 수 있고, 다른 모든 요소들은 `body` 요소에 지정된 스타일을 상속받게 된다는 점을 기억하세요.

# --instructions--

먼저, `Hello World`라는 텍스트를 가진 `h1` 요소를 생성해주세요.

`body` 요소의 스타일 선언에 `color: green;`을 추가해 페이지의 모든 요소들에 `green` 색상을 적용해 주세요.

마지막으로, `body` 요소의 스타일 선언에 `font-family: monospace;`를 추가하여 `body`요소에 `monospace` 글꼴을 적용해주세요.

# --hints--

`h1` 요소를 생성해야 합니다.

```js
assert($('h1').length > 0);
```

`h1` 요소에는 `Hello World` 라는 텍스트가 있어야 합니다.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

`h1` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

`body`요소에는 `color` 속성이 있어야 하며 이 속성값은 `green`이어야 합니다.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

`body`요소에는 `font-family` 속성이 있어야 하며 이 속성값은 `monospace`이어야 합니다.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

`h1`요소는 `body`요소로부터 `monospace` 폰트를 상속받아야 합니다.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

`h1`요소는 `body`요소로부터 `green` 색상을 상속받아야 합니다.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

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
