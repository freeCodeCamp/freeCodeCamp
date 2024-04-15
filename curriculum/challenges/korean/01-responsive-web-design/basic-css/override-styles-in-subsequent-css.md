---
id: bad87fee1348bd9aedf04756
title: 후속 CSS에서 스타일을 재정의하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

우리의 `pink-text` 클래스가 `body` 요소의 CSS 선언을 덮어쓰게 되었습니다!

우리는 방금 클래스가 `body` 요소의 CSS를 덮어쓸 수 있음을 증명했습니다. 그러면 논리적으로 할 수 있는 다음 질문은, `pink-text` 클래스를 덮어쓰기 위해 우리가 할 수 있는 일은 무엇일까요?

# --instructions--

요소에 파란색을 지정하는 추가적인 CSS 클래스를 만드세요. 클래스의 이름은 `blue-text`입니다. `pink-text` 클래스 선언 아래에 위치하도록 하세요.

`pink-text` 클래스 외에도 `h1` 요소에 `blue-text` 클래스를 적용하고 이 중 어떤 스타일이 적용될지 확인해보세요.

Applying multiple class attributes to an HTML element is done with a space between them like this:

```html
class="class1 class2"
```

**참고:** HTML 요소에 클래스를 나열하는 순서는 중요하지 않습니다.

그러나 `<style>` 섹션의 `class` 선언 순서는 중요합니다. 두 번째 선언이 항상 첫 번째보다 우선합니다. `.blue-text`가 두 번째로 선언되었기 때문에 `.pink-text`의 속성을 덮어씁니다.

# --hints--

`h1` 요소는 `pink-text` 클래스를 갖고 있어야 합니다.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 요소는 `blue-text` 클래스를 갖고 있어야 합니다.

```js
assert($('h1').hasClass('blue-text'));
```

`blue-text` 클래스와 `pink-text` 클래스 모두 `h1`에 속합니다.

```js
assert($('.pink-text').hasClass('blue-text'));
```

`h1` 요소는 파란색으로 나타나야 합니다.

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
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

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
