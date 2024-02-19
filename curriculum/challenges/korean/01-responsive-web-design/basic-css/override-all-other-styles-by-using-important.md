---
id: bad87fee1348bd9aedf07756
title: '!important를 사용하여 다른 스타일 덮어쓰기'
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

야호! 방금 인라인 스타일이 `style` 요소의 모든 CSS 선언을 덮어쓰는 것을 확인했습니다.

그러나 여기서 잠깐, CSS를 덮어쓰는 마지막 방법이 하나 남았습니다. 이것은 가장 강력한 방법입니다. 알아보기 전에 왜 CSS를 덮어쓸 필요가 있는지에 대해 알아보겠습니다.

많은 경우에 우리는 CSS 라이브러리를 사용하게 됩니다. 이 라이브러리들은 우연히 우리가 직접 작성한 CSS를 덮어쓰게 될지도 모릅니다. 한 요소에 특정 CSS가 적용되어 있도록 확실히 만들 필요가 있을 때 `!important`를 사용할 수 있습니다.

`pink-text` 클래스 정의로 다시 돌아가보겠습니다. `pink-text` 클래스는 하위 클래스 정의, 아이디 정의 그리고 인라인 스타일로 덮어씌어질 수 있습니다.

# --instructions--

`h1` 요소가 100% 확실하게 분홍색이 되도록 pink-text 요소의 색깔 정의에 키워드 `!important`를 추가하세요.

적용 방법에 대한 예시:

```css
color: red !important;
```

# --hints--

`h1` 요소는 `pink-text` 클래스를 가져야 합니다.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 요소는 `blue-text` 클래스를 가져야 합니다.

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 요소는 `orange-text`의 `id`를 가져야 합니다.

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 요소는 인라인 스타일 `color: white`를 가져야 합니다.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

`pink-text` 클래스 정의는 다른 정의를 덮어 쓰도록 `!important` 키워드를 가져야 합니다.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

`h1` 요소는 분홍색이어야 합니다.

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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
