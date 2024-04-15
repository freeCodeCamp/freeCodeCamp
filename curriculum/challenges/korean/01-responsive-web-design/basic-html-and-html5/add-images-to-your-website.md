---
id: bad87fee1348bd9aedf08812
title: 웹사이트에 이미지 추가하기
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

`img` 요소를 이용해서 웹사이트에 이미지를 추가하고 `src` 속성을 이용하여 특정 이미지의 URL을 지정할 수 있습니다.

이에 대한 예는 다음과 같습니다.

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

`img` 요소는 닫는 태그가 없습니다.

모든 `img` 요소는 **반드시** `alt` 속성이 있어야 합니다. `alt` 속성 안의 텍스트는 접근성을 향상시키기 위해 스크린 리더에 사용되며 이미지가 로딩에 실패하면 표시됩니다.

**노트:** 만약 이미지가 장식을 목적으로 사용되었을 경우 `alt` 속성을 적용된 값이 없이 비어있는 상태로 사용하는 것이 가장 좋습니다.

`alt` 속성은 필요하지 않은 한 특수 문자를 포함하지 않아야 합니다.

위의 예시 `img` 요소에 `alt` 속성을 추가해 보겠습니다.

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

웹사이트에 이미지를 추가해 보겠습니다.

기존 `main` 요소 내에서, `p` 요소 앞에 `img` 요소를 삽입하세요.

이제 `src` 속성을 설정하여 URL `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg` 을 지정하세요.

마지막으로, `img` 요소에 적용 가능한 텍스트와 함께 `alt` 속성을 사용하는 것을 잊지 마세요.

# --hints--

페이지에는 이미지 요소가 있어야 합니다.

```js
assert($('img').length);
```

이미지에는 아기 고양이 사진을 지정하는 `src` 속성이 있어야 합니다.

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

이미지 요소의 `alt` 속성은 비어 있지 않아야 합니다.

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
