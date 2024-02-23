---
id: bad87fee1348bd9aedf08736
title: HTML body 요소에 스타일 더하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

이제 다시 시작하여 CSS 상속에 대해 이야기해 봅시다.

모든 HTML 페이지에는 `body` 요소가 있습니다.

# --instructions--

여기서 `body` 요소가 존재하는 것을 검증하기 위해 여기에 검은색 `background-color`을 지정할 수 있습니다.

이를 위해 다음을 `style` 요소에 추가할 수 있습니다.

```css
body {
  background-color: black;
}
```

# --hints--

`body` 요소는 검은색 `background-color`을 가져야 합니다.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

CSS 규칙은 올바른 형식으로 여는 중괄호와 닫는 중괄호를 가져야 합니다.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

CSS 규칙은 세미콜론으로 끝나야 합니다.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
