---
id: 587d774e367417b2b2512a9f
title: main 요소를 이용해 콘텐츠로 이동하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5은 개발자들에게 많은 선택지를 주는 요소들을 소개했으며 접근성 관련 기능들도 통합시켰습니다. 여기에는 여러 태그들 중에 `main`, `header`, `footer`, `nav`, `article`, `section`이 포함됩니다.

브라우저는 기본적으로 이러한 요소들을 `div`와 비슷하게 렌더링합니다. 하지만 이들을 적절하게 사용하는 것이 마크업에 부가적인 의미를 줍니다. 태그 이름만으로도 어떤 종류의 정보를 담고 있는지 나타낼 수 있고, 이는 콘텐츠에 의미론적 의미를 추가했습니다. 보조 기술은 이 정보를 접근하여 사용자들에게 더 나은 페이지 요약 혹은 탐색 선택지를 제공해줄 수 있습니다.

`main` 요소는 주된 콘텐츠를 래핑하는데 사용되고, 한 페이지 당 하나만 있어야 합니다. 페이지의 주된 주제와 연관된 내용을 둘러싸는데 사용됩니다. 탐색 링크나 배너처럼 페이지 간 반복되는 항목들을 포함하기 위한 것이 아닙니다.

`main` 태그는 보조 기술이 주된 콘텐츠로 빠르게 도달할 수 있게 해주는 내장된 랜드마크 기능이 있습니다. "Jump to Main Content" 링크를 페이지 상단에서 본 적이 있다면 `main` 태그가 보조 기기들에게 그 기능을 자동으로 줍니다.

# --instructions--

Camper Cat은 닌자 무기 페이지에 대해 몇 가지 좋은 아이디어들을 가지고 있습니다. 마크업을 설정할 수 있게 `header`와 `footer` 사이에 열고 닫는 `main` 태그들을 추가하여 도와주십시다 (다른 챌린지에서 다룬 적이 있습니다). `main` 태그는 빈칸으로 남겨둡니다.

# --hints--

`main` 태그가 하나여야 합니다.

```js
assert($('main').length == 1);
```

`main` 태그들은 닫는 `header` 태그와 여는 `footer` 태그 사이에 있어야 합니다.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
