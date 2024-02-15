---
id: bad87fee1348bd9aede08817
title: 문단 내에 앵커 요소 중첩하기
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

다른 텍스트 요소 내에 링크를 중첩할 수 있습니다.

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

예시를 살펴 보겠습니다. 일반 텍스트는 `p` 요소안에 있습니다.

```html
<p> Here's a ... for you to follow. </p>
```

다음은 *앵커* 요소 `<a>`입니다 (닫는 태그 `</a>` 필요):

```html
<a> ... </a>
```

`target`은 링크를 열 위치를 지정하는 앵커 태그의 속성입니다. `_blank` 는 새 탭에서 링크를 열도록 지정합니다. `href` 속성은 링크의 URL 주소를 포함하는 앵커 태그의 속성입니다:

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

`a` 요소 내의 `link to www.freecodecamp.org` 텍스트를 <dfn>anchor text </dfn>라고 하며 클릭할 수 링크를 표시합니다:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

예시의 최종 출력은 다음과 같습니다.

여기 확인할 링크 <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a>가 있습니다.

# --instructions--

새 `p` 요소 내에 기존 `a` 요소를 중첩하세요. 새 앵커 태그를 생성하지 마세요. `cat photos`가 링크이며 나머지는 글자인 새로운 문단은 `View more cat photos`라는 글자를 가져야 합니다.

# --hints--

오직 하나의 `a` 요소만 있어야 합니다.

```js
assert(
  $('a').length  === 1 
);
```

`a` 요소는 "`https://www.freecatphotoapp.com`"에 연결되어야 합니다.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

`a` 요소는 `cat photos`라는 앵커 글자를 가져야 합니다.

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

새로운 `p` 요소를 만들어야 합니다. HTML 코드에 적어도 3 개의 `p` 태그가 있어야 합니다.

```js
assert($('p') && $('p').length > 2);
```

`a` 요소는 새 `p` 요소 안에 중첩되어야 합니다.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

`p` 요소는 (해당 글자 다음 여백이 있는) `View more` 글자를 가져야 합니다.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

`a` 요소는 `View more` 글자를 가지지 <em>않아야</em> 합니다.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

`p` 요소 각각은 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

`a` 요소 각각은 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
