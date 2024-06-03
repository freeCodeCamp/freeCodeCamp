---
id: bad87fee1348bd9acde08812
title: 이미지 모바일 반응형으로 만들기
challengeType: 0
forumTopicId: 18232
dashedName: make-images-mobile-responsive
---

# --description--

우선 기존 이미지 아래 새로운 이미지를 추가하세요. 이미지의 `src` 속성을 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`로 설정하세요.

이 이미지가 휴대전화 화면의 너비와 정확히 같다면 좋을 것입니다.

다행히도 부트스트랩을 사용한다면 `img-responsive` 클래스를 이미지에 추가해주기만 하면 됩니다. 이 작업을 실행하면 이미지는 페이지의 너비에 정확히 맞아야 합니다.

# --hints--

두 개의 이미지가 있어야 합니다.

```js
assert($('img').length === 2);
```

새로운 이미지는 기존 이미지 아래에 위치하고 `img-responsive`라는 클래스를 가져야 합니다.

```js
assert($('img:eq(1)').hasClass('img-responsive'));
```

새로운 이미지는 `smaller-image`라는 클래스를 가지지 않아야 합니다.

```js
assert(!$('img:eq(1)').hasClass('smaller-image'));
```

새로운 이미지는 `src` 속성이 `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`로 설정되어야 합니다.

```js
assert($('img:eq(1)').attr('src') === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg');
```

새로운 `img` 요소에는 닫는 꺽쇠 괄호가 있어야 합니다.

```js
assert(
  code.match(/<img/g) &&
    code.match(/<img[^<]*>/g).length === 2 &&
    code.match(/<img/g).length === 2
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive">

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
