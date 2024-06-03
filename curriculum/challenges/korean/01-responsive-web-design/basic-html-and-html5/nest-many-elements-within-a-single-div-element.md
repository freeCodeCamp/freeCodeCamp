---
id: bad87fee1348bd9aede08835
title: 하나의 div 요소 내에 여러 요소 중첩시키기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
dashedName: nest-many-elements-within-a-single-div-element
---

# --description--

구분 요소인 `div` 요소는 다른 요소를 담는 일반 컨테이너 입니다.

`div` 요소는 가장 많이 쓰이는 HTML 요소일 것입니다.

다른 자체 닫힘이 아닌 요소와 마찬가지로 `div` 요소를 `<div>`로 열 수 있으며 다른 줄에서 `</div>`로 닫을 수 있습니다.

# --instructions--

하나의 `div` 요소 내에 "Things cats love"와 "Top 3 things cats hate" 목록을 중첩시키세요.

힌트: "Things cats love" `p` 요소 위에 여는 `div` 그리고 `ol` 태그 다음에 닫는 `div` 넣어 두 목록이 하나의 `div`에 있도록 만들어보세요.

# --hints--

`p` 요소는 `div` 요소 안에 중첩되어야 합니다.

```js
assert($('div').children('p').length > 1);
```

`ul` 요소는 `div` 요소 안에 중첩되어야 합니다.

```js
assert($('div').children('ul').length > 0);
```

`ol` 요소는 `div` 요소 안에 중첩되어야 합니다.

```js
assert($('div').children('ol').length > 0);
```

`div` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<\/div>/g).length === code.match(/<div>/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
