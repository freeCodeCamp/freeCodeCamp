---
id: bad87fee1347bd9aedf08845
title: 부트스트랩을 위한 사용자 정의 CSS 포기하기
challengeType: 0
forumTopicId: 17565
dashedName: ditch-custom-css-for-bootstrap
---

# --description--

앞서 만든 사용자 정의 스타일 대신 부트스트랩의 내장 스타일을 사용하여 코드를 정리하고 고양이 사진 앱을 더 전통적인 모양으로 만들 수 있습니다.

이후에 커스텀 CSS를 위한 많은 시간이 있으니 걱정하지 마세요.

`style` 요소로부터 `.red-text`, `p` 그리고 `.smaller-image`를 삭제하여 `style`에 남아 있는 선언이 `h2`와 `thick-green-border`만 있도록 만드세요.

그런 다음 의미 없는 링크를 담은 `p` 요소를 지우세요. 그런 다음 `h2` 요소로부터 `red-text`를 지우고 `text-primary` 부트스트랩 클래스로 대체하세요.

마지막으로 `img`로부터 `smaller-image` 클래스를 지우고 `img-responsive` 클래스로 대체하세요.

# --hints--

`h2` 요소는 더 이상 `red-text` 클래스를 가지지 않아야 합니다.

```js
assert(!$('h2').hasClass('red-text'));
```

`h2` 요소는 이제 `text-primary` 클래스를 가져야 합니다.

```js
assert($('h2').hasClass('text-primary'));
```

문단 요소는 더이상 `Monospace`를 사용하지 않아야 합니다.

```js
assert(
  !$('p')
    .css('font-family')
    .match(/monospace/i)
);
```

`smaller-image`는 상단 이미지로부터 삭제되어야 합니다.

```js
assert(!$('img').hasClass('smaller-image'));
```

상단 이미지에 `img-responsive`를 추가해야 합니다.

```js
assert($('.img-responsive').length > 1);
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
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
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
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
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
