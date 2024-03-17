---
id: bad87fee1348bd9aec908846
title: 부트스트랩 헤드라인 생성하기
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

이제 HTML, CSS, 부트스트랩 기술을 연습해보기 위해 무언가를 처음부터 만들어봅시다.

앞으로의 jQuery 챌린지에서 활용할 jQuery playground를 만들 것입니다.

먼저, `jQuery Playground`라는 텍스트를 가진 `h3` 요소를 생성해보세요.

`h3` 요소에 `text-primary`라는 부트스트랩 클래스를 사용해 색상을 지정하고, `text-center`라는 부트스트랩 클래스로 가운데 정렬해주세요.

# --hints--

페이지에 `h3` 요소를 추가해야 합니다.

```js
assert($('h3') && $('h3').length > 0);
```

`h3` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

`h3` 요소에는 `text-primary` 클래스를 사용해 색깔을 적용해야 합니다.

```js
assert($('h3').hasClass('text-primary'));
```

`h3` 요소는 `text-center` 클래스를 사용해 가운데 정렬을 해야 합니다.

```js
assert($('h3').hasClass('text-center'));
```

`h3` 요소는 `jQuery Playground`라는 텍스트를 갖고 있어야 합니다.

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
