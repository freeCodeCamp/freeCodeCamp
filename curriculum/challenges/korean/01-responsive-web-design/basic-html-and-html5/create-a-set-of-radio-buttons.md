---
id: bad87fee1348bd9aedf08834
title: 라디오 버튼 세트 만들기
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

사용자가 여러 선택지 중 하나를 선택하게 만드는 상황에 필요한 질문을 위한 <dfn>라디오 버튼</dfn>을 사용할 수 있습니다.

라디오 버튼은 `input`의 한 유형입니다.

각 라디오 버튼은 `label` 요소 안에 중첩될 수 있습니다. `label` 요소 안의 `input` 요소를 감싸면 자동으로 라디오 버튼 입력과 이 버튼을 둘러싼 레이블 요소를 연관시킵니다.

모든 연관된 라디오 버튼은 라디오 버튼 그룹을 만들도록 같은 `name` 속성을 가져야 합니다. 라디오 그룹을 생성할 때, 한 라디오 버튼을 선택하면 오직 하나만이 사용자에 의해 제공될 수 있도록 자동으로 다른 버튼은 선택이 풀리게 됩니다.

라디오 버튼에 관한 예시가 있습니다.

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

`label` 요소에 있는 `for` 속성을 `input` 요소의 `id` 속성 값으로 설정하는 것을 모범 사례로 여깁니다. 이는 접근성 기술이 연관된 `input`와 레이블 사이의 연결 관계를 생성하도록 해줍니다. 예시:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

`label` 태그 안에 `input` 요소를 중첩시킬 수도 있습니다.

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

`label` 요소 안에 중첩된 한 쌍의 라디오 버튼을 폼에 추가하세요. 그 중 하나는 `indoor`라는 선택지를 가지고 다른 하나는 `outdoor`라는 선택지를 가져야 합니다. 두 버튼 모두 라디오 그룹을 생성하도록 `indoor-outdoor`의 `name` 속성을 공유해야 합니다.

# --hints--

페이지에 두 개의 `radio` 버튼 요소가 있어야 합니다.

```js
assert($('input[type="radio"]').length > 1);
```

라디오 버튼은 `indoor-outdoor`의 `name` 속성을 가져야 합니다.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

두 라디오 버튼 각각은 `label` 요소 안에 중첩되어야 합니다.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

각 `label` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

라디오 버튼 중 하나는 레이블 `indoor`를 가져야 합니다.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

라디오 버튼 중 하나는 레이블 `outdoor`를 가져야 합니다.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

라디오 버튼 각각은 `form` 태그 안에 추가되어야 합니다.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
