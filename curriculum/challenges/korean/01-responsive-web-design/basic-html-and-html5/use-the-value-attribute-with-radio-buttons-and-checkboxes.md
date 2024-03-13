---
id: 5c6c06847491271903d37cfd
title: 라디오 버튼과 체크 박스로 value 속성 사용하기
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

폼이 제출될 때 데이터가 서버에 보내지고 선택된 것에 대한 항목이 포함됩니다. `radio`와 `checkbox` 입력은 `value` 속성으로부터 값을 알립니다.

예시:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

여기 두 `radio` 입력이 있습니다. 사용자가 `indoor`를 선택한 폼을 제출할 때 폼 데이터는 다음을 포함할 것입니다: `indoor-outdoor=indoor`. "indoor" input의 `name`과 `value` 속성으로부터 얻은 것입니다.

만약 `value` 속성을 제거한다면 제출된 폼데이터는 기본 값인 `on`을 사용할 것입니다. 이 경우에 사용자가 "indoor"를 선택하고 폼을 제출했다면 폼 데이터 결과는 `indoor-outdoor=on`이 될 것이며 이는 유용한 정보가 아닙니다. 그래서 선택지가 무엇인지 알수 있도록 `value` 속성을 설정해주어야 합니다.

# --instructions--

기존 `radio`와 `checkbox` 입력에 `value` 속성을 주세요. 새로운 radio나 checkbox 요소를 생성하지 마시기 바랍니다. 해당 속성의 값으로 소문자인 입력 레이블 글자를 사용하세요.

# --hints--

라디오 버튼 중 하나는 `indoor`라는 `value` 속성을 가져야 합니다.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

라디오 버튼 중 하나는 `outdoor`이라는 `value` 속성을 가져야 합니다.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

체크박스 중 하나는 `loving`이라는 `value` 속성을 가져야 합니다.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

체크박스 중 하나는 `lazy`라는 `value` 속성을 가져야 합니다.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

체크박스 중 하나는 `energetic`이라는 `value` 속성을 가져야 합니다.

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
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
