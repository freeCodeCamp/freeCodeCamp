---
id: bad87fee1348bd9aedf08808
title: 글꼴이 어떻게 변경되는지 특정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

모든 브라우저에 이용 가능한 여러 디폴트 글꼴이 있습니다. 이러한 일반적인 글꼴로는 `monospace`, `serif` 그리고 `sans-serif`가 있습니다.

한 글꼴이 사용 불가할 때 브라우저에게 다른 글꼴로 대체하라고 지시할 수 있습니다.

예를 들면 요소에 `Helvetica` 글꼴을 주고 싶지만 `Helvetica`가 사용 불가할 때 `sans-serif`로 변경해야 한다면 다음과 같이 정해주면 됩니다.

```css
p {
  font-family: Helvetica, sans-serif;
}
```

일반적인 글꼴 이름은 대소문자를 구분하지 않습니다. 또한 CSS 키워드이기 때문에 따옴표가 필요하지 않습니다.

# --instructions--

시작을 위해 `h2` 요소에 `monospace` 글꼴을 주어 `Lobster`와 `monospace`의 두가지 글꼴을 가지도록 만드시오.

지난 과제에서 `link` 태그를 이용하여 `Lobster` 글꼴을 불러왔습니다. 이제 (이전에 배운 HTML 주석을 사용하여) Google Fonts로부터 `Lobster` 불러온 코드를 주석처리하여 더 이상 사용할 수 없게 만드세요. `h2`가 어떻게 `monospace` 글꼴로 변경되는지 주의깊게 살펴보세요.

**주의:** 컴퓨터에 `Lobster` 글꼴이 설치되었다면 브라우저가 해당 글꼴을 찾을 수 있기 때문에 글꼴 변경을 확인할 수 없을 것입니다.

# --hints--

h2 요소는 `Lobster` 글꼴을 사용해야 합니다.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

h2 요소는 `Lobster`가 이용 불가할 때 `monospace`로 글꼴이 변경되어야 합니다.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

`<!--`을 `Lobster` 앞에 넣어 해당 글꼴을 Google로부터 불러오는 호출을 주석 처리해야 합니다.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

`-->`를 추가하여 주석을 마무리해야 합니다.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
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
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>catnip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>catnip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
