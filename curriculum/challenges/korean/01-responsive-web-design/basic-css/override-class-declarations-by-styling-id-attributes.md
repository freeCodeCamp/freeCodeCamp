---
id: bad87fee1348bd8aedf06756
title: 스타일링 ID 속성을 통한 클래스 선언 덮어쓰기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

우리는 방금 브라우저가 CSS를 선언 순서대로 위에서 아래로 읽는다는 것을 증명했습니다. 이 말은 즉, 충돌이 일어 났을 때 브라우저는 가장 마지막에 오는 CSS 선언을 사용한다는 것입니다. 만약 `h1`요소의 클래스 속성에서 `blue-text`를 `pink-text`앞에 넣었더라도, 사용 순서가 아닌 선언 순서를 참조할 것입니다.

이것이 끝이 아닙니다. CSS를 덮어쓸 수 있는 다른 방법들이 있습니다. id 속성을 기억하시나요?

`pink-text` 및 `blue-text`클래스를 덮어쓰고, `h1`요소에 id를 부여한 후 해당 id를 스타일링하여 `h1` 요소를 주황색으로 만듭니다.

# --instructions--

`h1` 요소의 `id` 속성에 `orange-text`를 부여하세요. id 스타일은 다음과 같습니다:

```html
<h1 id="orange-text">
```

`h1`요소에 `blue-text`와 `pink-text`클래스를 남겨두세요.

`style`요소에서 `orange-text` id에 대한 CSS 선언을 작성하세요. 다음은 이것이 어떻게 보이는지에 대한 예제입니다.

```css
#brown-text {
  color: brown;
}
```

**참고:** 이 CSS선언이 `pink-text`클래스의 위에 선언되었는지, 아래에 선언되었는지와 상관없이 `id` 속성이 항상 우선됩니다.

# --hints--

`h1` 요소에는 `pink-text`라는 클래스가 있어야 합니다.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 요소에는 `blue-text`라는 클래스가 있어야 합니다.

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 요소는 `orange-text`라는 id를 갖고 있어야 합니다.

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 요소는 하나만 있어야 합니다.

```js
assert($('h1').length === 1);
```

`orange-text` id에 대한 CSS 선언이 있어야 합니다.

```js
assert(code.match(/#orange-text\s*{/gi));
```

`h1`은 어떠한 `style` 속성도 갖지 않습니다.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` 요소는 오렌지색이어야 합니다.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
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
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
