---
id: bad87fee1348bd9aedd08830
title: 설문 조사 양식에 제출(Submit) 버튼 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

`submit` 버튼을 설문 조사 양식에 생성해 보겠습니다. 이 버튼을 클릭하면 폼에 있는 데이터를 `action` 속성으로 지정한 URL로 제출할 수 있습니다.

다음은 제출 버튼의 예시입니다.

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

버튼을 `form` 마지막 요소로 생성할시 타입은`submit`, 그리고 텍스트는 `Submit` 으로 정합니다.

# --hints--

`button`이 `form`안에 있어야 합니다.

```js
assert($('form').children('button').length > 0);
```

제출 버튼에는 `submit`으로 설정된 `type` 속성이 있어야 합니다.

```js
assert($('button').attr('type') === 'submit');
```

제출(Submit) 버튼 안에는 `Submit` 텍스트만 있어야 합니다.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`h2` 요소에 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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
    <input type="text" placeholder="cat photo URL">
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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
