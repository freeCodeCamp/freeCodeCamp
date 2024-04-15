---
id: bad87fee1348bd9aedf08828
title: 순서가 있는 목록 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML은 <dfn>순서가 있는 목록</dfn> 혹은 번호가 매겨진 목록을 만들기 위한 특별한 요소를 제공합니다.

순서가 있는 목록은 `<ol>` 요소로 시작하며 `<li>` 요소가 뒤따릅니다. 마지막으로 순서가 있는 목록은 `</ol>` 태그로 닫힙니다.

예시:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

`Garfield`와 `Sylvester`의 번호가 매겨진 목록이 생성됩니다.

# --instructions--

고양이가 제일 싫어하는 세 가지의 순서가 있는 목록을 만드세요.

# --hints--

`Top 3 things cats hate:`을 위한 순서가 있는 목록을 가져야 합니다.

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

`Things cats love:`을 위한 순서가 없는 목록을 가져야 합니다.

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

`ul` 요소는 하나만 있어야 합니다.

```js
assert.equal($('ul').length, 1);
```

`ol` 요소는 하나만 있어야 합니다.

```js
assert.equal($('ol').length, 1);
```

`ul` 요소 안에 세 개의 `li` 요소가 있어야 합니다.

```js
assert.equal($('ul li').length, 3);
```

`ol` 요소 안에 세 개의 `li` 요소가 있어야 합니다.

```js
assert.equal($('ol li').length, 3);
```

`ul` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

`ol` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

`li` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

순서가 없는 목록에 있는 `li` 요소는 비어있지 않아야 합니다.

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

순서가 있는 목록 안에 있는 `li` 요소는 비어있지 않아야 합니다.

```js
$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
);
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
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
