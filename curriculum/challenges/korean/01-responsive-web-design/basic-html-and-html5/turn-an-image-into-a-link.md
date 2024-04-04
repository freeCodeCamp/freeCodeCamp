---
id: bad87fee1348bd9aedf08820
title: 이미지를 링크로 변환하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

`a` 요소 내에 요소를 중첩하여 링크로 만들 수 있습니다.

`a` 요소 내에서 이미지를 중첩합니다. 예시:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

`a` 요소에 없는 링크를 사용하려면 `href` 속성에 `#`를 지정해야 합니다.

# --instructions--

기존 이미지 요소를 `a`(*앵커*) 요소 내에 배치하세요.

이 작업을 마치면 마우스로 커서를 이미지 위로 이동하세요. 그러면 커서의 일반 포인터는 링크를 클릭할 수 있는 포인터가 되어야 합니다. 이 사진은 이제 링크입니다.

# --hints--

기존 `img` 요소는 `a` 요소 안에 중첩되어야 합니다.

```js
assert($('a').children('img').length > 0);
```

Your `a` element should be a dead link with an `href` attribute set to `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

모든 `a` 요소에는 닫는 태그가 있어야 합니다.

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
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

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

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
