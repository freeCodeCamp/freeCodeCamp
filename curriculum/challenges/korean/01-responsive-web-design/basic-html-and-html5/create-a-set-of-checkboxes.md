---
id: bad87fee1348bd9aedf08835
title: 체크박스 세트 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

폼(form)은 일반적으로 하나 이상의 답을 가진 질문을 위한 <dfn>체크박스</dfn>를 사용합니다.

체크박스는 `input`의 한 유형입니다.

각 체크박스는 `label` 요소 안에 중첩될 수 있습니다. `label` 요소 안의 `input` 요소에 감싸면 체크박스 입력을 자동으로 체크박스를 둘러싼 레이블 요소와 연관시킵니다.

모든 연관된 체크박스 입력은 같은 `name` 속성을 가져야 합니다.

`label` 요소에 있는 `for` 속성을 연관된 `input` 요소의 `id` 속성과 일치시켜 체크박스 `input`과 이에 상응하는 `label` 사이의 관계를 명시적으로 정의하는 것을 모범 사례로 여깁니다.

여기 체크박스에 대한 예시가 있습니다.

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

세 개의 체크박스 세트를 폼에 추가하세요. 각 체크박스는 `label` 요소 내에 중첩되어야 합니다. 세 개 모두 `personality`의 `name` 속성을 공유해야 합니다.

# --hints--

페이지에 세 개의 체크박스 요소가 있어야 합니다.

```js
assert($('input[type="checkbox"]').length > 2);
```

세 개의 체크박스 요소 각각은 `label` 요소 안에 중첩되어야 합니다.

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

`label` 요소에 닫는 태그가 있는지 확인하세요.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

체크박스는 `personality`의 `name` 속성을 가져야 합니다.

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

각 체크박스는 `form` 태그 안에 추가되어야 합니다.

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
