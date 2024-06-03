---
id: bad87fee1348bd9aede08830
title: Form 요소 만들기
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

순수 HTML만 이용하여 서버에 정보를 보내는 웹 폼(form)을 만들 수 있습니다. `form` 요소에 `action` 속성을 특정하면 이 작업을 할 수 있습니다.

예시:

```html
<form action="url-where-you-want-to-submit-form-data">
  <input>
</form>
```

# --instructions--

`form` 요소 안에 기존 `input` 요소를 중첩하고 `"https://www.freecatphotoapp.com/submit-cat-photo"`를 `form` 요소의 `action` 속성에 할당하세요.

# --hints--

`input` 요소는 `form` 요소에 중첩되어야 합니다.

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

`form`는 `https://www.freecatphotoapp.com/submit-cat-photo`로 설정된 `action` 속성을 가져야 합니다.

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

`form` 요소는 여는/닫는 태그로 정확한 형식을 갖추어야 합니다.

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
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
  <input type="text" placeholder="cat photo URL">
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
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
```
