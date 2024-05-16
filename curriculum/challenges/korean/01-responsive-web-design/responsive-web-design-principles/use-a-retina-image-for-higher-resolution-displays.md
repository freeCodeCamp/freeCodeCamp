---
id: 587d78b1367417b2b2512b0a
title: 고해상도 디스플레이를 위한 레티나 이미지 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

인터넷으로 연결된 장치의 증가로 인해 그것들의 크기와 사양들은 다양하고 사용되는 디스플레이는 내외적으로 다를 수 있습니다. 화소 밀도는 한 기기에서 다른 기기와 다를 수 있는 측면으로, 이 밀도는 화소 당 인치(PPI) 또는 도트 당 인치(DPI)로 알려져 있습니다. 가장 유명한 디스플레이는 최신 애플 맥북 그리고 최근에 아이맥 컴퓨터에 있는 "레티나 디스플레이"로 알려져 있습니다. "레티나"와 "비-레티나" 디스플레이 간의 픽셀 밀도 차이로 인해, 고해상도 디스플레이에서 렌더링될 때 일부 고해상도 디스플레이를 고려하지 않고 만들어진 이미지는 "픽셀화"된 것처럼 보일 수 있습니다.

맥북 프로 "레티나 디스플레이"같이 고해상도 디스플레이에서 이미지를 잘 보이도록 만드는 가장 간단한 방법은 이미지의 `width`와 `height` 를 원래 파일의 반절로 정의하는 것입니다. 여기 본래의 높이와 너비의 반절을 사용하는 이미지 예시가 있습니다.

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

`img` 태그의 `width`와 `height`를 원래 값의 반절로 설정하세요. 이 경우에 원래 `height`와 `width`는 `200px`입니다.

# --hints--

`img` 태그는 100px의 `width`를 가져야 합니다.

```js
assert(document.querySelector('img').width === 100);
```

`img` 태그는 100px의 `height`를 가져야 합니다.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
