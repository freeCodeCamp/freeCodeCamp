---
id: 587d774e367417b2b2512aa0
title: 내용을 article 요소로 감싸기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article`은 마크업에 시맨틱적인 의미를 추가하는 HTML5 요소 중 하나입니다. `article`은 섹션 요소로서 독립적이고 자체 포함된 콘텐츠를 감싸는 데 사용됩니다. 이 태그는 블로그 글, 포럼 게시물 또는 뉴스 기사에 쓰일 수 있습니다.

콘텐츠가 독립적으로 존재할 수 있는지 판단하는 것은 주로 주관적인 판단이 필요하지만 몇 가지 간단한 시험을 해볼 수 있습니다. 주변 맥락을 모두 제거한 상태에서 해당 내용만 남겼을 때 그 내용이 여전히 의미가 있을까 스스로 질문 해보세요. 텍스트의 경우 해당 내용이 RSS 피드에 들어가 있더라도 내용이 유지될까요?

접근성 기기를 사용하는 사람들은 시맨틱적 의미를 지니는 잘 구성된 마크업이 있어야 당신의 작업을 더 잘 이해할 수 있다는 것을 기억하세요.

**참고:** `section` 요소도 HTML5에서 새로 추가되었으며, `article`과 약간 다른 의미를 가지고 있습니다. `article`은 독립적인 콘텐츠를 위한 태그이고, `section`은 주제가 관련된 콘텐츠를 묶기 위한 태그입니다. 필요한 경우에 서로 중첩하여 사용할 수 있습니다. 예를 들어, 책이 `article`이라면 각 장(chapter)은 `section`입니다. 컨텐츠 그룹 간에 관계가 없을 때는 `div`를 사용하세요.

`<div>` - 컨텐츠를 묶을 경우 `<section>` - 서로 관련된 컨텐츠를 묶을 경우 `<article>` - 독립적인 컨텐츠를 묶을 때

# --instructions--

캠퍼 캣은 블로그 페이지의 게시물을 둘러싸기 위해 `article` 태그를 사용했지만 맨 위의 게시물 주위에는 사용하지 않았습니다. `div` 태그 대신 `article`를 사용하세요.

# --hints--

코드에는 `article` 태그가 세 개 있어야 합니다.

```js
assert($('article').length == 3);
```

`div` 태그는 하나도 없어야 합니다.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

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
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
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
</main>
```
