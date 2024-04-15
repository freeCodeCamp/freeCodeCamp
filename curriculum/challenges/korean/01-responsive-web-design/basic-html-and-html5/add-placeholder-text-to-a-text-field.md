---
id: bad87fee1348bd9aedf08830
title: 플레이스홀더(Placeholder) 텍스트를 Text Field에 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

플레이스홀더(Placeholder) 텍스트는 사용자가 무언가를 입력하기 전에 `input` 엘리먼트에 표시되는 내용입니다.

다음과 같이 플레이스홀더 텍스트를 생성할 수 있습니다.

```html
<input type="text" placeholder="this is placeholder text">
```

**참고:** `input` 엘리먼트는 자동으로 닫힙니다 (self-closing).

# --instructions--

`input`의 `placeholder` 값을 "cat photo URL"로 설정하세요.

# --hints--

기존 텍스트 `input` 엘리먼트에 `placeholder` 속성을 추가해야 합니다.

```js
assert($('input[placeholder]').length > 0);
```

`placeholder` 속성값을 `cat photo URL`로 설정해야 합니다.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

완성된 `input` 요소에는 닫는 태그(closing tag)가 있으면 안됩니다.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

완성된 `input` 요소에는 정확한 문법(syntax)이 사용되어야 합니다.

```js
assert($('input[type=text]').length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>catnip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>catnip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>
```
