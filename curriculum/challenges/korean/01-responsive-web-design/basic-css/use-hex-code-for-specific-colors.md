---
id: bad87fee1348bd9aedf08726
title: 특정 색상에 대한 헥스 코드를 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

CSS에서 색상을 표현하는 다른 방법이 있다는 것을 알고 계셨나요? 그 중 하나는 16진수 코드 또는 간단히 헥스(hex) 코드를 사용하는 방법입니다.

보통 우리는 <dfn>decimals</dfn>, 또는 기수 10 숫자를 사용하며, 각 자릿수에 0에서 9까지의 기호를 사용합니다. <dfn>Hexadecimals</dfn> (또는 <dfn>hex</dfn>)는 기수 16 숫자입니다. 이는 16개의 구별되는 기호를 사용한다는 것을 의미합니다. 10진수와 마찬가지로 기호 0에서 9는 숫자 영부터 아홉까지의 값을 나타냅니다. 그런 다음 A, B, C, D, E, F는 10부터 15까지의 값을 나타냅니다. 모두 합쳐 0부터 F까지는 16진수에서 한 자리 숫자를 나타낼 수 있으며, 이로써 16가지의 가능한 값이 생깁니다. <a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">여기에서 16진수</a>에 대한 더 많은 정보를 찾을 수 있습니다.

CSS에서는 6자의 16진수 숫자를 사용하여 색상을 나타낼 수 있습니다. 두 글자씩 묶여진 부분은 각각 빨간색(R), 녹색(G), 파란색(B) 구성 요소를 나타내는 데 사용됩니다. 예를 들어, `#000000`은 검정색이며 또한 가장 낮은 값입니다. <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">여기에서 RGB 색상 시스템</a>에 대한 더 많은 정보를 찾을 수 있습니다.

```css
body {
  color: #000000;
}
```

# --instructions--

`body` 요소의 배경색을 단어 `black`에서 그 헥스 코드 표현인 `#000000`으로 바꿔주세요.

# --hints--

`body` 요소는 검정색의 `background-color`를 가져야 합니다.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

검정색을 나타내는 색상 헥스 코드 대신에 헤당 단어 `black`이 사용되어서는 안 됩니다.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
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
    background-color: #000000;
  }
</style>
```
