---
id: bad87fee1348bd9aedd08835
title: 라디오 버튼과 체크박스의 기본값 설정하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cWk3Qh6'
forumTopicId: 301094
dashedName: check-radio-buttons-and-checkboxes-by-default
---

# --description--

`checked` 속성을 사용하여 체크박스(checkbox) 또는 라디오 버튼(radio button)이 체크되어 있도록 기본값을 설정할 수 있습니다.

그러기 위해선 `input` 요소 내부에 `checked`라는 단어를 추가하면 됩니다. 예시:

```html
<input type="radio" name="test-name" checked>
```

# --instructions--

라디오 버튼의 첫 번째와 체크박스의 첫 번째가 모두 기본적으로 선택되어 있도록 설정하세요.

# --hints--

Form의 첫 번째 라디오 버튼이 기본적으로 선택되어 있어야 합니다.

```js
assert($('input[type="radio"]').prop('checked'));
```

Form의 첫 번째 체크박스가 기본적으로 선택되어 있어야 합니다.

```js
assert($('input[type="checkbox"]').prop('checked'));
```

`Indoor` 라벨 내부의 텍스트를 변경하지 마세요.

```js
assert.equal(document.querySelector('label[for="indoor"]')?.innerText?.trim(), 'Indoor');
```

`Loving` 라벨 내부의 텍스트를 변경하지 마세요.

```js
assert.equal(document.querySelector('label[for="loving"]')?.innerText?.trim(), 'Loving');
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
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
