---
id: bad87fee1348bd9aedf08816
title: 앵커 요소를 이용한 외부 페이지 링크
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

`a` (*앵커, anchor*) 요소를 이용해 웹페이지 외부의 콘텐츠에 연결할 수 있습니다.

`a` 요소는 목적하는 외부 링크를 담을 수 있는 `href` 속성이 필요합니다. 그리고 앵커 텍스트 (실제로 웹 사용자들에게 표시되는 텍스트) 도 필요합니다. 예시:

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

그러면 브라우저에 `this links to freecodecamp.org` 라는 텍스트가 클릭할 수 있는 링크로 표시됩니다. 그리고 그 링크는 웹 주소 `https://www.freecodecamp.org` 로 연결됩니다.

# --instructions--

`https://www.freecatphotoapp.com`에 연결되고 앵커 텍스트로 "cat photos"가 있는 `a` 요소를 만드세요.

# --hints--

`a` 요소에는 `cat photos`이라는 앵커 텍스트가 있어야 합니다.

```js
assert(/cat photos/gi.test($('a').text()));
```

`https://www.freecatphotoapp.com` 으로 연결되는 `a` 요소가 필요합니다.

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

`a` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
