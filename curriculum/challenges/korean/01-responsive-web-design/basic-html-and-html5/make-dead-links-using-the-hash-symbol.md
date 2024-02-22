---
id: bad87fee1348bd9aedf08817
title: '해시 기호 (#) 를 사용하여 없는 링크 만들기'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

연결할 링크를 알기 전에 웹사이트에 `a` 요소를 추가하고 싶을 때가 있습니다.

이것은 나중에 배울 `JavaScript` (자바스크립트) 를 사용하여 링크의 종류을 변경할 때도 유용합니다.

# --instructions--

`href` 속성은 현재 "`https://www.freecatphotoapp.com`"을 지정하고 있습니다. `href` 속성을 해시 기호라고도 하는 `#`로 교체하여 없는 링크를 생성하세요.

예시: `href="#"`

# --hints--

`a` 요소는 `href` 속성이 "#"으로 지정된 없는 링크여야 합니다.

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
