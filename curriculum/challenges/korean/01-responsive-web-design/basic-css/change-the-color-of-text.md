---
id: bad87fee1348bd9aedf08803
title: 텍스트의 색상 바꾸기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVmSm'
forumTopicId: 16775
dashedName: change-the-color-of-text
---

# --description--

이제 일부 텍스트의 색상을 변경해 보겠습니다.

`h2`요소의 `style`를 변경함으로써 색상을 변경할 수 있습니다.

스타일 속성인 `color`가 요소의 텍스트 색상을 담당하고 있습니다.

`h2`요소의 텍스트 색상을 파란색으로 바꾸는 방법은 다음과 같습니다.

```html
<h2 style="color: blue;">CatPhotoApp</h2>
```

인라인 `style`선언은 `;`로 끝내는 것이 좋습니다.

# --instructions--

`h2`요소의 텍스트 색상이 빨간색이 되도록 변경하세요.

# --hints--

`h2`요소에는 `style` 선언이 있어야 합니다.

```js
assert($('h2').attr('style'));
```

`h2`요소는 `red`색상으로 설정되어야 합니다.

```js
assert($('h2')[0].style.color === 'red');
```

`style`선언은 `;`로 끝나야 합니다.

```js
assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));
```

# --seed--

## --seed-contents--

```html
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
<h2 style="color: red;">CatPhotoApp</h2>
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
