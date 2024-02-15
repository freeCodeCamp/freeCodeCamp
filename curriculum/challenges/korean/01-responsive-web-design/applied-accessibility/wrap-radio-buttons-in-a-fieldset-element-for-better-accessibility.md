---
id: 587d778b367417b2b2512aa7
title: 라디오 버튼을 더 나은 접근성을 위해 fieldset 요소로 둘러싸기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

다음 양식 주제는 라디오 버튼의 접근성에 관한 것입니다. 각 선택지는 마지막 챌린지에서 다룬 것처럼 해당 항목의 `id`와 연결된 `for` 속성이 있는 `label`이 제공됩니다. 라디오 버튼은 사용자가 하나를 선택해야 하는 그룹으로 자주 나타납니다. 선택지가 집합의 일부임을 시맨틱적으로 나타내는 방법이 있습니다.

이를 위해 `fieldset` 태그는 라디오 버튼의 전체 그룹을 둘러싸고 있습니다. 종종 `legend` 태그를 사용하여 그룹에 대한 설명을 제공하며, 이 설명은 화면 낭독기가 `fieldset` 요소의 각 선택 항목에 대해 읽습니다.

선택 사항이 자명한 경우(예: 성별 선택)에는 `fieldset` 래퍼 및 `legend` 태그가 필요하지 않습니다. 각 라디오 버튼에 대해 `for` 속성을 사용한 `label`을 사용하는 것만으로도 충분합니다.

여기 예시가 있습니다.

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

캠퍼 캣은 사용자가 이메일 목록에 가입할 때 사용자들의 닌자 레벨에 대한 정보를 원합니다. 캠퍼 캣은 라디오 버튼 세트를 추가했고, 지난 레슨에서 각 선택지에 `for` 속성을 가진 `label` 태그를 사용하는 방법을 배웠습니다. 캠퍼 캣 화이팅! 하지만 코드에 아직 더 나아질 수 있는 부분들이 있습니다. 라디오 버튼을 감싸고 있는 `div` 태그를 `fieldset`태그로 변경하고, 그 안의 `p` 태그를 `legend` 태그로 변경하세요.

# --hints--

라디오 버튼 세트를 감싸는 `fieldset` 태그가 있어야 합니다.

```js
assert($('fieldset').length == 1);
```

`fieldset` 요소는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

사용자가 어떤 닌자 레벨인지 묻는 텍스트를 `legend` 태그가 감싸고 있어야 합니다.

```js
assert($('legend').length == 1);
```

`div` 태그는 하나도 없어야 합니다.

```js
assert($('div').length == 0);
```

사용자가 어떤 닌자 레벨인지 묻는 텍스트를 `p` 태그가 감싸고 있어선 안됩니다.

```js
assert($('p').length == 4);
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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->


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

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>

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
