---
id: bad87fee1348bd9aedf08827
title: 글머리 기호가 없는 목록 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML는 <dfn>순서없는 목록</dfn> 혹은 글머리 기호 스타일을 생성하는데 특별한 요소를 가지고 있습니다.

순서없는 목록은 `<ul>` 요소로 시작되며 `<li>` 요소가 뒤따라옵니다. 마지막으로 순서없는 목록은 `</ul>`로 끝나게 됩니다.

예:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

`milk`와 `cheese`의 글머리 기호 스타일 목록이 생성됩니다.

# --instructions--

마지막 두 `p` 요소를 삭제하고 페이지 하단에 고양이가 좋아하는 세 개의 순서없는 목록을 만드세요.

# --hints--

`ul` 요소를 만드세요.

```js
assert($('ul').length > 0);
```

`ul` 요소 안에 3개의 `li` 요소를 가져야 합니다.

```js
assert($('ul li').length > 2);
```

`ul` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

`li` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

`li` 요소는 빈 문자열이나 비어있는 여백을 가지지 않아야 합니다.

```js
assert($('ul li').filter((_, item) => !$(item).text().trim()).length === 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```
