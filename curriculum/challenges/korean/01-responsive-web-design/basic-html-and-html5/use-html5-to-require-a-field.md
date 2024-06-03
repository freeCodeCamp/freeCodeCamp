---
id: bad87fee1348bd9aedc08830
title: 필드를 필수로 만들기 위한 HTML5 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

특정 필드를 필수로 만들어 사용자가 해당 필드를 채울 때까지 폼을 전달하지 못하도록 만들 수 있습니다.

예를 들면 글자 입력 필드를 필수로 만들고 싶다면 다음과 같이 `input` 요소에 `required` 속성을 추가하면 됩니다: `<input type="text" required>`

# --instructions--

글자 `input`을 `required` 필드로 만들어 사용자가 해당 필드를 채우기 전까지 폼을 전달하지 못하도록 만드세요.

그런 다음 글자 입력 없이 폼을 제출해보세요. HTML5 폼이 어떻게 필수 필드임을 알리는지 확인하세요.

# --hints--

글자 `input` 요소는 `required` 속성을 가져야 합니다.

```js
assert($('input').prop('required'));
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
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
