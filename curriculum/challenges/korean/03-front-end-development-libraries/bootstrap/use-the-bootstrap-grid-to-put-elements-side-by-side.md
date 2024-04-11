---
id: bad88fee1348ce8acef08815
title: 부트스트랩 그리드를 사용하여 요소를 나란히 배치하기
challengeType: 0
forumTopicId: 18371
dashedName: use-the-bootstrap-grid-to-put-elements-side-by-side
---

# --description--

부트스트랩은 반응형 12열 그리드 시스템을 사용하는데 이는 요소를 행에 넣고 각 요소의 상대적인 너비를 특정하는 것을 용이하게 해줍니다. 대부분의 부트스트랩 클래스는 `div` 요소에 적용할 수 있습니다.

부트스트랩은 사용자의 화면의 크기에 따라 다른 열 속성을 가지고 있습니다. 예를 들면 휴대 전화는 좁은 화면을 가지고 있고 휴대용 컴퓨터는 더 넓은 화면을 가지고 있습니다.

부트스트랩의 `col-md-*` class를 예시로 살펴보겠습니다. 여기서 `md`는 중간을 의미하고 `*`는 요소가 몇 열을 가져야 할지 정해주는 숫자를 말합니다. 이 경우에는 휴대용 컴퓨터 같이 중간 크기의 화면에 있는 요소의 열 너비가 정해집니다.

개발하고 있는 Cat Photo 앱에 `col-xs-*`를 사용할 것인데 여기서 `xs`는 extra small(모바일 전화의 작은 화면)을 의미하며, `*`는 요소가 몇 열 너비로 표시되어야 하는지를 지정하는 열 수입니다.

`Like`, `Info` 그리고 `Delete` 버튼을 `<div class="row">` 요소 안에 넣은 다음 각 요소를 `<div class="col-xs-4">` 요소 안에 넣어 나란히 배치하시오.

`row` 클래스는 `div`에 적용되며 버튼은 이 안에 배치시킬 수 있습니다.

# --hints--

`row`를 가진 같은 `div` 요소에 모든 버튼이 있어야 합니다.

```js
assert($('div.row:has(button)').length > 0);
```

각각의 부트스트랩 버튼은 `col-xs-4` 클래스를 가진 `div` 요소 안에 있어야 합니다.

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

각각의 `button` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

각가의 `div` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
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
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
