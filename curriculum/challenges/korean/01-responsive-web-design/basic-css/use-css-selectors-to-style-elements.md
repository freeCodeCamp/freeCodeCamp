---
id: bad87fee1348bd9aedf08805
title: CSS 선택자를 사용하여 요소를 스타일링하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

페이지에서 요소가 보이는 방식을 변경할 수 있는 수백 가지의 CSS 속성이 있습니다.

`<h2 style="color: red;">CatPhotoApp</h2>`를 입력했을 때는 해당 개별 `h2` 요소에 인라인 CSS(캐스케이딩 스타일 시트)를 사용하여 스타일을 지정한 것입니다.

이것은 요소의 스타일을 지정할 수 있는 하나의 방법이지만 CSS를 적용하는 더 나은 방법이 있습니다.

코드 맨 위에 다음과 같은 `style` 블록을 만드세요.

```html
<style>
</style>
```

이 스타일 블록 내에서 모든 `h2` 요소를 선택하기 위한 <dfn>CSS selector</dfn>를 만들 수 있습니다. 예를 들어 모든 `h2` 요소를 빨간색으로 만들고 싶다면 다음과 같은 스타일 규칙을 추가하면 됩니다.

```html
<style>
  h2 {
    color: red;
  }
</style>
```

중요한 점은 각 요소의 스타일 규칙 주위에 여는 중괄호(`{`)와 닫는 중괄호(`}`)가 있어야 한다는 것입니다. 또한 요소의 스타일 정의가 여는 및 닫는 스타일 태그 사이에 위치해야 합니다. 마지막으로 각 요소의 스타일 규칙 끝에 세미콜론을 추가하세요.

# --instructions--

`h2` 요소의 스타일 속성을 삭제하고 대신 CSS `style` 블록을 만들어야 합니다. 모든 `h2` 요소를 파란색으로 변경하기 위해 필요한 CSS를 추가하세요.

# --hints--

`h2` 요소의 `style` 속성을 제거해야 합니다.

```js
assert(!$('h2').attr('style'));
```

그리고 `style` 요소를 생성해야 합니다.

```js
assert($('style') && $('style').length >= 1);
```

`h2` 요소는 파란색으로 나타나야 합니다.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

스타일시트에 있는 `h2` 선언은 세미콜론과 닫는 중괄호를 갖고 있어야 합니다.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

모든 `style` 요소는 유효하며 닫는 태그를 갖고 있어야 합니다.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
