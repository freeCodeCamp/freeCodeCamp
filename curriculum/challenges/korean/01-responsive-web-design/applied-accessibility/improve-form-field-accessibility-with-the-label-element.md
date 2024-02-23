---
id: 587d778a367417b2b2512aa6
title: label 요소를 사용하여 폼 필드의 접근성 높이기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

시맨틱 HTML 마크업으로 접근성을 높이는 것은 적절한 태그 이름과 속성을 사용하는데 적용됩니다. 다음 몇 가지 챌린지들은 속성들을 폼에서 활용하는 몇 가지 중요한 시나리오들을 다룹니다.

`label` 태그는 특정 폼 제어 항목을 위해 텍스트를 래핑하는데, 보통 이름이나 레이블을 선택합니다. 이렇게 하면 항목과 의미가 연결되고 폼을 더 읽기 쉽게 만들어 줍니다. `label` 태그에 `for` 속성은 `label`과 폼 제어를 명시적으로 연결해주고 화면 낭독 프로그램에 사용됩니다.

Basic HTML 단원의 한 수업에서 라디오 버튼들과 이것들의 레이블들에 대해 배웠습니다. 그 수업에서 라디오 버튼 입력 요소와 레이블 텍스트를 `label` 요소 안에 래핑 함으로써 텍스트를 클릭할 수 있게 만들었습니다. 이를 성취하는 또다른 방법은 이 수업에 설명되었던 것처럼 `for` 속성을 사용하는 것입니다.

`for` 속성 값이 폼 제어의 `id` 속성 값과 똑같아야 합니다. 여기 예시가 있습니다.

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat은 그의 생각 깊은 블로그 글들로부터 많은 수익을 벌길 기대하고 있고 이메일 가입 폼을 포함하길 원합니다. `input` 필드에 있는 `id`와 일치하는 `for` 속성을 이메일 `label`에 추가합니다.

# --hints--

코드에는 `label` 태그에 비어 있지 않은 `for` 속성이 있어야 합니다.

```js
assert($('label').attr('for'));
```

`for` 속성 값은 이메일 `input`에 있는 `id` 값과 일치해야 합니다.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
