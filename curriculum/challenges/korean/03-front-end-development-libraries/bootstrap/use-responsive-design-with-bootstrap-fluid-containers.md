---
id: bad87fee1348bd9acde08712
title: 부트스트랩 유동 컨테이너로 반응형 디자인 사용하기
challengeType: 0
forumTopicId: 18362
dashedName: use-responsive-design-with-bootstrap-fluid-containers
---

# --description--

프리코드캠프의 HTML5와 CSS 섹션에서 고양이 사진 앱을 만들었습니다. 이제 그 앱으로 돌아가보겠습니다. 이번에는 자주 사용되는 부트스트랩 반응형 CSS 프레임워크를 사용하여 스타일링해볼 것입니다.

부트스트랩은 화면의 너비를 알아내고 HTML 요소의 크기를 재종하여 반응할 것입니다. 이로 인해 <dfn>반응형 디자인</dfn>이라고 불립니다.

반응형 디자인 덕분에 웹사이트의 모바일 디자인을 따로 할 필요가 없습니다. 다양한 화면 크기를 가진 기기들에서 알맞게 보일 것입니다.

HTML에 다음 코드를 추가하여 어떤 앱에든지 부트스트랩을 추가할 수 있습니다.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

이 경우에는 이 페이지를 위하여 이미 부트스트랩을 추가하였습니다. `link`를 닫기 위해 `>`이나 `/>`가 사용될 수 있음에 주의하세요.

시작하기 위해 모든 HTML(`link`와 `style` 요소 제외)를 `container-fluid` 클래스 이름을 가진 `div` 요소 안에 중첩시켜야 합니다.

# --hints--

`div` 요소는 `container-fluid`라는 클래스 이름을 가져야 합니다.

```js
assert($('div').hasClass('container-fluid'));
```

`div` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

`style` 태그 다음에 오는 모든 HTML 요소는 `.container-fluid` 안에 중첩되어야 합니다.

```js
assert($('.container-fluid').children().length >= 8 && !$('.container-fluid').has("style").length && !$('.container-fluid').has("link").length);
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
