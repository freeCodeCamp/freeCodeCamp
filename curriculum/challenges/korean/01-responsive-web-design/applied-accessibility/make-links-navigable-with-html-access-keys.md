---
id: 587d7790367417b2b2512aaf
title: HTML Access Keys를 사용하여 링크를 탐색 가능하게 만들기.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML은 요소를 활성화하거나 요소에 초점을 맞추기 위한 단축키를 지정하기 위해 `accesskey` 속성을 제공합니다. `accesskey` 속성을 추가하면 키보드만 사용하는 사용자들이 더 효율적으로 탐색이 가능해집니다.

HTML5에서는 이 속성을 모든 요소에 사용할 수 있지만, 상호작용하는 요소와 함께 사용될 때 특히 유용합니다. 이것은 링크, 버튼 및 양식 컨트롤을 포함합니다.

여기 예시가 있습니다.

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

캠퍼 캣은 자신의 사이트 사용자가 빠르게 본문으로 이동할 수 있도록 두 개의 블로그 기사 제목 주변에 있는 링크에 키보드 단축키를 더하고 싶습니다. 첫 번째 링크에는 `g` (Garfield의 "g")로, 두 번째 링크에는 `c` (Chuck Norris의 "c")로 `accesskey` 속성을 추가하세요.

# --hints--

코드에서 `a` 태그에 `id`가 `first`인 `accesskey` 속성을 추가해야 합니다.

```js
assert($('#first').attr('accesskey'));
```

코드에서 `a` 태그에 `id`가 `second`인 `accesskey` 속성을 추가해야 합니다.

```js
assert($('#second').attr('accesskey'));
```

코드에서 `id`가 `first`인 `a` 태그의 `accesskey` 속성을 `g`로 설정해야 합니다. 대소문자가 영향을 미친다는 사실을 주의하세요.

```js
assert($('#first').attr('accesskey') == 'g');
```

코드에서 `id`가 `second`인 `a` 태그에 `accesskey` 속성을 `c`로 설정해야 합니다. 대소문자가 영향을 미친다는 사실을 주의하세요.

```js
assert($('#second').attr('accesskey') == 'c');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>


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
  <article>


    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
