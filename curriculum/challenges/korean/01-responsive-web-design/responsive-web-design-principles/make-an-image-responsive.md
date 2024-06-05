---
id: 587d78b1367417b2b2512b09
title: 반응형 이미지 만들기
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

CSS로 반응형 이미지 만들기는 아주 간단합니다. 이미지에 아래 속성을 추가하기만 하면 됩니다.

```css
img {
  max-width: 100%;
  height: auto;
}
```

`max-width`를 `100%`로 설정하면 이미지를 감싸는 컨테이너보다 이미지가 더 넓어지지 않도록 해주며, `height`를 `auto`로 설정하면 이미지의 원본 비율이 유지됩니다.

# --instructions--

`responsive-img` 클래스에 스타일 규칙 적용해 반응형으로 만들어 보세요. 해당 클래스는 이를 감싸는 컨테이너(여기에서는 미리보기 창입니다)보다 넓어지면 안 되고, 이미지는 원본 비율을 지켜야 합니다. 코드를 추가한 뒤에, 미리보기 창을 조절해가며 어떻게 이미지가 동작하는지 확인해보세요.

# --hints--

여러분의 `responsive-img` 클래스는 `max-width`가 `100%`로 설정되어야 합니다.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

`responsive-img` 클래스는 `height`가 `auto`로 설정되어야 합니다.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
