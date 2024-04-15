---
id: bad87fee1348bd9aecf08806
title: CSS 클래스를 사용하여 요소에 스타일을 적용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

클래스는 HTML 요소에 추가할 수 있는 재사용 가능한 스타일입니다.

다음은 CSS 클래스 선언의 예시입니다.

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

코드에서 볼 수 있듯이 `<style>` 태그 내에서 `blue-text`라는 CSS 클래스를 생성했습니다. 다음과 같이 HTML 요소에 클래스를 적용할 수 있습니다: `<h2 class="blue-text">CatPhotoApp</h2>`. CSS의 `style` 요소에서 클래스 이름은 점(.)으로 시작합니다. 그러나 HTML 요소의 클래스 속성에서는 클래스 이름에 점이 포함되지 않습니다.

# --instructions--

`style` 요소 내에서 `h2` 선택자를 `.red-text`로 변경하고 색상 값을 `blue`에서 `red`로 바꾸세요.

`h2` 요소에 `class` 속성을 `red-text`로 설정하세요.

# --hints--

`h2` 요소는 빨간색이어야 합니다.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2` 요소는 `red-text`라는 클래스를 가져야 합니다.

```js
assert($('h2').hasClass('red-text'));
```

스타일시트에 `red-text` 클래스를 선언하고 그 색상이 `red`로 설정되어 있어야 합니다.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

`h2` 요소에서 `style="color: red"`와 같은 인라인 스타일 선언을 사용해서는 안 됩니다.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
